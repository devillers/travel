import React from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-600 bg-opacity-10 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto">
        <Image
          src={imageSrc}
          alt="Popup Image"
          width={350}
          height={350}
          onClick={(e) => e.stopPropagation()}
          className="w-auto max-h-screen"
          loader={({ src }) => src}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default Modal;
