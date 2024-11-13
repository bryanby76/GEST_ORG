// src/pages/OrganizationList.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const OrganizationList = ({ db }) => {
  const [organizations, setOrganizations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Organizacion'));
        const organizationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrganizations(organizationsData);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, [db]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'Organizacion', id)); // Elimina el documento de Firestore
      setOrganizations(prevOrganizations => prevOrganizations.filter(org => org.id !== id)); // Actualiza la lista localmente
    } catch (error) {
      console.error("Error deleting organization:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="src/assets/billi.png" alt="Logo" style={styles.image} />
        <h1 style={styles.title}>Listado de Organizaciónes</h1>
      </div>
      <ul style={styles.list}>
        {organizations.map(org => (
          <li key={org.id} style={styles.listItem}>
            <div>{org.nombre}</div> {/* Cambia "nombre" según el campo de Firestore */}
            <div style={styles.buttons}>
              <button style={styles.editButton} onClick={() => {/* Lógica de edición aquí */}}>
                Editar
              </button>
              <button style={styles.deleteButton} onClick={() => handleDelete(org.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button style={styles.backButton} onClick={() => navigate(-1)}>Volver Atrás</button>
    </div>
  );
};

const styles = {
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
    width: '80%',
    maxWidth: '400px',
  },
  listItem: {
    padding: '10px 15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: '#333',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  editButton: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#e8412b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default OrganizationList;
