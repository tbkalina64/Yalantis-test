import React from 'react';

export default function UserData({ months, user, users}) {

    function currentMonth({users}){
        console.log(user.dob);
        let dob = new Date(user.dob).getMonth();
        console.log(dob);
        for (dob in users){
            if (dob <= 3){
                console.log(dob);
            }
            if (dob <= 6){
                console.log(dob);
            }
            if (dob <= 10){
                console.log(dob);
            }
            if (dob > 11){
                console.log(dob);
            }
        }
    }

    return (
      <div className="list-month">
          { <div id="calendar">
            <div className="calendar">

                <span id="month-0">January</span>
                <span id="month-1">February </span>
                <span id="month-2">March</span>
                <span id="month-3">April</span>
                <span id="month-4">May</span>
                <span id="month-5">June</span>
                <span id="month-6">July</span>
                <span id="month-7">August</span>
                <span id="month-8">September</span>
                <span id="month-9">October</span>
                <span id="month-10">November</span>
                <span id="month-11">December</span>
            </div>
                <div id="usersList"></div>
        </div>   }


      </div>
    );
  }