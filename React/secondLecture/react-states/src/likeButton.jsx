import { useState } from "react"
export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [clicks, setClicks] = useState(0);
    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks + 1);
    }
    let likeStyle = { color: "red" };
    return <div>
        <p>Clicks={clicks}</p>
        <p onClick={toggleLike}>
            {
                isLiked ? <i style={likeStyle} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
            }
        </p>

    </div>
};