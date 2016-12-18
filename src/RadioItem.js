import React, {PureComponent} from 'react';

export default class RadioItem extends PureComponent {
    render() {
        const {name, value, children} = this.props;
        return (
            <div>
                <input type='radio' name={name} value={value}/>
                {children}
            </div>
        );
    }
}