import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCTC6bA8h97Hkry3b5XqH-2BtI2jO365ic",
  authDomain: "rrhhbd-d6bb6.firebaseapp.com",
  projectId: "rrhhbd-d6bb6",
  storageBucket: "rrhhbd-d6bb6.appspot.com",
  messagingSenderId: "729788435511",
  appId: "1:729788435511:web:fab4771fd4cd273231c3b2"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const storage = firebaseApp.storage();

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const uploadProcess = storage.ref(`images/${file.name}-${file.lastModified}`).put(file);
    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("Subiendo imagen", snapshot),
      reject,
      () => {
        storage
          .ref("images")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};
