import React, { Component } from 'react';
import { Container } from "./home.style";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

class Home extends Component {
    render() {
        return (

            <Container>
                <Header/>
                    <h1>gowno</h1>
                <Footer/>
            </Container>

    );
    }
}

export default Home;
