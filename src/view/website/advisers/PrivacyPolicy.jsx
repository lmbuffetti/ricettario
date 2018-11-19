/* eslint-disable max-len */
import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        scroll.scrollTo(0);
        return (
            <div className="container">
                <StickyContainer className="wrapContent row">
                    <div className="col-4">
                        <Sticky id="stickyMenu" distanceFromTop="100px">
                            {
                                ({
                                    style,
                                }) => (
                                    <ul style={style} className="navMenuSidebar">
                                        <li>
                                            <Link to="/our-service">
                                                    Our Service To You
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-of-business">
                                                    Terms of Business
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/privacy-policy">
                                                    Privacy Policy
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="who_we_are"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Who we are
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="how_we_will_collect_information_from_you"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How we will collect information from you
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="investment_objectives_and_restrictions"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Investment objectives and restrictions
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="what_type_of_information_is_collected_and_why"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            What type of information is collected and why?
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="how_we_use_your_personal_information"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How we use your Personal Information
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="disclosure_of_your_information"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Disclosure of your information
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="storage_of_personal_information"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Storage of personal information
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="your_rights"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Your rights
                                                    </AnchorLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/complaints">
                                                    Complaints
                                            </Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </Sticky>
                    </div>
                    <div className="col-8 textDescription">
                        <h1 className="mt-xlarge mb-large">Privacy Policy</h1>
                        <div className="introText">
                            <p>
At Octopus Wealth we take your privacy seriously and will only use your Personal
                                Information to help us do our job:
                                <b>
providing the products and services that allow us
                                    to deliver the best-possible financial plan for your future.
                                </b>
                            </p>
                        </div>
                        <div id="who_we_are">
                            <h3 className="mt-large mb-small">Who we are</h3>
                            <p>
Carib Planning Limited (trading as Octopus Wealth) is authorised and regulated in the UK
                                by the Financial Conduct Authority. Our reference number is 778951 and you can find us
                                on the FCA’s register at
                                <a
                                    href="https://register.fca.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
https://register.fca.org.uk
                                </a>
.
                            </p>

                            <p>
We are a company registered in England & Wales (our company number is 10739796) and our
                                registered office is 33 Holborn, London EC1N 2HT.
                            </p>

                            <p>
We are also registered with the Information Commissioner’s Office and you may view our
                                registration on the Data Protection Public Register at
                                <a
                                    href="http://www.ico.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.ico.org.uk
                                </a>
.
                            </p>
                        </div>
                        <div id="how_we_will_collect_information_from_you">
                            <h3 className="mt-large mb-small">How we will collect information from you</h3>
                            <p>
We will ask you to provide some personal and financial information through our
                                questionnaires, which helps us understand your situation and develop a personalised plan
                                to meet your needs. We will continue to collect information for the same purposes when
                                you meet with an Octopus Wealth adviser or make contact with us generally, this includes
                                recording all our conversations with you.
                            </p>
                            <p>We may also collect information about you each time you visit our website.</p>
                            <p>
Finally, we may also receive information about you from other companies within the
                                Octopus Group (for example Octopus Energy or Octopus Investments) if you have agreed
                                with those companies that relevant personal data can be shared with us.
                            </p>
                        </div>
                        <div id="what_type_of_information_is_collected_and_why">
                            <h3 className="mt-large mb-small">What type of information is collected and why?</h3>
                            <p>
The information we collect (“Personal Information”), which helps us to build the best
                                financial plan for you, will include (but not be limited to):
                            </p>
                            <ul>
                                <li>your name;</li>
                                <li>postal address;</li>
                                <li>email address;</li>
                                <li>telephone numbers</li>
                                <li>family members, and;</li>
                                <li>
detailed information about your and your family’s finances (possibly including your
                                    bank account details).
                                </li>
                            </ul>

                            <p>
If we’re developing a plan for your family, it’s likely we will ask for the same
                                information about your family members. We will infer their consent if you then provide
                                this to us.
                            </p>

                            <p>
In order to comply with legislation such as money laundering regulations and the
                                Financial Services Act, we may also ask you to provide evidence of your identify,
                                perhaps by taking a copy of your passport, driving licence or proof of residence.
                            </p>

                            <p>
As mentioned above, we may also collect information about you each time you visit our
                                website. Such information may include:
                            </p>

                            <ul>
                                <li>
web usage information (e.g. IP address), your login information, browser type and
                                    version, time zone setting, operating system and platform; and
                                </li>
                                <li>
information about your visit, including the full Uniform Resource Locators (URLs)
                                    clickstream to, through and from
                                    <a
                                        href="https://octopusgroup.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
Octopusgroup.com
                                    </a>
                                    {' '}
(including
                                    date and time); time on
                                    page, page response times, download errors, length of visits to certain pages, page
                                    interaction information (such as scrolling, clicks and mouse-overs).
                                </li>
                            </ul>
                        </div>
                        <div id="how_we_use_your_personal_information">
                            <h3 className="mt-large mb-small">How we use your Personal Information</h3>
                            <p>
The information we collect will be used to help us do our job as financial advisers,
                                including:
                            </p>

                            <ul>
                                <li>
to provide you with the services, information and products that you have requested
                                    from us;
                                </li>
                                <li>to respond to any query that you may submit to us;</li>
                                <li>
to complete any transaction you are undertaking with us and that we are
                                    intermediating on your behalf;
                                </li>
                                <li>
to manage and operate your LifeLine service with us, including sending you
                                    information relating to your LifeLine service;
                                </li>
                                <li>to meet a legal or regulatory obligation;</li>
                                <li>to notify you about changes to our service.</li>
                            </ul>
                            <p>We may also use the information:</p>
                            <ul>
                                <li>
to provide you with information about other products or services we, or one of the
                                    Octopus Group of companies (in particular Octopus Energy or Octopus Investments)
                                    provide, which we think may be of interest to you.
                                    <b>
Please note, we will only do
                                        this if you choose to opt-in to receiving this information and you will be given
                                        this opportunity when you agree to our Terms of Business and Privacy Policy.
                                    </b>
                                </li>
                            </ul>
                        </div>
                        <div id="disclosure_of_your_information">
                            <h3 className="mt-large mb-small">Disclosure of your information</h3>
                            <p>
With your agreement, we may share your Personal Information with any member of our group,
                                which means our subsidiaries, our ultimate holding company and its subsidiaries, as
                                defined in section 1159 of the UK Companies Act 2006.
                            </p>

                            <p>
We may pass your information to our advisers, administration centres, third party service
                                providers, agents, subcontractors and other associated organisations for the purposes of
                                completing tasks and providing services to you on our behalf.
                            </p>

                            <p>These third parties may include:</p>

                            <ul>
                                <li>
Fund managers, insurers, insurance brokers, or credit brokers to enable us to obtain
                                    a quote for you or provide you with other related services.
                                </li>
                                <li>
Credit reference agencies and other companies for use in credit decisions and fraud
                                    prevention.
                                </li>
                            </ul>

                            <p>
When dealing with third-parties, we will disclose only the Personal Information they need
                                to deliver the service in question. We have a contract in place with all third-parties
                                requiring them to keep your information secure and prohibiting them from using it for
                                their own direct marketing purposes.
                            </p>

                            <p>
We also work closely with various third-party product and service providers to bring you
                                a range of high quality wealth management solutions. When you enquire about or invest in
                                one or more of these products or services, the relevant third-party provider will use
                                your details to carry out their obligations arising from any contracts you have entered
                                into with them. These third-party providers will share your information with us which we
                                will use in accordance with this Privacy Policy.
                            </p>

                            <p>
We may transfer your Personal Information to a third party in the event of a sale of
                                some, or all, of our business and assets or as part of any business restructuring or
                                reorganisation, or if we are under a duty to disclose or share your personal data in
                                order to comply with any legal obligation. However, in such circumstances we will always
                                take steps to ensure that your privacy rights continue to be protected.
                            </p>

                            <p>
We may also share some broader statistics and customer profiling information with third
                                parties and other Octopus companies, but this data is anonymised, and you would not be
                                identifiable. We will never rent or sell our users’ details to any other organisation or
                                individual.
                            </p>
                        </div>
                        <div id="storage_of_personal_information">
                            <h3 className="mt-large mb-small">Storage of personal information</h3>
                            <p>
The data that we collect from you may be transferred to, and stored at, a destination
                                outside of the European Economic Area (“EEA”). It may also be processed by staff
                                operating outside the EEA who work for us or one of our suppliers. By using our
                                services, you agree to this transfer, storing or processing. We will take all steps
                                reasonably necessary to ensure that your data is treated securely and in accordance with
                                this Privacy Policy.
                            </p>

                            <p>
We follow strict security procedures regarding the storage and usage of, and access to,
                                your Personal Information, designed to prevent any unauthorised party from obtaining
                                it.
                            </p>

                            <p>
We will keep your information stored on our systems for as long as it takes to provide
                                the services to you, and will be no longer than is necessary, is required by law, or
                                required by the Regulatory regime in which we operate. The third parties we engage to
                                provide services on our behalf will keep your data stored on their systems for as long
                                as is necessary to provide the services to you.
                            </p>
                        </div>
                        <div id="your_rights">
                            <h3 className="mt-large mb-medium">Your rights</h3>
                            <h5 className="mb-small">Opting out</h5>
                            <p>
Even if you have accepted the processing of your Personal Information for marketing
                                purposes (by ticking the relevant box), you retain the right to ask us to stop
                                processing your Personal Information for such purposes. You can exercise this right at
                                any time by contacting us at
                                <a
                                    href="mailto:team@octopuswealth.com"
                                >
team@octopuswealth.com
                                </a>
                                {' '}
or +44 (0)20 7390
                                0222.
                            </p>
                            <p>
Our website may, from time to time, contain links to and from the websites of advertisers
                                and affiliates. If you follow a link to any of these websites, please note that these
                                websites have their own privacy policies and that we do not accept any responsibility or
                                liability for these policies. Please check these policies before you submit any Personal
                                Information to these websites.
                            </p>
                            <h5 className="mt-medium mb-small">Requests for information</h5>
                            <p>
European Data Protection Legislation gives you the right to access information held about
                                you. You are entitled to know whether we or a third party on our behalf is processing
                                your Personal Information; what Personal Information we hold; details of the purposes
                                for the processing of your Personal Information; and details of any third party with
                                whom your Personal Information has been shared. You are entitled to receive the Personal
                                Information that you have provided to us in a structured, commonly used and
                                machine-readable format, and to transmit that data to another data controller.
                            </p>
                            <p>
Sometimes you may be asked to provide proof of identity before we show you your Personal
                                Information – that’s so we can prevent unauthorised access. Your rights to access,
                                rectify such information, object or cancel the information we hold about you can be
                                exercised at any time by contacting us at
                                <a
                                    href="mailto:team@octopuswealth.com"
                                >
team@octopuswealth.com
                                </a>
                                {' '}
or +44 (0)20 7390
                                0222.
                            </p>
                            <h5 className="mt-medium mb-small">Complaining about how we have used your information</h5>
                            <p>
If you wish to raise a complaint about how we have handled your Personal Information, you
                                can contact us at
                                <a href="mailto:team@octopuswealth.com">team@octopuswealth.com</a>
                                {' '}
or
                                +44 (0)20 7390 0222, and the matter will be investigated.
                            </p>
                            <p>
If you are not satisfied with our response or believe we are not processing your Personal
                                Information in accordance with the law you can complain to the Information
                                Commissioner’s Office (ICO) - details can be found here:
                                <a
                                    href="https://ico.org.uk/concerns"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
https://ico.org.uk/concerns
                                </a>
.
                            </p>
                        </div>
                        <div id="definitions">
                            <h3 className="mt-large mb-small">Definitions</h3>
                            <p>
For the purposes of this Privacy Policy, (“European Data Protection Legislation“) is
                                defined as, for the periods in which they are in force, the European Data Protection
                                Directive 95/46/EC, all laws giving effect or purporting to give effect to the European
                                Data Protection Directive 95/46/EC (such as the Data Protection Act 1998) or otherwise
                                relating to data protection (to the extent the same apply) and, from 25 May 2018, the
                                General Data Protection Regulation (Regulation (EU) 2016/670) (GDPR) or any equivalent
                                legislation amending or replacing the GDPR.
                            </p>
                        </div>

                        <p>
                            <small>Last updated: May, 2018</small>
                        </p>

                    </div>

                </StickyContainer>
            </div>
        );
    }
}

export default PrivacyPolicy;
