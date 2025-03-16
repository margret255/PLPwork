
function changeText() {
    let paragraph = document.getElementById("paragraph");
    paragraph.textContent = "The text has been changed dynamically!";
    paragraph.style.color = "blue";  
    paragraph.style.fontSize = "18px";
}


function toggleElement() {
    let container = document.getElementById("container");
    let existingElement = document.getElementById("newElement");

    if (existingElement) {
        container.removeChild(existingElement);  
    } else {
        let newElement = document.createElement("p");
        newElement.id = "newElement";
        newElement.textContent = "New element added!";
        newElement.style.color = "green";
        newElement.style.fontWeight = "bold";
        container.appendChild(newElement);
    }
}
