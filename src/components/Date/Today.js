import React from 'react';

function Today() {
  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return <div className="text-center mt-2">{formattedDate}</div>;
}

export default Today;
