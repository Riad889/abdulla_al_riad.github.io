// typing script js
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Problem Solver", "Mobile App Developer"],
    typeSpeed: 90,
    backSpeed: 80,
});

// show or hide nav menu
var menu=document.querySelector('.nav_menu');
var menuBtn=document.querySelector('#open-menu-btn');
var closeBtn=document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click',()=>{
    menu.style.display='flex';
    closeBtn.style.display='Inline-block';
    menuBtn.style.display='none';

});

//close nav menu
var closeNav=()=>{
    menu.style.display='none';
    closeBtn.style.display='none';
    menuBtn.style.display='Inline-block';
}
closeBtn.addEventListener('click',closeNav);

//nav color change scroll

//Code for message send to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxOQpSiFFFgK6S1bxWoovwEuBA82_JQBdJ8Ic9mtsLnICibpAD0K15YbhBs3b-bCjyu/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Sent Successfull";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset();

      })
      .catch(error => console.error('Error!', error.message))
  })


