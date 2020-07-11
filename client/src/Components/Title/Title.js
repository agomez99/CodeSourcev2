import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./style.css";
const Title = () => {
    return (
        <Jumbotron fluid className="jumbotronMain">

            <Container className="jumbotronContainer">
                <h1>CodeSource</h1>
                <p>
                    Find your coding solutions here.
                </p>
            </Container>
        </Jumbotron>
    )
}
export default Title;