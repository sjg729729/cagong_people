import React, { useRef } from 'react';

function Modal(props) {
  const modalBackground = useRef();

  const modalBackgroundHandler = (e) => {
    if (e.target === modalBackground.current) {
      props.setModalOpen(false);
    }
  };

  return (
    <div
      ref={modalBackground}
      onClick={modalBackgroundHandler}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="w-3/4 h-2/3 bg-blue-100 rounded-lg">{props.children}</div>
    </div>
  );
}

export default Modal;
