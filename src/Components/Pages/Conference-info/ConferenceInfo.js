import React from 'react';
import { useLocation } from 'react-router-dom';

function ConferenceInfo() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>ConferenceInfo</div>
  )
}

export default ConferenceInfo