import React, { FC } from "react";
import Payment from "./Payment.js";

interface PurchaseProps {
  onClose: () => void;
}

const Purchase: FC<PurchaseProps> = ({ onClose }) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.id === "purchase-overlay"
    ) {
      onClose();
    }
  };

  return (
    <div
      id="purchase-overlay"
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 "
      onClick={handleBackgroundClick}
    >
      <div className="bg-white px-16 py-8 space-y-4 relative flex flex-col min-h-96">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <div>
          <h1 className="font-bold">Buy credits</h1>
          <p>1 credit = 1 reply</p>
        </div>
        <Payment />
      </div>
    </div>
  );
};

export default Purchase;
