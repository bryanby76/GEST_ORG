// src/pages/Home.jsx
import Form from './form';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = ({ db }) => {
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    try {
      // Referencia a la colección "Organizacion" en Firestore
      const orgCollection = collection(db, 'Organizacion');

      // Añadir un nuevo documento a la colección con un ID automático
      await addDoc(orgCollection, formData);

      console.log("Form submitted and data added to Firestore.");
      navigate('/success'); // Redirige a la página de éxito
    } catch (error) {
      console.error("Error adding document to Firestore:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="src/assets/billi.png" alt="Logo" style={styles.image} />
        <h1 style={styles.title}>Agregar Organización</h1>
      </div>
      <Form onSubmit={handleFormSubmit} />
      <Link to="/organizations">
        <button style={styles.button}>Ver Listado de Organizaciones</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '50px', // Ajusta el tamaño de la imagen
    height: '50px', // Ajusta el tamaño de la imagen
    marginRight: '20px', // Espaciado entre la imagen y el título
  },
  title: {
    fontSize: '36px',
    color: '#333',
  },
  button: {
    backgroundColor: '#f9c25c',
  },
};

export default Home;
