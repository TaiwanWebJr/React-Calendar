import React,{ useState } from 'react';
import './App.scss';

function App() {
  let thisYear = new Date().getFullYear();
  let thisMonth = new Date().getMonth() + 1;
  const [year,setYear]=useState(thisYear);
  const [month,setMonth]=useState(thisMonth);
  const daysInMonth = (year,month) => new Date(year, month, 0).getDate();
  const createDays = (year,month,daysInMonth,firstDay) =>{
    let arr = [];
    for(let i=1; i<=daysInMonth; i++){
      if(i<=firstDay){arr.unshift(<li key={`hidden${i}`}className="hidden"></li>);}
      let today = (year === thisYear && month === thisMonth && i === new Date().getDate());
      arr.push(
        today?
        <li key={`day${i}`} className='today'>{i}<div>Today</div></li>
        :<li key={`day${i}`}>{i}</li>
      );
    }
    return arr;
  }
  
  const prevMonth = () =>{
    if(month===1){
      setYear(year-1)
      setMonth(12)
    }else{setMonth(month-1)}
  }
  const nextMonth = () =>{
    if(month===12){
      setYear(year+1)
      setMonth(1)
    }else{setMonth(month+1)}
  }
  return (
    <div className="calendar">
    <div className="caption">
      <button onClick={prevMonth}></button>
      <span>{`${year} / ${month}`}</span>
      <button onClick={nextMonth}></button>
    </div>
    <ul className="weekdays-row">
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wen</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
    <ul className="week">
      {createDays(year,month,daysInMonth(year,month),new Date(year,(month-1),1).getDay())}
    </ul>
      
    </div>
  );
}

export default App;
