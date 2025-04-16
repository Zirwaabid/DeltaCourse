import './products.css'
function Products({ title, price, features }) {
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "pink" : "" }
    return (
        <div className="Products" style={styles}>
            <h3>Title: {title}</h3>
            <h5>Price: {price}</h5>
            {isDiscount && <p>5% discount</p>}
            {/* rendering array  */}
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
        </div>
    );
};
export default Products;