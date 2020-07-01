import React, { useState } from 'react';
import API from '../Services/API';
import '../Styles/Register.css';
import { useHistory, Link } from 'react-router-dom';

export default function RegisterPage () {
  const [email, setEmail] = useState('');
  const [username, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = { username, email, password };
    API.post('/users', payload)
      .then((res) => {
        alert("registered !"); // eslint-disable-line
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
        window.alert(
          'Un email similaire est déjà existant ou un champs est vide.'
        );
      });
  };

  return (
    <div className='register-page'>
      <h1>Register</h1>
      <form className='form-login' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username' required name='username'>
            Name :
          </label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email' name='email'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='exemple@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password' name='password'>
            Password :
          </label>
          <input
            id='password'
            type='password'
            value={password}
            placeholder='Votre mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn-connexion' type='submit' disabled={!!loading}>
          S'enregistrer
        </button>
        <h6>
          Vous avez déjà un compte ?
          <Link to='/login'> Connectez vous ici </Link>
        </h6>
      </form>
    </div>
  );
}