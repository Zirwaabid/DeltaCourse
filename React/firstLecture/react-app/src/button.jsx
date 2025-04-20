function handleClick() {
    console.log("Hello");
};
function handleDblClick() {
    console.log("You Double Clicked!")
}
function handleMouseOver() {
    console.log("Bye")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio nam natus ratione! Qui ea deleniti provident odit totam saepe repudiandae, quasi hic architecto, nobis tempora omnis, ullam alias quod. Maxime eaque recusandae deleniti quibusdam ea earum molestias eos consequuntur?</p>
            <button onDoubleClick={handleDblClick}>Double Click Me!</button>
        </div>
    )
}