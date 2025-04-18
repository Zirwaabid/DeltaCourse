import './products.css'
import Price from './price';
function Products({ title, idx }) {
    let oldPrices = ["12,495", "11,689", "1,599", "550"];
    let newPrices = ["8,999", "8,999", "800", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable Buttons"],
        ["intuitive surface", "designed for iPad pro"],
        ["designed for iPad pro", "intuitive surface"],
        ["wireless", "Optical Orientation"]]
    return (
        <div className="Products">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p><Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} /></p>
        </div>
    );
};
export default Products;