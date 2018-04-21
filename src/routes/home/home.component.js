import React, { Component } from 'react';
import { Container, Description, UserLoginBox, UserInput, UserButton } from "./home.style";
import { Wrapper } from "../../utils/styles/global.style";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";


class Home extends Component {

    state = {
        users: [],
        inputValue: ''
    };

    componentDidMount () {
        console.log('state component mount', this.state)
    }

    componentDidUpdate () {
        console.log('state component mount', this.state)
    }

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: '',
        });
    };

    userOnChange = (event) => {
        this.setState({userValue: event.target.value});
    };

    render() {
        return (

            <Container>
                <Header/>
                    <Wrapper>
                        <UserLoginBox>
                            <Description> Please add GitHub user name to observable. </Description>
                            <UserInput type="text" value ={this.state.userValue} onChange={this.userOnChange }/>
                            <UserButton onClick={this.addNewUser}>
                                Add user
                            </UserButton>
                        </UserLoginBox>
                    </Wrapper>
                <Footer/>
            </Container>

    );
    }
}

export default Home;
