import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import Button from '@material-ui/core/Button';
import './style.css';
require("dotenv").config();

const API_KEY = (process.env.REACT_APP_API_KEY);

//  Create a new component.
class Search extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ReactJS');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 1000);

    return (
      <div>
        <div className="flex-container">
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("HTML tutorials")}
          >
            HTML
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("CSS tutorials")}
          >
            CSS
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("Express.js tutorials")}
          >
            Express
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("Mongo.js tutorials")}
          >
            Mongo
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("Javascript.js tutorials")}
          >
            Javascript
          </Button>
        </div>

        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <div className="videoList">
          <VideoList
            onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default Search;