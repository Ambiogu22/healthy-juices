import React from "react";

const itemsArray = [
    {
        id: "1",
        image:"https://cdn-icons-png.flaticon.com/512/71/71879.png",
        title:"Green Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 4.99
    },
    {
        id: "2",
        image:"https://cdn-icons-png.flaticon.com/512/71/71879.png",
        title:"Orange Juice",
        description: "Our aim is to seamlessly integrate into your daily routine, offering time-saving solutions while prioritizing your well-being. Our products are designed to combat inflammation, detoxify, and cleanse your body and skin, ensuring you feel rejuvenated and refreshed each day",
        price: 4.99
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