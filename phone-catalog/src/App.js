import React, { useState } from "react";
import PhonesList from "./components/PhonesList";
import PhoneDetails from "./components/PhoneDetails";

const App = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);
  return (
    <div>
      <PhonesList onSelect={setSelectedPhone} />
      <PhoneDetails phone={selectedPhone} />
    </div>
  );
};

export default App;
