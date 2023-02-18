/* continuation from index.js on async
we have 3 json files, we want to get info out of em 
and log to the console one after another...
...
well you can have the second info come right after 
the first has been logged, that way you know for sure that it's done 
i.e nesting callbacks within callbacks, you can't keep doing it tho

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


// nesting callbacks in callbacks
getTodos('todos/luigi.json', (err, data) => {
console.log(data) 
    getTodos('todos/mario.json', (err, data) => {
        console.log(data) 
        getTodos('todos/moses.json', (err, data) => {
            console.log(data) 
         })  
    })
})