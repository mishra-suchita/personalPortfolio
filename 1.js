let tabLinks=document.getElementsByClassName("tab-links");
let tabContents=document.getElementsByClassName("tab-contents");
function opentab(tabName){
  for(tabLink of tabLinks)
  {
    tabLink.classList.remove("active-link");
  }
  for(tabContent of tabContents)
  {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
let sidemenu=document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}
const scriptURL = "https://script.google.com/macros/s/AKfycbx2Zl2m7xncFjaSBdBug6BXBKJ_kzvLk_4dPJQ9aBy5HkuQ4MqVmoqVgeQEMZOlob-w/exec"
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML="message sent successfully"
  setTimeout(function (){
    msg.innerHTML="";
  },5000)
form.reset()})
    .catch(error => console.error('Error!', error.message))

})
