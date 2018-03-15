function getProductsOfAllIntsExceptAtIndex(intArray) {

    // make a list of the products
    const products = [];
    let runningProduct = 1;
    for (let i = 0; i < intArray.length; i++) {
        products[i] = runningProduct;
        runningProduct *= intArray[i];
        console.log(products, runningProduct)
    }
    runningProduct = 1;
    for (let i = intArray.length - 1; i >= 0; i--) {
        products[i] *= runningProduct;
        runningProduct *= intArray[i];
        console.log(products, runningProduct)
    }

    return products;
}
