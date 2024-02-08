import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const PhonesList = ({ onSelect }) => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhones = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/phones");

        setPhones(response.data);
      } catch (error) {
        console.error("Error fetching phones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhones();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul className="phones-grid">
      {phones.map((phone) => (
        <li
          key={phone.id}
          className="phone-card"
          onClick={() => onSelect(phone)}
        >
          <img
            className="phone-image"
            src={`http://localhost:3000/images/${phone.imageFileName}`}
            alt={phone.name}
          />
          <div className="phone-card-content">{phone.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default PhonesList;
