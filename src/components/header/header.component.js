import React, { Component } from 'react';
import { Container } from "./header.style";
import { Head } from "./header.style";
import { Wrapper } from "../../utils/styles/global.style";


class Header extends Component {
    render() {
        return (
            <Container>

                <Head>
                    <Wrapper>
                    <a href="/">
                        GITHUB USers Example App
                    </a>
                    </Wrapper>
                </Head>
            </Container>

        );
    }
}

export default Header;
