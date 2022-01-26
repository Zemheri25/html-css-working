let add = document.querySelector(".add")
let input = document.querySelector(".input")
let ul1 = document.querySelector(".ul1")

add.addEventListener("click", ekleme) 

function ekleme () {
    let limylist = document.createElement("li")
    limylist.innerHTML = input.value
    ul1.append(limylist)
    input.value = ""
}