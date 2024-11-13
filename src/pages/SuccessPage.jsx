// src/pages/SuccessPage.jsx
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
          <div style={styles.header}>
        <img src="src/assets/billi.png" alt="Logo" style={styles.image} />
        <h1 style={styles.title}>¡Formulario Enviado Exitosamente!</h1>
      </div>
     
      <p style={styles.message}>Gracias por tu envío.</p>
      <button style={styles.backButton} onClick={() => navigate('/')}>Volver al Inicio</button>
    </div>
  );
};

const styles = {
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
  message: {
    fontSize: '18px',
    color: '#fff',
    marginBottom: '20px',
    textAlign: 'center',
    maxWidth: '400px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default SuccessPage;
