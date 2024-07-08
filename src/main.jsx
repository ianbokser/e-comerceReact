import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCpAb0OPKd-_unjXOKuhAQL8YMmzFqEbfU",
  authDomain: "coder-ecomerce-1ce86.firebaseapp.com",
  projectId: "coder-ecomerce-1ce86",
  storageBucket: "coder-ecomerce-1ce86.appspot.com",
  messagingSenderId: "966492326995",
  appId: "1:966492326995:web:b5068f549c62df92aa4aa6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
