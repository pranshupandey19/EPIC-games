let onclickdrop = document.getElementById("dropdiv")
let onclickflydiv = document.getElementById("onclickflydiv")
onclickdrop.onclick=()=>{
    // onclickflydiv.style.display = none;
    onclickflydiv.classList.toggle('show')
}




const svgElement = document.querySelector('.reverse');
let isRotated = false;

svgElement.addEventListener('click', () => {
  if (isRotated) {
    svgElement.style.transform = 'rotate(0deg)';
  } else {
    svgElement.style.transform = 'rotate(180deg)';
  }
  isRotated = !isRotated;
});