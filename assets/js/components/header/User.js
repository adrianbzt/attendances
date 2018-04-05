import React, {Component} from 'react';
import {Header, Image} from 'semantic-ui-react';

class User extends Component {
    render() {
        return(
            <Header as='h3' inverted={true}>
                <Image circular src='build/images/avatar/patrick.png' />
                {' '} Adrian
            </Header>

        )
    }
}

export default User;