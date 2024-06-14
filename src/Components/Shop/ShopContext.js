import React from "react";
import { createContext, useState } from "react";
import { getItemData } from "./Items";

export const CartContext = createContext({
    items: [],
    getItemQty: () => {},
    addItem: () => {},
    subtractItem: () => {},
    removeItem: () => {},
    getTotalCost: () => {}
});

export const AppProvider = ({children}) => {

    const [itemsList, setItemsList] = useState([]);

    const getItemQty = (id) => {
        const qty = itemsList.find(item => item.id === id)?.qty;

        if (qty === undefined){
            return 0;
        }

        return qty;
    }

    const addItem = (id) => {

        const qty = getItemQty(id);

        if ( qty === 0) { //Item not in cart
            setItemsList([...itemsList, {
                id: id,
                qty: 1
            }])
        }else{ //Item in the cart
            setItemsList(itemsList.map(
                item =>
                item.id === id 
                ? { ...item, qty: item.qty + 1 }
                : item
            ))
        }

    }

    const subtractItem = (id) => {
        const qty = getItemQty(id)

        if (qty == 0){
            removeItem(id)
        }else{
            setItemsList(itemsList.map(
                item =>
                item.id === id 
                ? { ...item, qty: item.qty - 1 }
                : item
            ))
        }
    }

    const removeItem = (id) => {
        setItemsList(itemsList => itemsList.filter(currentItem => {
            return currentItem.id != id;
        }))
    }

    const getTotalCost = () => {
        let totalCost = 0;

        itemsList.map((cartItem) => {
            const itemData = getItemData(cartItem.id);
            totalCost += (itemData.price * cartItem.qty);
        });

        return totalCost;

    }

    //define everything above

    const contextValues = {
        items: itemsList,
        getItemQty,
        addItem,
        subtractItem,
        removeItem,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default AppProvider;