
const orderServiceDb = (userInfo) => {
    fetch("http://localhost:3000/orders", {
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
    fetch("http://localhost:3000/jwt", {
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
        fetch(`http://localhost:3000/delete/${id}`, {
            method: "DELETE"
        })
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
}

export { orderServiceDb, deleteOrder, createJwtToken }