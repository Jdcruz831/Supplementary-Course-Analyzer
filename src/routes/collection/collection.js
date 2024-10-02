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
}

export const collectionAPI = new CollectionAPI();
