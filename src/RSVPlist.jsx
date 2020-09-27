import React, { useState } from 'react';

export default function RSVPlist() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleFirstNameChange = (evt) => {
    const newValue = evt.target.value;
    setFirstName(newValue);
  };

  const handleLastNameChange = (evt) => {
    const newValue = evt.target.value;
    setLastName(newValue);
  };

  return (
    <div>
      <h2>Enter guest Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      ></input>
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      ></input>
      {/* <button
        onSubmit={(event) => {
          event.preventDefault();
          saveNames(firstName, lastName);
        }}
      > */}
      <button>Add name</button>
      <br />
      <div>
        <label>
          {firstName} {lastName}
        </label>
      </div>
    </div>
  );
}
