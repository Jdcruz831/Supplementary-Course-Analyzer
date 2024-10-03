import React, { useState } from "react";
import DefaultLayout from "../../components/default/layout";

const dummyData = [
  { id: 1, name: "Data Item 1" },
  { id: 2, name: "Data Item 2" },
  { id: 3, name: "Source Info 3" },
  { id: 4, name: "Another Source Data" },
];

function SourceDataMainPage() {
  
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredData = dummyData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DefaultLayout>
      <div className="App">
        <h1>
          <span>SourceDataMainPage</span>
        </h1>

        {/* Search bar input */}
        <input
          type="text"
          placeholder="Search for data..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "20px",
            fontSize: "16px",
            width: "50%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Display filtered data */}
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id} style={{ margin: "10px 0" }}>
                {item.name}
              </li>
            ))
          ) : (
            <li>No data found</li>
          )}
        </ul>
      </div>
    </DefaultLayout>
  );
}

export default SourceDataMainPage;