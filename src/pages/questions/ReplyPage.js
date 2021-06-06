import React from 'react';
import { useParams } from 'react-router';

const ShowReplies = (props) => {

    const { id } = useParams();
    
    return ( 
        <div>

        <span>Temp title + {id}</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eveniet deserunt beatae dolore vero dicta nostrum quaerat, fugit sed architecto facere veniam! Corrupti facilis saepe iusto rerum culpa fuga excepturi.</p>
        </div>
     );
}
 
export default ShowReplies;
