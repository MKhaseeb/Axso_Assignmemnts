import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Detail = () => {
  const { id } = useParams();          // Get the person ID from the URL
  const navigate = useNavigate();      // For redirecting after delete
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/person/${id}`)
      .then(res => setPerson(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const removeFromDom = () => {
    axios.delete(`http://localhost:8000/api/person/${id}`)
      .then(res => {
        console.log('Deleted:', res.data);
        navigate('/'); // Go back to home page after deletion
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Person Details</h2>
      {person ? (
        <>
          <p><strong>First Name:</strong> {person.firstName}</p>
          <p><strong>Last Name:</strong> {person.lastName}</p>
          <DeleteButton successCallback={removeFromDom} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
