import React from 'react';

import ShowReplies from './ReplyPage.js'
import AddReplies from './addReplies.js'

export default function ReplyList(){
    return(
        <div>
            <AddReplies/>
            <ShowReplies/>
        </div>
    )
}