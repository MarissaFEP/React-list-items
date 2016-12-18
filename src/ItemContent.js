import React from 'react';

export default class ListItem extends React.PureComponent {
    render() {
        return (
            <span>{this.props.value}</span>
        );
    }
}
