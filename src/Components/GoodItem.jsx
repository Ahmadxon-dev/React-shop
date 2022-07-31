export default function GoodItem({id,name,describtion,price, full_background, addToBasket}) {
    return (
        <div className='card' id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className='card-title'>{name}</span>
                <p>{describtion}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id,name,price})}>Buy</button>
                <span className={`right`} style={{fontSize:'1.8rem'}}>{price}$</span>
            </div>
        </div>
    )
}