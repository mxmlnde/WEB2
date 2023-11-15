const boxContainer = document.getElementById("box-container")

function addBox() {
    let newBox = document.getElementById("box")
    newBox.boxContainer.appendChild(newBox)

    newBox.classList.remove("box-hidden")
}