// eslint-disable-next-line jsx-a11y/alt-text
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line max-len
class BoxImgText extends Component {
    renderButton() {
        const {
            btnLink,
            btnText,
            done,
        } = this.props;
        if (done) {
            return (
                <Link to={btnLink} className="link-purple right-text">
                    Edit
                </Link>
            );
        }
        return (
            <Link to={btnLink} className="btn-border-purple">
                {btnText}
            </Link>
        );
    }

    renderTitle() {
        const {
            done,
            taskCompleted,
            title,
        } = this.props;
        if (done) {
            return (
                <h5>
                    {`${title} (${taskCompleted} added)`}
                </h5>
            );
        }
        return (
            <h5>
                {title}
            </h5>
        );
    }

    render() {
        const {
            done,
            icon,
            subtitle,
            title,
        } = this.props;

        return (
            <div className="button_img_text span-8">
                <div className={`icon_btn ${done ? 'done' : 'undone'}`}>
                    <img src={`/static/img/icons/${icon}`} alt={`Icons ${title}`} />
                </div>
                <div className="title_btn">
                    {this.renderTitle()}
                    <p>
                        {subtitle}
                    </p>
                </div>
                {this.renderButton()}
            </div>
        );
    }
}


BoxImgText.propTypes = {
    btnText: PropTypes.string,
    btnLink: PropTypes.string,
    done: PropTypes.bool,
    icon: PropTypes.string,
    subtitle: PropTypes.string,
    taskCompleted: PropTypes.number,
    title: PropTypes.string,
};

BoxImgText.defaultProps = {
    btnText: '',
    btnLink: '',
    done: false,
    icon: '',
    subtitle: '',
    taskCompleted: 0,
    title: '',
};

export default BoxImgText;
