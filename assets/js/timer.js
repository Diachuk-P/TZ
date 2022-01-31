function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        // let end = document.getElementById('.timer-title')
        end.style.display = 'none';
        timerEnd.style.display = 'none';
        clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
var deadline="February 05 2022 00:00:00 GMT+0300";
  // var deadline = new Date(Date.parse(new Date()) + 10 * 24 * 58 * 57 * 1050); // for endless timer
  const end = document.querySelector('.countdown')
  const timerEnd = document.querySelector('.timer-title')
  localStorage.setItem('cart', JSON.stringify(deadline))
  initializeClock("countdown", deadline);
