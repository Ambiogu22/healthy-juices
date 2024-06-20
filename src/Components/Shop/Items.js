import React from "react";

const itemsArray = [
    {
        id: "1",
        image:"https://dsznjaxrxc1vh.cloudfront.net/product-images/large/greens2.png",
        title:"Green Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 5.99,
        new: false,
        pack: false
    },
    {
        id: "2",
        image:"https://dsznjaxrxc1vh.cloudfront.net/product-images/large/strawberry-orange-mango-pride.png",
        title:"Orange Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 5.99,
        new: false,
        pack: false
    },
    {
        id: "3",
        image:"https://dsznjaxrxc1vh.cloudfront.net/product-images/large/strawberry-basil.png",
        title:"Red Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 5.99,
        new: false,
        pack: false
    },
    {
        id: "4",
        image:"https://dsznjaxrxc1vh.cloudfront.net/product-images/large/roots3.png",
        title:"Purple Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 5.99,
        new: true,
        pack: false
    },
    {
        id: "6",
        image:"https://dsznjaxrxc1vh.cloudfront.net/product-images/large/cleanse-1-new-roots.png",
        title:"5-Day Healthy",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 24.99,
        new: true,
        pack: true
    }
]

const getItemData = (id) => {
    let itemData = itemsArray.find(item => item.id === id)

    if (itemData == undefined){
        console.log(`The product with id:${id} doen't exist.`)
    }

    return itemData;
}

export {itemsArray, getItemData}