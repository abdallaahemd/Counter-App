let Counter = 0;

const CounterValue = document.getElementById("Counter_value");
const Increment_btn = document.getElementById("Increment_btn");
const decrement_btn = document.getElementById("decrement_btn");
const reset_btn = document.getElementById("reset_btn");

Increment_btn.addEventListener("click", ()=>{
    Counter++;
    CounterValue.innerText=Counter;
});

decrement_btn.addEventListener("click", ()=>{
    Counter--;
    CounterValue.innerText=Counter;
});

reset_btn.addEventListener("click", ()=>{
    Counter = 0;
    CounterValue.innerText=Counter;
}); 