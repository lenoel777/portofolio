// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getFirestore, collection, getDocs, addDoc,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEaPP0CBoYmq0F6991QcMzXlCQjgNVF00",
  authDomain: "portofolio-gl.firebaseapp.com",
  projectId: "portofolio-gl",
  storageBucket: "portofolio-gl.appspot.com",
  messagingSenderId: "622535838229",
  appId: "1:622535838229:web:226aca08054a4c99811c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, 'Messager');
getDocs(colRef)
.then((snapshot) => {
    let data = [];
    snapshot.docs.forEach((doc) => {
        data.push({...doc.data(), id : doc.id})
    });
    console.log(data);
})
.catch(err => {
    console.log(err.message);
})

const addNew = document.querySelector(".submit");
addNew.addEventListener('submit', (e) => {
    e.preventDefault();
    let temp = confirm("Are you sure want to send?");
    if(temp==false){
        return false;
    }

    addDoc(colRef, {
        Nama_Lengkap : addNew.floatingName.value,
        Email : addNew.floatingEmail.value,
        Nomor_Telepon : addNew.floatingNum.value,
        Comments : addNew.floatingTextarea.value
    })
    .then(()=>{
        alert("Successfully sent!");
        addNew.reset();
    })
    .catch(err => {
        console.log(err.message);
    })
})
