function addButton() {
    let textinput = document.getElementById("text").value
    let listItem = document.createElement("li")
    listItem.innerText = textinput
    delButton = document.createElement("button")
    delButton.innerHTML("X")
    delButton.addEventListener("click", function () {

    })
    listItem.appendChild(delButton)
    let list = document.getElementById("mylist")
    list.appendChild(listItem)

}

function delLi() {
    parentLi = document.getElementById()
}