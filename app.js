let tg = window.Telegram.WebApp;
tg.expand();
let item = ""
let profile = document.getElementById("profile")
let dictionary = document.getElementById("dictionary")
let set = document.getElementById("set")
let workers = document.getElementById("workers")

profile.addEventListener("click", function() {
    item = "profile"
})
dictionary.addEventListener("click", function() {
    item = "dictionary"
})
set.addEventListener("click", function() {
    item = "set"
})
workers.addEventListener("click", function() {
    item = "workers"
})

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})