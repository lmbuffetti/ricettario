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

class TermsOfBusiness extends Component {
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
                                        <li className="active">
                                            <Link to="/terms-of-business">
                                                    Terms of Business
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="our_principles"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Our Principles
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="the_type_of_advice"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            The advice we provide
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
                                                        to="how_we_are_paid"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How we are paid
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="client_classification"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Client Classification
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="how_we_act_for_you"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How we act for you
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="anti-money_laundering"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            AML and KYC requirements
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="client_money"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Client Money
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="due_care"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Due care and diligence
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="termination_rights"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Termination Rights
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="complaints"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Complaints
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="law"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Law
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="data_protection_statement"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Data Protection Statement
                                                    </AnchorLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/privacy-policy">
                                                    Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/complaints">
                                                    Complaints
                                            </Link>
                                        </li>
                                        <li>
                                            <div id="download_pdf">
                                                <a
                                                    href="/static/pdf/Octopus_Wealth_Terms_of_Business.pdf"
                                                    target="_blank"
                                                    className="alternative_button left_button"
                                                >
Download
                                                        as PDF
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            }
                        </Sticky>
                    </div>
                    <div className="col-8 textDescription">
                        <h1 className="mt-xlarge mb-large">Terms of Business</h1>
                        <div className="introText">
                            <p>
Octopus Wealth is a trading name of Carib Planning Limited which is authorised and
                                regulated in the UK by the Financial Conduct Authority. Our reference number is 778951
                                and you can find us on the FCA’s register at
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
                        </div>
                        <div id="our_principles">
                            <h3 className="mt-large mb-small">Our Principles</h3>
                            <p>We are committed to providing financial advice of the highest standard. Our business only succeeds when our clients do, and your interests are paramount to us. So we have designed our systems and procedures to put you first. In doing do, we will:</p>
                            <ul>
                                <li>be open, honest and transparent in all our dealings with you;</li>
                                <li>never place our interests above yours;</li>
                                <li>communicate clearly, promptly and without jargon.</li>
                            </ul>
                        </div>
                        <div id="the_type_of_advice">
                            <h3 className="mt-large mb-small">The advice we provide</h3>
                            <p>We offer advice to individuals, trustees and businesses, specifically designed around their individual circumstances. We will only provide a recommendation to you after we have fully assessed your goals and financial situation.</p>
                            <p>We provide advice on what the FCA classifies as a “restricted” basis. This means that we do not provide advice on all types of products and providers. The solutions we offer include access to the investment management approach of our own specialist in-house investment teams, which are based on selecting a combination of both externally and in-house managed funds and investments. If, during our analysis, we find that an in-house solution is not suitable for you, we will select a solution from a panel of preferred suppliers of services and providers of products, whose quality we constantly assess.</p>
                        </div>
                        <div id="investment_objectives_and_restrictions">
                            <h3 className="mt-large mb-small">Investment objectives and restrictions</h3>
                            <p>We will only provide advice or recommendations after we have assessed your needs and considered your financial objectives and attitude to any risks that may be involved. We will also take into account any restrictions that you wish to place on the type of products you would be willing to consider.</p>
                            <p>With very few exceptions, we will confirm to you, in a durable medium, the basis of our recommendations together with details of any special risks associated with the products recommended.</p>
                            <p>Full details of the products we recommend to you including, for example, the minimum duration of the product, information on your right to cancel or whether no right to cancel exists, and any other early termination rights and penalties, will be covered in the relevant product disclosure information you will receive before any contract is processed.</p>
                            <p>We may also, on occasion, advise on other financial products which are not regulated by the FCA under the Financial Services and Markets Act 2000. If and when this occurs you need to be aware that The Financial Services Compensation Scheme will not apply. We will advise you accordingly if we recommend any products not covered by the Financial Services Compensation Scheme.</p>
                            <p>Please note that any products we have arranged for you will only be kept under review as part of an agreed ongoing service which will include an agreed fee.</p>
                        </div>
                        <div id="how_we_are_paid">
                            <h3 className="mt-large mb-small">How we are paid</h3>
                            <p>
We charge fees directly to you for advice and assistance in implementing any
                                recommendation provided by Octopus Wealth only. A non-investment product provider (for
                                example mortgages or protection) may provide us with a form of commission for
                                introducing you to them. We will make it very clear what commission we may receive
                                before the transaction goes ahead.
                            </p>

                            <p>
Following the initial meeting we will confirm the next steps of our advice process and
                                provide an estimate of the fees payable. Given we act on your behalf as an intermediary
                                with a view to arranging an investment product, our fees are currently exempt from VAT.
                                For some services, where VAT is applicable, we will highlight this to you before any fee
                                is charged however Octopus Wealth will not benefit from this and it will be passed over
                                to HMRC.
                            </p>

                            <p>
Please refer to the
                                <a
                                    href="/our-service"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
“Our Services to
                                You”
                                </a>
                                {' '}
section which sets out our charges in more
                                detail.
                            </p>
                        </div>
                        <div id="client_classification">
                            <h3 className="mt-large mb-small">Client Classification</h3>
                            <p>
As a client of Octopus Wealth we will classify you as a ‘retail client’ for investment
                                and pension advice and as a ‘consumer’ for protection advice. This will provide you with
                                the maximum regulatory protections available to you. Should your classification change
                                in the future, we will advise you accordingly in writing and obtain your agreement
                                before proceeding with any financial planning advice.
                            </p>
                        </div>
                        <div id="how_we_act_for_you">
                            <h3 className="mt-large mb-small">How we act for you</h3>
                            <p>
Any advice we give you will normally be in a durable medium, but if given orally will be
                                recorded on your file. Where any recommendation we make, or transaction we undertake for
                                you, results in a right to cancel the policy under certain conditions, we will advise
                                you of these rights. We will also tell you if you do not have a right to cancel the
                                arrangement.
                            </p>
                            <p>
There may be occasions where we, or one of our customers, will have some form of interest
                                in business that we are transacting for you. If this happens, or we become aware that
                                our interests or those of one of our other customers conflict with your interests, we
                                will inform you in writing and obtain your consent before we carry out your
                                instructions. If we can continue to act for you, we will tell you how we will ensure
                                your interests are protected. In some circumstances, we may have to cease acting for
                                you, but will help you find advice from elsewhere if you want us to. Should you require
                                further information in relation to our conflicts of interest policy then please contact
                                us at the address shown.
                            </p>
                            <p>
When we arrange investments for you we will register these in your name unless otherwise
                                agreed in writing. Additionally, we will ensure you receive either a contract note,
                                documents of title, or certificates evidencing title. Where a number of documents
                                relating to a series of transactions are involved, the documents will normally be
                                retained until the series is completed.
                            </p>
                            <p>
In some cases we may be advising someone who has made a power of attorney (the donor),
                                and appointed someone else to act on their behalf (the attorney). In these situations,
                                we will seek to gather all relevant and necessary information from the attorney. Any
                                advice we provide will be done to support the needs and objectives of the donor.
                            </p>
                            <p>
The company and its representatives are not qualified to provide any legal advice and
                                will not provide any opinion as to whether a client should complain about any previous
                                advice received unless explicitly agreed.
                            </p>
                            <p>All communications, both verbal and in writing, will be in English.</p>
                        </div>
                        <div id="anti-money_laundering">
                            <h3 className="mt-large mb-small">Anti-Money Laundering and ‘Know Your Client’ requirements</h3>
                            <p>We may approach third parties (including credit reference agencies) to confirm your identity, the identity of anyone else providing or receiving monies on your behalf and, where required, the identity of connected parties. By becoming a client of Octopus Wealth you consent to us doing this. We may also need to seek additional information from you to verify your identity. The electronic verification will leave what is known as a soft footprint, which is in effect a search that does not affect your credit history.</p>
                        </div>
                        <div id="client_money">
                            <h3 className="mt-large mb-small">Client Money</h3>
                            <p>
Octopus Wealth is not permitted to handle client money other than in respect of general
                                insurance contracts and we cannot accept a cheque made out to us (unless it is in
                                respect of fees due to us).
                            </p>
                        </div>
                        <div id="due_care">
                            <h3 className="mt-large mb-small">Due care and diligence</h3>
                            <p>
We will exercise due care and diligence in conducting business with you. We are not,
                                however, liable for any loss you suffer as a result of acting on the advice we give,
                                including any fall in the value of your investments. Investments can go down in value as
                                well as up and you could get back less than you invest. Past performance is not a guide
                                to future performance.
                            </p>
                        </div>
                        <div id="termination_rights">
                            <h3 className="mt-large mb-small">Termination Rights</h3>
                            <p>
This Agreement will remain effective and in force until such time that you, or we, wish
                                to terminate the Agreement. Either party may terminate our authority to act on your
                                behalf with 30 days’ notice, and without further penalty. Notice of this termination
                                must be given in writing which can include email.
                            </p>

                            <p>
Any business currently being completed will be completed unless we receive your
                                instructions to the contrary. In this respect, you will be liable to pay to us our
                                costs, fees, charges and expenses relating to the work we have carried out (or will
                                carry out) in connection with our Agreement up to the date of termination. We will set
                                out such costs upon your request or upon receiving your notice to terminate our
                                Agreement.
                            </p>

                            <p>
Any fees outstanding at the date of termination will be due within four weeks of the
                                termination date. We will endeavour to collect these from your portfolio unless agreed
                                otherwise.
                            </p>
                        </div>
                        <div id="complaints">
                            <h3 className="mt-large mb-small">Complaints</h3>
                            <p>
We have a written policy for handling complaints, which details how we deal with each
                                complaint promptly and fairly. You can read about our complaints process
                                <Link
                                    to="/complaints"
                                >
here
                                </Link>
.
                            </p>
                        </div>
                        <div id="law">
                            <h3 className="mt-large mb-small">Law</h3>
                            <p>
These Terms of Business are governed and shall be construed in accordance with English
                                law and the parties shall submit to the exclusive jurisdiction of the English
                                Courts.
                            </p>

                            <p>
The terms of this Client Agreement (“Agreement”) will come into effect immediately. We
                                reserve the right to amend these terms and will give you notice in good time before
                                making material changes.
                            </p>
                        </div>
                        <div id="data_protection_statement">
                            <h3 className="mt-large mb-small">Data Protection Statement</h3>
                            <p>
Carib Planning Limited trading as Octopus Wealth is registered with the Information
                                Commissioner’s Office and you may view our registration on the Data Protection Public
                                Register at
                                <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>
.
                            </p>

                            <p>
The company ensures that all data will be held in compliance with current and future
                                legislation. You consent to us releasing information about you to regulated entities in
                                order to obtain any quotations/arrange investments or insurance at your request and/or
                                for audit purposes.
                            </p>

                            <p>
It may sometimes be necessary to transfer personal information overseas. When this is
                                needed information may be transferred to countries or territories around the world. Any
                                transfers made will be in full compliance with all aspects of the Data Protection
                                Act.
                            </p>

                            <p>
The company will keep you informed of financial products and services by email,
                                telephone, fax, post or other reasonable means. If you do not wish to receive marketing
                                material from the company, please let us know. For mortgage advice we will require your
                                specific written consent to be able to contact you by phone once the facility comes to
                                an end.
                            </p>

                            <p>
For your security, and training purposes, telephone calls to Octopus Wealth and meetings
                                with your adviser may be recorded. They may be used as evidence in the event of any
                                dispute with the company.
                            </p>

                            <p>
You agree to us sharing any information that we hold about you with a fraud reference
                                agency should it be required.
                            </p>

                            <p>
You can access the data held by Octopus Wealth at any time. A fee of £10 may be charged
                                to cover costs. The information held about you, on both hard copy and computer, will be
                                sent to you within 40 days of the initial request.
                            </p>

                            <p>
                                <b>
This is our standard agreement upon which we intend to rely. For your own benefit and
                                protection you should read these terms carefully. If you do not understand any point,
                                please ask for further information.
                                </b>
                            </p>
                        </div>

                        <p>
                            <small>Last updated: July, 2018</small>
                        </p>

                    </div>

                </StickyContainer>
            </div>
        );
    }
}

export default TermsOfBusiness;
