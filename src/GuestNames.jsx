import React from 'react';
import RSVPList from './RSVPlist';

export default function GuestNames(props) {
  return (
    <div>
      <label>
        {props.firstName} {props.lastName}
      </label>
    </div>
  );
}
