export const User = (userObj) => {
    return `<section class ="">
    <h3>User Information</h3>
    <ul>
    <li>Name: ${userObj.name.first +" "+ userObj.name.last}</li>
    <li>Gender: ${userObj.gender}</li>
    <li>Address: ${userObj.location.street + ", " + userObj.location.city + ", " + userObj.location.postcode }</li>
    <li>Email Address: ${userObj.email}</li>
    <li>Date of Birth: ${userObj.dob.date}(Age: ${userObj.dob.age})</li>
    <li>Cell Phone Number: ${userObj.cell}</li>
    <li>Photo: ${userObj.picture.medium}</li>
    </ul>
    </section>`
}