import GoodItem from "./GoodItem";

export default function GoodList({goods =[], addToBasket}) {
    if (!goods.length){
        return <h3>Nothing Here</h3>
    }
    return(
        <div className={`goods`}>
            {goods.map(item => {
                return <GoodItem key={item.id} addToBasket={addToBasket} {...item}/>
            })}
        </div>
    )
}