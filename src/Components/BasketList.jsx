import BasketItem from "./BasketItem";

export default function BasketList({order,handleBasketShow=Function.prototype,remmoveFromBasket=Function.prototype, decrementQuantity, incrementQuantity}) {
    const totalPrice = order.reduce((sum, el) => sum + el.price* el.quantity, 0);
    return (
        <div className={`bsk`}>
            <ul className={`collection basket-list`}>
                <li className={`collection-item active`}>
                    Basket
                </li>
                {order.length ? order.map(item => {
                    return <BasketItem incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} remmoveFromBasket={remmoveFromBasket} key={item.id} {...item}/>
                }) : <img
                    src="https://media3.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=ecf05e47ehqfabsd9mn33p0ipu12r4u2tzb74gxigd5q8cfv&rid=giphy.gif&ct=g"
                    alt="imptyGIF"
                    className="emptyGIF"
                />}
                <li className="totalCost active">
                    Total Price:{totalPrice}$
                </li>
                <i className="material-icons basket-close" onClick={handleBasketShow} style={{cursor:"pointer"}}>close</i>
            </ul>
        </div>
    )
}