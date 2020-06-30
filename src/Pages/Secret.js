import React, { useState, useEffect } from 'react';
import API from '../Services/API';

export default function SecretPage (props) {
  const [secret, setSecret] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/secret').then(res => res.data).then(data => {
      setSecret(data.secret);
    }).catch(err => { // eslint-disable-line
      setError('Unauthorized');
    });
  });

  if (error) return error;
  return (
    <div>
      The secret is {secret}
    </div>
  );
}
