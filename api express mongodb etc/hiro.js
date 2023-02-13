const skyDive = require('./katana');

// console.log(skyDive);

const theData = () => {
    return new promise((resolve, reject) => {
        // setTimeout(() => resolve(skyDive), 4000);
        resolve(skyDive);

    })
}

const quickboom = async () => {
    const deployed = await theData();
    console.log(deployed);

}

quickboom();
