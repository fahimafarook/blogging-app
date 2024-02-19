import React from 'react';
import { useParams } from 'react-router-dom';

function PostLandingComponent() {
    // Accessing id parameter from URL
    const { id } = useParams();

    return (
        <div>
            {/* Displaying the id parameter */}
            PostLandingComponent - id : {id}
        </div>
    );
}

export default PostLandingComponent;
