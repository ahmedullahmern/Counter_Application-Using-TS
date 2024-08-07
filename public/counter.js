"use strict";
const inc_btn = document.getElementById("increment");
const dec_btn = document.getElementById("decrement");
const counter_html = document.getElementById("counter");
let countingNumber = 0;
dec_btn.disabled = true;
function handelincdec(clickOn) {
    if (clickOn == "pluse") {
        countingNumber++;
    }
    if (clickOn == "minus") {
        countingNumber--;
    }
    if (countingNumber === 0) {
        dec_btn.disabled = true;
    }
    else {
        dec_btn.disabled = false;
    }
    counter_html.innerText = countingNumber.toString();
    if (countingNumber < 10) {
        counter_html.innerText = 0 + countingNumber.toString();
    }
}
inc_btn.addEventListener("click", () => {
    handelincdec("pluse");
});
dec_btn.addEventListener("click", () => {
    handelincdec("minus");
});
