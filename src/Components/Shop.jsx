import {API_URL, API_KEY} from "../config";
import {useEffect, useState} from "react";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import {toast} from 'react-toastify'
export const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasket, setIsBasket] = useState(false);


    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderitem => orderitem.id === item.id);
        if (itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((orderItem, index) =>{
                if (index ===itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }else{
                    return orderItem
                }
            });
            setOrder(newOrder)
        }
        toast.success('Good added to Basket Successfully')
    };
    const handleBasketShow = () =>{
        setIsBasket(!isBasket)
    };
    const remmoveFromBasket =(itemid) => {
        const newOrder = order.filter(item => item.id  !== itemid)
        setOrder(newOrder)
        toast.error('Good removed from the basket successfully')
    };
    const incrementQuantity = (itemid) => {
        const newOrder  =order.map(item => {
            if (item.id === itemid){
                const newQuantity = item.quantity + 1
                return{
                    ...item,
                    quantity: newQuantity
                }
            }
            else{
                return item
            }
        });
        setOrder(newOrder)
    };
    const decrementQuantity = (itemid) => {
        const newOrder  =order.map(item => {
            if (item.id === itemid){
                const newQuantity = item.quantity - 1;
                return{
                    ...item,
                    quantity: newQuantity>=0 ? newQuantity : 0
                }
            }
            else{
                return item
            }
        });
        setOrder(newOrder)
    };
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        }).then(response => response.json())
            .then(data => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, []);

    return (
        <div className=' container content'>

            <Cart handleBasketShow={handleBasketShow} quantity={order.length}/>
            {loading ? <Loader/> : <GoodList addToBasket={addToBasket} goods={goods}/>}
            {isBasket && <BasketList decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} remmoveFromBasket={remmoveFromBasket} handleBasketShow={handleBasketShow} order={order}/>}
        </div>
    )
};