import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <div>
      <h2>Welcome to DEV@Deakin</h2>
      <p>You are now logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;