import { useState } from "react";

function HideComments({ video }) {
    const [isHideComments, setIsHideComments] = useState(false);

    function toggleComments() {
        setIsHideComments(!isHideComments)
    }

    const renderComments = video.comments.map(comment => (
        <>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
        </>

    ))
    
    return (
        <div>
            <button onClick={toggleComments}>{isHideComments ? "Show Comments" : "Hide Comments"}</button>
            <div>
                <h2>{video.comments.length} Comments</h2>
                {renderComments}
            </div>
        </div>
    )
}
export default HideComments