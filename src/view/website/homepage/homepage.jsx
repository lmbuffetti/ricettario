/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: false}}] */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import isNaN from 'lodash/isNaN';
// IMAGE
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { ReloadPlan, saveClientName, saveData } from '../../../actions/WebappActions';
import PropTypes from 'prop-types';
import { saveFormHome } from '../../../actions/WebsiteActions';


const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: '',
            lastName1: '',
            email1: '',
            phone1: '',
            contactByEmail1: false,
            // contact_by_phone_1: false,
            // privacy_1: false,
            name2: '',
            lastName2: '',
            email2: '',
            phone2: '',
            contactByEmail2: false,
            // contact_by_phone_2: false,
            // privacy_2: false,
            messageSent1: false,
            messageSent2: false,
            errorName1: '',
            errorName2: '',
            errorLastname1: '',
            errorLastname2: '',
            errorEmail1: '',
            errorEmail2: '',
            errorPhone1: '',
            errorPhone2: '',
            errorPrivacy1: false,
            errorPrivacy2: false,
            messageSending1: false,
            messageSending2: false,
        };
        this.setStateForm = this.setStateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        scrollSpy.update();
        scroll.scrollTo(0);
    }

    componentDidUpdate() {
        const {
            actionWebsite: {
                type,
            },
        } = this.props;
        const {
            setStateForm,
        } = this;
        setStateForm(type);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    setStateForm($type) {
        const {
            messageSent1,
            messageSent2,
        } = this.state;
        if ($type === 'HOMEFORM1' && !messageSent1) {
            this.setState({
                messageSent1: true,
                messageSending1: false,
            });
        }
        if ($type === 'HOMEFORM2' && !messageSent2) {
            this.setState({
                messageSent2: true,
                messageSending2: false,
            });
        }
    }

    handleChange(e) {
        let name;
        let val;
        let type;
        const {
            refs,
        } = this;
        if (typeof e.name !== 'undefined') {
            name = e.name;
            val = e.value;
        } else if (typeof e.target !== 'undefined') {
            name = e.target.name;
            val = e.target.value;
            type = e.target.type;
        } else {
            name = Object.keys(refs)[0];
        }
        if (type === 'checkbox') {
            val = e.target.checked;
        }
        if (name === 'email_1' || name === 'email_2' || name === 'phone_1' || name === 'phone_2') {
            val = val.replace(/\s/g, '');
        }
        this.setState({
            [name]: val,
        });
    }

    save(form, e) {
        e.preventDefault();
        const { onSaveData } = this.props;
        const {
            name1, name2, lastName1, lastName2, phone1, phone2, email1, email2, contactByEmail1, contactByEmail2,
        } = this.state;
        const id = form === 'form_1' ? 1 : 2;
        const name = form === 'form_1' ? name1 : name2;
        const lastname = form === 'form_1' ? lastName1 : lastName2;
        const phone = form === 'form_1' ? phone1 : phone2;
        const email = form === 'form_1' ? email1 : email2;
        const contactByEmail = form === 'form_1' ? contactByEmail1 : contactByEmail2;
        let error = false;
        if (!name) {
            this.setState({ [`errorName${id}`]: 'This field is required' });
            error = true;
        } else {
            this.setState({ [`errorName${id}`]: '' });
        }

        if (!lastname) {
            this.setState({ [`errorLastname${id}`]: 'This field is required' });
            error = true;
        } else {
            this.setState({ [`errorLastname${id}`]: '' });
        }

        const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!email) {
            this.setState({ [`errorEmail${id}`]: 'This field is required' });
            error = true;
        } else if (!emailReg.test(email)) {
            this.setState({ [`errorEmail${id}`]: 'This is not a valid email' });
            error = true;
        } else {
            this.setState({ [`errorEmail${id}`]: '' });
        }

        if (!phone) {
            this.setState({ [`errorPhone${id}`]: 'This field is required' });
            error = true;
        } else if ((phone.charAt(0) === '+' && !isNaN(phone.substring(1))) || !isNaN(phone)) {
            this.setState({ [`errorPhone${id}`]: '' });
        } else {
            this.setState({ [`errorPhone${id}`]: 'This is not a valid number' });
            error = true;
        }
        if (!error) {
            this.setState({
                [`messageSending${id}`]: true,
            });
            const formData = {
                action: 'saveForm',
                name,
                lastName: lastname,
                phone,
                email,
                contactByEmail,
            };
            onSaveData(formData, id);
        }
    }

    render() {
        const {
            errorName1, errorName2, name1, name2, lastName1, lastName2, phone1, phone2, email1, email2, contactByEmail1, contactByEmail2, errorEmail1, errorEmail2, errorLastname1, errorLastname2, errorPhone1, errorPhone2, errorPrivacy1, errorPrivacy2, messageSending1, messageSending2, messageSent1, messageSent2,
        } = this.state;
        return (
            <div className="home">
                <StickyContainer className="wrapContent">

                    <div id="banner_landing">
                        <div className="container">
                            <div className="rowFlex">
                                <div className="col-md-7">
                                    <h1>Your future won’t plan itself</h1>
                                    <h4>
                                        <b>At Octopus Wealth, we provide financial advice to the entrepreneurial</b>
                                        We help clients who run businesses and busy lives — as founders, directors or
                                        partners — to plan the best possible future for themselves and their families.
                                    </h4>
                                </div>
                                <div className="col-md-5">
                                    <form id="get_started" className="get_started">
                                        <div id="wrap_form">
                                            <h6>
Want to find out more? Leave your details, and one of our advisers will
                                                be in touch to discuss the services we offer.
                                            </h6>
                                            <div>
                                                <input
                                                    name="name1"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    placeholder="First Name"
                                                    autoComplete="name"
                                                    value={name1}
                                                    className={errorName1 && 'error_input'}
                                                />
                                                <small className="error">{errorName1}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="lastName1"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    placeholder="Last Name"
                                                    value={lastName1}
                                                    autoComplete="last name"
                                                    className={errorLastname1 && 'error_input'}
                                                />
                                                <small className="error">{errorLastname1}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="phone1"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    autoComplete="tel-national"
                                                    placeholder="Phone number"
                                                    value={phone1}
                                                    className={errorPhone1 && 'error_input'}
                                                />
                                                <small className="error">{errorPhone1}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="email1"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    autoComplete="email"
                                                    placeholder="Email address"
                                                    value={email1}
                                                    className={errorEmail1 && 'error_input'}
                                                />
                                                <small className="error">{errorEmail1}</small>
                                            </div>
                                            <div className="checkbox">
                                                <div>
                                                    <input
                                                        onChange={this.handleChange}
                                                        type="checkbox"
                                                        id="contactByEmail1"
                                                        name="contactByEmail1"
                                                        value="Contact by email"
                                                        checked={contactByEmail1}
                                                    />
                                                    <label htmlFor="contactByEmail1">I&apos;m happy to hear about other Octopus Products</label>
                                                </div>
                                                <small className="error">{errorPrivacy1}</small>
                                            </div>
                                            <button
                                                className={messageSending1 ? 'azure_button btn in-progress' : 'azure_button btn'}
                                                onClick={this.save.bind(this, 'form_1')}
                                                disabled={messageSent1}
                                                type="button"
                                            >
                                                {
                                                    messageSent1
                                                        ? <span>Sent</span>
                                                        : (
                                                            <Fragment>
                                                                {messageSending1
                                                                    ? <span>Sending Message</span>
                                                                    : <span>Submit your details</span>
                                                                }
                                                            </Fragment>
                                                        )
                                                }
                                            </button>
                                            {
                                                messageSent1
                                                && (
                                                    <p className="sentMessage">
You can withdraw your consent for us to
                                                    contact you simply by
                                                    emailing us at
                                                        <a
                                                            href="mailto:team@octopuswealth.com"
                                                        >
team@octopuswealth.com
                                                        </a>
                                                    </p>
                                                )
                                            }
                                        </div>
                                        <p>
                                            How will your data be used and stored? Read our
                                            {' '}
                                            <a
                                                href="/privacy-policy"
                                                target="_blank"
                                            >
Privacy
                                            Policy
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row_alternate">
                            <div className="col_left">
                                <h2>We know financial planning can so easily fall down the list of priorities</h2>
                                <p>
But we also believe it’s too important to stay there. That’s where we come
                                    in.
                                </p>
                                <p>
Our advisers work to discover what matters most to you, and present you with a
                                    set of options for achieving your most important life goals.
                                </p>
                            </div>
                            <div className="col_right">
                                <h2>
We can help you achieve your life goals for the next
                                    <div
                                        className="rw-words rw-words-1"
                                    >
                                        <span>year</span>
                                        <span>decade</span>
                                        <span>generation</span>
                                        <span>year</span>
                                        <span>decade</span>
                                        <span>generation</span>
                                    </div>
                                </h2>
                                <p>
                                    Whether you’re thinking about diversifying your portfolio, putting your children
                                    through school, building your practice or exiting your business, we can help you
                                    plan the next step, and all the ones that follow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="banner_bottom">
                        <div className="container">
                            <div>
                                <h4>With Octopus Wealth you can expect</h4>
                                <ul className="white_check column_2">
                                    <li>
                                        <h5>An entrepreneurial adviser</h5>
                                        <p>Someone in tune with your needs and who never needs to be told twice</p>
                                    </li>
                                    <li>
                                        <h5>A dynamic plan</h5>
                                        <p>
One that’s visualised so you can track progress over time, and changes when
                                            you do
                                        </p>
                                    </li>
                                    <li>
                                        <h5>Transparency and value</h5>
                                        <p>Competitive rates and no hidden fees</p>
                                    </li>
                                    <li>
                                        <h5>To stay in control</h5>
                                        <p>We present the options; you make the decisions</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="rowFlex">
                                <div className="col-md-7">
                                    <h3>Get ahead of your future</h3>
                                    <p>
So if you’re ready to get ahead of the future, leave us your details and one of
                                        our advisers will be in touch to discuss our services with you.
                                    </p>
                                    <p>
Or if you prefer, give us a call
                                        <br />
                                        <b>+44 (0)20 7390 0222</b>
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <form id="get_started" className="get_started">
                                        <div id="wrap_form">
                                            <div>
                                                <input
                                                    name="name2"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    placeholder="First Name"
                                                    value={name2}
                                                    autoComplete="name"
                                                    className={errorName2 && 'error_input'}
                                                />
                                                <small className="error">{errorName2}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="lastName2"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    placeholder="Last Name"
                                                    value={lastName2}
                                                    autoComplete="last name"
                                                    className={errorLastname2 && 'error_input'}
                                                />
                                                <small className="error">{errorLastname2}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="phone_2"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    autoComplete="tel-national"
                                                    placeholder="Phone number"
                                                    value={phone2}
                                                    className={errorPhone2 && 'error_input'}
                                                />
                                                <small className="error">{errorPhone2}</small>
                                            </div>
                                            <div>
                                                <input
                                                    name="email_2"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    autoComplete="email"
                                                    placeholder="Email address"
                                                    value={email2}
                                                    className={errorEmail2 && 'error_input'}
                                                />
                                                <small className="error">{errorEmail2}</small>
                                            </div>
                                            <div className="checkbox">
                                                <div>
                                                    <input
                                                        onChange={this.handleChange}
                                                        type="checkbox"
                                                        id="contact_by_email_2"
                                                        name="contact_by_email_2"
                                                        value="Contact by email"
                                                        checked={contactByEmail2}
                                                    />
                                                    <label htmlFor="contact_by_email_2">I&apos;m happy to hear about other Octopus Products</label>
                                                </div>
                                                <small className="error">{errorPrivacy2}</small>
                                            </div>
                                            <button
                                                className={messageSending2 ? 'azure_button btn in-progress' : 'azure_button btn'}
                                                onClick={this.save.bind(this, 'form_2')}
                                                disabled={messageSent2}
                                                type="button"
                                            >
                                                {
                                                    messageSent2
                                                        ? <span>Sent</span>
                                                        : (
                                                            <Fragment>
                                                                {messageSending2
                                                                    ? <span>Sending Message</span>
                                                                    : <span>Submit your details</span>
                                                                }
                                                            </Fragment>
                                                        )
                                                }
                                            </button>
                                            {
                                                messageSent2
                                                && (
                                                    <p className="sentMessage">
You can withdraw your consent for us to
                                                    contact you simply by
                                                    emailing us at
                                                        <a
                                                            href="mailto:team@octopuswealth.com"
                                                        >
team@octopuswealth.com
                                                        </a>
                                                    </p>
                                                )
                                            }
                                        </div>
                                        <p>
                                            How will your data be used and stored? Read our
                                            {' '}
                                            <a
                                                href="/privacy-policy"
                                                target="_blank"
                                            >
Privacy
                                            Policy
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about_us_home">
                        <div className="container">
                            <h6>Who we are</h6>
                            <h2>The Octopus Group</h2>
                            <div className="col_text">
                                <p>
We’re part of the Octopus Group, which seeks to improve the lives of millions of
                                    people by transforming the industries we operate in.
                                </p>
                                <p>
At Octopus, we want to change the world of finance for the better, with easy-to-use
                                    products and services that help people to manage their money.
                                </p>
                                <p>
Our products don’t just help real people solve real financial problems, they also
                                    make a positive impact on the world around us: investing in innovative young
                                    companies, helping to create thousands of new jobs and supporting the shift towards
                                    renewable energy.
                                </p>
                            </div>
                            <a href="https://octopusgroup.com/" target="_blank" rel="noopener noreferrer">Visit Octopus Group →</a>
                        </div>
                    </div>
                </StickyContainer>
            </div>
        );
    }
}

homepage.propTypes = {
    actionWebsite: PropTypes.arrayOf(PropTypes.object),
    onSaveData: PropTypes.func.isRequired,
};

homepage.defaultProps = {
    actionWebsite: {},
};

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    onSaveData: (data, id) => dispatch(saveFormHome(data, id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(homepage));
