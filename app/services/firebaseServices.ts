import { db } from "@/utils";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  WithFieldValue,
  DocumentData,
} from "firebase/firestore";

async function addDataFirestore<
  T extends WithFieldValue<DocumentData> & { id?: string },
>(entity: string, data: T) {
  const ref = await addDoc(collection(db, entity), data);
  const docSnap = await getDoc(ref);
  return { ...docSnap.data(), id: ref.id } as T;
}

async function updateDataFirestore<T extends WithFieldValue<DocumentData>>({
  data,
  entity,
  id,
}: {
  entity: string;
  data: T;
  id: string;
}) {
  const ref = doc(db, entity, `${id}`);
  await setDoc(ref, data);
}

export { addDataFirestore, updateDataFirestore };
