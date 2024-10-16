import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

class CollectionAPI {
  /**
   * Retrieves all documents from a specified Firestore collection
   *
   * @param String colName - The name of the Firestore collection to query
   *
   * @returns Array
   */
  getCollection = async (colName) => {
    const querySnapshot = await getDocs(collection(db, colName));
    const docsArray = [];

    querySnapshot.forEach((doc) => {
      docsArray.push({ id: doc.id, ...doc.data() });
    });

    return docsArray;
  };

  /**
   * Retrieves a specific document via document ID from a specified Firestore collection
   *
   * @param String colName - The name of the Firestore collection to query
   * @param String docID - The id of the Firestore document
   *
   * @returns Object
   */
  getDoc = async (colName, docID) => {
    const docRef = doc(db, colName, docID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  /**
   * Syncs course data to the courses collection in firebase
   *
   * @param Array courses - The course objects to be updated or created
   *
   */
  syncDataToFirebase = async function (courses) {
    if (courses) {
      for (const [courseName, sections] of Object.entries(courses)) {
        const courseRef = collection(db, "courses");

        for (const section of sections) {
          // Create a unique ID based on course name, section, and days
          const sectionId = `${courseName}-${section.Section}-${section.Days}`;

          // Create a reference to the document
          const sectionRef = doc(courseRef, sectionId);

          // Set the document (this will update if it exists or create if it doesn't)
          await setDoc(
            sectionRef,
            {
              course_name: courseName,
              section: section.Section || "",
              seats: section.Seats || "",
              days: section.Days || "",
              instructor: section.Instructor || "",
              start_time: section.StartTime || "",
              end_time: section.EndTime || "",
              building: section.Building || "",
            },
            { merge: true }
          );
        }
      }
    }
  };
}

export const collectionAPI = new CollectionAPI();
