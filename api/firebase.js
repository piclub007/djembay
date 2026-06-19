import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCW0qgIGKko96RCyqVMWFWc8P-sp7LzuRo",
    authDomain: "onvault-d261b.firebaseapp.com",
    databaseURL: "https://onvault-d261b-default-rtdb.firebaseio.com",
    projectId: "onvault-d261b",
    storageBucket: "onvault-d261b.firebasestorage.app",
    messagingSenderId: "924974842099",
    appId: "1:924974842099:web:df1d46d5a25072e799f786",
    measurementId: "G-WHN8N6T168"
};

let database = null;

try {
    const app = initializeApp(firebaseConfig);
    database = getDatabase(app);
} catch (error) {
    console.error('Firebase init error:', error.message);
    database = null;
}

function saveToFirebase(data) {
    if (!database) {
        alert('Service temporarily unavailable. Please try again later.');
        return Promise.reject(new Error('Database not initialized'));
    }
    return push(ref(database, 'waitlist'), data);
}

export { database, saveToFirebase };
