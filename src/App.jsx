// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Home from './pages/Home';
import SuccessPage from './pages/SuccessPage';
import OrganizationList from './pages/OrganizationList'; // Importa el componente

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9Ui4E4a1mj2_loZYW0EsSbA4XP0Xz7CQ",
  authDomain: "billii.firebaseapp.com",
  projectId: "billii",
  storageBucket: "billii.firebasestorage.app",
  messagingSenderId: "174226187167",
  appId: "1:174226187167:web:5d73c015ccf19874a553aa",
  measurementId: "G-70Y0JNLKHS",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Inicializar Firestore

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home db={db} />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/organizations" element={<OrganizationList db={db} />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
};

export default App;
