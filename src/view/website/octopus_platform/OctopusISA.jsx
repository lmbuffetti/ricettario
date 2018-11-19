import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const keyFacts = '/static/img/website/keyfacts-black-r-high.png';

const AnchorLink = Scroll.Link;
const scroll = Scroll.animateScroll;
const {
    Events,
    scrollSpy,
} = Scroll;

class OctopusISA extends Component {
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
                                            <Link to="/octopus-platform">
                                                    Octopus Platform T&Cs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-and-conditions">
                                                    Terms & Conditions
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/octopus-gia">
                                                    Octopus GIA Key Features
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/octopus-isa">
                                                    Octopus ISA Key Features
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="overview"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Overview
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="aims"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            AIMS
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="your_commitment"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Your Commitment
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="risks"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Risks
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="questions_and_answers"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Questions and Answer
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="contact_details"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Contact details
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="conflicts_of_interest"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Conflicts of Interest
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="about_the_terms_and_condition"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            About the T&Cs
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="regulatory_protection"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Regulatory Protection
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="compensation_scheme"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Compensation Scheme
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="complaint_procedures"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Complaint Procedures
                                                    </AnchorLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/octopus-sipp">
                                                    Octopus SIPP Key Features
                                            </Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </Sticky>
                    </div>
                    <div className="col-8 textDescription">
                        <h1 className="mt-xlarge mb-large">Octopus ISA Key Features</h1>
                        <img src={keyFacts} alt="Key Facts" />
                        <div id="key_features_of_octopus_platform">
                            <h3 className="mt-large mb-small">Key Features of the Octopus Platform Individual Savings Account</h3>
                            <p>
The Financial Conduct Authority is the independent financial services regulator. It
                                requires us to give you this important information to help you decide whether the
                                Octopus
                                Platform Individual Savings Account (ISA) is right for you. You should read this
                                document carefully so you understand what you are buying and then keep it safe for
                                future reference.
                            </p>
                        </div>
                        <div id="please_read_document_carefully">
                            <h3 className="mt-large mb-small">Please read this document carefully</h3>
                            <p>
Your Adviser has chosen to use the Octopus Platform to arrange and manage your
                                investments.
                            </p>

                            <p>
The purpose of this Key Features Document is to provide you with a clear understanding of
                                the Octopus Platform and the information you need to help you make a decision about the
                                ISA. To help ensure you make the right decision for your circumstances please read this
                                Key Features Document in conjunction with the
                                <a
                                    href="/terms-and-conditions"
                                    target="_blank"
                                >
Terms and
                                    Conditions
                                </a>
                                {' '}
and your personalised
                                Key Features Illustration. If you are unsure about any of the information provided, or
                                have any questions, please speak with your adviser who will be able to help you.

                            </p>

                        </div>
                        <div id="overview">
                            <h3 className="mt-large mb-small">Overview</h3>
                            <p>
The Octopus Platform makes life less complicated. It is a secure online account that
                                brings
                                your investments together in one location making it easier for you and your financial
                                adviser to review the performance of your investments.
                            </p>

                            <p>
Having all your investments in one convenient location enables you to see how your
                                portfolio is performing as a whole, as well as the performance of your individual
                                investments.
                            </p>

                            <p>
Carib Planning Limited has entered into an agreement with Hubwise Securities Limited
                                (Hubwise), for Hubwise to provide the Octopus Platform with trading, settlement, custody
                                and associated services, together with facilities for investing in funds and from a
                                range of different providers as well as a wide range of securities offered by the London
                                Stock Exchange (LSE) including Exchange Traded Funds (ETFs), Investment Trusts,
                                Equities, Bonds and Gilts.
                            </p>
                        </div>
                        <div id="aims">
                            <h3 className="mt-large mb-small">AIMS</h3>
                            <ul>
                                <li>To provide an accessible investment account.</li>
                                <li>To provide a wide range of investment options.</li>
                                <li>
To provide an opportunity for capital growth and income over the medium to long
                                    term.
                                </li>
                                <li>To provide access to your money through one-off or regular withdrawals.</li>
                            </ul>
                        </div>
                        <div id="your_commitment">
                            <h3 className="mt-large mb-small">Your Commitment</h3>
                            <p>
To invest a minimum initial lump sum payment of £500 or a minimum regular monthly
                                contribution of £100.
                            </p>
                            <p>
Whilst your ISA has no fixed Terms, you should view your ISA as a medium to long-term
                                investment, which means it should usually be held for at least five years.
                            </p>
                            <p>
You and your adviser need to choose the investments in which to invest your money. To
                                ensure that the ISA and your chosen investments continue to meet your requirements,
                                their performance should be monitored regularly. Your financial adviser will be able to
                                help with this.
                            </p>
                            <p>
You are obliged to tell your financial adviser about any changes to your contact details,
                                country of residence or citizenship as soon as possible after any change.
                            </p>
                        </div>
                        <div id="risks">
                            <h3 className="mt-large mb-small">Risks</h3>
                            <p>
Most types of investment involve some form of risk. An ISA gives you access to a wide
                                variety of investments however their value and the value of any income generated may
                                fall as well as rise. We cannot therefore guarantee you will get back the amount you
                                originally invested when you cash in your ISA. Your ISA may also be less than forecast
                                for the following reasons:
                            </p>
                            <h4 className="mt-medium mb-small">Choice of investments</h4>
                            <ul>
                                <li>
If the investments in your ISA do not match your attitude to risk they may not
                                    perform in line with your investment strategy.
                                </li>
                                <li>
If you don’t review the investments within your ISA regularly and monitor their
                                    performance, they may fail to meet your expectations.
                                </li>
                                <li>Past performance is not a guide to future performance.</li>
                                <li>Investments in international assets may be subject to exchange rate risk.</li>
                            </ul>
                            <h4 className="mt-medium mb-small">Charges and withdrawals</h4>
                            <ul>
                                <li>
The effect of charges may be higher than illustrated. If you switch to funds with
                                    higher charges than those originally illustrated, or if annual management costs
                                    increase in the funds you initially chose, the effect of charges will change.
                                </li>
                                <li>
If you increase the amount you regularly withdraw, the value of your ISA may be less
                                    than originally estimated.
                                </li>
                            </ul>
                            <h4 className="mt-medium mb-small">Transfers</h4>
                            <p>
You are able to transfer your existing ISA to the Octopus Platform. To complete this
                                transfer your existing investments will need to be sold and the proceeds from the sales
                                transferred as cash for you to invest. There is no loss of tax benefits when doing this
                                however please be aware that:
                            </p>
                            <ul>
                                <li>
You may lose out on income or investment growth while your money is not invested
                                    during the transfer period.
                                </li>
                                <li>
Initial charges may apply when new funds are purchased through the Octopus Platform.
                                </li>
                                <li>You will not have access to your ISA until the transfer is complete.</li>
                            </ul>
                            <h4 className="mt-medium mb-small">Taxation</h4>
                            <ul>
                                <li>
Tax rules could change in the future so investments held within the ISA may no
                                    longer be a tax efficient option.
                                </li>
                            </ul>
                            <h4 className="mt-medium mb-small">Cancelling your ISA</h4>
                            <ul>
                                <li>
If you decide to cancel your ISA within the first 14 days, you may get back less
                                    than you invested if its value falls in the meantime.
                                </li>
                            </ul>
                        </div>
                        <div id="questions_and_answer">
                            <h3 className="mt-large mb-small">Questions and Answers</h3>

                            <h4 className="mt-medium mb-small">Is the ISA right for me?</h4>
                            <p>
If you are looking for an investment account that offers flexibility and the ability to
                                shelter capital growth and income from tax, an ISA could be the right account for
                                you.
                            </p>
                            <p>
As your attitude to risk and financial objectives can change you can switch the
                                investments accordingly to reflect these.
                            </p>

                            <h4 className="mt-medium mb-small">Can the ISA be held jointly?</h4>
                            <p>An ISA can only be held by a single individual. It cannot be held jointly.</p>

                            <h4 className="mt-medium mb-small">Does the Octopus Platform offer a cash ISA?</h4>
                            <p>No, the Octopus Platform does not offer a cash ISA.</p>

                            <h4 className="mt-medium mb-small">What is the minimum investment?</h4>
                            <p>
                                Minimum Lump Sum: £500
                                <br />
                                Minimum Regular Contributions: £100 per month
                            </p>

                            <h4 className="mt-medium mb-small">What is the maximum investment?</h4>
                            <p>Maximum Lump Sum £20000</p>

                            <p>
Subject to HMRC rules, if you are over 18 and the surviving spouse or civil partner of a
                                deceased ISA holder who died on or after 3rd December 2014, you can pay in additional
                                subscriptions in cash on top of the annual subscription limit up to the value of the
                                deceased’s ISA at the date of their death, provided you have not transferred these
                                rights to another ISA Manager.
                            </p>

                            <h4 className="mt-medium mb-small">Does the Octopus Platform offer a Flexible ISA?</h4>
                            <p>
Yes. The Octopus Platform Flexible ISA is an ISA whose Terms and Conditions allow the
                                investor to replace cash they have withdrawn, without the replacement counting towards
                                their annual subscription limit. Where a cash withdrawal is made, any subsequent
                                subscriptions in the same tax year that would otherwise count towards the subscription
                                limit will do so only to the extent that previously withdrawn amounts have been fully
                                replaced. For full details see the Octopus Platform Terms and Conditions.
                            </p>

                            <h4 className="mt-medium mb-small">
If I open a stocks & shares ISA with Octopus Platform can I open another ISA
                                elsewhere?
                            </h4>
                            <p>
Yes, providing you do not subscribe/make payments more than the overall
                                subscription/payment limit in total to a cash ISA, a stocks & shares ISA, an innovative
                                finance ISA, and a Lifetime ISA in the same tax year. The tax year runs from 6th April
                                to 5th April the next year.
                            </p>

                            <h4 className="mt-medium mb-small">Can I transfer an existing ISA to the Octopus Platform?</h4>
                            <p>
Yes. You can transfer your existing Cash and/or Stocks & Shares ISA held with other
                                providers into the ISA. Octopus Platform does not charge you for transferring your ISA
                                across however your existing plan manager may apply exit charges (You will need to
                                contact your current product provider to find out what the exit charges may be).
                            </p>

                            <h4 className="mt-medium mb-small">How can I transfer my existing ISA to the Octopus Platform?</h4>
                            <p>
If you have an existing Stocks & Shares ISA, you can transfer to the ISA. Your existing
                                investments will need to be sold and the proceeds from the sales transferred as cash for
                                you to invest. There is no loss of tax benefits when doing this however please be aware
                                that:
                            </p>
                            <ul>
                                <li>
You may lose out on income or investment growth while your money is not invested
                                    during the transfer period.
                                </li>
                                <li>Initial charges may apply when new investments are purchased through the ISA.</li>
                                <li>You will not have access to your ISA until the cash transfer is complete.</li>
                            </ul>
                            <p>
Transfers from previous tax years will not count towards your current tax year
                                subscription limit. The transfer of a Cash ISA and/or a Stocks & Shares ISA into which
                                you have subscribed in the current tax year will reduce the amount you can contribute
                                into your ISA.
                            </p>

                            <p>
Before transferring you should seek advice from your financial adviser. If you decide
                                that our ISA is right for you and you would like to transfer your existing ISA across
                                you will need to complete the ISA transfer authority form and send it to us at our
                                contact address.
                            </p>

                            <h4 className="mt-medium mb-small">What is the Key Investor Information Document (KIID)?</h4>
                            <p>
A Key Investor Information Document (KIID) is a pre-sales document which replaces the
                                simplified prospectus. The KIID is produced by the fund manager, not the Octopus
                                Platform
                                and contains details of the fund in to which you are thinking of investing and
                                includes:
                            </p>
                            <ul>
                                <li>A short description of its investment objective and policy.</li>
                                <li>A presentation of past performance scenarios.</li>
                                <li>Costs and associated charges.</li>
                                <li>The risk/reward profile of the investment, including guidance and warnings.</li>
                            </ul>

                            <h4 className="mt-medium mb-small">How will you keep me informed about my ISA?</h4>
                            <p>
The Octopus Platform has been designed to make it easy for you and your financial adviser
                                to keep track of your investments and ensure you are on course to meet your objectives.
                                Your adviser will keep you up to date with information about your investments, their
                                performance and current value. Your adviser may also provide you with online access to
                                this information.
                            </p>
                            <p>In addition, The Octopus Platform will send you:</p>
                            <ul>
                                <li>
                                    <b>Contract notes:</b>
                                    {' '}
The Octopus Platform will provide contract notes to you every time
                                    investments are bought, sold or switched. Contract notes are not provided for
                                    regular investments.
                                </li>
                                <li>
                                    <b>Quarterly statements:</b>
                                    {' '}
The Octopus Platform will provide information on the value of
                                    your investments, the transactions that have taken place on your account since your
                                    last statement, any income or dividends received and cash withdrawn.
                                </li>
                                <li>
                                    <b>Corporate action notifications:</b>
                                    {' '}
The Octopus Platform will keep you informed of any
                                    corporate actions on investments that you hold within your ISA.
                                </li>
                            </ul>

                            <h4 className="mt-medium mb-small">Can I withdraw money from my ISA?</h4>
                            <p>
Yes, withdrawals from your ISA can be requested as a lump sum or regular payment at any
                                time and can be paid directly into your nominated bank account.
                            </p>

                            <h4 className="mt-medium mb-small">Can I hold cash?</h4>
                            <p>
Yes, the ISA includes a cash account. Please note that cash is not a qualifying
                                investment, and may only be held for the purpose of investing in qualifying
                                investments.
                            </p>

                            <h4 className="mt-medium mb-small">Is my money guaranteed?</h4>
                            <p>
No, the value of your investments in your ISA and any income from them can go down as
                                well as up and you may not get back the original amount invested. Your personalised
                                illustration gives examples of what you might get back and the projections shown are
                                based on a range of assumptions about future growth, none of which are guaranteed.
                            </p>

                            <h4 className="mt-medium mb-small">What happens to my Octopus Platform ISA if I die?</h4>
                            <p>
In the event of your death, your legal personal representatives must provide your adviser
                                with formal notice in the form of the original death certificate or a copy certified by
                                a Solicitor or another regulated professional person.
                            </p>
                            <p>
We will hold the existing investments in the Account but will not carry out any
                                transactions. From the date of your death, the ISA’s tax efficient status will end and
                                any dividends and interest received may be subject to tax and any capital gains may be
                                subject to capital gains tax.
                            </p>

                            <h4 className="mt-medium mb-small">Where can I find out about the charges?</h4>
                            <p>
Your personalised Illustration gives you details of the charges made for managing your
                                account and the investments, how they are taken and the effect they could have on the
                                value of your account. The Octopus Platform Terms and Conditions along with your
                                personalised Illustration, explain the charges and costs involved, how they are
                                calculated and who receives them.
                            </p>

                            <h4 className="mt-medium mb-small">Can I close or transfer my ISA?</h4>
                            <p>You can close your account at any time by contacting your financial adviser.</p>
                            <p>
For account closures, once your investments have been sold, we will pay the full amount,
                                minus any charges, directly into your bank account within five business days of when we
                                receive the proceeds. Typically, the whole process may take up to ten days from the time
                                we receive your instruction. If further income distributions are received after the
                                account has closed, these amounts will be paid to you once all distributions have been
                                received.
                            </p>
                            <p>You can transfer your ISA to another ISA Manager at any time.</p>

                            <h4 className="mt-medium mb-small">Can I change my mind?</h4>
                            <p>
When your application for the Octopus Platform ISA has been accepted, you will have 14
                                days
                                in which you can change your mind and cancel your application. You can do this by
                                contacting your financial adviser.
                            </p>
                            <p>
Provided you cancel within the 14-day period, you will have the option of transferring
                                the ISA back to your previous product provider or receiving the value of your ISA as
                                cash. There is no guarantee that your previous product provider will agree to do
                                this.
                            </p>
                            <p>
You may not receive the amount you originally contributed to your ISA if your investments
                                have fallen in value between the date your subscription was invested and the date we
                                receive your cancellation request. Additionally, if the value of your investments has
                                risen between these periods you will only receive back the amount you originally
                                contributed.
                            </p>
                            <p>
You will be unable to cancel your ISA after the 14-day period. After this time if you
                                wish to withdraw, charges may apply and any contributions made will count towards your
                                ISA allowance for the current tax year. The amount received will be less any pre-agreed
                                adviser fees.
                            </p>

                        </div>
                        <h3 className="mt-large mb-small">ADDITIONAL INFORMATION</h3>
                        <div id="contact_details">
                            <h3 className="mt-large mb-small">Contact details</h3>
                            <p>
If you need any further information about this product, please contact your financial
                                adviser in the first instance. If you wish to contact us directly, you can do so in the
                                following ways:
                            </p>
                            <ul>
                                <li>
                                    <h6 className="mt-small">In writing…</h6>
                                    Carib Planning Limited, 33 Holborn, London, EC1N 2HT
                                </li>
                                <li>
                                    <h6 className="mt-small">By telephone…</h6>
                                    0207 3900222
                                </li>
                            </ul>
                        </div>
                        <div id="conflicts_of_interest">
                            <h3 className="mt-large mb-small">Conflicts of Interest</h3>
                            <p>
There are situations where the activities and interest of a company may conflict or
                                compromise the best interests of its customers and clients. The Octopus Platform is
                                committed to making clear all our activities or situations that could give rise to a
                                conflict of interest. The company aims to minimise conflicts as far as possible. Where
                                conflicts cannot be eradicated, the Octopus Platform looks to manage them in the best
                                interests of its clients.
                            </p>
                        </div>
                        <div id="about_terms_and_conditions">
                            <h3 className="mt-large mb-small">About the Terms and Conditions</h3>
                            <p>
The Key Features Document provides a summary of the ISA. It does not include all the
                                definitions, exclusions or Terms and Conditions.
                            </p>
                            <p>
A copy of the Terms and Conditions will accompany this document. For more information
                                about the fund range, please contact your financial adviser.
                            </p>
                            <p>
We reserve the right to amend certain contractual terms, some without prior notice, as
                                explained in the
                                <a href="/terms-and-conditions" target="_blank">
Terms and
                                    Conditions
                                </a>
. If we do so we will let you know in writing. The
                                contract you are applying for is subject to the Laws of England and Wales. All our
                                literature and future communications to you will be in English. Should material changes
                                occur to any funds you are invested in, we will notify you as soon as possible in
                                writing.
                            </p>
                        </div>
                        <div id="regulatory_protection">
                            <h3 className="mt-large mb-small">Regulatory Protection</h3>
                            <p>
Under the FCA rules we classify all our investors as ‘retail clients’ so you benefit from
                                the highest level of regulatory protection.
                            </p>
                        </div>
                        <div id="compenstation_scheme">
                            <h3 className="mt-large mb-small">Compensation Scheme</h3>
                            <p>
If you meet the eligibility criteria for the Financial Services Compensation Scheme
                                (FSCS) you will be able to seek compensation from the FSCS should we become unable to
                                meet our liabilities to you. For investments, the level of compensation you can receive
                                from the scheme is as follows:
                            </p>
                            <ul>
                                <li>100% of the amount invested up to a maximum of £50,000, per fund manager.</li>
                            </ul>
                            <p>
Further information about compensation arrangements is available from the FSCS website
                                <a
                                    href="https://www.fcs.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.fscs.org.uk
                                </a>
                            </p>
                        </div>
                        <div id="complaint_procedures">
                            <h3 className="mt-large mb-small">Complaint Procedures</h3>
                            <p>
If your complaint relates to the advice you have been given you should write in the first
                                instance to your financial adviser. If it concerns the service you have received from
                                the Octopus Platform, please write to the compliance officer at our address, and we will
                                do everything we can to resolve the problem.
                            </p>

                            <p>If you are not entirely satisfied with the response you receive you can complain to:</p>

                            <p>
                                Financial Ombudsman Service
                                <br />
                                South Quay Plaza
                                <br />
                                183 Marsh Wall
                                <br />
                                London
                                <br />
                                E14 9SR
                            </p>

                            <p>Complaining to the Ombudsman will not affect your legal rights.</p>

                            <p>
                                <small>
The Octopus Platform is a trading name of Carib Planning Limited. Carib Planning
                                    Limited is authorised and regulated by the Financial Conduct Authority No. 778951.
                                    Registered Office: 33 Holborn, London, EC1N 2HT. Company No. 10739796. Hubwise
                                    Securities Limited are Authorised and Regulated by the Financial Conduct Authority
                                    (No. 502619). Registered Office: Waverley Court, Wiltell Road, Lichfield,
                                    Staffordshire, WS14 9ET. Registered in England and Wales. Company No. 060713714
                                </small>
                            </p>

                        </div>
                    </div>

                </StickyContainer>
            </div>
        );
    }
}

export default OctopusISA;
