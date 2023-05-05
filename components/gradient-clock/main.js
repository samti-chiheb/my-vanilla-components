const container = document.querySelector(".container");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let constSecond = new Date().getSeconds();

//initialize the app
getColors();

setInterval(() => {
  date = new Date();
  let hour = date.getHours() * (360 / 12);
  let minute = date.getMinutes() * (360 / 60);

  constSecond += 1;
  let constSecondDeg = constSecond * 6;

  hours.style.rotate = `${hour}deg`;
  minutes.style.rotate = `${minute}deg`;
  seconds.style.rotate = `${constSecondDeg}deg`;
}, 1000);

//generate random color onClick
container.addEventListener("click", () => {
  setColors()
  getColors();
});

// manage local storage
function setColors() {
  localStorage.setItem("color1", generateRandomColors()[0]);
  localStorage.setItem("color2", generateRandomColors()[1]);
}

function getColors() {
  let color1 = localStorage.getItem("color1");
  let color2 = localStorage.getItem("color2");

  hours.style.background = `conic-gradient(
                            from 0deg at 50.17% 50.17%,
                            rgb(255, 255, 255) 0deg,
                            ${color1} 2deg,
                            rgba(255, 255, 255, 0) 360deg
                          )`;
  container.style.backgroundColor = color2;
}

// generate random colors
function generateRandomColors() {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + 180) % 360;
  
  const color1 = hslToRgb(hue1, 50, 50);
  const color2 = hslToRgb(hue2, 50, 20);

  return [color1, color2];
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
    b * 255
  )})`;
}
