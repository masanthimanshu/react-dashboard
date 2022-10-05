import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Get all the data from a collection
export const getCollectionData = async (collectionName) => {
  const arr = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });

  return arr;
};
