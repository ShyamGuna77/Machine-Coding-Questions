
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek,isSameMonth,isSameDay,isToday} from "date-fns";
import { useState } from "react";

export default function Datepicker ({value,onChange}) {
  const [isopen,setIsOpen] = useState(false)
    return (
      <>
        <div className="date-picker-container">
          <button
            onClick={() => setIsOpen((e) => !e)}
            className="date-picker-button"
          >
            {value ? format(value, "MMMM do, yyyy") : "select a Date"}
          </button>
          {isopen && <DateComponent value={value} onChange={onChange} />}
        </div>
      </>
    );

}




function DateComponent ({value , onChange}){
const [visibleMonth ,setVisibleMonth] = useState(value || new Date())


function showPrevious() {
  setVisibleMonth(e => {
    return addMonths(e,-1)
  })
}

function showNext(){
   setVisibleMonth((e) => {
     return addMonths(e, 1);
   });

}

const visiblevalue = eachDayOfInterval({
  start:startOfWeek(startOfMonth(visibleMonth)),
  end:endOfWeek(endOfMonth(visibleMonth))
})
  


    return (
      <>
        <div className="date-picker">
          <div className="date-picker-header">
            <button
              onClick={showPrevious}
              className="prev-month-button month-button"
            >
              &larr;
            </button>
            <div className="current-month">
              {format(visibleMonth, "MMMM-yyyy")}
            </div>
            <button
              onClick={showNext}
              className="next-month-button month-button"
            >
              &rarr;
            </button>
          </div>

          <div className="date-picker-grid-header date-picker-grid">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="date-picker-grid-dates date-picker-grid">
            {visiblevalue.map((date) => (
              <button
                className={`date ${
                  !isSameMonth(date, visibleMonth) &&
                  "date-picker-other-month-date"
                } ${isSameDay(date, value) && "selected"} ${
                  isToday(date) && "today"
                }`}
                onClick={() => onChange(date)}
                key={date.toDateString()}
              >
                {date.getDate()}
              </button>
            ))}
          </div>

          {/* 
          <button className="date date-picker-other-month-date">28</button>
          <button className="date date-picker-other-month-date">29</button>
          <button className="date date-picker-other-month-date">30</button>
          <button className="date date-picker-other-month-date">31</button>
          <button className="date">1</button>
          <button className="date">2</button>
          <button className="date">3</button>
          <button className="date">4</button>
          <button className="date">5</button>
          <button className="date">6</button>
          <button className="date">7</button>
          <button className="date">8</button>
          <button className="date">9</button>
          <button className="date">10</button>
          <button className="date">11</button>
          <button className="date">12</button>
          <button className="date">13</button>
          <button className="date">14</button>
          <button className="date">15</button>
          <button className="date">16</button>
          <button className="date">17</button>
          <button className="date">18</button>
          <button className="date">19</button>
          <button className="date">20</button>
          <button className="date">21</button>
          <button className="date">22</button>
          <button className="date">23</button>
          <button className="date">24</button>
          <button className="date">25</button>
          <button className="date selected">26</button>
          <button className="date">27</button>
          <button className="date">28</button>
          <button className="date today">29</button>
          <button className="date">30</button>
          <button className="date date-picker-other-month-date">1</button>
        </div> */}
        </div>
      </>
    );
}