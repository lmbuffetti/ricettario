import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalInformationIcon extends Component {
    render() {
        const {
            icon,
            title,
            text,
            tooltipBtn,
            tooltipText,
        } = this.props;
        return (
            <section className="ModalInformationIcon">
                <img src={icon} alt="Icon Modal" />
                <h6>
                    {title}
                </h6>
                <p dangerouslySetInnerHTML={{ __html: text }} />
                {
                    tooltipText
                    && (
                        <p className="tooltip">
                            {tooltipBtn}
                            <span>
                                {tooltipText}
                            </span>
                        </p>
                    )
                }
            </section>
        );
    }
}


ModalInformationIcon.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    tooltipBtn: PropTypes.string,
    tooltipText: PropTypes.string,
};

ModalInformationIcon.defaultProps = {
    icon: '/static/img/icons/lightbulb.svg',
    title: '',
    text: '',
    tooltipBtn: '',
    tooltipText: '',
};

export default ModalInformationIcon;
