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
        let payment = Number(amountFigure) * (1.05) ** Number(range) + 64 * Number(range);
        console.log("PAYMENT", payment)
        interest.innerText = Math.ceil((payment - Number(amountFigure))).toString();
        repaymentAmount.innerText = Math.ceil(((payment + Number(amountFigure))) / Number(range) )
        totalPayment.innerText = Math.ceil(((payment + Number(amountFigure)))).toString();
    } else {
        let payment = Number(amountFigure) * (1.15) ** Number(range) + 64 * Number(range);
        console.log("PAYMENT", payment)
        interest.innerText = Math.ceil((payment - Number(amountFigure))).toString();
        repaymentAmount.innerText = Math.ceil(((payment) / Number(range) ))
        totalPayment.innerText = Math.ceil((payment)).toString();
    }
});
