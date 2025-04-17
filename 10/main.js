function HelloWorld() {
    console.log("Hello World")
}

let totalCost = 0

let storedProducts = [
    {name: "Samsung", price: 5400},
    {name: "iPhone", price: 25000},
    {name: "Xiaomi", price: 4900},
]

for (let product of storedProducts) {
    totalCost += product.price
}

console.log("На складі товарів на", totalCost, "грн")

totalCost = 0

let orderedProducts = [
    {name: "Samsung", price: 5400},
    {name: "iPhone", price: 25000},
]

for (let product of orderedProducts) {
    totalCost += product.price
}


console.log("Сума замовлення :", totalCost, "грн")

/*
function getTotal(products) {
    let totalCost = 0
    for (let product of products) {
        totalCost += product.price
    }
    return totalCost
}

console.log("На складі товарів на", getTotal(storedProducts), "грн")
console.log("Сума замовлення :", getTotal(orderedProducts), "грн")
*/