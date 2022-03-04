function dojob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(person.stamina > 50) {
                resolve({
                    result: `${name} success.`,
                    loss: 30,
                });
            } else {
                reject(new Error(`${name} failed.`));
            }
        }, 1000);
    });
};

const llems = {stamina: 100};

dojob('work', llems)
    .then(v => {
        console.log(v.result);
        llems.stamina -= v.loss;
        return dojob('study', llems);
    })
    .then(v => {
        console.log(v.result);
        llems.stamina -= v.loss;
        return dojob('work', llems);
    })
    .then(v => {
        console.log(v.result);
        llems.stamina -= v.loss;
        return dojob('study', llems);
    })
    .catch(e => console.log(e));
