import React, { Component } from 'react';
import { Wrapper } from "../../utils/styles/global.style";
import { Container } from "./footer.style";

class Footer extends Component {
    render() {
        return (

            <Container>
                <Wrapper>
                <p>
                    Copyright 2018 blablabla
                </p>
                </Wrapper>
            </Container>
        );
    }
}

export default Footer;
