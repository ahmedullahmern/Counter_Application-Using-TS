const inc_btn = document.getElementById("increment") as HTMLButtonElement
const dec_btn = document.getElementById("decrement") as HTMLButtonElement
const counter_html = document.getElementById("counter") as HTMLSpanElement


let countingNumber = 0
dec_btn.disabled = true
function handelincdec(clickOn: "pluse" | "minus") {
    if (clickOn == "pluse") {
        countingNumber++
    }
    if (clickOn == "minus") {
        countingNumber--
    }
    if (countingNumber === 0) {
        dec_btn.disabled = true
    } else {
        dec_btn.disabled = false
    }
    counter_html.innerText = countingNumber.toString()
    
        if (countingNumber < 10) {
            counter_html.innerText = 0+countingNumber.toString()
        }
}
inc_btn.addEventListener("click", () => {
    handelincdec("pluse")
})
dec_btn.addEventListener("click", () => {
    handelincdec("minus")
})