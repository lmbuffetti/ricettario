// eslint-disable-next-line jsx-a11y/alt-text
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class BoxUserText extends Component {
    render() {
        const {
            btnText,
            clientName,
            clientImage,
            linkTo,
            icon,
            subtitle,
            title,
            extraInformation,
        } = this.props;

        return (
            <Fragment>
                <div className="info-holder span-8">
                    <div className="icon_btn">
                        <img src={`/static/img/icons/${icon}`} alt={`Icons ${title}`} />
                    </div>
                    <div className="button_img_text">
                        <div className="title_btn title_user_btn">
                            <h5>
                                {title}
                            </h5>
                            <p>
                                {subtitle}
                            </p>
                        </div>
                        <div className="controls-holder">
                            <div className="image_box">
                                <p>
                                    <img
                                        src={`/static/img/icons/${clientImage}`}
                                        alt={`Icons ${clientName}`}
                                    />
                                    <span className="mstart-0-5rem">
                                        {clientName}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <Link to={linkTo} className="btn-border-purple add_new">
                            {btnText}
                        </Link>
                    </div>
                </div>
                {
                    extraInformation && (
                        <div className="extra-information">
                            <p className="extra-information-title">
                                Extra information
                            </p>
                            <p className="extra-information-text">
                                {extraInformation}
                            </p>
                        </div>
                    )
                }
            </Fragment>
        );
    }
}

BoxUserText.propTypes = {
    btnText: PropTypes.string,
    linkTo: PropTypes.string,
    clientImage: PropTypes.string,
    clientName: PropTypes.string,
    icon: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    extraInformation: PropTypes.string,
};

BoxUserText.defaultProps = {
    btnText: '',
    linkTo: '',
    clientImage: '',
    clientName: '',
    icon: '',
    subtitle: '',
    title: '',
    extraInformation: '',
};

export default BoxUserText;
