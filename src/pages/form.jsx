import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: '',
    message: '',
  });   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onSubmit(formData); // Pasar formData a la función onSubmit
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Name:
        <input
          type="text"
          name="nombre"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        />
      </label>
      <button type="submit" style={styles.button}>Send</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#e34b24',  // Color de los títulos en blanco
    textAlign: 'left',
    width: '100%',
  },
  input: {
    color: '#000', 
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '15px',
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f5f5f5',
  },
  textarea: {
    padding: '12px',
    color: '#000', 
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '15px',
    width: '100%',
    maxWidth: '350px',
    minHeight: '100px',
    resize: 'vertical',
    backgroundColor: '#f5f5f5',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#e34b24',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '350px',
    transition: 'background-color 0.3s, transform 0.2s',
  },
};

export default Form;
