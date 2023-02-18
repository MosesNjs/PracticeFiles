/* continuation from index2.js in async

nesting callbacks within callbacks works and all but
there's a better way to do it, using promises

learnt how promises work, they either resolve or reject
when you return a new promise, you have access to the .then
method which takes in the resolved data and does whatever
you can tack on the .catch method right after the .then to 
catch any errors

proceeded to remake my const getTodos to return a promise
took out the callbacks and just had it resolve or reject

okay so unlike the earlier thing we did in asyncninja/index2.js
where we had to nest callbacks within other callbacks 
to achieve asyncronous coding...
here we made our getTodos function return a promise
that gets and resolves the code or doesnt get and reject it
after which you can then use the .then and .catch methods 
to use the resolved code and to catch any errors

okay so, since the function now returns a promise, 
to run another or more network requests in sequesnce, 
you only need return the function again with new argument
directly before the close of the previous statement, 
thus, returning the promise of the next request becomes 
the final goal of the earlier code and you use the .then 
to use the data returned by the promise  ...
and you can keep this going for as long as you want
*/

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        resolve(data)
    } else if (request.readyState === 4){
        reject('error getting resource')
    }
    })

    request.open('GET', resource)
    request.send();
    })
    
}
// chaining promises
getTodos('/asyncbyninja/todos/luigi.json').then(data =>{
    console.log('Promise resolved 1:', data)
    return getTodos('/asyncbyninja/todos/mario.json')
}).then(data =>{
    console.log('Promise resolved 2:', data)
    return getTodos('/asyncbyninja/todos/moses.json')
}).then(data =>{
    console.log('promise 3 resolved', data)
}).catch(err =>{
    console.log('Promise rejected', err)
})
// one catch to run/catch them all



const getSomething = () => {

    return new Promise((resolve, reject)=> {
        resolve('some data')
        reject('some error')

    })
}

// getSomething().then((data)=> {
//     console.log(data)
// }, (err)=>{
// console.log(err)
// })
// or the below version

getSomething().then(data => {
    console.log(data)
}).catch(err => { 
    console.log(err)
})

