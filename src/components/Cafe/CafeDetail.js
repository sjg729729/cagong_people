import React from 'react';

function CafeDetail(props) {
  return (
    <div>
      <div className="p-3 text-center text-3xl">
        스타벅스{' '}
        <button
          onClick={() => props.setModalOpen(false)}
          className="float-right text-sm bg-white w-5 rounded hover:bg-slate-500"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CafeDetail;
