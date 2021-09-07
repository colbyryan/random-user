import {getUsers} from"./DataManager.js"
import {addUserToDom} from"./DataList.js"

const userBtn = document.querySelector(".user-btn")
getUsers().then(parsedResponse => {
    addUserToDom(parsedResponse.results[0]);
})
    userBtn.addEventListener("click", taco => {
        getUsers().then(parsedResponse => {
            addUserToDom(parsedResponse.results[0]);
})
    })
console.log("You look marvelous!")
