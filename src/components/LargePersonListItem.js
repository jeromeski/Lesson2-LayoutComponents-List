import React from "react";

function LargePersonListItem({ user }) {
  const {
    name,
    website,
    phone,
    address: { street, suite, city, zipCode }
  } = user;
  return (
    <>
      <h3>{name}</h3>
      <p>{website}</p>
      <p>{phone}</p>
      <pre>
        {street}, {suite}, {city} {zipCode}
      </pre>
      <hr />
    </>
  );
}

export default LargePersonListItem;
