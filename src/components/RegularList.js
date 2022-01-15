import React from "react";

function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {items &&
        items.map((item) => (
          <ItemComponent key={item.id} {...{ [resourceName]: item }} />
        ))}
    </>
  );
}

export default RegularList;
