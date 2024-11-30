
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Send the code to your backend to exchange for tokens
      fetch('/api/auth/google/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          // Handle successful authentication
          navigate('/dashboard');
        })
        .catch(error => {
          // Handle authentication error
          console.error('Error:', error);
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallback;