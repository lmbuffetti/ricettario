import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import navLink from '../config/nav';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classMenu: '',
        };
        this.renderSurveyLoggedInfo = this.renderSurveyLoggedInfo.bind(this);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scrolled.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrolled.bind(this));
        this.scrolled();
    }

    scrolled() {
        const d = document.documentElement;
        const b = document.body;
        const offset = { d: d.scrollTop, b: b.scrollTop };

        this.setState({
            classMenu: (offset.d > 0 || offset.b > 0) ? 'scrolled' : '',
        });
    }

    renderTitleHeader() {
        const {
            titleHeader,
        } = this.props;

        return (!isEmpty(titleHeader)
            ? (
                <h6>
                    {titleHeader}
                </h6>
            )
            : null);
    }

    renderNavLink() {
        const {
            menuHeader,
        } = this.props;

        const LinkList = navLink[menuHeader] || [];
        return LinkList.map((item, i) => (
            <li key={i.toString()}>
                <NavLink
                    className="link help fz-sml mstart-1rem fw-n"
                    to={item.path}
                >
                    {item.name}
                </NavLink>
            </li>
        ));
    }

    renderSurveyLoggedInfo() {
        const { headerSurvey, firstName, location } = this.props;
        if (headerSurvey) {
            return (
                <Fragment>
                    {location.pathname === '/survey/dashboard' ? (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <Link to="#" className="dis-f ai-c">
                            <p style={{ color: '#1B073A' }}>
                                {firstName}
                            </p>
                            <img
                                src="/static/img/icons/adviser-user.svg"
                                alt="close window"
                                className="ml-1rem"
                                style={{ width: '37px', borderRadius: '5px' }}
                            />
                        </Link>
                    ) : (
                        <Link to="/survey/dashboard" id="close">
                            <img src="/static/img/close.svg" alt="close window" style={{ width: '16px' }} />
                        </Link>
                    )}
                </Fragment>
            );
        }
        return null;
    }

    render() {
        const {
            menuPosition,
            headerClass,
        } = this.props;

        const {
            width,
            classMenu,
            openMenu,
        } = this.state;

        const menuClass = width < 767 ? 'menuMobile mainmenu' : 'mainmenu';
        const iconSrc = (menuPosition !== 'scroll_header' || classMenu)
            ? '/static/img/Octopus_Wealth.svg'
            : '/static/img/Octopus_Wealth_white.svg';

        return (
            <header id="navigation_header" className={`${menuPosition} ${classMenu}`}>
                <section className={`header container dis-f jc-sb ${headerClass}`}>
                    <div>
                        <a href="/" id="logoTopMenu">
                            <img
                                className="header-logo"
                                src={iconSrc}
                                alt="wealth logo"
                            />
                        </a>
                        {this.renderTitleHeader()}
                    </div>
                    <div className="dis-f header-top-text ai-c" />
                    <div className={openMenu ? `menuOpen ${menuClass}` : menuClass}>
                        <nav>
                            <ul>
                                {this.renderNavLink()}
                            </ul>
                        </nav>
                    </div>
                    {this.renderSurveyLoggedInfo()}
                </section>
            </header>
        );
    }
}

Header.propTypes = {
    menuHeader: PropTypes.string,
    headerClass: PropTypes.string,
    menuPosition: PropTypes.string,
    titleHeader: PropTypes.string,
    firstName: PropTypes.string,
    location: PropTypes.object,
    headerSurvey: PropTypes.bool,
};

Header.defaultProps = {
    titleHeader: null,
    headerClass: null,
    menuHeader: null,
    menuPosition: null,
    location: null,
    firstName: null,
    headerSurvey: false,
};

const mapStateToProps = (state) => {
    const user = get(state, 'plan.users.main.profile', null);

    return ({
        firstName: get(user, 'first_name', null),
    });
};

export default connect(mapStateToProps)(Header);
