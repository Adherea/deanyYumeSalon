let inputName = document.querySelector("#name");
let inputWork = document.querySelector("#work");
const inputKesan = document.querySelector("#kesan");
const name = document.querySelector(".name");
let shigoto = document.querySelector(".shigoto");
const inshou = document.querySelector(".inshou");
let pegaris2 = document.querySelector("#awd");
let gambar = document.querySelector("#gambar");

let button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if (inputName.value === "" || inputWork.value === "" || inputKesan === "") {
    alert("データを入力しませんでした。");
  } else {
    name.textContent = inputName.value;
    shigoto.textContent = inputWork.value;
    inshou.textContent = inputKesan.value;
    pegaris2.classList.add("review");

    gambar.style.display = "block";
    alert("データを入力しました！");
    inputName.value = "";
    inputWork.value = "";
    inputKesan.value = "";
  }
});
