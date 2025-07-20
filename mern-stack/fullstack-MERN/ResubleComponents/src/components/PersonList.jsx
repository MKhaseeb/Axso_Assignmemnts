import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PersonList = ({ people, removeFromDom }) => {
  return (
    <div>
      <h3>People List:</h3>
      {people.map((person, idx) => (
        <p key={idx}>
          <Link to={`/${person._id}`}>
            {person.lastName}, {person.firstName}
          </Link>
          {" | "}
          <Link to={`/${person._id}/edit`}>Edit</Link>
          {" | "}
          <DeleteButton successCallback={() => removeFromDom(person._id)} />
        </p>
      ))}
    </div>
  );
};

export default PersonList;
