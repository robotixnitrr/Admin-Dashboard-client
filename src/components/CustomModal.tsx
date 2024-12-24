import React from 'react';

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ show, onClose, children }) => {
  if (!show) return null; // Don't render the modal if not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> {/* Overlay */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-auto relative"> {/* Modal content */}
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button> {/* Close button */}
        {children}
      </div>
    </div>
  );
};

export default CustomModal; 