import React from 'react';

export default function AddressDisplay({names}:{names:any}, {street}:{street:any}, {city}:{city:any}, {state}:{state:any}, {zip}:{zip:any}) {
  return (
   
    <address>
    {names}
    <br></br>
    {street}
      <br></br>
    {city}, {state}, {zip}
    </address>
   
  );
}
