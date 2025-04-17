import "./ItemsDescription.css"
export default function ItemsDescription({title,features}) {
    return(
        <div className="ItemsDescription">
            <h3>{title}</h3>
            <p>{features}</p>
        </div>
    )
};