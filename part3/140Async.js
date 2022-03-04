function dojob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                person.stamina -= 30;
                resolve({
                    result: `${name} success.`,
                });
            } else {
                reject(new Error(`${name} failed.`));
            }
        }, 1000);
    });
};

const llems = { stamina: 100 };

const execute = async function () {
    try {
        let v = await dojob('work', llems);
        console.log(v.result);
        v = await dojob('study', llems);
        console.log(v.result);
        v = await dojob('work', llems);
        console.log(v.result);
        v = await dojob('study', llems);
    } catch (e) {
        console.log(e);
    }
}
execute();