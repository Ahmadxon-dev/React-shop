export default function Cart({quantity = 0, handleBasketShow = Function.prototype}) {
    return(
        <div className={`cart blue darken-4 white-text`} onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )
}