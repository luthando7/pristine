const amount = document.getElementById("loan-amount")
const inputSlider = document.getElementById("steps-range")

const paymentRange = document.getElementById("loan-term")
const termInputSlider = document.getElementById("payment-range")

const interest = document.getElementById("interest")
const repaymentAmount = document.getElementById("repayment-amount")
const totalPayment = document.getElementById("total-payment")

inputSlider.oninput = (() => {
    amount.innerText = inputSlider.value;
});

termInputSlider.oninput = (() => {
    paymentRange.innerText = termInputSlider.value;
    let amountFigure = amount.innerText;
    let range = paymentRange.innerText;

    if (amountFigure < 1000) {
        let payment = 0.05 * amountFigure + range * 30 + 4;
        console.log("PAYMENT", payment)
        totalPayment.innerText = ((payment + Number(amountFigure))).toString();
    } else {
        let payment = 0.15 * amountFigure + range * 30 + 4;
        console.log("PAYMENT", payment)
        totalPayment.innerText = (payment + Number(amountFigure)).toString();
    }
});
