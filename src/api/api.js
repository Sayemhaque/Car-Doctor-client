
const orderServiceDb = (userInfo) => {
    fetch("https://car-doctor-server-one-indol.vercel.app/orders", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then((data) => {
            console.log(data);
        })
        .catch(error => console.log(error))
}

const createJwtToken = (loggedUser) => {
    fetch("https://car-doctor-server-one-indol.vercel.app/jwt", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(loggedUser)
    })
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem("jwt-token" , data.token)
        })
        .catch(error => console.log(error))
}

const deleteOrder = (id, proceed) => {
    if (proceed) {
        fetch(`https://car-doctor-server-one-indol.vercel.app/delete/${id}`, {
            method: "DELETE"
        })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
}

export { orderServiceDb, deleteOrder, createJwtToken }