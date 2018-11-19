import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TitleHeader = ({ title }) => (
    <section className="cancel-save-header">
        <div className="main-block container dis-f jc-c ai-c p-r">
            <div className="title fw-n">
                {title}
            </div>
            <Link to="/survey/dashboard" className="p-a" style={{ right: '24px' }}>
                <img src="/static/img/close.svg" alt="close window" style={{ width: '16px' }} />
            </Link>
        </div>
        <section className="bottom-shadow" />
    </section>
);

TitleHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
