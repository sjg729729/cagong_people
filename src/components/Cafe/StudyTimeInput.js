import React, { useState } from 'react';

function StudyTimeInput({ member, setMember }) {
  const [studyTime, setStudyTime] = useState({
    start: '',
    finish: '',
  });

  const onChangeHandler = (value, time) => {
    setStudyTime({ ...studyTime, [time]: value });
  };

  const onSubmitHandelr = (e) => {
    e.preventDefault();
    const time = `${studyTime.start} ~ ${studyTime.finish}`;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const newStudy = {
      name: userInfo.name,
      studentId: userInfo.studentId,
      time: time,
    };
    setMember((prev) => {
      return [...prev, newStudy];
    });
    setStudyTime({
      start: '',
      finish: '',
    });
  };

  return (
    <form className="flex flex-col items-center" onSubmit={onSubmitHandelr}>
      <div className="m-2">
        <label htmlFor="start" className="m-3">
          시작 시간
        </label>
        <input
          id="start"
          className="rounded-md"
          type="text"
          value={studyTime.start}
          onChange={(e) => {
            onChangeHandler(e.target.value, 'start');
          }}
        ></input>
      </div>
      <div className="m-2">
        <label htmlFor="finish" className="m-3">
          종료 시간
        </label>
        <input
          id="finish"
          className="rounded-md"
          type="text"
          value={studyTime.finish}
          onChange={(e) => {
            onChangeHandler(e.target.value, 'finish');
          }}
        ></input>
      </div>
      <button
        type="submit"
        className="bg-white rounded-md hover:bg-slate-300 w-10"
      >
        신청
      </button>
    </form>
  );
}

export default StudyTimeInput;
