const inputRange1 = document.getElementById('inputRange1')
const inputRange2 = document.getElementById('inputRange2')
const inputRange3 = document.getElementById('inputRange3')

const rangeValue1 = document.getElementById('rangeValue1')
const rangeValue2 = document.getElementById('rangeValue2')
const rangeValue3 = document.getElementById('rangeValue3')

const priceSumm = document.getElementById('priceSumm')
const resultPaument = document.getElementById('resultPaument')
const procent = document.getElementById('procent')

function updateValues() {
    const carPrice = parseInt(inputRange1.value)
    const initialPayment = parseInt(inputRange2.value)
    const leaseTerm = parseInt(inputRange3.value)

    rangeValue1.innerHTML = carPrice
    rangeValue2.innerHTML = initialPayment
    rangeValue3.innerHTML = leaseTerm

    const totalLeaseSum = Math.floor(carPrice / 100 * 135)
    const monthlyPayment = Math.floor((totalLeaseSum - initialPayment) / leaseTerm)

    priceSumm.innerHTML = totalLeaseSum
    resultPaument.innerHTML = monthlyPayment
    procent.innerHTML = Math.floor(initialPayment / (totalLeaseSum / 100))
}

inputRange1.addEventListener('input', updateValues)
inputRange2.addEventListener('input', updateValues)
inputRange3.addEventListener('input', updateValues)



const dropContainer = document.getElementById("drop-container")
const buttonDropContainer = document.getElementById("button-dropContainer")

buttonDropContainer.addEventListener("click", function() {
    dropContainer.classList.toggle("drop-container_not-active")
})


