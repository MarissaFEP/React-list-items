import React, {PropTypes, PureComponent} from 'react';
import './ListControl.css';
import ItemContent from './ItemContent';
import RadioItem from './RadioItem';
import CheckItem from './CheckItem';


export default class ListControl extends PureComponent {
    static propTypes = {
        question: PropTypes.object.isRequired
    };

    render() {
        const {question} = this.props;
        const Item = question.oneOf ? RadioItem : CheckItem;

        const options = (question.oneOf || question.anyOf).map((option) => (
            <li key={option.id}>
                <Item name={question.id} value={option.id}>
                    <ItemContent value={option.content}/>
                </Item>
            </li>
        ));

        return (
            <div>
                {question.decription}
                <ul className='list'>
                    {options} 
                </ul>
            </div>
        );
    }
}
