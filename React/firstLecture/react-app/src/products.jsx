import './products.css'
function Products({ title, price, features }) {
    return (
        <div className="Products">
            <h3>Title: {title}</h3>
            <h5>Price: {price}</h5>
            {/* rendering array  */}
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
        </div>
    );
}
export default Products;