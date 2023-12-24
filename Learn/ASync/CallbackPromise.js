const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
const success = resolvedValue => {
    console.log(resolvedValue);
}
const failure = rejectedValue => {
    console.log(rejectedValue)
}

checkStock()
.then(success)
.catch(failure);