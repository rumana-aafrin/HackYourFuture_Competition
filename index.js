//click event for Togglebutton is used for mobile view  
const toggleButton = document.getElementById("toggleButton");
const navList = document.getElementById("navList");
toggleButton.addEventListener('click' ,()=>{
  navList.classList.toggle('active');
});
