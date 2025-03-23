const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

const yourCart=[
    {product:"Minoxidil",
     price:599
    },
    {product:"Multi-Vitamins",
      price:99
    },
    {product:"Protin-Powder",
     price:999
    }
];


let payToBuy=yourCart.reduce((acc,item)=>{
   return acc+item.price;
},0)

console.log(`you have to pay ${payToBuy}`);
