import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PersonForm from '../components/PersonForm';

const Update = () => {
  const { id } = useParams(); // get ID from the URL
  const [person, setPerson] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/person/${id}`)
      .then(res => {
        setPerson(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, [id]);

  const updatePerson = (updatedPerson) => {
    axios.put(`http://localhost:8000/api/person/${id}`, updatedPerson)
      .then(res => {
        console.log('Updated!', res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Update Person</h2>
      {loaded && (
        <PersonForm
          initialFirstName={person.firstName}
          initialLastName={person.lastName}
          onSubmitProp={updatePerson}
        />
      )}
    </div>
  );
};

export default Update;
