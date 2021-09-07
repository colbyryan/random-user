import { User } from "./User.js";
import { getUsers } from "./DataManager.js";

export const addUserToDom = (userObj) => {
    const contentElement = document.querySelector(".userList");
    contentElement.innerHTML = User(userObj)
}