/* trying to use an api end point.
step 1 
be able to use servers- create request object at the top of page 
step 2 
use the open mrthod to signify the type of request and 
the location you want to perform request at. 
step 3 
use send method to actually send th request , takes no parameters at this time 
now code sends and shit but it doesnt tell us anything 
so now we're gonna hack into it and get a progress bar
step 4 
create event listener, attach to request object to track progress of 
request to listen for readystatechange 
readystatechange-which is the different checkpoints the code passes through
step 4 .. listen to the eent and log to the console each time it changes it's ready state
so now we get the info on the console ... but we still arent informed when the code finsihes so we can 
do something with the info we been tryna get. so we have it do something when it gets to 
request completion readystate. so, 
step 5
we alter the event listener, have it keep listening for ready state change but 
we add sn if conditional to make it so that when the readystate === 4(request complete), 
we do something like log the response or something.
the thing is, the request will still complete even if something goes wrong,
it'll just not return the data you asking for, so there needs to be a way to tell for that 
making the if conditional only be a completed 
request is not enough, now we added the request status being 200, 
if these two conditions are satisfied, it'll let us know and if not, 
we made it shoot out an error text and kinda played around with the coe a lil
step 6
wrap code up in a different const so it's easy to reuse, 
only difference is it wont fire until you call it. so you call it and have it do something
step 7? 
we kinda made the response to a completed status, error or no, into a function called callback
as opposed to logging something to the console
step 8 
convert json into js objects 
when you get the json data, it's in jason form, to actually make it usable, 
you can parse it into a js object
extra step
make your own JSON
replace the JSON being called with yours

about 
const getTodos = (callback) => {
    and 
    getTodos((err, data) => {
        the function getTodos requires an argument called 
        callback when you call it
        when i called it tho i fed it two arguments 
        luckily, callback in the const code got divied into 2
        the exact 2 that i seek. so my function call got 
        what it wanted and logged to the browser
*/

const getTodos = (callback) => {
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)

    if (request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        callback(undefined, data);
        //console.log('data is ready for use', request.responseText)
        //console.log('mayday mayday, error ' + (request.status) + ' is in the building, client side error')
    } else if (request.readyState === 4){
    callback('could not get data', undefined);
    }

    })
    // https://jsonplaceholder.typicode.com/todos/
    request.open('GET', 'data.json')
    request.send();
}

console.log('1')
console.log('2')

getTodos((err, data) => {
console.log('callback fired and somehow it all makes sense')
if (err) {
    console.log(err)
} else {
    console.log(data)
}
}
)

console.log('3')
console.log('4')


// console.log("call two");

// setTimeout(() => {
//     console.log("call three");
// }, 5000);
// // console.log("call three");
// console.log("call four");

// console.log('this works ...1?');
// console.log('this works take 2?'); 

// setTimeout(() => {
//     console.log('gtbank server wait times immitatated');
// }, 3000);
// // set timeout is used ft callback function to imitate the wait times a server comes
// // with. this is the basics of async coding 

// console.log('this works take 3?');
// console.log('this works take 4?');