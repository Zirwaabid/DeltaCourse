import Products from "./products.jsx";

function ProductTab() {
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
       <div style={styles}>
            <  Products title="Logitech MX Master" idx={0}/>
            <  Products title="Apple Pencil (2nd Gen)" idx={1}/>
            <  Products title="Zebronics-Zeb-Transformer" idx={2}/>
            <  Products title="Petronics Toad 23" idx={3}/>
       </div>
    )
};

export default ProductTab;