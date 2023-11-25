import React from 'react';

import Card from '../UI/Card';
import { cafeList } from '../../assets/cafeList';

function Cafe() {
  const content = cafeList.map((item) => (
    <Card id={item.id} styles="m-5 flex flex-col items-center">
      <p className="text-blue-800 font-bold text-xl mt-3 mb-5">{item.name}</p>
      <img alt={item.name} src={item.img} className="w-48 h-48 rounded-xl" />
      <div className="flex justify-between mt-6">
        <p>현재원 : 0명</p>
        <button className="ml-8 text-white block w-16 h-7 rounded-xl bg-blue-400 hover:bg-blue-700">
          더보기
        </button>
      </div>
    </Card>
  ));

  return <div className="flex flex-wrap justify-around">{content}</div>;
}

export default Cafe;
