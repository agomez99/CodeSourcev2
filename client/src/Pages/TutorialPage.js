import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/authContext/authContext";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


require("dotenv").config();

function useFetch(url, defaultResponse) {
    const [data, setData] = useState(defaultResponse);
    async function getDataFromAPI(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData({
                isLoading: false,
                data,
            });
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getDataFromAPI(url);
    }, [url]);
    return data;
}
export default function TutorialPage() {
    const { getUser } = useContext(AuthContext);
    const [value, setValue] = useState('React.js')
    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);


    const APIKEY = process.env.REACT_APP_API_KEY;
    const results = 7;
    const apiEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&q=${value}&part=snippet,id&order=date&&maxResults=${results}`;
    const userFetchResponse = useFetch(apiEndpoint, {
        isLoading: true,
        data: null,
    });
    if (!userFetchResponse.data || userFetchResponse.isLoading) {
        return "Loading...";
    }


   
    const videoId = userFetchResponse.data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);

    return (
        <>
            <div className='flex-container'>
                <button type="button" className='react-Button' value='react' onClick={(e) => setValue("HTML tutorials")}>HTML</button>
                <button type="button" className='react-Button' value='react' onClick={(e) => setValue("CSS tutorials")}>CSS</button>
                <button type="button" className='react-Button' value='react' onClick={(e) => setValue("Express.js tutorials")}>Express</button>
                <button type="button" className='react-Button' value='react' onClick={(e) => setValue("Mongo.js tutorials")}>Mongo</button>
                <button type="button" className='react-Button' value='react' onClick={(e) => setValue("Javascript.js tutorials")}>Javascript</button>
            </div>

            <Jumbotron fluid className="introJumbotron">
                <Container>
                    <h1>Explore</h1>
                    <p>
                        Checkout some tutorial videos on the often used coding languages.
                    </p>
                </Container>
            </Jumbotron>
            <div className='video-array'>
                {
                    videoId.map((link, i) => {
                        var frame =
                            <div key={i} >
                                <iframe className='videos'
                                    title={i}
                                    width="560"
                                    height="315"
                                    src={link}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe> 
                            </div>
                        return frame
                    })
                }

            </div>
        </>
    )
}
