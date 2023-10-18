import { auth, storage } from "../firebase-cofig";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";


async function uploadFile(file: HTMLInputElement | null) {
  if (file) {
    const storageRef = await ref(storage, `courses/${auth.currentUser?.uid}/${Date.now()}-${file.name}`);
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      return error;
    }
  }
}

export { uploadFile };
