import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, deleteDoc, onSnapshot, query, serverTimestamp } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAYd_-Ma1i73G4GCr66WfWLqAygJINJtzA",
    authDomain: "unique-machine.firebaseapp.com",
    databaseURL: "https://unique-machine-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "unique-machine",
    storageBucket: "unique-machine.appspot.com",
    messagingSenderId: "956387639504",
    appId: "1:956387639504:web:f1976fd640742f1a98ded5",
    measurementId: "G-DCL9J7BCTQ"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

const login = document.querySelector('.login')
login.addEventListener("submit", (e) => {

    e.preventDefault()

    const email = login.email.value
    const pass = login.pass.value

    signInWithEmailAndPassword(auth, email, pass)
        .then((cred) => {
            window.location.href = "index.html"
        }).catch((err) => {
            console.log(err.message)

        })
})