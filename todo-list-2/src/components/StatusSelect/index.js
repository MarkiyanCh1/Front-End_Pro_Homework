import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';


export class StatusSelect extends Component {
    render() {
        return (
            <select className="StatusSelect" onChange={this.props.onChange}>
                {this.props.options.map(({ text, value }) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </select>
        );
    }
}

StatusSelect.propTypes = {
    option: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
};