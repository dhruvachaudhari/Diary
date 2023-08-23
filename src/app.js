import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc, deleteDoc, onSnapshot, query, serverTimestamp } from "firebase/firestore"
import { getAuth, RecaptchaVerifier, signInWithCustomToken, signInWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth"
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
const colref = collection(db, "diary")
const auth = getAuth()

// const login = document.querySelector('.login')
// login.addEventListener("submit", (e) => {

//     e.preventDefault()

//     const email = login.email.value
//     const pass = login.pass.value

//     signInWithEmailAndPassword(auth, email, pass)
//         .then((cred) => {
//             window.location.href = "index.html"
//         }).catch((err) => {
//             console.log(err.message)

//         })
// })


// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

console.log(entryForm)
console.log(entriesSection)

let entries = 0

// handler to deal with button click
const handleForm = e => {
    e.preventDefault()

    const entryDiv = document.createElement('div')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox.value
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)

    entryTextbox.value = ""
    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = ++entries
    entriesNav.appendChild(displayEntryButton)

    displayEntryButton.addEventListener('click', function () {
        const allEntries = document.querySelectorAll('.single-entry')
        allEntries.forEach(element => element.style.display = 'none')
        entryDiv.style.display = 'block'
    })
}

// Add an event listener
entryForm.addEventListener('submit', handleForm)








// const reCAPTCHA = window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign', {
//     'size': 'invisible',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         onSignInSubmit();
//     }
// });


// const login = document.querySelector(".login")
// login.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const number = login.phone.value

//     signInWithPhoneNumber(auth, number, reCAPTCHA).then(
//         (result) => {
//             window.result = result
//         }
//     ).catch((err) => {
//         console.log(err.message)
//     })
// })


// const info = document.querySelector(".info")
// info.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const Name = info.name.value
//     addDoc(colref, {
//         name: Name

//     }).catch((err) => {
//         console.log(err.message)

//     })

// })
