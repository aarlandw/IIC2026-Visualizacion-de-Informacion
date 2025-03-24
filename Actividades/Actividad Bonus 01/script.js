//Definimos cual es el punto que queremos mover
const retina = document.querySelectorAll(".eye-retina");

//Evento movimiento del mouse

// window.addEventListener("mousemove", (e) => {
//   const { pageX, pageY } = e; //? What does this do?

//   // the size of the screen
//   const { innerWidth, innerHeight } = window;
//   let left = (pageX / innerWidth) * 100;
//   let top = (pageY / innerHeight) * 100;
//     // Para probar si está dentro: console.log("El mouse está dentro de la ventana")
// });

// Mouse movement event. Eyes should follow the mouse cursor
document.addEventListener("mousemove", (event) => {
  const eyes = document.querySelectorAll(".eye-retina");
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
    const x = Math.cos(angle) * 20; // Adjust movement range
    const y = Math.sin(angle) * 20;
    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});

//Evento click encima de la figura (Gigi)

function getColor() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getCatSaying() {
  const sayings = ["Meow!", "Purr...", "Hiss!", "Mew!", "Paw-some!"];
  return sayings[Math.floor(Math.random() * sayings.length)];
}

document.querySelector(".gigi").addEventListener("click", function () {
  console.log(getCatSaying());
});

//Evento click en botón

document.querySelector(".button").addEventListener("click", function () {
  console.log("Pushed the button");

  document.querySelector("#ribbon-middle").style.background = getColor();
  document.querySelector("#ribbon-left").style.borderLeftColor = getColor();
  document.querySelector("#ribbon-right").style.borderRightColor = getColor();
});
