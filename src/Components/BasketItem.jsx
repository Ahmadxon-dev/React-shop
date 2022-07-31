export default function BasketItem({id, name, price, quantity, remmoveFromBasket, incrementQuantity, decrementQuantity}) {

    return (
        <li className={`collection-item`}>
            {name} x{quantity} = {quantity * price}<b>$</b>
            <span className={`secondary-content`}>
                <i className={`material-icons add`} onClick={() => incrementQuantity(id)}>add</i>
                <i className={`material-icons remove`}onClick={() => decrementQuantity(id)}>remove</i>
                <i onClick={() => remmoveFromBasket(id)} className="material-icons basket-delete">delete_forever</i>
            </span>
        </li>
    )
}