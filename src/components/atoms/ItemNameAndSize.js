import React from 'react';

const ItemName = ({name, size, unit}) => {
  return (
    <div>
      {name} {size}{unit}
    </div>
  );
}

export default ItemName;
