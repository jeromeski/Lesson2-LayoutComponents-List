import React from "react";

function SmallPersonListItem({ user }) {
  const { name, username, email } = user;

  return (
    <div>
      <h3>{name}</h3>
      <p>{username}</p>
      <pre>{email}</pre>
      <hr />
    </div>
  );
}

export default SmallPersonListItem;
