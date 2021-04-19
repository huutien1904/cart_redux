var initialState = [
    {
        id : 1,
        name : 'Iphone 7 plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"',
        decription :'sản phẩm do apple sản xuất ',
        price : 32,
        rating:4,
        inventory : 10,
        rating : 1
    },
    {
        id : 2,
        name : 'Samsung s20 ultra',
        image: 'https://bizweb.dktcdn.net/100/255/723/products/samsung-galaxy-s20-ultra-den-1.jpg?v=1590570561467',
        decription :'sản phẩm do SamSung sản xuất ',
        price : 27,
        rating:3,

        inventory : 29,
        rating : 2
    },
    {
        id : 3,
        name : 'Oppo A73',
        image: 'https://cdn.tgdd.vn/Products/Images/42/229916/oppo-a73-5g-125220-095243-600x600.jpg',
        decription :'sản phẩm do Oppo sản xuất ',
        price : 15,
        rating:2,

        inventory : 199 ,
        rating : 3
    },
]

var products = (state = initialState , action) => {
    switch(action.type){
        default : return [...state]
    }
}

export default products