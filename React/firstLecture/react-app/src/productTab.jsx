import ProductCard from "./productCard.jsx";

function ProductTab() {
    return(
        <div>

     <  ProductCard title="Laptop" price={40000}/>
     <  ProductCard title="Pen" price={20}/>
     <  ProductCard title="watch" price={5000}/>
        </div>
    )
};

export default ProductTab;