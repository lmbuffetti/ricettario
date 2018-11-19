import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoRowTable extends Component {
    render() {
        const { data, extraClass } = this.props;

        return (
            <section className={`info-row-table dis-f ai-c jc-sb ${extraClass}`}>
                <span>
                    {data.fieldName}
                </span>
                <span>
                    {data.fieldValue}
                </span>
            </section>
        );
    }
}

InfoRowTable.propTypes = {
    data: PropTypes.object.isRequired,
    extraClass: PropTypes.string,
};

InfoRowTable.defaultProps = {
    extraClass: '',
};

export default InfoRowTable;
