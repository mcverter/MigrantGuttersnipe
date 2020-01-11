import React from 'react';
import { useParams } from 'react-router-dom';
function ShareableResourcePage() {
  const { markerKey } = useParams();
  const shareable = window.shareablesMap[markerKey];
  return (
    <div>
      MarkerKey {markerKey} <br />
    </div>
  );
}

ShareableResourcePage.propTypes = {};

export default ShareableResourcePage;
/*
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
 */
