import React, { useState, useEffect } from 'react';
import Location from './Location';
import MemberList from './MemberList';
import StudyTimeInput from './StudyTimeInput';

function CafeDetail(props) {
  const [member, setMember] = useState([]);

  useEffect(() => {
    setMember(props.item.member);
  }, [props.item.member]);

  return (
    <div>
      <div className="p-3 text-center text-3xl">
        {props.item.name}
        <button
          onClick={() => props.setModalOpen(false)}
          className="float-right text-sm bg-white w-5 rounded hover:bg-slate-500"
        >
          X
        </button>
      </div>
      <div className="flex justify-around flex-wrap">
        <div className="self-center">
          <Location cordinate={props.item.location} />
        </div>
        <div>
          <div className="w-96 h-80 bg-blue-300 rounded-md mb-3">
            <MemberList member={member} setMember={setMember} />
          </div>
          <div className="w-96 h-28 bg-blue-300 rounded-md">
            <StudyTimeInput member={member} setMember={setMember} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeDetail;
