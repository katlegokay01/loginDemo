import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const app = firebase.initializeApp ({
    apiKey: "AIzaSyCwNWmcKIckxW_L4FxDo6njTixusGKfq3w",
    authDomain: "registration-log.firebaseapp.com",
    projectId: "registration-log",
    storageBucket: "registration-log.appspot.com",
    messagingSenderId: "210474834151",
    appId: "1:210474834151:web:b06fc9cccec641f065aa42"
  });
  // Initialize Firebase
  export const auth = app.auth()
export default app