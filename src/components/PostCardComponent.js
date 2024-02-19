import { React, useContext } from 'react';
import '../styles/postCard.css';
import TagIdContext from '../context/tagContext';
import { Link } from 'react-router-dom';

function PostCardComponent(props) {
  // Accessing tag data from context
  const tagIdData = useContext(TagIdContext);

  return (
    <div className="post-card">
      {/* Link to individual post page */}
      <Link to={`/post/${props.postData.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img className="post-image" src={`${props.postData.image[0].url}?random=${props.postData.id}`} alt="Post" />
        <h5 className="post-title mx-3 mt-3 text-start">{props.postData?.title}</h5>
        <p className="post-content mx-3">{props.postData?.content}</p>
        {/* Tags container */}
        <div className="tags-container mx-1 mt-1">
          {props.postData.tags.map(tag_id => (
            // Checking if tag exists in tagIdData before rendering
            tagIdData.find(tag => tag.id === tag_id) && (
              <p key={tag_id} className="post-tag mx-1 text-start">
                {tagIdData.find(tag => tag.id === tag_id)?.title}
              </p>
            )
          ))}
        </div>
      </Link>
    </div>
  );
}

export default PostCardComponent;
