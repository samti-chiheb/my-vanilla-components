const card = document.querySelector("body");
const cardContent = document.querySelector(".card");

function tilt(e) {
  const centerX = card.offsetWidth / 2;
  const centerY = card.offsetHeight / 2;
  const mouseX = e.clientX - card.offsetLeft;
  const mouseY = e.clientY - card.offsetTop;
  const rotateX = (mouseY - centerY) / 10; // Adjust the sensitivity here
  const rotateY = (mouseX - centerX) / 10; // Adjust the sensitivity here
  cardContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

card.addEventListener("mouseover",(e)=> tilt(e));
card.addEventListener("mouseout",()=>{
   cardContent.style.transform = `rotateX(0 deg) rotateY(0 deg)`
});

