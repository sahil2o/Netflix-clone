let f_btn1 = document.querySelector("#faq-1");
let f_btn2 = document.querySelector("#faq-2");
let f_btn3 = document.querySelector("#faq-3");
let f_btn4 = document.querySelector("#faq-4");
let f_btn5 = document.querySelector("#faq-5");

let f_div1 = document.querySelector(".ans-1");
let f_div2 = document.querySelector(".ans-2");
let f_div3 = document.querySelector(".ans-3");
let f_div4 = document.querySelector(".ans-4");
let f_div5 = document.querySelector(".ans-5");

let i_1 = document.querySelector('.i-1')
let i_2 = document.querySelector('.i-2')
let i_3 = document.querySelector('.i-3')
let i_4 = document.querySelector('.i-4')
let i_5 = document.querySelector('.i-5')




f_btn1.addEventListener('click', ()=>{
  if(f_div1.style.maxHeight ===  '1200px'){
    f_div1.style.maxHeight = '0px';
  }
  else{
    f_div1.style.maxHeight = '1200px'
  }

  i_1.classList.toggle('tr')
})

f_btn2.addEventListener('click', ()=>{
  if(f_div2.style.maxHeight ===  '1200px'){
    f_div2.style.maxHeight = '0px';
  }
  else{
    f_div2.style.maxHeight = '1200px'
  }
  i_2.classList.toggle('tr')
})

f_btn3.addEventListener('click', ()=>{
  if(f_div3.style.maxHeight ===  '1200px'){
    f_div3.style.maxHeight = '0px';
  }
  else{
    f_div3.style.maxHeight = '1200px'
  }
  i_3.classList.toggle('tr')
})

f_btn4.addEventListener('click', ()=>{
  if(f_div4.style.maxHeight ===  '1200px'){
    f_div4.style.maxHeight = '0px';
  }
  else{
    f_div4.style.maxHeight = '1200px'
  }
  i_4.classList.toggle('tr')
})

f_btn5.addEventListener('click', ()=>{
  if(f_div5.style.maxHeight ===  '1200px'){
    f_div5.style.maxHeight = '0px';
  }
  else{
    f_div5.style.maxHeight = '1200px'
  }
  i_5.classList.toggle('tr')

})