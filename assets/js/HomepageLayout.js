import React, {Component} from 'react';
import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react';
import Footer from './Footer';
import Content from './Content';
import User from './components/header/User';

class DesktopContainer extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        let fixed = true;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility>
                    <Segment textAlign='center' >

                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={true}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>Home</Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Container position='right'>
                                        <User/>
                                    </Container>
                                </Menu.Item>
                            </Container>
                        </Menu>

                        <Content/>

                        <Footer/>

                    </Segment>
                </Visibility>
            </Responsive>
        )
    }
}


export default DesktopContainer;
