let btnAdd = document.getElementById("btnAdd").addEventListener("click", function () {
    document.getElementById("textbox").innerHTML = ("textbox").value;
    addToList();
});

function addToList() {
    let textbox = document.getElementById("textbox").value;
    let newList = document.getElementById("list");
    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(textbox));
    newList.appendChild(entry);
}
document.getElementById("list").addEventListener("click", function (e) {
    // e.target is our targetted element.
    // try doing console.log(e.target.nodeName), it will result LI
    if (e.target && e.target.nodeName == "LI") e.target.style.backgroundColor = 'palevioletred';
    document.getElementById("textbox").value = e.target.innerText;
    let li = document.getElementsByTagName('li')[0];
});