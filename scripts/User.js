export const User = (userObj) => {
    const dateObjBirth = new Date(userObj.dob.date);
    const formattedDateBirth = dateObjBirth.toLocaleDateString();
    const dateObjReg = new Date(userObj.registered.date);
    const formattedDateReg= dateObjReg.toLocaleDateString();
    return `<section class ="user-section">
    <h3>User Information: </h3>
    <ul>
        <li><img src="${userObj.picture.medium}"></li>
        <li><b>Name:</b> ${userObj.name.first +" "+ userObj.name.last}</li>
        <li><b>Gender:</b> ${userObj.gender}</li>
        <li><b>Address:</b> ${userObj.location.street.number + " " + userObj.location.street.name + ", " + userObj.location.city + ", " + userObj.location.postcode }</li>
        <li><b>Email Address:</b> ${userObj.email}</li>
        <li><b>Date of Birth:</b> ${formattedDateBirth + " "}(Age: ${userObj.dob.age})</li>
        <li><b>Date Registered:</b> ${formattedDateReg}</li>
        <li><b>Cell Phone Number:</b> ${userObj.cell}</li>
    </ul>
    </section>`
}