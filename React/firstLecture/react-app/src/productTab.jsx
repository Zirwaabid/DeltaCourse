import Products from "./products.jsx";

function ProductTab() {
    // let options=["reliable","fast"];
    return (
        <>
            {/* <  Products title="Laptop" price={40000} features={options} /> */}
            <  Products title="Laptop" price={40000}  />
            <  Products title="Pen" price={20} />
            <  Products title="watch" price={5000} />
        </>
    )
};

export default ProductTab;