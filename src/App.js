import React from 'react';
// import NameForm from './NameForm';
import RSVPlist from './RSVPlist';
// import GuestNames from './GuestNames';
import Header from './Header';

function App() {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [fullName, setFullName] = useState();

  // function addName(evt) {
  //   (evt) => {
  //     const newValue = evt.target.value;
  //     setFullName(newValue);
  //   };
  // }

  return (
    <div>
      <Header>
        <h1>Guest List</h1>
      </Header>
      <div>
        {/* <NameForm /> */}
        <div>
          <RSVPlist
          // firstName={firstName}
          // setFirstName={setFirstName}
          // lastName={lastName}
          // setLastName={setLastName}
          // fullName={fullName}
          // setFullName={setFullName}
          // addName={addName}
          />
        </div>
        {/* <GuestNames props={RSVPlist} /> */}
      </div>
    </div>
  );
}

export default App;
