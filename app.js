// let tg = window.Telegram.WebApp;
// tg.expand();
let item = ""
let profile = document.getElementById("profile")
let dictionary = document.getElementById("dictionary")
let set = document.getElementById("set")
let workers = document.getElementById("workers")
console.log(13);

profile.addEventListener("click", function() {
    item = "profile"
    window.location.href = "index_2.html"
})
dictionary.addEventListener("click", function() {
    item = "dictionary"
    window.location.href = "index_2.html"
})
set.addEventListener("click", function() {
    item = "set"
    window.location.href = "index_2.html"
})
workers.addEventListener("click", function() {
    item = "workers"
    window.location.href = "index_2.html"
})
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})