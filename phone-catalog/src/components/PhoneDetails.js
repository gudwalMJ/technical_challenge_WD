import React from "react";

const PhoneDetails = ({ phone }) => {
  if (!phone) return <div>Select a phone to see details</div>;

  return (
    <div>
      <h2>{phone.name}</h2>
      <img
        className="phone-image"
        src={`http://localhost:3000/images/${phone.imageFileName}`}
        alt={phone.name}
        style={{ width: "150px", height: "auto", objectFit: "contain" }}
      />
      <p>{phone.description}</p>
      <p>{phone.price}</p>
      {/* Display more details as needed */}
    </div>
  );
};

export default PhoneDetails;
