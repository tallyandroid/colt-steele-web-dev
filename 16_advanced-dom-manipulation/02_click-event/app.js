var h1 = document.querySelector("h1")

h1.addEventListener("click", function() {
    alert("Big Boi is doper than Andre")
    h1.style.background = "orange"
    h1.style.color = "red"
})

document.querySelector("ul").addEventListener("click", function(){
    console.log("You Clicked The UL!")
})

var lis = document.querySelectorAll("li")
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color= "pink"
    })
}