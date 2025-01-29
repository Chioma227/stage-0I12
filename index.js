// get html elements
let currentDayElement = document.querySelector(".day");
let currentUTCTime = document.querySelector(".time");

// get date objects
const date = new Date();
const dateInMS = Date.now();

// function to get UTCtime

const triggerFnc = () => {
  currentUTCTime.innerHTML = "UTC: " + dateInMS ;
};

triggerFnc();