async function getUsersAvatar() {
    const response = await fetch("/users")
    const users = await response.json()
​
    users.forEach(async (user) => {
        const res = await fetch(`/users/${user.id}`)
        const data = await res.json();
​
        console.log(data.imageUrl)
    })
}