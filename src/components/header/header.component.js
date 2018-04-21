import React, { Component } from 'react';
import { Container } from "./header.style";
import { Head } from "./header.style";
import { Wrapper } from "../../utils/styles/global.style";


class Header extends Component {
    render() {
        return (

                <Wrapper>
                    <Head>
                        <a href="/">
                            GITHUB USers Example App
                        </a>
                    </Head>
                </Wrapper>

        );
    }
}

export default Header;
