// // document.getElementById("myPopup").addEventListener("click", myFunction());
const div0 = document.getElementById("myPopup0");
const div1 = document.getElementById("myPopup1");
const div2 = document.getElementById("myPopup2");
const span0 = document.getElementById("popuptext0");
const span1 = document.getElementById("popuptext1");
const span2 = document.getElementById("popuptext2");


div0.addEventListener("click", ()=>{
  span0.classList.toggle("show");
});

div1.addEventListener("click", ()=>{
  span1.classList.toggle("show");
});

div2.addEventListener("click", ()=>{
  span2.classList.toggle("show");
});




