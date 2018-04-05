import React, {Component} from 'react';
import {Container, Header, Button, Icon} from 'semantic-ui-react';

class Content extends Component {
    render() {

        let mobile = false;

        return (
            <Container textAlign='center' style={{minHeight: 700, padding: '1em 0em'}}>
                <Header
                    as='h1'
                    content='Imagine-a-Company'

                    style={{
                        fontSize: mobile ? '2em' : '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: mobile ? '1.5em' : '3em',
                    }}
                />
                <Header
                    as='h2'
                    content='Do whatever you want when you want to.'
                    style={{
                        fontSize: mobile ? '1.5em' : '1.7em',
                        fontWeight: 'normal',
                        marginTop: mobile ? '0.5em' : '1.5em',
                    }}
                />
                <Button primary size='huge'>
                    Get Started
                    <Icon name='right arrow'/>
                </Button>
            </Container>
        )
    }
}

export default Content;