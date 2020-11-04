import React from 'react';

import Button from '../Button/Button';

const ActionButtons = ({ sortUsersByName, isAscending }) => {
  return (
    <div>
      <Button sortUsersByName={sortUsersByName}>
        {isAscending ? (
          <span>Sort By Name Ascending</span>
        ) : (
          <span>Sort By Name Descending</span>
        )}
      </Button>
    </div>
  );
};

export default ActionButtons;
