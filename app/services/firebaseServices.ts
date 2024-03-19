import { db } from "@/utils";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  WithFieldValue,
  DocumentData,
} from "firebase/firestore";

async function addDataFirestore<
  T extends WithFieldValue<DocumentData> & { id?: string },
>(entity: string, data: T) {
  if (data.id) {
    await setDoc(doc(db, entity, `${data.id}`), data);
    return;
  }

  await addDoc(collection(db, entity), data);
}

export { addDataFirestore };
