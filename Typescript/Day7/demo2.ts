//Array of Object

var obj=[
    {
        name:"Samsung",
        description:"Good Product",
        quantity:2,
        price:10000,
        details:{
            specifiation:"xfjs",
            features:'dfjhdkjf'
        },
        comments:[
            {
                userid:2,
                comment:'good1'
            },
            {
                userid:3,
                comment:'awsome'
            }         
        ]
    },
    {
        name:"Motorolla",
        description:"Best Product",
        quantity:1,
        price:15000,
        details:{
            specifiation:"xfjs2",
            features:'dfjhdkjf2'
        },
        comments:[
            {
                userid:2,
                comment:'good1'
            },
            {
                userid:3,
                comment:'awsome'
            }         
        ]
        
    },
    {
        name:"LG",
        description:"Life Goods",
        quantity:3,
        price:15000,
        details:{
            specifiation:"xfjs3",
            features:'dfjhdkjf3'
        },
        comments:[
            {
                userid:2,
                comment:'good1'
            },
            {
                userid:3,
                comment:'awsome'
            }         
        ]
    }
];

// console.log("Product Name::"+obj[0].name);
// console.log("Description::"+obj[0].description);


for(let i=0;i<obj.length;i++){
    console.log(`
    -----------------Product Details---------------------
            Product Name :: ${obj[i].name}
            Product Description:: ${obj[i].description}
            Product Price :: ${obj[i].price}
            Product Quantity : ${obj[i].quantity}
            Product Specification: ${obj[i].details.specifiation}
            
    ----------------------------------------------------------
    `);

    for(let j=0;j<obj[i].comments.length;j++){
        console.log(`==========
        comments is 
            User Id: ${obj[i].comments[j].userid}
            Comments: ${obj[i].comments[j].comment}
        `);
    }

}
