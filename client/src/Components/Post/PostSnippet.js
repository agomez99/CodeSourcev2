import React from 'react';
import moment from 'moment';
import {Link }from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import '../../App.css';

const PostSnippet = props => {
const data = props;

  return (
    <div className="post-snippet">
              <img src={props.featured_image} alt="Author" className="p-image"/>
           <h3>
        <Link className="p-title" to={{
          pathname: `/blog/${props.slug}`,
          state: props
        }}>
          {props.title}
        </Link>
      </h3>
      <p className="p-summary">{props.summary.substring(1, 100)}</p>
      <div>
      <Chip 
            label={props.tags[0].name}
            color="primary"
          />
          <Chip 
            label={props.tags[1].name}
            color="primary"
          />
          <Chip 
            label={props.tags[2].name}
            color="primary"
          />
        <div>By <strong>{props.author.first_name} {props.author.last_name}</strong></div>
        <span className="publication-date">
          Published on 
          {' '}
          {moment(props.published).format("YYYY-MM-DD")}
        </span>
      </div>
    </div>
  );
}

export default PostSnippet;