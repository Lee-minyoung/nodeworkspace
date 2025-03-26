// inner_module/02_timer.js
function showTime(){
  let today = new Date();
  console.log(today.toLocaleTimeString());
}
showTime();

const timeout = setTimeout(()=>{
  let today = new Date();
  console.log(today.toLocaleTimeString());
  showTime();
}, 2000);

let count = 0;
const interval = setInterval(()=>{
  console.log('interval %d', count++);
  if(count == 2){
    clearInterval(interval);
  }
  showTime();
}, 1000);
console.log('End!');