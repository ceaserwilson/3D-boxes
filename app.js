const boxContainer = document.getElementById("boxes");
const transformBtn = document.getElementById("btn");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 100}px ${-i * 100}px`;

      boxContainer.appendChild(box);
    }
  }
}

transformBtn.addEventListener("click", () => {
  boxContainer.classList.toggle("big");
});

createBoxes();
