const list = document.getElementById("nav");

const listElements = list.getElementsByTagName('li');


for (let index = 0; index < listElements.length; index++) {
    listElements[index]
        .addEventListener("click", () => alert(`${listElements[index].innerText}`));
}
