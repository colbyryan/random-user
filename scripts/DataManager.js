export const getUsers = () => {
    return fetch ("https://randomuser.me/api/", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(response => response.json())
    .then(data => console.log(data))
} 

