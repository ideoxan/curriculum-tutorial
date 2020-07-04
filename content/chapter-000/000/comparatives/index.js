function buttonClick() {
    var node = document.createElement("li")
    var text = document.createTextNode("Hey!")
    node.appendChild(text)
    node.classList.add("new-list-element")
    document.getElementById("list").appendChild(node)
    console.log('Hello, World!')
}