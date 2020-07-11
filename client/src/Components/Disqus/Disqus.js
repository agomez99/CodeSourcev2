import React, { Component } from "react"
import Disqus from "disqus-react"


export default class extends Component {
  render() {
    const disqusShortname = "codesource-1"
    const disqusConfig = {
      url: "",
      identifier: "",
      title: "Title of Your Article",
      language: "en"
    }


    
    return (
      <div className="article-container">
      <h4>Comments</h4>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}