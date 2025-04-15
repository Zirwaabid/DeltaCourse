import  './productCard.css'
function ProductCard({title,price}) {
    return (
        <div className="ProductCard">
            <h3>Title: {title}</h3>
            <h5>Price: {price}</h5>
        </div>
    )
}

export default ProductCard;