import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { URL_LOGOUT } from '../helpers/urls';
import navLink from '../config/nav';

class Footer extends Component {
    constructor(props) {
        super(props);

        const { menuFooter } = this.props;

        this.state = {
            NavLink: navLink[menuFooter] || [],
        };
    }

    renderUserBlock() {
        const { isAuthorized, user } = this.props;

        if (isAuthorized) {
            return (
                <Fragment>
                    {user}
                    <Link className="link help fz-sml mstart-1rem fw-n" to={URL_LOGOUT}>
                        Log out
                    </Link>
                </Fragment>
            );
        }
        return null;
    }

    render() {
        const { menuPosition, menuFooter } = this.props;
        const { NavLink } = this.state;

        const renderNavLink = NavLink.map((item, i) => (
            <li key={i.toString()}>
                <Link className="link help fz-sml mstart-1rem fw-n" to={item.path}>
                    {item.name}
                </Link>
            </li>
        ));

        return (
            <footer>
                <div className="container">
                    <div className="rowFlex">
                        <div className="col-md-3">
                            <a href="." id="logoTopMenu">
                                {
                                    (menuPosition !== 'scroll_header')
                                        ? (
                                            <img
                                                className="header-logo"
                                                src="/static/img/Octopus_Wealth.svg"
                                                alt="wealth logo"
                                            />
                                        )
                                        : (
                                            <img
                                                className="header-logo"
                                                src="/static/img/Octopus_Wealth_white.svg"
                                                alt="wealth logo"
                                            />
                                        )
                                }
                            </a>
                        </div>
                        <div className="col-md-9 footerInformation">
                            <p>
                                Octopus Wealth is a trading name of Carib Planning Limited of which is authorised and
                                regulated in the UK by the Financial Conduct Authority under 778951. Carib Planning
                                Limited is registered in England & Wales under No. 10739796 at 33 Holborn, London EC1N
                                2HT.
                            </p>
                        </div>
                    </div>
                </div>
                {
                    menuFooter
                    && (
                        <div className="manimenuFooter">
                            <div className="container">
                                <nav>
                                    <ul>
                                        {renderNavLink}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }
            </footer>
        );
    }
}

Footer.propTypes = {
    user: PropTypes.object,
    isAuthorized: PropTypes.bool.isRequired,
    menuFooter: PropTypes.string,
    menuPosition: PropTypes.string,
};

Footer.defaultProps = {
    user: null,
    menuFooter: null,
    menuPosition: null,
};


export default Footer;
