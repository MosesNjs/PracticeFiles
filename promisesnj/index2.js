/* 
fetch api here to replace everything 

times are achanging, we dont have to use xmlhttps ...
we use the fecth api now, it has the promise api built in too
fetch api doesnt reject promises unless there's a problem reaching the site
i.e a network error, you can implement a status check 
to make sure you do anything with the data. 
the response from fetch doesnt actually give you the json data so 
you gotta fetch it manually using
response.json which returns a promise.
you need to take the data the promise comes with using .then

the if statement was just me playing around

async await, here to make it even easier
async functions ALWAYS returns a promise. 
putting all your asyncronous code in one function 
the function is async so its non blocking 
you can chain as many promises as you need 
*/

// fetch 
// fetch('/asyncbyninja/todos/mario.json').then((response)=>{
//     // if (response.status === 200){
//     console.log('resolved', response)
//     return response.json() 
//     // } else {
//     //     console.log('there was a client side issue')
//     // }
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log('rejected', err)
// })


// async await 

const getTodos = async () => { 

    const response = await fetch('/asyncbyninja/todos/mario.json')

    if (response.status !== 200){
        throw new Error('cannot fetch the data')
    }
    const data = await response.json()
    return data
}

getTodos()
    .then(data => {console.log('promise resolved:', data)})
    .catch(err => {console.log('promise rejected:', err.message)})