// const promiseone = new Promise((resolve, reject)=>{
// const  status = false 
// if (status){
//     resolve("promised resolved")
//     return
// }
// reject("promise rejected")

// })

// console.log (
//     promiseone
//     .then((response)=> console.log("this promise was resolved"))
//     // then is used to get your success state
//     // catch is used to catch the error state
//     .catch((error)=>console.log("this promise was rejected"))
// )


    // chaining promises together
const moonWarPeople = () => {
    fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((result) => console.log(result.results))
    .catch((error) => console.log(error));

};

moonWarPeople();


// promises replaced by async await
const starWarsPeople = async () => {
    const response = await fetch ("https://swapi.dev/api/people")
    const result = await response.json()
    console.log(result.results);

}
 starWarsPeople();