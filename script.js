//your JS code here. If required.
const btn = document.getElementById("btn");
const counter=document.getElementById("counter");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
let cnt=parseInt(counter.innerText);
alert(cnt);
cnt++;
counter.innerText=cnt;
})