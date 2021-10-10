import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Disqus from "../Disqus/Disqus";
import Chip from "@material-ui/core/Chip";
import { LikeButton } from "@lyket/react";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
  LinkedinIcon,
  TwitterShareButton,
} from "react-share";
import "./styles.css";

const Post = (props) => {
  const data = props.location.state;
  // const namespace = "blog";
  console.log(props);
  const chip = data.tags.map((tag, index) => (
    <div key={index}>
      <Chip color="secondary" label={tag.name} style={{ marginBottom: "5px" }} />
    </div>
  ));
  return (
    <div>
      <div className="post">
        <h1 className="p-title">{data.title}</h1>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
        <div className="chips">{chip}</div>
        <div className="share-btn">
          <label>Share</label>
          {""}
          <EmailShareButton key={"email"} className={"btn"} url={data.url}>
            <EmailIcon round size={50} />
          </EmailShareButton>
          <FacebookShareButton key={"fb"} className={"btn"} url={data.url}>
            <FacebookIcon round size={50} />
          </FacebookShareButton>
          <LinkedinShareButton key={"linked"} className={"btn"} url={data.url}>
            <LinkedinIcon round size={50} />
          </LinkedinShareButton>
          <TwitterShareButton key={"twitter"} className={"btn"} url={data.url}>
            <TwitterIcon round size={50} />
          </TwitterShareButton>
          <RedditShareButton key={"reddit"} className={"btn"} url={data.url}>
            <RedditIcon round size={50} />
          </RedditShareButton>
        </div>
        <hr />
        Give me a like!!
        <LikeButton
          component={LikeButton.templates.Twitter}
          id={props.match.params.slug}
          namespace={props.location.state.slug}
        />
        <div className="author">
          <img
            src={data.author.profile_image}
            alt="Author"
            className="author-image"
          />
          <div>
            Published by{" "}
            <strong>
              {data.author.first_name} {data.author.last_name}
            </strong>
            <br></br>on
            {moment(data.published).format("MMMM Do, YYYY")}
          </div>
        </div>
        <hr />
        <hr />
        <Link to="/blog">&larr; Back to the posts list</Link>
      </div>
      <Disqus />
    </div>
  );
};

export default Post;
