import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AddDashedButtonLink = ({
    name, addName, link, extraClasses,
}) => (
    <section className={extraClasses}>
        {name && (
            <div className="input-label">
                {name}
            </div>
        )}
        <Link className="ta-c td-n" to={link}>
            <div className="add-button fw-n">
                {addName}
            </div>
        </Link>
    </section>
);

AddDashedButtonLink.propTypes = {
    name: PropTypes.string,
    addName: PropTypes.string,
    link: PropTypes.string,
    extraClasses: PropTypes.string,
};
AddDashedButtonLink.defaultProps = {
    name: '',
    addName: '',
    link: '/',
    extraClasses: '',
};
