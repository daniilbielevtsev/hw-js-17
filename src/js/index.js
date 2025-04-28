//1

const textField = document.querySelector("input");
const changeButton = document.querySelector("button");

changeButton.addEventListener("click", function () {
  changeButton.textContent = textField.value;
});
//2

const firstPhoto = document.querySelector("img");

firstPhoto.src =
  "https://mediapool.bmwgroup.com/cache/P9/202101/P90411344/P90411344-the-new-bmw-m5-cs-studio-01-2021-600px.jpg";
//3

const link = document.querySelector("myLink");
const image = document.querySelector("myImage");

link.href = "https://edu.goiteens.com/";

image.alt = "Нове описання зображення";
//4
const list = document.getElementById("myList");
const firstItem = list.querySelector("li");
firstItem.textContent = "Новий текст";
