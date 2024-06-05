import React from 'react';

export default function AddressDisplay({name, street, city, state, zip}) {
  return (
   
    <address>
    {name}
    <br></br>
    {street}
      <br></br>
    {city}, {state}, {zip}
    </address>
   
  );
}
