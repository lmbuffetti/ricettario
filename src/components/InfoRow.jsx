import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoRow extends Component {
    render() {
        const { data, extraClass } = this.props;

        return (
            <section className={`info-row dis-f ai-c jc-sb ${extraClass}`}>
                {Object.keys(data).map(key => (
                    <div
                        className="row-item"
                        key={key}
                    >
                        <span>
                            {data[key]}
                        </span>
                    </div>
                ))}
            </section>
        );
    }
}

InfoRow.propTypes = {
    data: PropTypes.object.isRequired,
    extraClass: PropTypes.string,
};

InfoRow.defaultProps = {
    extraClass: '',
};
export default InfoRow;
