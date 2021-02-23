import React from 'react';

const ListArrow = ({ key, item }) => {
  return (
    <li key={key}>
      <img
        src="/img/services/chevrons-right.png"
        style={{ margin: '0 .5rem 0 0' }}
        alt="arrow"
      />
      { item}
    </li>
  );
}

export default ListArrow;