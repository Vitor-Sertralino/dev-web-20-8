import { useState } from 'react'
import like from '../../assets/like-btn.png'
import dislike from '../../assets/liked-btn.png'
import './likes.css'

function Like() {
    const [likes, setLikes] = useState(50)
    const [liked, setLiked] = useState(false)

    function DarLike() {
        if (liked) {
            setLikes(likes - 1)
            setLiked(false)
        } else {
            setLikes(likes + 1)
            setLiked(true)
        }
    }
    return (
        <div>
            <button className='like-btn' onClick={DarLike}>
                <img src={liked ? dislike : like} alt="Curtir"/>
                <p>{likes}</p>
            </button>
        </div>
    )
}

export default Like