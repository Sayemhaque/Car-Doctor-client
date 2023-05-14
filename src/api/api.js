



const orderServiceDb = (userInfo) => {
    fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{
           "content-type":"application/json" 
        },
        body:JSON.stringify(userInfo)
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => console.log(error))
}

export {orderServiceDb}