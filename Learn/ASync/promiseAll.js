const promises = [firstPromise(), secondPromise(), thirdPromise()];
 
Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });
    const boilWater = () => {
        return new Promise((resolve, reject) => {
            console.log("Memanaskan air...");
            setTimeout(() => {
                resolve("Air panas sudah siap!");
            }, 2000);
        })
    }
     
    const grindCoffeeBeans = () => {
        return new Promise((resolve, reject) => {
            console.log("Menggiling biji kopi...");
            setTimeout(() => {
                resolve("Kopi sudah siap!");
            }, 1000);
        })
    }