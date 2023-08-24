function myFunction() {
  var x = document.getElementById('myDIV')
  var btnText = document.getElementById('myBtn')
  if (x.style.display === 'none') {
    x.style.display = 'block'
    btnText.innerHTML = 'Hide Details'
  } else {
    x.style.display = 'none'
    btnText.innerHTML = 'Show Details'
  }
}
