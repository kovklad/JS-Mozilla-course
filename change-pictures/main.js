var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++){

  var newImage = document.createElement('img');
  newImage.setAttribute('src', (`images/pic${i}.jpg`));
  thumbBar.appendChild(newImage);
  newImage.onclick = function(){
    displayedImage.setAttribute('src', (`images/pic${i}.jpg`));
  }
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
  let className = btn.getAttribute('class');
  if (className === 'dark'){
    btn.setAttribute('class', 'white');
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    btn.textContent = 'Светлее';
  }else{
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.textContent = 'Темнее';
  }
}

