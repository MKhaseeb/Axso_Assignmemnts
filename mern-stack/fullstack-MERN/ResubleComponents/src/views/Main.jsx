import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/person')
      .then(res => setPeople(res.data))
      .catch(err => console.error(err));
  }, []);

  const createPerson = (person) => {
    axios.post('http://localhost:8000/api/person', person)
      .then(res => setPeople([...people, res.data]))
      .catch(err => console.error(err));
  };

  const removeFromDom = (id) => {
    setPeople(people.filter(p => p._id !== id));
  };

  return (
    <div>
      <h2>Create Person</h2>
      <PersonForm
        initialFirstName=""
        initialLastName=""
        onSubmitProp={createPerson}
      />

      <hr />

      <h2>All People</h2>
      <PersonList people={people} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
