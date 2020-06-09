import React from 'react';

const Veggie = ({ v, doUpvote, doDownvote }) => (
    <li>
        {v.name} - {v.score} poäng
        <button onClick={doUpvote}> <span role="img" aria-label="upvote">👍</span> </button>
        <button onClick={doDownvote}> <span role="img" aria-label="downvote">👎</span> </button>
    </li>
)


export default Veggie;