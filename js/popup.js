
const popup = document.getElementById("popup")
const popupButton1 = document.getElementById("popup-button1")
const popupButton2 = document.getElementById("popup-button2")
const popupButton3 = document.getElementById("popup-button3")
const popupButton4 = document.getElementById("popup-button4")
const popupCloseBtn = document.getElementById("popup-closeButton")

function openPopup(event) {
    event.preventDefault()
    popup.classList.toggle("popup_not-active")
}

popupButton1.addEventListener("click", openPopup)
popupButton2.addEventListener("click", openPopup)
popupButton3.addEventListener("click", openPopup)
popupButton4.addEventListener("click", openPopup)
popupCloseBtn.addEventListener("click", openPopup)


