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
import { GlobalStyles } from '../../Components/global';

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
      <GlobalStyles />
         <h3 className="button-label">Choose a button for a tutorial or use the search!</h3>
        <div className="btn-container">
        <Button
            variant="outlined" 
            color="primary"
            type="button"
            value="react"
            onClick={(e) => videoSearch("Javascript tutorials")}
            startIcon={<img src={js} alt=""/>}
            style={{
              borderRadius: 35,
              width: '180px',
              backgroundColor: "#ffffff",
              padding: "8px 5px",
              fontSize: "16px"
          }}

          >
            Javascript
          </Button>
          <Button
               variant="outlined" 
            color="primary"
            type="button"
            value="react"
            onClick={(e) => videoSearch("HTML tutorials")}
            startIcon={<img src={html} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "8px 15px",
              fontSize: "18px"
          }}
          >
            HTML
          </Button>
          <Button
               variant="outlined" 
            color="primary"
           type="button"
            className="react-button"
            value="react"
            onClick={(e) => videoSearch("CSS tutorials")}
            startIcon={<img src={css} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          

          >
            CSS
          </Button>
          <Button
               variant="outlined" 
            color="primary"
            type="button"
            className="cat-btn"
            value="react"
            onClick={(e) => videoSearch("React tutorials")}
            startIcon={<img src={react} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 15px",
              fontSize: "18px"
          }}
          >

          React
          </Button>
          <Button
            variant="outlined" 
            color="primary"
            type="button"

            className="react-button"
            value="react"
            onClick={(e) => videoSearch("AngularJS tutorials")}
            startIcon={<img src={angular} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          >

           Angular
          </Button>
          <Button
               variant="outlined" 
            color="primary"
            type="button"
            className="react-button"
            value="react"
            onClick={(e) => videoSearch("MongoDB tutorials")}
            startIcon={<img src={mongo} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          

          >
          Mongo
          </Button>
          <Button
               variant="outlined" 
            color="primary"
           type="button"
            className="react-button"
            value="react"
            onClick={(e) => videoSearch("VueJS tutorials")}
            startIcon={<img src={vue} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          

          >
          Vue
          </Button>
          <Button
               variant="outlined" 
            color="primary"
           type="button"
            className="react-button"
            value="react"
            onClick={(e) => videoSearch("Typescript tutorials")}
            startIcon={<img src={ts} alt=""/>}
            style={{
              borderRadius: 35,
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px"
          }}
          


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
