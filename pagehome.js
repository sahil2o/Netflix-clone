let b_films = document.querySelector('.films');
let b_series = document.querySelector('.series');

let d_films = document.querySelector('.s-films');
let d_series = document.querySelector('.s-series');

b_films.addEventListener('click', ()=>{
  if(d_series.style.display === 'flex'){
    d_series.style.display = 'none';
    d_films.style.display = 'flex';
  }
  else{
    d_films.style.display = 'flex'
  }
})

b_series.addEventListener('click', ()=>{
  if(d_films.style.display === 'none'){
      d_series.style.display = 'flex';
    }
    else{
      d_films.style.display = 'none';
      d_series.style.display = 'flex';
    }
})


//------------------------------------------Video-------------------------------------------//

var vid = document.getElementById("video");
const divVid = document.getElementById("vid");
const btnClose = document.getElementById("close");



document.querySelectorAll('.play').forEach(item=>{
  item.addEventListener('click', function(){
    document.getElementById("vid").style.display = "flex"; 
  })
})



btnClose.onclick = function(){
  vid.pause();
  vid.currentTime = 0;
  divVid.style.display = "none";
}

vid.volume = 0.03;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}



// ----------------------------------------------Films------------------------------------------------------//

// Drama

const targetDiv = document.getElementById("movie-card")

const targetDiv1 = document.getElementById("c-fight-club");
const btn1 = document.getElementById("btn-fight");

const targetDiv2 = document.getElementById("c-kings-speech");
const btn2 = document.getElementById("btn-kings");

const targetDiv3 = document.getElementById("c-the-prestige");
const btn3 = document.getElementById("btn-prestige");

const targetDiv4 = document.getElementById("c-the-revenant");
const btn4 = document.getElementById("btn-revenant");

const targetDiv5 = document.getElementById("c-social-network");
const btn5 = document.getElementById("btn-social-network");

// Children

const targetDiv6 = document.getElementById("c-hotel");
const btn6 = document.getElementById("btn-hotel");

const targetDiv7 = document.getElementById("c-spirited");
const btn7 = document.getElementById("btn-spirited");

const targetDiv8 = document.getElementById("c-up");
const btn8 = document.getElementById("btn-up");

const targetDiv9 = document.getElementById("c-frozen");
const btn9 = document.getElementById("btn-frozen");

const targetDiv10 = document.getElementById("c-despicable");
const btn10 = document.getElementById("btn-despicable");


// Suspense

const targetDiv11 = document.getElementById("c-shutter");
const btn11 = document.getElementById("btn-shutter");

const targetDiv12 = document.getElementById("c-seven");
const btn12 = document.getElementById("btn-seven");

const targetDiv13 = document.getElementById("c-prisoners");
const btn13 = document.getElementById("btn-prisoners");

const targetDiv14 = document.getElementById("c-zodiac");
const btn14 = document.getElementById("btn-zodiac");

const targetDiv15 = document.getElementById("c-gone");
const btn15 = document.getElementById("btn-gone");

// Romance

const targetDiv16 = document.getElementById("c-land");
const btn16 = document.getElementById("btn-land");

const targetDiv17 = document.getElementById("c-titanic");
const btn17 = document.getElementById("btn-titanic");

const targetDiv18 = document.getElementById("c-star");
const btn18 = document.getElementById("btn-star");

const targetDiv19 = document.getElementById("c-notebook");
const btn19 = document.getElementById("btn-notebook");

const targetDiv20 = document.getElementById("c-blue");
const btn20 = document.getElementById("btn-blue");

//Thriller

const targetDiv21 = document.getElementById("c-nightcrawler");
const btn21 = document.getElementById("btn-nightcrawler");

const targetDiv22 = document.getElementById("c-science");
const btn22 = document.getElementById("btn-science");

const targetDiv23 = document.getElementById("c-black");
const btn23 = document.getElementById("btn-black");

const targetDiv24 = document.getElementById("c-joker");
const btn24 = document.getElementById("btn-joker");

const targetDiv25 = document.getElementById("c-quite");
const btn25 = document.getElementById("btn-quite");

//-----------------------------------------------Series----------------------------------------------------// 
 
// Comedies

const targetDiv26 = document.getElementById("c-arrested");
const btn26 = document.getElementById("btn-arrested");

const targetDiv27 = document.getElementById("c-curb");
const btn27 = document.getElementById("btn-curb");

const targetDiv28 = document.getElementById("c-family");
const btn28 = document.getElementById("btn-family");

const targetDiv29 = document.getElementById("c-south");
const btn29 = document.getElementById("btn-south");

const targetDiv30 = document.getElementById("c-office");
const btn30 = document.getElementById("btn-office");

// Crime

const targetDiv31 = document.getElementById("c-long");
const btn31 = document.getElementById("btn-long");

const targetDiv32 = document.getElementById("c-making");
const btn32 = document.getElementById("btn-making");

const targetDiv33 = document.getElementById("c-confession");
const btn33 = document.getElementById("btn-confession");

const targetDiv34 = document.getElementById("c-innocent");
const btn34 = document.getElementById("btn-innocent");

const targetDiv35 = document.getElementById("c-staircase");
const btn35 = document.getElementById("btn-staircase");

// Children

const targetDiv36 = document.getElementById("c-arthur");
const btn36 = document.getElementById("btn-arthur");

const targetDiv37 = document.getElementById("c-dora");
const btn37 = document.getElementById("btn-dora");

const targetDiv38 = document.getElementById("c-paw");
const btn38 = document.getElementById("btn-paw");

const targetDiv39 = document.getElementById("c-peppa");
const btn39 = document.getElementById("btn-peppa");

const targetDiv40 = document.getElementById("c-sponge");
const btn40 = document.getElementById("btn-sponge");


// Documentaries

const targetDiv41 = document.getElementById("c-amanda");
const btn41 = document.getElementById("btn-amanda");

const targetDiv42 = document.getElementById("c-citizenfour");
const btn42 = document.getElementById("btn-citizenfour");

const targetDiv43 = document.getElementById("c-man");
const btn43 = document.getElementById("btn-man");

const targetDiv44 = document.getElementById("c-super");
const btn44 = document.getElementById("btn-super");

const targetDiv45 = document.getElementById("c-tiger");
const btn45 = document.getElementById("btn-tiger");

// Feel Good

const targetDiv46 = document.getElementById("c-forrest");
const btn46 = document.getElementById("btn-forrest");

const targetDiv47 = document.getElementById("c-good");
const btn47 = document.getElementById("btn-good");

const targetDiv48 = document.getElementById("c-juno");
const btn48 = document.getElementById("btn-juno");

const targetDiv49 = document.getElementById("c-midnight");
const btn49 = document.getElementById("btn-midnight");

const targetDiv50 = document.getElementById("c-school");
const btn50 = document.getElementById("btn-school");


//-----------------------------------------------Films------------------------------------------------------//

// Drama

btn1.onclick = function () {
  
  if (targetDiv1.style.display !== "block") {
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv5.style.display = "none";
    targetDiv1.style.display = "block";
  } else {
    
    targetDiv1.style.display = "none";
  }
};

btn2.onclick = function () {
  if (targetDiv2.style.display !== "block") {
    targetDiv1.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv5.style.display = "none";
    targetDiv2.style.display = "block";
  } else {
    
    targetDiv2.style.display = "none";
  }
};

btn3.onclick = function () {
  if (targetDiv3.style.display !== "block") {
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv5.style.display = "none";
    targetDiv3.style.display = "block";
  } else {
    
    targetDiv3.style.display = "none";
  }
};

btn4.onclick = function () {
  if (targetDiv4.style.display !== "block") {
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv5.style.display = "none";
    targetDiv4.style.display = "block";
  } else {
    
    targetDiv4.style.display = "none";
  }
};

btn5.onclick = function () {
  if (targetDiv5.style.display !== "block") {
    targetDiv1.style.display = "none";
    targetDiv2.style.display = "none";
    targetDiv3.style.display = "none";
    targetDiv4.style.display = "none";
    targetDiv5.style.display = "block";
  } else {
    
    targetDiv5.style.display = "none";
  }
};

// Children

btn6.onclick = function () {
  
  if (targetDiv6.style.display !== "block") {
    targetDiv7.style.display = "none";
    targetDiv8.style.display = "none";
    targetDiv9.style.display = "none";
    targetDiv10.style.display = "none";
    targetDiv6.style.display = "block";
  } else {
    
    targetDiv6.style.display = "none";
  }
};

btn7.onclick = function () {
  if (targetDiv7.style.display !== "block") {
    targetDiv6.style.display = "none";
    targetDiv8.style.display = "none";
    targetDiv9.style.display = "none";
    targetDiv10.style.display = "none";
    targetDiv7.style.display = "block";
  } else {
    
    targetDiv7.style.display = "none";
  }
};

btn8.onclick = function () {
  if (targetDiv8.style.display !== "block") {
    targetDiv6.style.display = "none";
    targetDiv7.style.display = "none";
    targetDiv9.style.display = "none";
    targetDiv10.style.display = "none";
    targetDiv8.style.display = "block";
  } else {
    
    targetDiv8.style.display = "none";
  }
};

btn9.onclick = function () {
  if (targetDiv9.style.display !== "block") {
    targetDiv6.style.display = "none";
    targetDiv7.style.display = "none";
    targetDiv8.style.display = "none";
    targetDiv10.style.display = "none";
    targetDiv9.style.display = "block";
  } else {
    
    targetDiv9.style.display = "none";
  }
};

btn10.onclick = function () {
  if (targetDiv10.style.display !== "block") {
    targetDiv6.style.display = "none";
    targetDiv7.style.display = "none";
    targetDiv8.style.display = "none";
    targetDiv9.style.display = "none";
    targetDiv10.style.display = "block";
  } else {
    
    targetDiv10.style.display = "none";
  }
};


// Suspense

btn11.onclick = function () {
  
  if (targetDiv11.style.display !== "block") {
    targetDiv12.style.display = "none";
    targetDiv13.style.display = "none";
    targetDiv14.style.display = "none";
    targetDiv15.style.display = "none";
    targetDiv11.style.display = "block";
  } else {
    
    targetDiv11.style.display = "none";
  }
};

btn12.onclick = function () {
  if (targetDiv12.style.display !== "block") {
    targetDiv11.style.display = "none";
    targetDiv13.style.display = "none";
    targetDiv14.style.display = "none";
    targetDiv15.style.display = "none";
    targetDiv12.style.display = "block";
  } else {
    
    targetDiv12.style.display = "none";
  }
};

btn13.onclick = function () {
  if (targetDiv13.style.display !== "block") {
    targetDiv11.style.display = "none";
    targetDiv12.style.display = "none";
    targetDiv14.style.display = "none";
    targetDiv15.style.display = "none";
    targetDiv13.style.display = "block";
  } else {
    
    targetDiv13.style.display = "none";
  }
};

btn14.onclick = function () {
  if (targetDiv14.style.display !== "block") {
    targetDiv11.style.display = "none";
    targetDiv12.style.display = "none";
    targetDiv13.style.display = "none";
    targetDiv15.style.display = "none";
    targetDiv14.style.display = "block";
  } else {
    
    targetDiv14.style.display = "none";
  }
};

btn15.onclick = function () {
  if (targetDiv15.style.display !== "block") {
    targetDiv11.style.display = "none";
    targetDiv12.style.display = "none";
    targetDiv13.style.display = "none";
    targetDiv14.style.display = "none";
    targetDiv15.style.display = "block";
  } else {
    
    targetDiv15.style.display = "none";
  }
};

// Romance

btn16.onclick = function () {
  
  if (targetDiv16.style.display !== "block") {
    targetDiv17.style.display = "none";
    targetDiv18.style.display = "none";
    targetDiv19.style.display = "none";
    targetDiv20.style.display = "none";
    targetDiv16.style.display = "block";
  } else {
    
    targetDiv16.style.display = "none";
  }
};

btn17.onclick = function () {
  if (targetDiv17.style.display !== "block") {
    targetDiv16.style.display = "none";
    targetDiv18.style.display = "none";
    targetDiv19.style.display = "none";
    targetDiv10.style.display = "none";
    targetDiv17.style.display = "block";
  } else {
    
    targetDiv17.style.display = "none";
  }
};

btn18.onclick = function () {
  if (targetDiv18.style.display !== "block") {
    targetDiv16.style.display = "none";
    targetDiv17.style.display = "none";
    targetDiv19.style.display = "none";
    targetDiv20.style.display = "none";
    targetDiv18.style.display = "block";
  } else {
    
    targetDiv18.style.display = "none";
  }
};

btn19.onclick = function () {
  if (targetDiv19.style.display !== "block") {
    targetDiv16.style.display = "none";
    targetDiv17.style.display = "none";
    targetDiv18.style.display = "none";
    targetDiv20.style.display = "none";
    targetDiv19.style.display = "block";
  } else {
    
    targetDiv19.style.display = "none";
  }
};

btn20.onclick = function () {
  if (targetDiv20.style.display !== "block") {
    targetDiv16.style.display = "none";
    targetDiv17.style.display = "none";
    targetDiv18.style.display = "none";
    targetDiv19.style.display = "none";
    targetDiv20.style.display = "block";
  } else {
    
    targetDiv20.style.display = "none";
  }
};

// Thriller

btn21.onclick = function () {
  
  if (targetDiv21.style.display !== "block") {
    targetDiv22.style.display = "none";
    targetDiv23.style.display = "none";
    targetDiv24.style.display = "none";
    targetDiv25.style.display = "none";
    targetDiv21.style.display = "block";
  } else {
    
    targetDiv21.style.display = "none";
  }
};

btn22.onclick = function () {
  if (targetDiv22.style.display !== "block") {
    targetDiv21.style.display = "none";
    targetDiv23.style.display = "none";
    targetDiv24.style.display = "none";
    targetDiv25.style.display = "none";
    targetDiv22.style.display = "block";
  } else {
    
    targetDiv22.style.display = "none";
  }
};

btn23.onclick = function () {
  if (targetDiv23.style.display !== "block") {
    targetDiv21.style.display = "none";
    targetDiv22.style.display = "none";
    targetDiv24.style.display = "none";
    targetDiv25.style.display = "none";
    targetDiv23.style.display = "block";
  } else {
    
    targetDiv23.style.display = "none";
  }
};

btn24.onclick = function () {
  if (targetDiv24.style.display !== "block") {
    targetDiv21.style.display = "none";
    targetDiv22.style.display = "none";
    targetDiv23.style.display = "none";
    targetDiv25.style.display = "none";
    targetDiv24.style.display = "block";
  } else {
    
    targetDiv24.style.display = "none";
  }
};

btn25.onclick = function () {
  if (targetDiv25.style.display !== "block") {
    targetDiv21.style.display = "none";
    targetDiv22.style.display = "none";
    targetDiv23.style.display = "none";
    targetDiv24.style.display = "none";
    targetDiv25.style.display = "block";
  } else {
    
    targetDiv25.style.display = "none";
  }
};


//----------------------------------------------------Series------------------------------------------------//

// Comedies

btn26.onclick = function () {
  
  if (targetDiv26.style.display !== "block") {
    targetDiv27.style.display = "none";
    targetDiv28.style.display = "none";
    targetDiv29.style.display = "none";
    targetDiv30.style.display = "none";
    targetDiv26.style.display = "block";
  } else {
    
    targetDiv26.style.display = "none";
  }
};

btn27.onclick = function () {
  if (targetDiv27.style.display !== "block") {
    targetDiv26.style.display = "none";
    targetDiv28.style.display = "none";
    targetDiv29.style.display = "none";
    targetDiv30.style.display = "none";
    targetDiv27.style.display = "block";
  } else {
    
    targetDiv27.style.display = "none";
  }
};

btn28.onclick = function () {
  if (targetDiv28.style.display !== "block") {
    targetDiv26.style.display = "none";
    targetDiv27.style.display = "none";
    targetDiv29.style.display = "none";
    targetDiv30.style.display = "none";
    targetDiv28.style.display = "block";
  } else {
    
    targetDiv28.style.display = "none";
  }
};

btn29.onclick = function () {
  if (targetDiv29.style.display !== "block") {
    targetDiv26.style.display = "none";
    targetDiv27.style.display = "none";
    targetDiv28.style.display = "none";
    targetDiv30.style.display = "none";
    targetDiv29.style.display = "block";
  } else {
    
    targetDiv29.style.display = "none";
  }
};

btn30.onclick = function () {
  if (targetDiv30.style.display !== "block") {
    targetDiv26.style.display = "none";
    targetDiv27.style.display = "none";
    targetDiv28.style.display = "none";
    targetDiv29.style.display = "none";
    targetDiv30.style.display = "block";
  } else {
    
    targetDiv30.style.display = "none";
  }
};

// Crime

btn31.onclick = function () {
  
  if (targetDiv31.style.display !== "block") {
    targetDiv32.style.display = "none";
    targetDiv33.style.display = "none";
    targetDiv34.style.display = "none";
    targetDiv35.style.display = "none";
    targetDiv31.style.display = "block";
  } else {
    
    targetDiv31.style.display = "none";
  }
};

btn32.onclick = function () {
  if (targetDiv32.style.display !== "block") {
    targetDiv31.style.display = "none";
    targetDiv33.style.display = "none";
    targetDiv34.style.display = "none";
    targetDiv35.style.display = "none";
    targetDiv32.style.display = "block";
  } else {
    
    targetDiv32.style.display = "none";
  }
};

btn33.onclick = function () {
  if (targetDiv33.style.display !== "block") {
    targetDiv31.style.display = "none";
    targetDiv32.style.display = "none";
    targetDiv34.style.display = "none";
    targetDiv35.style.display = "none";
    targetDiv33.style.display = "block";
  } else {
    
    targetDiv33.style.display = "none";
  }
};

btn34.onclick = function () {
  if (targetDiv34.style.display !== "block") {
    targetDiv31.style.display = "none";
    targetDiv32.style.display = "none";
    targetDiv33.style.display = "none";
    targetDiv35.style.display = "none";
    targetDiv34.style.display = "block";
  } else {
    
    targetDiv34.style.display = "none";
  }
};

btn35.onclick = function () {
  if (targetDiv35.style.display !== "block") {
    targetDiv31.style.display = "none";
    targetDiv32.style.display = "none";
    targetDiv33.style.display = "none";
    targetDiv34.style.display = "none";
    targetDiv35.style.display = "block";
  } else {
    
    targetDiv35.style.display = "none";
  }
};

// Children

btn36.onclick = function () {
  
  if (targetDiv36.style.display !== "block") {
    targetDiv37.style.display = "none";
    targetDiv38.style.display = "none";
    targetDiv39.style.display = "none";
    targetDiv40.style.display = "none";
    targetDiv36.style.display = "block";
  } else {
    
    targetDiv36.style.display = "none";
  }
};

btn37.onclick = function () {
  if (targetDiv37.style.display !== "block") {
    targetDiv36.style.display = "none";
    targetDiv38.style.display = "none";
    targetDiv39.style.display = "none";
    targetDiv40.style.display = "none";
    targetDiv37.style.display = "block";
  } else {
    
    targetDiv37.style.display = "none";
  }
};

btn38.onclick = function () {
  if (targetDiv38.style.display !== "block") {
    targetDiv36.style.display = "none";
    targetDiv37.style.display = "none";
    targetDiv39.style.display = "none";
    targetDiv40.style.display = "none";
    targetDiv38.style.display = "block";
  } else {
    
    targetDiv38.style.display = "none";
  }
};

btn39.onclick = function () {
  if (targetDiv39.style.display !== "block") {
    targetDiv36.style.display = "none";
    targetDiv37.style.display = "none";
    targetDiv38.style.display = "none";
    targetDiv40.style.display = "none";
    targetDiv39.style.display = "block";
  } else {
    
    targetDiv39.style.display = "none";
  }
};

btn40.onclick = function () {
  if (targetDiv40.style.display !== "block") {
    targetDiv36.style.display = "none";
    targetDiv37.style.display = "none";
    targetDiv38.style.display = "none";
    targetDiv39.style.display = "none";
    targetDiv40.style.display = "block";
  } else {
    
    targetDiv40.style.display = "none";
  }
};

// Documentaries

btn41.onclick = function () {
  
  if (targetDiv41.style.display !== "block") {
    targetDiv42.style.display = "none";
    targetDiv43.style.display = "none";
    targetDiv44.style.display = "none";
    targetDiv45.style.display = "none";
    targetDiv41.style.display = "block";
  } else {
    
    targetDiv41.style.display = "none";
  }
};

btn42.onclick = function () {
  if (targetDiv42.style.display !== "block") {
    targetDiv41.style.display = "none";
    targetDiv43.style.display = "none";
    targetDiv44.style.display = "none";
    targetDiv45.style.display = "none";
    targetDiv42.style.display = "block";
  } else {
    
    targetDiv42.style.display = "none";
  }
};

btn43.onclick = function () {
  if (targetDiv43.style.display !== "block") {
    targetDiv41.style.display = "none";
    targetDiv42.style.display = "none";
    targetDiv44.style.display = "none";
    targetDiv45.style.display = "none";
    targetDiv43.style.display = "block";
  } else {
    
    targetDiv43.style.display = "none";
  }
};

btn44.onclick = function () {
  if (targetDiv44.style.display !== "block") {
    targetDiv41.style.display = "none";
    targetDiv42.style.display = "none";
    targetDiv43.style.display = "none";
    targetDiv45.style.display = "none";
    targetDiv44.style.display = "block";
  } else {
    
    targetDiv44.style.display = "none";
  }
};

btn45.onclick = function () {
  if (targetDiv45.style.display !== "block") {
    targetDiv41.style.display = "none";
    targetDiv42.style.display = "none";
    targetDiv43.style.display = "none";
    targetDiv44.style.display = "none";
    targetDiv45.style.display = "block";
  } else {
    
    targetDiv45.style.display = "none";
  }
};

// Feel Good

btn46.onclick = function () {
  
  if (targetDiv46.style.display !== "block") {
    targetDiv47.style.display = "none";
    targetDiv48.style.display = "none";
    targetDiv49.style.display = "none";
    targetDiv50.style.display = "none";
    targetDiv46.style.display = "block";
  } else {
    
    targetDiv46.style.display = "none";
  }
};

btn47.onclick = function () {
  if (targetDiv47.style.display !== "block") {
    targetDiv46.style.display = "none";
    targetDiv48.style.display = "none";
    targetDiv49.style.display = "none";
    targetDiv50.style.display = "none";
    targetDiv47.style.display = "block";
  } else {
    
    targetDiv47.style.display = "none";
  }
};

btn48.onclick = function () {
  if (targetDiv48.style.display !== "block") {
    targetDiv46.style.display = "none";
    targetDiv47.style.display = "none";
    targetDiv49.style.display = "none";
    targetDiv50.style.display = "none";
    targetDiv48.style.display = "block";
  } else {
    
    targetDiv48.style.display = "none";
  }
};

btn49.onclick = function () {
  if (targetDiv49.style.display !== "block") {
    targetDiv46.style.display = "none";
    targetDiv47.style.display = "none";
    targetDiv48.style.display = "none";
    targetDiv50.style.display = "none";
    targetDiv49.style.display = "block";
  } else {
    
    targetDiv49.style.display = "none";
  }
};

btn50.onclick = function () {
  if (targetDiv50.style.display !== "block") {
    targetDiv46.style.display = "none";
    targetDiv47.style.display = "none";
    targetDiv48.style.display = "none";
    targetDiv49.style.display = "none";
    targetDiv50.style.display = "block";
  } else {
    
    targetDiv50.style.display = "none";
  }
};