import {getUsers} from"./DataManager.js"
import {addUserToDom} from"./DataList.js"

getUsers().then(parsedResponse => {
    
    addUserToDom(parsedResponse.results[0]);
})

console.log("You look marvelous!")
