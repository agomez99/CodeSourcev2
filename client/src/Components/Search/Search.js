import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import Button from '@material-ui/core/Button';
import mongo from './icons/mongodb.png'
import js from './icons/js.png'
import angular from './icons/angular.png'
import react from './icons/react.png'
import vue from './icons/vue.png'
import html from './icons/html.png'
import css from './icons/css.png'
import ts from './icons/TS.png'
import './style.css';

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY









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
        <div className="btn-container">
          <label>Choose a button</label>
          <br></br>
        <Button
            type="button"
            value="react"
            onClick={(e) => videoSearch("Javascript tutorials")}
            startIcon={<img src={js} alt=""/>}
            style={{
              borderRadius: 35,
              width: '180px',
              backgroundColor: "#ffffff",
              padding: "10px 5px",
              fontSize: "16px"
          }}
          variant="contained"

          >
            Javascript
          </Button>
          <Button
            type="button"
            value="react"
            onClick={(e) => videoSearch("HTML tutorials")}
            startIcon={<img src={html} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
              variant="contained"
          >
            HTML
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("CSS tutorials")}
            startIcon={<img src={css} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 40px",
              fontSize: "18px"
          }}
          variant="contained"
          >
            CSS
          </Button>
          <Button
            type="button"
            className="cat-btn"
            value="react"
            onClick={(e) => videoSearch("React tutorials")}
            startIcon={<img src={react} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          variant="contained"
          >

          React
          </Button>
          <Button
            type="button"
            className="cat-btn"
            value="react"
            onClick={(e) => videoSearch("AngularJS tutorials")}
            startIcon={<img src={angular} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          variant="contained"
          >

           Angular
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("MongoDB tutorials")}
            startIcon={<img src={mongo} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          variant="contained"
          

          >
            
          Mongo DB
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("Vuejs tutorials")}
            startIcon={<img src={vue} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          variant="contained"

          >
            Vue
          </Button>
          <Button
            type="button"
            className="react-Button"
            value="react"
            onClick={(e) => videoSearch("typescript tutorials")}
            startIcon={<img src={ts} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "uppercase",


          }}
          variant="contained"

          >
            Typescript
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
