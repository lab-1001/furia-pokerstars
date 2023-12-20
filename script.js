function closePopup() {
  const desktop = document.getElementById('popup-desktop')
  const mobile = document.getElementById('popup-mobile')
  desktop.style.opacity = 0
  desktop.style.pointerEvents = 'none'
  mobile.style.opacity = 0
  mobile.style.pointerEvents = 'none'
}