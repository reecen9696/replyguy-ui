import React, { useState } from "react";
import { HelioCheckout } from "@heliofi/checkout-react";

const initialConfig = {
  paylinkId: "672e903ed76f84523f383539", // Default ID for $10
  theme: { themeMode: "light" },
};

const Payment = () => {
  const [helioConfig, setHelioConfig] = useState(initialConfig);

  const handleButtonClick = (newPaylinkId) => {
    setHelioConfig((prevConfig) => ({
      ...prevConfig,
      paylinkId: newPaylinkId,
    }));
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-black text-white "
          onClick={() => handleButtonClick("672e903ed76f84523f383539")}
        >
          $10
        </button>
        <button
          className="px-4 py-2 bg-black text-white "
          onClick={() => handleButtonClick("672e903ed76f84523f383539")}
        >
          $50
        </button>
        <button
          className="px-4 py-2 bg-black text-white "
          onClick={() => handleButtonClick("672e903ed76f84523f383539")}
        >
          $100
        </button>
      </div>
      <HelioCheckout config={helioConfig} />
    </div>
  );
};

export default Payment;
