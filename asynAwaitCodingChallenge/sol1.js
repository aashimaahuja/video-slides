async function getAvatar(user){
    const res = await fetch(`/users/${user.id}`)
    const data = await res.json();
​
    console.log(data.imageUrl)
}
​
async function getUsersAvatar() {
    const response = await fetch("/users")
    const users = await response.json()
​
    for(let user of users){
         getAvatar(user)
    }
   
}