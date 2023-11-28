import React from 'react';

function MemberList({ member, setMember }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const onClickHandler = (item) => {
    setMember((prev) => {
      const current = prev.filter(
        (value) =>
          value.time !== item.time || value.studentId !== item.studentId
      );
      return current;
    });
  };

  const content = member.map((item) => {
    console.log(item);
    let isUser = false;
    if (item.studentId === userInfo.studentId) {
      isUser = true;
    }

    return (
      <div key={item.id} className="text-center bg-white w-3/4 rounded-md m-2">
        {`${item.name} : ${item.time}`}{' '}
        {isUser && (
          <button
            className="bg-blue-100 rounded hover:bg-blue-300"
            onClick={() => onClickHandler(item)}
          >
            X
          </button>
        )}
      </div>
    );
  });

  return <div className="flex flex-col items-center">{content}</div>;
}

export default MemberList;
