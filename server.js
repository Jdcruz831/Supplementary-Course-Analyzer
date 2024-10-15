const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Utility to organize data into objects for each math class
const mathClasses = {
  "math 12": [],
  "math 29": [],
  "math 30": [],
  "math 31": [],
  "math 32": [],
};

// Initialize an array to hold all rows for the current table section
let tableData = {};

let tempList = [];

// Helper function to organize elements into rows for specific math classes
function organize(elementText, className) {
  tempList.push(elementText);

  // Once we have 7 elements (Section, Seats, Days, etc.), add them to the correct class array
  if (tempList.length === 7) {
    mathClasses[className].push({
      Section: tempList[0],
      Seats: tempList[1],
      Days: tempList[2],
      Instructor: tempList[3],
      StartTime: tempList[4],
      EndTime: tempList[5],
      Building: tempList[6],
    });
    tempList = []; // Clear the tempList after adding a row
  }
}

async function scrape(url, columnHeadersString) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set custom headers including User-Agent
  await page.setExtraHTTPHeaders({
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
  });

  const trimmedColumnHeaders = columnHeadersString
    .split(",")
    .map((header) => header.trim());

  try {
    await page.goto(url, { waitUntil: "networkidle2" }); // Wait until the network is idle

    // Wait for the table sections to load
    await page.waitForSelector(".table-section", { timeout: 30000 });

    // Get all table sections
    const tableSections = await page.$$(".table-section");

    for (const section of tableSections) {
      // Get all divs with the class 'table' within the current section
      const tableDivs = await section.$$(".table");

      for (const tableDiv of tableDivs) {
        // Get the title from the h2 element in the section
        const titleElement = await tableDiv.$("h2");
        const idProperty = await titleElement.getProperty("id");
        const id = await idProperty.jsonValue();
        console.log("Element ID:", id);

        // if (titleElement) {
        const title = await (
          await titleElement.getProperty("innerText")
        ).jsonValue();
        const trimmedTitle = title.trim(); // Trim whitespace

        // for (const table of tables) {
        let tableRows = [];
        const tableRow = {};
        // Initialize an array for the current table's data

        // Find all rows in the table (div with class rdt_TableRow)
        const rows = await tableDiv.$$(".rdt_TableBody .rdt_TableRow");

        for (const row of rows) {
          // For each row, find all cells (div with role="gridcell")
          const cells = await row.$$('div[role="gridcell"]');

          // Extract the text content from each cell
          const rowData = await Promise.all(
            cells.map(async (cell) => {
              return await (await cell.getProperty("innerText")).jsonValue();
            })
          );

          // Create an object for the current row, mapping column headers to cell values
          const tableRow = {};
          const columnHeaders = columnHeadersString
            .split(",")
            .map((header) => header.trim());

          columnHeaders.forEach((header, index) => {
            tableRow[header] = rowData[index] || null; // Use null if there's no corresponding cell
          });

          // Push the tableRow object into the tableRows array
          tableRows.push(tableRow);

          // Push the row data into the courses array for the corresponding table title
          // tableRows.push(rowData);
        }

        tableData[`${id}`] = tableRows;
      }
    }

    console.log("Final Math Classes Data:", mathClasses); // Log the final structure

    await browser.close();
  } catch (error) {
    console.error("Error scraping the page:", error);
    await browser.close();
  }
}

// Endpoint to trigger scraping
app.get("/scrape", async (req, res) => {
  // Get the full URL from the request query
  const fullUrl =
    req.query.url || "https://www.csus.edu/class-schedule/fall-2024/MATH";

  // Check if there are headers in the URL
  const headersParamIndex = fullUrl.indexOf("headers=");

  // Initialize variables for sanitized URL and headers
  let sanitizedUrl;
  let headers = "";

  // If headers are present in the URL, split the string
  if (headersParamIndex !== -1) {
    sanitizedUrl = fullUrl.substring(0, headersParamIndex); // Get the URL up to 'headers='
    const headersQueryString = fullUrl.substring(headersParamIndex); // Get the part after 'headers='

    // Extract headers from the query string
    headers =
      headersQueryString
        .split("&")
        .find((param) => param.startsWith("headers="))
        ?.split("=")[1]
        ?.split(",")
        .map((header) => header.trim()) // Trim whitespace from each header
        .filter((header) => header) // Remove any empty strings
        .join(", ") || ""; // Join back into a string and handle undefined
  } else {
    // If no headers are provided, use default headers as a string
    sanitizedUrl = fullUrl;
    headers = "Section, Seats, Days, Instructor, StartTime, EndTime, Building";
  }

  try {
    await scrape(sanitizedUrl, headers);
    res.json(tableData); // Send the organized class data as the response
  } catch (error) {
    res.status(500).json({ message: "Error scraping the data" });
  }
});
