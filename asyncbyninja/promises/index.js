/* continuation from index2.js in async

nesting callbacks within callbacks works and all but
there's a better way to do it, using promises
*/
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange', () => {

    if (request.readyState === 4 && request.status === 200){

        const data = JSON.parse(request.responseText)
        callback(undefined, data);

    } else if (request.readyState === 4){

    callback('could not get data', undefined);
    }

    })

    request.open('GET', resource)
    request.send();
}


getSomething = ()=> {
    return new promise((resolve, reject)=> {
        resolve('some data')
    })
}

getSomething().then((data)=> {
    console.log(data)
})