import React, {Component} from 'react';
import {Header, Image} from 'semantic-ui-react';
import Avatar from 'react-avatar';

class User extends Component {

    render() {
        return (

        <Header as='h3' inverted={false}>
            <Avatar facebookId="100008343750912" size={48} name="Adrian Buzatu"/>
        </Header>


    )
    }
}

export default User;