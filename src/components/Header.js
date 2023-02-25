import { useState } from "react";
import HideComments from "./HideComments";

function Header({ video }) {
    const [upVotes, setUpVotes] = useState(video.upvotes);
    const [downVotes, setDownVotes] = useState(video.downvotes);
    
    function handleUpVotes() {
        setUpVotes(upVotes + 1)
    }

    function handleDownVotes() {
        setDownVotes(downVotes - 1)
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes}>{downVotes} 👎</button>
            <br></br>
            <br></br>
            <HideComments video={video}/>
        </div>
    )
}
export default Header