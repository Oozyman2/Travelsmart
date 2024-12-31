import React from 'react';

const TravelDetail = ({ item }) => {
  const handleClick = () => {
    alert(`You selected ${item.destination}`);
  };

  return (
    <button className="btn btn-info" onClick={handleClick}>
      View Details
    </button>
  );
};


export default TravelDetail;


