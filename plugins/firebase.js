import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDKCb_TsDXMAKSaEwQPypDH0gNyEfwMuWk",
      authDomain: "fir-pj-d281b.firebaseapp.com",
      projectId: "fir-pj-d281b",
      storageBucket: "fir-pj-d281b.appspot.com",
      messagingSenderId: "916729129951",
      appId: "1:916729129951:web:2f5e53565093d79aa1326a",
      measurementId: "G-BMHMQ6KLPX"
    }
  )
}

export default firebase