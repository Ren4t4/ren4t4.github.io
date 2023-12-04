import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// Import the functions you need from the SDKs you need
import {
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB5fU7_pW32iz78J1Hg9P6E9RIhFUN6eU",
  authDomain: "tecport1-ec0cb.firebaseapp.com",
  projectId: "tecport1-ec0cb",
  storageBucket: "tecport1-ec0cb.appspot.com",
  messagingSenderId: "235429804495",
  appId: "1:235429804495:web:cdbff3fbd3bd1f7ee7faba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// TODO: Añadir lógica para crear un vuelo
export const createFlight = () => {
  addDoc(collection(db, "flights"), {});
};

// TODO: Añadir lógica para leer un vuelo
export const readFlight = () => {
  getDoc(collection(db, "flights"), {});
};

export async function readFlights() {
  const flightsRef = collection(db, "flights");
  const flightsSnap = await getDocs(flightsRef);
  return flightsSnap.docs.map((doc) => doc.data());
}

// TODO: Añadir lógica para actualizar un vuelo
export const updateFlight = () => {
  updateDoc(collection(db, "flights"), {});
};

// TODO: Añadir lógica para borrar un vuelo
export const deleteFlight = () => {
  deleteDoc(collection(db, "flights"), {});
};

export const createCoordinates = (x, y, time, id_flight) => {
  const coordinates = {
    x: x,
    y: y,
    time: time,
    id_flight: id_flight,
  };
  console.log(coordinates);

  addDoc(collection(db, "coordinates"), coordinates);
};

