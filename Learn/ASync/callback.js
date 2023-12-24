const order = callback => {
    let coffee = null;
    console.log("Processing order.......");
    setTimeout(() => {
        coffee = "Coffee is ready, Enjoys it";
        callback(coffee);
    }, 3000);
}

order(coffee => {
    console.log(coffee);
});
 
