import firebase from 'firebase';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCpPgjXFBza1ubpwZCTPAY0AG19jPofID8",
        authDomain: "signupformapp.firebaseapp.com",
        databaseURL: "https://signupformapp.firebaseio.com",
        projectId: "signupformapp",
        storageBucket: "signupformapp.appspot.com",
        messagingSenderId: "861015864610"
      };
  const fire = firebase.initializeApp(config);
  export default fire;
