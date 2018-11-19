// eslint-disable max-len
import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
// import Glossary from '../../../components/Glossary/glossary';
import Loadable from 'react-loadable';
import { Loading } from '../../../components/Loading';

const Glossary = Loadable({
    loader: () => import('../../../components/Glossary/glossary' /* webpackChunkName: "glossary" */),
    loading: Loading,
});
const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class TermsAndConditions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'terms',
        };
        this.setTab = this.setTab.bind(this);
        this.linkTemsCondition = this.linkTemsCondition.bind(this);
    }

    componentWillMount() {
        scroll.scrollTo(0);
    }

    componentDidMount() {
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    setTab(terms, e) {
        e.preventDefault();
        this.setState({
            tab: terms,
        });
    }

    linkTemsCondition(e) {
        e.preventDefault();
        scroll.scrollTo(0);
        this.setState({
            tab: 'terms',
        });
    }

    render() {
        const {
            tab,
        } = this.state;

        return (
            <div className="container">
                <StickyContainer className="wrapContent row">
                    <div className="col-4">
                        <Sticky id="stickyMenu" distanceFromTop="100px">
                            {
                                ({
                                    style,
                                    // the following are also available but unused in this example
                                    // isSticky,
                                    // wasSticky,
                                    // distanceFromTop,
                                    // distanceFromBottom,
                                    // calculatedHeight,
                                }) => (
                                    <ul style={style} className="navMenuSidebar">
                                        <li>
                                            <Link to="/octopus-platform">
                                                Octopus Platform T&Cs
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link
                                                onClick={this.linkTemsCondition}
                                                to="/terms-and-conditions"
                                            >
                                                Terms & Conditions
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="octopus_platform_role"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        The Octopus Platform Role
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="opening_octopus_platform_account"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Opening Octopus Platform Account
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="client_accounts"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Client Accounts
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="your_advicer"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Your Adviser
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="custody_of_investments"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Custody of Investments
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="dealing"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Dealing
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="payments_to_you"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Payments to You
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="documentation"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Documentation
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="statements"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Statements
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="withdrawals_and_closing_account"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Withdrawals and Closing Account
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="fees_charges_expenses"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Fees, Charges and Expenses
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="variation_termination_amendent"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Variation, Termination & Amendment
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="liability"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Liability
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="general"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        General
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="octopus_gia_customer_agreement"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Octopus GIA Customer Agreement
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="octopus_isa_and_jisa_customer_agreement"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Octopus ISA & JISA Customer Agreement
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="octopus_personal_pension_and_octopus"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Octopus Personal Pension and Octopus
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="sipp_customer_agreement"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        SIPP Customer Agreement
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="octopus_offshore_bond"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                        Octopus Offshore Bond
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        onClick={this.setTab.bind(this, 'glossary')}
                                                        className="no_btn"
                                                    >
                                                        Glossary
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link to="/octopus-gia">
                                                Octopus GIA Key Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/octopus-isa">
                                                Octopus ISA Key Features
                                            </Link>
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
                        <h1 className="mt-xlarge mb-large">Terms & Conditions</h1>
                        <div className="introText">
                            <p>
                                Carib Planning Limited provides this information to help you decide whether our Octopus
                                Platform is right for you. You should read this carefully so you understand the legally
                                binding contract you are entering into and then keep it safe for future reference.
                            </p>

                            <p>
                                <small>Last updated: February, 2018</small>
                            </p>

                        </div>

                        <div className="navTab">
                            <ul>
                                <li
                                    className={tab === 'terms' ? 'active' : ''}
                                >
                                    <button
                                        onClick={this.setTab.bind(this, 'terms')}
                                        type="button"
                                        className="no_btn"
                                    >
                                        Terms & Conditions
                                    </button>
                                </li>
                                <li
                                    className={tab === 'glossary' ? 'active' : ''}
                                >
                                    <button
                                        onClick={this.setTab.bind(this, 'glossary')}
                                        type="button"
                                        className="no_btn"
                                    >
                                        Glossary
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {
                            tab === 'glossary'
                                ? <Glossary />
                                : (
                                    <div>
                                        <div id="our_principles">
                                            <p>
                                                These T&Cs set out the legal agreement that applies to investments made
                                                through the Octopus Platform.
                                            </p>
                                        </div>
                                        <div id="octopus_platform_role">
                                            <h3 className="mt-large mb-small">1. The Octopus Platform Role</h3>
                                            <h4 className="mb-small">General</h4>
                                            <p>
                                                Your Adviser and/or DM has entered into an agreement with Hubwise under
                                                which
                                                it provides the Octopus Platform and associated services either, in the case
                                                of Hubwise, directly to you (where that is required in accordance with
                                                applicable laws and regulations) and/or to your Adviser (either acting on
                                                our own behalf or on your behalf as your appointed agent).
                                            </p>

                                            <p>
                                                Your Adviser and/or DM offers the benefits of the Octopus Platform and
                                                associated Platform Services to you who, by signing the Application, provide
                                                your Adviser and/or DM with all the necessary authorisations and consents to
                                                act on your behalf in relation to them in accordance with and subject to
                                                these T&Cs.
                                            </p>

                                            <p>
                                                The Octopus Platform can be used to invest in Securities and Funds through a
                                                GIA, ISA, JISA, Personal Pension, SIPP and Offshore Bond. Within each
                                                Account you can buy, sell and switch Securities and Funds and, where
                                                permitted under tax legislation, arrange to receive regular income from your
                                                investments.
                                            </p>

                                            <p>
                                                Your Adviser is responsible for all the advice and financial planning
                                                services that you request and a DM, where appointed, will manage
                                                investments. Hubwise has no responsibility to review your Portfolio and does
                                                not provide financial advice about the suitability of an account or the
                                                investments you hold within it.
                                            </p>

                                            <p>
                                                All communications relating to your Account(s) are supplied to your Adviser,
                                                DM and to you through online access, when sanctioned.
                                            </p>

                                            <p>Under these T&Cs, you agree that:</p>

                                            <ol>
                                                <li>
                                                    You appoint your Adviser as your agent and conditional only on your
                                                    Adviser obtaining and holding all relevant regulatory permissions and
                                                    authorities to do so, authorise your Adviser as your agent to appoint
                                                    and arrange for Hubwise to provide you with its services (including
                                                    custody and safekeeping services) as your Adviser may determine from
                                                    time to time including entering into any and all necessary agreements
                                                    for and on your behalf, agreeing and entering into subsequent amendments
                                                    to agreements for and on your behalf.
                                                </li>
                                            </ol>

                                            <p>
                                                Notwithstanding the above provision, you hereby authorise your Adviser as
                                                your agent to:
                                            </p>

                                            <ol>
                                                <li>
                                                    give instructions to Hubwise via the Octopus Platform on your behalf;
                                                </li>

                                                <li>
                                                    receive from Hubwise information, reports and notices which your Adviser
                                                    will pass on to you as appropriate and
                                                    applicable;
                                                </li>

                                                <li>
                                                    instruct Hubwise including in respect of the transfer of cash,
                                                    Securities or Funds to meet your settlement or other obligations and/or
                                                    to transfer your cash and Assets to another Custodian of your choice.
                                                </li>
                                            </ol>

                                            <p>
                                                Under these T&Cs you will be a Client of your Adviser and or DM and, as
                                                applicable, a client of Hubwise but will also become a user of the Octopus
                                                Platform.
                                            </p>

                                            <p>
                                                Your Adviser remains responsible for compliance and regulatory requirements
                                                regarding its own operations and the supervision of your Account. In
                                                particular, your Adviser remains responsible for approving the opening of
                                                Accounts, money laundering/identity checks, compliance, accepting and
                                                executing transactions in Securities and Funds (unless delegated to a DM),
                                                assessing the suitability of investments when it has a duty to do so,
                                                providing any investment advice and for our ongoing relationship with
                                                you.
                                            </p>

                                            <p>
                                                You should direct all enquiries regarding your Account to your Adviser and
                                                not Hubwise.
                                            </p>

                                            <p>
                                                For so long as you are a Client of your Adviser, Hubwise will not accept
                                                instructions from you directly, but may correspond with you in respect of
                                                any queries or complaints about its service.
                                            </p>

                                            <h4 className="mt-medium mb-small">Your Status</h4>

                                            <p>
                                                In respect of the services provided to you by your Adviser, DM and Hubwise
                                                (to the extent its services are applicable) you have
                                                been categorised as a Retail Client whereby you will be subject to extensive
                                                regulatory protection afforded by the FCA’s regulatory regime and all of the
                                                provisions of our T&Cs where applicable will apply to you for regulatory
                                                purposes.
                                            </p>

                                            <p>
                                                You agree, where you have opened an Account jointly with another person,
                                                that
                                                you and that other person will at all times be jointly and severally liable
                                                to us.
                                            </p>

                                            <p>
                                                Upon entering into these T&Cs, and at any other time during which these T&Cs
                                                are in force, we may ask you to provide us with such documents and other
                                                information as we may reasonably require in order to provide services under
                                                these T&Cs.
                                            </p>

                                            <p>
                                                You warrant that any information you have provided to us is complete and
                                                correct. You will notify us promptly if there is any material change to such
                                                information. Where you are acting in a representative capacity you warrant
                                                and represent that you are duly and fully authorised to enter into these
                                                T&Cs and any transactions pursuant to them.
                                            </p>

                                            <h4 className="mt-medium mb-small">Administration Address</h4>
                                            <p>
                                                Correspondence about the service should be sent to the Administration
                                                Address: 33 Holborn, London, EC1N 2HT
                                            </p>

                                            <h4 className="mt-medium mb-small">
Information required by the Octopus
                                                Platform
                                            </h4>

                                            <p>
                                                You must provide us with all the information requested in the various
                                                Account
                                                application forms in order to manage your Account(s). This will include
                                                details of your nationality and National Client Identifier, for UK citizens
                                                this will be your National Insurance Number). If you are a non-personal body
                                                such as a company, charity or Trust this will include your LEI., You should
                                                also notify us promptly in writing if you change your permanent residential
                                                address or wish to change your Nominated Bank Account.
                                            </p>

                                            <p>
                                                Your Adviser will be required to confirm to the Octopus Platform that the
                                                required money laundering/identity checks have been undertaken.
                                            </p>

                                            <p>
                                                Hubwise may require verification of your Bank details for certain
                                                transactions and may access or rely on, either directly or through an
                                                independent third-party organisation, electronic data sources for identity
                                                verification for prevention of money laundering and combating the financing
                                                of terrorism purposes.
                                            </p>

                                            <h4 className="mt-medium mb-small">Regulation</h4>

                                            <p>
                                                Carib Planning Limited is authorised and regulated by the FCA for investment
                                                business with FCA registration number 778951.
                                            </p>

                                            <p>
                                                Hubwise is authorised and regulated by the FCA with registration number
                                                502619.
                                            </p>

                                            <p>
                                                Details are available on the FCA website at
                                                <a
                                                    href="https://www.fca.org.uk/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    www.fca.org.uk/
                                                </a>
                                                {' '}
                                                register
                                                or by contacting the FCA on
                                                <b>0845 1116768</b>
                                                .
                                            </p>

                                            <p>Hubwise is also a member firm of the London Stock Exchange.</p>

                                        </div>
                                        <div id="opening_octopus_platform_account">
                                            <h3 className="mt-large mb-medium">2. Opening Octopus Platform Account</h3>
                                            <h4 className="mb-small">Application Forms</h4>
                                            <p>
                                                To open your Account complete and sign the relevant application form(s) and
                                                submit it together with payment, if applicable, through your Adviser.
                                            </p>

                                            <p>
                                                The Octopus Platform will inform your Adviser promptly if there are any
                                                problems with the Application or, alternatively, that the Application has
                                                been accepted.
                                            </p>

                                            <h4 className="mt-medium mb-small">Contributions</h4>

                                            <p>
                                                Contributions can be satisfied through bank transfer, direct debit, debit
                                                card, cheque, third party transfers and internal transfers between
                                                Accounts.
                                            </p>

                                            <p>
                                                Cheques must be made payable to Hubwise Securities Limited and must be drawn
                                                on an account in your name or a joint account on which you are one of the
                                                joint account holders.
                                            </p>

                                            <p>
                                                Contributions may also be provided from your Adviser’s Client Account where
                                                they inform you that is possible.
                                            </p>

                                            <p>
                                                In the case of contributions to the Hubwise Personal Pension and Hubwise
                                                SIPP, please follow the instructions on the TPPP application form. Likewise,
                                                in the case of contributions into the Hubwise Offshore Bond, please follow
                                                the instructions on that application form.
                                            </p>

                                            <p>
                                                Building Society Cheques or Banker’s Drafts must contain your own name on
                                                the
                                                front, or on the rear of the cheque accompanied by the Building Society’s
                                                official stamp and signature.
                                            </p>

                                            <p>
                                                The minimum Contribution permitted is £500 and the minimum Regular
                                                Contribution is £100.
                                            </p>

                                            <h4 className="mt-medium mb-small">Initial Investment</h4>

                                            <p>
                                                Once your contribution(s) has cleared through the banking system your
                                                initial
                                                investment(s) will be made in accordance with your Application. We will also
                                                set up any arrangements for Regular Contributions or Regular Withdrawals
                                                that you request in your Application. Where investment instructions are
                                                pending, monies will be held on deposit in one or more Client Accounts.
                                            </p>
                                        </div>
                                        <div id="client_accounts">
                                            <h3 className="mt-large mb-medium">3. Client Accounts</h3>
                                            <h4 className="mt-medium mb-small">Your Client Accounts</h4>
                                            <p>
                                                Hubwise keep all Monies that they hold for you in a Client Account with a UK
                                                Bank or Building Society or other authorised institution(s) they may choose
                                                from time to time. Client bank accounts are designated as trust accounts and
                                                are segregated from Hubwise’s own monies. They may include the balances of
                                                other clients but are operated and administered in accordance with Client
                                                Money Rules.
                                            </p>

                                            <p>
                                                The Octopus Platform undertakes its core business in pounds sterling and
                                                does
                                                not pay interest on non-sterling balances. When you open an Account for your
                                                investments, it also opens a Client Account which is maintained specifically
                                                for you.
                                            </p>

                                            <p>
                                                Contributions held pending investment within your Octopus ISA or JISA will
                                                be
                                                in a Cash Reserve Account. Octopus Personal Pension and Octopus SIPP
                                                deposits
                                                will be held in a Scheme Bank Account.
                                            </p>

                                            <p>
                                                Some fund managers will only accept fund purchases or sales to the nearest
                                                share. In such circumstances, there may be small residual amounts of cash
                                                which will be retained within the relevant Client Account.
                                            </p>

                                            <p>
                                                You are required to hold 12 months’ worth of fees and where you elect to
                                                take
                                                withdrawals, 6 months’ worth of withdrawals in cash, to meet charges,
                                                Adviser remuneration and withdrawals.
                                            </p>

                                            <p>
                                                Charges will be applied to the account in which the Assets generated the
                                                charge except that charges relating to Assets held within the Octopus ISA &
                                                JISA or Pension Product may be applied to the Octopus GIA providing an
                                                Octopus
                                                GIA exists and has sufficient cash to cover the charges.
                                            </p>

                                            <h4 className="mt-medium mb-small">Interest</h4>
                                            <p>
                                                Interest is paid on cash held in the Client Account, Cash Reserve Account
                                                and
                                                Scheme Bank Account and will be credited at rates received by Hubwise,
                                                calculated daily and applied half yearly in June and December.
                                            </p>

                                            <p>
                                                In order to safeguard your cash under the FSCS, deposits may be held in
                                                multiple Bank Accounts in which circumstances you will receive a blended
                                                rate of interest. Details are available from your Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Taxation</h4>
                                            <p>
                                                Under the new personal savings allowance (PSA) basic-rate taxpayers can earn
                                                £1,000 interest without paying tax on it and higher rate taxpayer £500. Tax
                                                treatment will depend on your individual circumstances and may change from
                                                time to time.
                                            </p>

                                            <p>
                                                Interest received on the Scheme Bank Account is not normally taxable.
                                                Interest received on the Cash Reserve Account is tax free. All interest
                                                payments will be detailed on your annual consolidated tax certificate.
                                            </p>

                                            <h4 className="mt-medium mb-small">Foreign Dividends</h4>
                                            <p>
                                                We will not automatically reclaim tax on foreign dividends received on
                                                investments held with us. Please contact your Adviser if you think a tax
                                                reclaim may be possible and they will endeavor to assist you with your
                                                claim. Dividends received will be credited to your Account in Sterling.
                                            </p>

                                            <h4 className="mt-medium mb-small">Nominated Bank Account</h4>
                                            <p>
                                                Your Nominated Bank Account is a UK Bank or Building Society Account of
                                                which
                                                you are a named holder and which you specify. Your Adviser can verify that
                                                the account belongs to you and provide confirmation to the Octopus Platform.
                                                You can then make payments to and receive payments from your account on the
                                                Octopus Platform.
                                            </p>

                                            <p>
                                                You may only have one Nominated Bank Account with the Octopus Platform at
                                                any
                                                given time.
                                            </p>

                                            <p>
                                                If paying monies into the Client Account from your Nominated Bank Account,
                                                you must quote your Client Reference. Your Nominated Bank Account can also
                                                be used to receive income from your investments.
                                            </p>

                                            <p>
                                                Once your Nominated Bank Account has been verified, it can be used to
                                                transfer monies to and from your Client Account(s). Transfer instruction
                                                from your Adviser will normally be processed within one Business Day of
                                                receipt.
                                            </p>

                                            <p>
                                                If you have set up Regular Contributions by direct debit, the direct debit
                                                must be set up to go out of your Nominated Bank Account.
                                            </p>

                                            <p>
                                                You can instruct your Adviser in writing at any time to change your Bank
                                                Account. Upon receipt of new Bank or Building Society Account details, we
                                                will update our records and replace your Nominated Bank Account. Subject to
                                                completing any necessary checks, we will make this change within five
                                                Business Days of receipt of your Adviser’s written instruction. You will be
                                                notified when your instructions have been accepted.
                                            </p>

                                            <h4 className="mt-medium mb-small">Protection of cash</h4>

                                            <p>
                                                Hubwise maintains its Client Accounts with a range of selected leading Banks
                                                (Approved Banks). For more information on the Banks currently selected by
                                                Hubwise please contact your Adviser.
                                            </p>

                                            <p>
                                                If one of those Banks fails or becomes insolvent you may not be able to
                                                recover all the monies deposited in your Client Account(s) that they
                                                maintain for you. However, you may be entitled to claim compensation under
                                                the FSCS up to £85,000 of any loss. The level of compensation will be
                                                reduced if you already hold an account with the Bank.
                                            </p>

                                            <h4 className="mt-medium mb-small">Dormant balances</h4>
                                            <p>
                                                If there have been no transactions in an Account that we maintain for you,
                                                for a period of at least six years (other than routine charges, interest and
                                                similar items), we may write to your Adviser and you, at your last known
                                                address, informing you of our intention to transfer these funds from the
                                                Octopus Platform. You will have 28 days to make a claim for the monies held
                                                on
                                                your behalf, after which they will lose the protection of being held in a
                                                Client Account.
                                            </p>

                                            <p>
                                                However, we will still pay what is due to you if you subsequently claim
                                                payment.
                                            </p>
                                        </div>
                                        <div id="your_advicer">
                                            <h3 className="mt-large mb-medium">4. Your Adviser</h3>
                                            <h4 className="mt-medium mb-small">Your Adviser’s responsibilities</h4>
                                            <p>
                                                As part of your Application to set up an Account with the Octopus Platform
                                                you
                                                appoint an Adviser with authority to deal with the Octopus Platform on your
                                                behalf. In order to use the full facilities of the Octopus Platform, you
                                                need
                                                to appoint an Adviser to represent you.
                                            </p>

                                            <h4 className="mt-medium mb-small">Reliance on your Adviser and DM</h4>
                                            <p>
                                                We are entitled to rely on the accuracy of and act on any instruction or
                                                information given to us by your Adviser and/or DM on your behalf, or which
                                                we reasonably believe has been given in this way. You authorise us to give
                                                your Adviser and DM information about you and your Account from time to
                                                time.
                                            </p>

                                            <p>
                                                We reserve the right to close your Account if you cease to be represented by
                                                an Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Change of Adviser notification</h4>
                                            <p>
                                                In the event that you appoint a new Adviser, you should provide your
                                                existing
                                                Adviser with:
                                            </p>
                                            <ol>
                                                <li>
                                                    written confirmation, including your Client Reference or, failing that,
                                                    clear details to identify yourself and your Account(s) with the Octopus
                                                    Platform;
                                                </li>
                                                <li>
                                                    a request that no further instructions be given on your Octopus Platform
                                                    Account(s); and
                                                </li>
                                                <li>
                                                    where an Octopus Platform Account is held in joint names, a change of
                                                    Adviser notification must be signed by all Joint Holders.
                                                </li>
                                            </ol>
                                            <p>
                                                Having received notification from your Adviser, your Octopus Platform
                                                Account(s) will be frozen pending closure and transfer instructions from
                                                your new Adviser.
                                            </p>

                                            <p>
                                                When a change of DM occurs, a similar process should be adopted but your
                                                Octopus Platform Account(s) will not be frozen.
                                            </p>

                                            <p>
                                                If after a period of three months a new Adviser has not been appointed you
                                                may instruct us to sell the Portfolio and remit the proceeds to your
                                                Nominated Bank Account.
                                            </p>

                                            <p>
                                                If we receive no instructions from you we reserve the right to sell the
                                                Portfolio and remit the proceeds to your Nominated Bank Account.
                                            </p>
                                        </div>
                                        <div id="custody_of_investments">
                                            <h3 className="mt-large mb-medium">5. Custody of Investments</h3>
                                            <h4 className="mt-medium mb-small">Safe Custody</h4>
                                            <p>
                                                Hubwise are responsible for the safe custody of all Assets held in your
                                                Account. Your investments are registered in the name of a Nominee company,
                                                which will normally be Hubwise’s wholly owned Subsidiary, Hubwise Nominees
                                                Limited, or occasionally another Nominee Company, as may be required for
                                                certain customers and certain asset classes, selected in accordance with FCA
                                                rules.
                                            </p>

                                            <p>
                                                Hubwise Nominees Limited is a non-trading company set up to hold investments
                                                on behalf of Retail Clients.
                                            </p>

                                            <p>
                                                Hubwise is responsible and liable for its Nominee to the same extent as for
                                                its own acts, including for the avoidance of doubt, losses arising from
                                                fraud, willful default or negligence. Your investments will be registered in
                                                the same name as those of other clients (pooled together with other client
                                                investments).
                                            </p>

                                            <p>
                                                This means that investments will not necessarily be immediately identifiable
                                                by way of separate certificates, physical documents or equivalent electronic
                                                entries on the register. In the event of an irreconcilable shortfall
                                                following the default of any Nominee responsible for pooled investments, you
                                                may not receive your full entitlement and may share in that shortfall pro
                                                rata.
                                            </p>

                                            <p>
                                                Hubwise has insurance in place to provide further protection to the Assets
                                                held in its Nominee, details of which are available from your Adviser.
                                            </p>

                                            <p>
                                                The FSCS also provides compensation of up to £50,000 per investor for
                                                eligible claimants in respect of UK Securities and Funds held in
                                                custody.
                                            </p>

                                            <p>
                                                Hubwise may be required to give details (including your email address) and
                                                details of your shareholding to Companies House, the Registrar or Fund
                                                administrator. Investments will not be lent to a third party and they will
                                                not borrow money against them.
                                            </p>

                                            <h4 className="mt-medium mb-small">Beneficial ownership</h4>
                                            <p>
                                                You are and remain the beneficial owner of the Assets in your Account. Your
                                                Assets will be held on your behalf as owner, but you must not use them as
                                                security for a loan. You may not dispose of or transfer an interest in any
                                                Asset while it is held in your Account and you may not create (or have
                                                outstanding) any charge or security on or over any such Asset.
                                            </p>

                                            <p>
                                                In respect of the Octopus Personal Pension and Octopus SIPP account the
                                                beneficial owner of the Assets will be the TPPP. Likewise, with the Hubwise
                                                Offshore Bond, the beneficial owner of the Assets will be the Offshore Bond
                                                provider.
                                            </p>
                                        </div>
                                        <div id="dealing">
                                            <h3 className="mt-large mb-medium">6. Dealing</h3>
                                            <h4 className="mt-medium mb-small">
Reviewing and/or changing your
                                                Investments
                                            </h4>
                                            <p>
                                                At any time when you wish to buy, sell or switch investments in your Account
                                                or change the existing arrangements that apply to your Account, you should
                                                instruct your Adviser who will make the necessary arrangements through the
                                                Octopus Platform.
                                            </p>

                                            <p>
                                                When a DM is appointed it will undertake transactions through the Octopus
                                                Platform in line with your mandate.
                                            </p>

                                            <h4 className="mt-medium mb-small">Client Account</h4>
                                            <p>
                                                When we receive buy instructions from your Adviser or DM we will check
                                                whether there are sufficient monies in the account(s) (i.e. sufficient
                                                Available Balance) and that the investment is to be held in the same name or
                                                names as the Account holder(s).
                                            </p>

                                            <p>
                                                If the amount available is not sufficient or the holders are not the same,
                                                we
                                                will not process the instruction and will notify your Adviser or DM
                                                accordingly.
                                            </p>
                                            <h4 className="mt-medium mb-small">Payment priority and ring-fencing</h4>
                                            <p>
                                                If you have Adviser and DM charges or Regular Withdrawals set up to go out
                                                of
                                                your Client Account, Cash Reserve or Scheme Bank Account, certain monies
                                                will be ‘ring-fenced’ to pay for them. Any ring-fenced monies will reduce
                                                your Available Balance, so that you will not be able to carry out
                                                transactions using the ring-fenced sums.
                                            </p>

                                            <p>
                                                For the Client Account and Cash Reserve Account we will use the Available
                                                Balance to meet payments in the following order:
                                            </p>
                                            <ol>
                                                <li>Platform fees;</li>
                                                <li>Adviser and DM charges; and</li>
                                                <li>Regular Withdrawals.</li>
                                            </ol>
                                            <p>
                                                For the Scheme Bank Account, we will use the Available Balance to meet
                                                payments in the following order:
                                            </p>
                                            <ol>
                                                <li>Product charges;</li>
                                                <li>Platform fees;</li>
                                                <li>Adviser and DM charges; and</li>
                                                <li>Retirement drawdown.</li>
                                            </ol>
                                            <p>
                                                Scheme Bank Account, money can be ring-fenced to meet the retirement
                                                drawdown
                                                you have arranged.
                                            </p>

                                            <p>
                                                However, during working hours on a Business Day, any money received into
                                                your
                                                Client Account, Cash Reserve or Scheme Bank Account which increases the
                                                Available Balance sufficiently to pay for purchases will be used for that
                                                purpose before any other type of transaction. Octopus Platform will notify
                                                your Adviser and or DM if insufficient funds are available to meet these
                                                requirements as Octopus Platform reserve the right to encash Assets to meet
                                                charges.
                                            </p>

                                            <p>
                                                Your Adviser will seek instructions from you or your DM will raise the
                                                necessary funds on a bespoke basis. If no instructions are received, in the
                                                first instance funds will be transferred from income where available and/or
                                                the money will be raised from the Portfolio’s Investments on a pro rata
                                                basis.
                                            </p>
                                            <h4 className="mt-medium mb-small">Regular Contributions</h4>
                                            <p>
                                                You can give instructions at any time to start regular monthly contributions
                                                into your Octopus GIA, Octopus ISA & JISA, Octopus Personal Pension and
                                                Octopus SIPP
                                                or to change an existing arrangement for Regular Contributions subject to
                                                specific product constraints. Please refer to your Adviser for Regular
                                                Contributions into your Hubwise Offshore Bond.
                                            </p>

                                            <p>
                                                Once your Adviser has verified that the Bank or Building Society Account you
                                                wish to make monthly contributions from belongs to you, then your first
                                                monthly contribution can be made by direct debit. Regular Contributions set
                                                up online must be paid for by direct debit from your Nominated Bank
                                                Account.
                                            </p>

                                            <p>
                                                When making a Regular Contribution into Octopus GIAs and Octopus ISAs and
                                                JISAs,
                                                Direct Debit instructions must be received 10 working days prior to the next
                                                available collection date, the first direct debit collection will be made on
                                                or just after the 18th calendar day of that month or the following month if
                                                the instruction is not received in time.
                                            </p>

                                            <p>
                                                All future Regular Contributions will be taken on the 18th calendar day of
                                                that month or the next working day thereafter. However, if you want to start
                                                your Regular Contributions from a later month you will need to inform us in
                                                writing accordingly.
                                            </p>

                                            <p>
                                                Amendments to Regular Contributions for Octopus GIAs and Octopus GIAs and
                                                JISAs
                                                must be received by us five Business Days before the 18th calendar day of
                                                the month if you wish them to take effect that month.
                                            </p>

                                            <p>
                                                Regular Contributions into a product linked to a Model Portfolio can only be
                                                set up through your Adviser. You can only amend the amount paid into a Model
                                                Portfolio.
                                            </p>

                                            <p>
                                                Monies to fund Regular Contributions into the Octopus Personal Pension and
                                                Octopus SIPP will be taken from the Bank account linked to your Pension
                                                Product on the 1st or 14th calendar day of each month. Please refer to the
                                                timing from your TPPP. For Regular Contributions into Pension Products, you
                                                can make amendments with your Adviser of the percentage split between
                                                Securities and Funds (unless the product is linked to a Model
                                                Portfolio).
                                            </p>

                                            <p>
                                                If you wish to change the amount of your Regular Contribution into your
                                                Pension Product, you must contact your Adviser.
                                            </p>

                                            <p>
                                                For Regular Contributions into the Pension Products, please see appropriate
                                                sections of the TPPP’s T&C’s.
                                            </p>

                                            <h4 className="mt-medium mb-small">How your money is invested</h4>
                                            <p>
                                                When you instruct your Adviser to buy, switch or sell investments, or your
                                                DM
                                                deals on the Octopus Platform on your behalf, a corresponding deal with the
                                                Regulated Market and/or fund manager of the relevant Fund(s) will be placed
                                                acting on your instructions. Buy orders will only be placed if sufficient
                                                cleared cash is available in your Client Account(s).
                                            </p>

                                            <p>
                                                Units in the chosen Funds are bought, sold and switched directly through the
                                                fund manager through a process of “aggregating orders” (adding up all
                                                individual purchase instructions and all individual sale instructions to
                                                come up with a total purchase or sale with that fund manager).
                                            </p>

                                            <p>
                                                The fund manager sets Unit prices at a specific Valuation Pricing Time each
                                                Business Day (although some Funds are priced weekly). Fund managers price
                                                Units after the sale and purchase orders of the day have been received and
                                                the Funds have been re-valued (forward pricing), so you will not know in
                                                advance what price you will receive.
                                            </p>

                                            <p>
                                                To be able to buy or sell at the price set at the Valuation Pricing Time,
                                                orders must be placed on the Octopus Platform by a specified ‘Dealing
                                                Cut-Off
                                                Time’.
                                            </p>

                                            <p>
                                                All orders received by 10.00 a.m. will be executed on the date of receipt or
                                                the next Valuation Pricing Time.
                                            </p>

                                            <p>
                                                Fund deals are usually processed in full and aggregated for the first
                                                Valuation Pricing Time following receipt of your instruction and payment
                                                (see (a) below), and all deals for that Valuation Pricing Time are met by
                                                the fund manager. We will not split deals between Valuation Pricing Times
                                                (splitting could mean you receive two different prices for parts of the same
                                                order or, in an aggregated deal, some investors could get one price and
                                                others, another price), except in exceptional circumstances dictated by the
                                                Fund, for example, if the Fund is suspended. In these cases, we ensure our
                                                records of your instructions match the fund managers’ records and that your
                                                instruction is fairly processed.
                                            </p>

                                            <p>
                                                In all circumstances, we process instructions in the order in which we
                                                receive them. It is possible, in theory, for our process of aggregating
                                                deals to act to your disadvantage.
                                            </p>

                                            <p>
                                                However, in practice, we always make sure that you are not disadvantaged,
                                                and
                                                will place you in the position you would have been in, if the
                                                disadvantageous process had not taken place.
                                            </p>

                                            <ol>
                                                <li>
                                                    The Octopus Platform’s normal business practice is to buy/ sell Units in
                                                    Funds at the Valuation Pricing Time following receipt of your
                                                    instruction and payment. This will normally be the same Business Day
                                                    provided the relevant Dealing Cut-Off Time is met. However, in some
                                                    instances, including but not limited to when unusually large numbers of
                                                    instructions are received, your instruction may be placed on the
                                                    subsequent Business Day at the next available Valuation Pricing Time.
                                                </li>
                                                <li>
                                                    If your Adviser or DM links you to a Model Portfolio, your investment
                                                    can be rebalanced to align to this Portfolio. While the percentage
                                                    holding for each Fund selected within a Model Portfolio will be
                                                    specified at the outset your holdings may change over time depending
                                                    upon investment performance.
                                                </li>
                                            </ol>
                                            <p>
                                                If your Adviser or DM links you to a Model Portfolio, your Fund holdings can
                                                be rebalanced to match the Model Portfolio’s specified percentages. Your
                                                Adviser or DM can link you to one Model Portfolio per product.
                                            </p>

                                            <p>
                                                Due to the large number of switches that may be required to rebalance a
                                                Model
                                                Portfolio, these switch instructions are handled separately.
                                            </p>

                                            <p>
                                                Irrespective of the time a rebalance instruction is received on the Octopus
                                                Platform, the instruction will normally be placed no later than the Business
                                                Day following receipt. However, in some instances, including but not limited
                                                to when unusually large numbers of instructions are received, your
                                                instruction may be placed on the subsequent Business Day at the next
                                                available Valuation Pricing Time.
                                            </p>

                                            <p>
                                                Due to forward pricing, the proportionate value of the holdings may differ
                                                slightly from the specified percentages after the switches have been carried
                                                out.
                                            </p>

                                            <p>
                                                If you make Regular Contributions into your Octopus GIA or Octopus ISA and
                                                JISA
                                                Account, each investment will be made on the 21st of the month or the next
                                                available Valuation Pricing Time.
                                            </p>

                                            <p>
                                                If you have chosen to reinvest income into a Fund and subsequently sell or
                                                switch your entire holding in that Fund, then any residual income received
                                                after that transaction will be retained pending a specific instruction
                                                regarding reinvestment from your Adviser or DM.
                                            </p>

                                            <p>
                                                Transactions in Securities will be executed as soon as reasonably
                                                practicable
                                                on the same dealing day provided the relevant Regulated Market is trading
                                                within our business hours (08.00 to 17.00 GMT daily).
                                            </p>

                                            <p>
                                                Model Portfolio transactions in Securities will be undertaken based on
                                                market
                                                location:
                                            </p>
                                            <ol>
                                                <li>UK - 09:30</li>
                                                <li>North America - 15:00</li>
                                                <li>Main Europe - 09:00 or 10:00</li>
                                                <li>(depending on the instrument’s exchange)</li>
                                            </ol>
                                            <p>
                                                Your Adviser will notify you of any specific arrangements relating to Bulk
                                                Trades.
                                            </p>
                                            <h4 className="mt-medium mb-small">Switching</h4>
                                            <p>
                                                Where instructions are received by the Octopus Platform to sell a Security
                                                or
                                                Fund and reinvest the proceeds in another Security or Fund this is known as
                                                a ‘switch’.
                                            </p>

                                            <p>
                                                When undertaking a switch involving Funds you will be out of the market
                                                whilst the deals are transacted. The sale will normally be placed at the
                                                first Valuation Pricing Time following receipt of your instructions and the
                                                purchase will normally be placed the working day following that.
                                            </p>

                                            <h4 className="mt-medium mb-small">Model Portfolio Management</h4>
                                            <p>
                                                Where your Adviser recommends a Model Portfolio or a DM is appointed and
                                                managers your Portfolio using Models, reviews will be undertaken at
                                                intervals mutually agreed.
                                            </p>

                                            <p>Reviews will either result in:</p>
                                            <ol>
                                                <li>no action;</li>

                                                <li>
                                                    the model portfolio’s constituents needing to be realigned
                                                    to the original percentages (Rebalance) where as a
                                                    consequence of price movements, these may have altered; or
                                                </li>

                                                <li>a recommendation to replace existing holdings.</li>
                                            </ol>
                                            <p>
                                                Any recommendation by your Adviser to change the constituents of the Model
                                                Portfolio will be accompanied by a justification and the necessary
                                                regulatory documentation. You will be notified in advance of the dealing
                                                date to effect the changes, so that you can confirm acceptance.
                                            </p>

                                            <p>
                                                If your acceptance is not received in line with the prescribed timetable,
                                                you
                                                will remain in your existing Model Portfolio until the next review date.
                                                However, your Adviser may undertake the recommended action outside of the
                                                prescribed timetable if it is still deemed appropriate and you accept the
                                                recommendation.
                                            </p>

                                            <p>
                                                Where a DM is appointed changes to the Model will automatically be
                                                undertaken
                                                and reported to you after the event.
                                            </p>

                                            <h4 className="mt-medium mb-small">Best Execution Policy</h4>
                                            <p>
                                                The Octopus Platform takes all reasonable steps to obtain the best possible
                                                results when orders to buy and sell Securities and Funds are executed.
                                            </p>

                                            <p>The Best Execution Policy Document is available from your Adviser.</p>

                                            <h4 className="mt-medium mb-small">Settlement</h4>

                                            <p>
                                                Where your Adviser or DM is using Model Portfolios with multi asset types
                                                that have different settlement cycles, the Octopus Platform’s dealing
                                                algorithm will ensure that:
                                            </p>

                                            <ol>
                                                <li>
                                                    buy orders will only be executed once all sales have been completed
                                                    (with confirmed prices for funds); and
                                                </li>
                                                <li>
                                                    buy orders will be executed (on such dates as necessary) to ensure
                                                    settlement matches with receipt of sale proceeds.
                                                </li>
                                            </ol>

                                            <h4 className="mt-medium mb-small">Responsibility of a client to report</h4>
                                            <p>
                                                There are a variety of circumstances which require a client to make
                                                disclosures either to the Regulated Market or the Regulatory
                                                Authorities.
                                            </p>

                                            <p>Examples of such disclosures include:</p>
                                            <ol>
                                                <li>the sale or purchase of shares during a takeover;</li>
                                                <li>a significant stake in a company; and</li>
                                                <li>dealings in a listed company as a Director.</li>
                                            </ol>
                                            <p>
                                                You accept that it is impossible for us to know the cumulative total of your
                                                positions. For this reason, we cannot accept the responsibility for making
                                                such reports, and you accept that it is your responsibility. However, should
                                                you need advice on your reporting responsibilities please ask your Adviser
                                                and we will endeavour to assist them in making your report.
                                            </p>

                                            <h4 className="mt-medium mb-small">Currency risk</h4>
                                            <p>
                                                All currency exchange risk in respect of any transaction in overseas
                                                investments shall be borne by you. The default currency for accounts is
                                                Sterling (GBP) and transactions will be settled in GBP unless you give your
                                                Adviser a specific instruction otherwise. Your Adviser, the Octopus Platform
                                                and any other parties involved in providing the currency exchange
                                                transaction to you may earn revenue. This revenue is based on the difference
                                                between the applicable bid and offer rates for the currency to which Hubwise
                                                apply a spread based on up to +/- 2.00% applied at the time of execution.
                                                The spread varies according to the value of the trade. Your Adviser will be
                                                able to provide you with the spread applicable, applied at different trade
                                                sizes as detailed on the Schedule of Charges.
                                            </p>

                                            <h4 className="mt-medium mb-small">Corporate actions</h4>
                                            <p>
                                                A corporate action is something that will bring about a change to the
                                                investments you hold.
                                            </p>

                                            <p>
                                                Only information issued by a fund manager or its Third-Party Administrator
                                                (TPA) or the Regulated Market will be relayed to you by your Adviser.
                                            </p>

                                            <p>
                                                Your Adviser will make every effort to contact you as we need to receive any
                                                valid election from you by the date we set. When a DM is appointed, it will
                                                take such actions as it deems appropriate.
                                            </p>

                                            <p>
                                                You authorise us and we shall have full discretion to act or refrain from
                                                acting on any corporate action where instructions are not received by the
                                                due date. We will not act when a DM is appointed.
                                            </p>

                                            <p>
                                                This shall include, but is not limited to, instructing the Octopus Platform
                                                as
                                                to:
                                            </p>
                                            <ol>
                                                <li>the take up of any rights issues;</li>
                                                <li>the exercise of conversion or subscription rights;</li>
                                                <li>dealing with takeovers or other offers or capital changes;</li>
                                                <li>exercising voting rights; and</li>
                                                <li>the right to take up the default option.</li>
                                            </ol>
                                            <p>
                                                We will endeavour to exercise these rights in your best interests. However,
                                                we shall not be liable for any failure to do so.
                                            </p>

                                            <p>
                                                If a corporate action impacts your Model Portfolio your Adviser will notify
                                                you of any action required and your DM will action as it deems
                                                appropriate.
                                            </p>
                                            <h4 className="mt-medium mb-small">Types of Units</h4>
                                            <p>
                                                Income Units - Units which pay distributions of income to the beneficial
                                                holder. These can either be withdrawn on a regular basis or reinvested into
                                                your Portfolio.
                                            </p>

                                            <p>
                                                If no instruction is received it will automatically be reinvested on receipt
                                                of your next investment instruction on your Account.
                                            </p>

                                            <p>
                                                Accumulation Units - Units which reinvest all income back into the
                                                underlying
                                                Fund.
                                            </p>

                                            <p>
                                                Clean Share Class – Funds where the managers no longer pay trail commission.
                                                Hubwise will only deal and hold these Fund Units in your Account.
                                            </p>

                                            <p>
                                                Your Adviser or DM will be responsible for instructing the Octopus Platform
                                                to
                                                undertake transactions in the appropriate Units.
                                            </p>
                                            <h4 className="mt-medium mb-small">Transfer of investments</h4>
                                            <p>
                                                Transfers of existing investments onto the Octopus Platform can be achieved
                                                by:
                                            </p>
                                            <ol>
                                                <li>
                                                    completing stock transfer forms for each investment held in certificated
                                                    form; and
                                                </li>

                                                <li>
                                                    completing a transfer request form for those investments held by another
                                                    Custodian.
                                                </li>
                                            </ol>
                                            <p>
                                                Where transfers are made of non-Clean Share Class Funds, these will be sold
                                                and the proceeds reinvested into Clean Share Class Units of the same Fund or
                                                as directed by your Adviser.
                                            </p>

                                            <p>Your Adviser will be able to provide you with the appropriate documents.</p>

                                            <h4 className="mt-medium mb-small">Certificated holdings</h4>
                                            <p>
                                                Certificated holdings need to be transferred into your nominee account prior
                                                to sale in order to meet settlement deadlines. This may result in a delay in
                                                effecting the sale. We will not be liable for any loss suffered by you as a
                                                result of a delay in effecting the sale.
                                            </p>

                                            <h4 className="mt-medium mb-small">Dealing errors</h4>
                                            <p>
                                                If a dealing error or fund manager error occurs in relation to a transaction
                                                that we carry out for you (for example, the shares were bought rather than
                                                sold or the fund manager calculates the Unit price incorrectly), we will
                                                amend our records to reflect the correct position as soon as practicable.
                                                However, we reserve the right to take no action and leave the record as it
                                                is if the amount of the adjustment required to your holding is £5 or less in
                                                which case this amount will not be processed or kept by Hubwise.
                                            </p>

                                            <p>
                                                Please note that you are responsible for checking the accuracy of
                                                statements,
                                                valuations and other documents as soon as possible and informing us
                                                immediately if there appears to be an inaccuracy.
                                            </p>

                                            <h4 className="mt-medium mb-small">Unpaid amounts</h4>
                                            <p>
                                                If for any reason payment into your Account of an amount required to settle
                                                the purchase of an investment fails, with the result that the transaction is
                                                delayed or is entered into and has to be reversed later, you will be
                                                responsible for any loss that may arise due to market movements and any
                                                interest charges levied.
                                            </p>

                                            <h4 className="mt-medium mb-small">Tax implications</h4>
                                            <p>
                                                Within an Octopus ISA & JISA, Octopus Personal Pension or Octopus SIPP there
                                                is
                                                no
                                                capital gains tax liability on the sale of Securities and Funds.
                                            </p>

                                            <p>
                                                However, once you have withdrawn money from your Octopus ISA you will lose
                                                the
                                                future tax benefits on the amount withdrawn.
                                            </p>

                                            <p>
                                                For Octopus GIAs, you may incur a capital gains tax liability on the gain
                                                made
                                                through the sale of Securities and Funds. See the Octopus GIA Key Features
                                                document supplied or speak to your Adviser for more information.
                                            </p>

                                            <h4 className="mt-medium mb-small">Use of the website</h4>
                                            <p>
                                                Your Adviser may provide you with your Octopus Platform Client Reference and
                                                password to enable you to gain online access to your Account(s). Access will
                                                make it possible for you to view and print a valuation of your Assets,
                                                confirm cash balances on your Client Account, Cash Reserve or Scheme Bank
                                                accounts and view Contract Notes/Lists and statements.
                                            </p>

                                            <p>
                                                The Octopus Platform will be available 24 x 7 but will require downtime for
                                                essential maintenance. Any such disruptions will be undertaken at times to
                                                cause the least inconvenience to users.
                                            </p>
                                        </div>
                                        <div id="payments_to_you">
                                            <h3 className="mt-large mb-medium">7. Payments to You</h3>
                                            <h4 className="mb-small">Income</h4>
                                            <p>
                                                Through your Adviser, you can instruct the Octopus Platform at any time to
                                                pay
                                                all or a fixed amount of income received on Assets held within your Octopus
                                                GIA and/or your Octopus ISA to you at monthly, quarterly, half yearly or
                                                annual intervals. We then pay on the 25th of the month or the next working
                                                day thereafter the accumulated balance on that account into your Nominated
                                                Bank Account at the selected interval.
                                            </p>

                                            <p>
                                                If any of your Client Accounts are overdrawn, we reserve the right to
                                                reclaim
                                                the amount owed to us before making a monthly payment.
                                            </p>

                                            <p>
                                                If there is insufficient Income for a fixed amount withdrawal, we will sell
                                                the Portfolio’s investments on a pro-rata basis to cover any shortfalls.
                                            </p>

                                            <p>
                                                If there is a surplus amount of Income, the default option will be to leave
                                                this on your Account unless a specific instruction is received from your
                                                Adviser.
                                            </p>

                                            <p>
                                                The frequency of distributions paid by the Funds and the dividends on
                                                Securities in which you invest will affect the amount you receive. If the
                                                Funds you hold only pay income quarterly, half-yearly or annually, then
                                                depending on the payment interval you have selected, on some occasions, a
                                                payment may not be made at all.
                                            </p>
                                            <h4 className="mt-medium mb-small">Regular Withdrawals</h4>
                                            <p>
                                                Through your Adviser, you can instruct the Octopus Platform at any time to
                                                pay
                                                a specific amount from your Client Account(s) to your Nominated Bank Account
                                                on a monthly, quarterly, half-yearly or annual basis. We then pay on the
                                                25th of the month or the next working day thereafter the accumulated balance
                                                on that account into your Nominated Bank Account at the selected interval.
                                                An instruction to take Regular Withdrawals will automatically replace any
                                                existing arrangement for payment of consolidated income.
                                            </p>

                                            <p>
                                                If you have insufficient cash available, having elected to take Regular
                                                Withdrawals from your Client Account(s), we will sell the Portfolio’s
                                                investments on a pro-rata basis to cover six withdrawals.
                                            </p>

                                            <h4 className="mt-medium mb-small">Income payments</h4>
                                            <p>
                                                It takes seven Business Days after we receive your instructions to apply
                                                them
                                                to income payments.
                                            </p>

                                            <h4 className="mt-medium mb-small">Residual payments</h4>
                                            <p>
                                                If you transfer holdings to your Octopus Platform Account from a third-party
                                                investment manager and we subsequently receive a payment from your old
                                                manager, such as a distribution or tax reclaim, the payment will be credited
                                                to the appropriate Client Account, Cash Reserve or Scheme Bank Account.
                                            </p>

                                            <h4 className="mt-medium mb-small">Good discharge</h4>
                                            <p>
                                                We will be entitled to pay any amounts owing to you under or in connection
                                                with these T&Cs into your Nominated Bank Account or to your Adviser for the
                                                time being. Any such payment will be a good discharge of our obligation to
                                                pay the relevant amount.
                                            </p>
                                        </div>
                                        <div id="documentation">
                                            <h3 className="mt-large mb-medium">8. Documentation</h3>
                                            <h4 className="mt-medium mb-small">Platform confirmation</h4>
                                            <p>
                                                Once your Client Account has been set up, we will send your Adviser
                                                notification confirming your Octopus Platform Client Reference.
                                            </p>

                                            <h4 className="mt-medium mb-small">Information on your Investments</h4>
                                            <p>
                                                You can obtain further information on your investments, such as transactions
                                                and valuations from your Adviser. Your Adviser may provide you with online
                                                access to valuations and transactional information. Please refer to your
                                                Adviser for details.
                                            </p>

                                            <h4 className="mt-medium mb-small">Contract Notes/Lists/Confirmations</h4>
                                            <p>
                                                A Contract Note/List will be issued by the Octopus Platform who will make a
                                                copy available to you on the next Business Day following receipt of your
                                                order or transaction confirmation from the fund manager. This will include
                                                the essential details of the transaction.
                                            </p>

                                            <p>
                                                We will not send Confirmation Notes/Lists each time a Regular Contribution
                                                for Investment or a sale of units for a Regular Withdrawal is made.
                                            </p>

                                            <h4 className="mt-medium mb-small">Tax documentation</h4>
                                            <p>
                                                A consolidated tax certificate (CTC) will be sent to you annually by your
                                                Adviser detailing the deduction of tax from your Octopus Platform Client
                                                Account for the previous tax year.
                                            </p>
                                        </div>
                                        <div id="statements">
                                            <h3 className="mt-large mb-medium">9. Statements</h3>
                                            <h4 className="mb-small">Statements will be issued Quarterly</h4>
                                            <p>
                                                We will make available to you electronically an Account statements showing
                                                details of all Assets within your Account on the statement date and all
                                                transactions made since the previous statement date, including investment
                                                and interest Income. Valuations are based on the bid price as at the date
                                                shown on your statement.
                                            </p>

                                            <p>
                                                If you are unable to receive an electronic copy your Adviser will forward a
                                                paper version.
                                            </p>
                                            <h4 className="mt-medium mb-small">Annual Illustrations of Costs</h4>
                                            <p>
                                                Each year an illustration of actual costs and the performance of your
                                                account
                                                will be will be issued electronically. If you are unable to receive an
                                                electronic copy your Adviser will forward a paper version.
                                            </p>

                                            <h4 className="mt-medium mb-small">Portfolio Depreciation Reporting</h4>
                                            <p>
                                                Where you utilise the services of a Discretionary Manager, we are obliged to
                                                report to you the next working day any depreciation of 10% or greater since
                                                the last statement of valuation was issued. To facilitate this, your adviser
                                                will be informed of the details and will contact you.
                                            </p>

                                            <h4 className="mt-medium mb-small">Records</h4>
                                            <p>
                                                You may request copies of Contract Notes/Lists, vouchers and entries on our
                                                books or electronic media relating to transactions on your Account from your
                                                Adviser. We keep these records for at least six years.
                                            </p>

                                            <p>
                                                Ad hoc requests will be subject to a fee of £50 and a request for duplicate
                                                documents will incur a fee of £10.
                                            </p>

                                            <h4 className="mt-medium mb-small">Joint Holders</h4>
                                            <p>
                                                Where an Account is held jointly, all documentation will be made available
                                                to
                                                the Primary Holder. Secondary holders can request copies of all
                                                documentation from your Adviser.
                                            </p>
                                        </div>
                                        <div id="withdrawals_and_closing_account">
                                            <h3 className="mt-large mb-medium">10. Withdrawals and Closing your Account</h3>
                                            <h4 className="mb-small">Requesting a withdrawal</h4>
                                            <p>
                                                Requests for withdrawals can be made via your Adviser and will be sent out
                                                by
                                                bank transfer to your Nominated Bank Account. Proceeds from the sales of
                                                Securities will be available on settlement day and for Funds within five
                                                Business Days of the Valuation Pricing Time of the last Fund sold.
                                            </p>

                                            <p>
                                                Payment may be delayed if a fund manager has not sent settlement proceeds to
                                                us, if we have not received all original signatures or if anti-money
                                                laundering and bank verification checks have not been completed
                                                successfully.
                                            </p>

                                            <p>
                                                If you have requested your withdrawal to be paid to your Nominated Bank
                                                Account, it may take up to eight Business Days to reach your account.
                                            </p>
                                            <h4 className="mt-medium mb-small">Withdrawals</h4>
                                            <p>
                                                Your Adviser must specify the Account(s) from which the withdrawal is to be
                                                taken. Unless otherwise stated the redemption will take place
                                                proportionately across the Portfolio where Models are deployed. Because
                                                Units are forward priced, we cannot precisely calculate the amount that your
                                                deal will realise, which may result in an over/under payment in respect of
                                                the withdrawal amount you require.
                                            </p>

                                            <h4 className="mt-medium mb-small">Minimum amount</h4>
                                            <p>
                                                Should the value of your holding in a Security or Fund fall below £250 as a
                                                result of your instruction to sell, we may require you to sell your entire
                                                holding in that Security or Fund.
                                            </p>

                                            <h4 className="mt-medium mb-small">Closing your Account</h4>
                                            <p>
                                                Instructions to close your Account should be given to your Adviser. Your
                                                Adviser will acknowledge receipt of those instructions directly to you.
                                            </p>

                                            <p>
                                                You may close your Account at any time by giving an Account closure
                                                instruction and withdrawing all the Assets, or transferring them to another
                                                manager or pension provider as appropriate.
                                            </p>

                                            <p>
                                                Closing your Account does not affect any transactions initiated before the
                                                closure began. These T&Cs continue to apply until we complete all
                                                outstanding transactions and meet all liabilities.
                                            </p>

                                            <p>
                                                If you request to withdraw all Assets from the Octopus Platform before
                                                payments
                                                due to go out of your Client Account, Cash Reserve or Scheme Bank Account
                                                are made, the ring-fence associated with these payments can be over-ridden
                                                by your Adviser to allow the money to be paid out to you except for monies
                                                ring-fenced for all charges, which will be paid as scheduled.
                                            </p>

                                            <p>
                                                You should refer to the Schedule of Charges which details any associated
                                                with
                                                closing your Account.
                                            </p>

                                            <h4 className="mt-medium mb-small">Withdrawals and closing payments</h4>
                                            <p>
                                                We may deduct from any amount to be paid to you any outstanding fees,
                                                charges
                                                and expenses due from you. In addition, we may keep an amount which we
                                                reasonably estimate will be enough for us to meet any tax liability for
                                                which we must account to HMRC for you under the ISA Regulations or
                                                otherwise. We will hold any monies awaiting payment to you outside your
                                                Account in a Client Account.
                                            </p>

                                            <p>
                                                We may delay paying any sale proceeds and cash balances until we know that
                                                all payments made by you have cleared and we have received all amounts which
                                                you owe to us. Third party payments will only be made to another FCA
                                                regulated firm.
                                            </p>

                                            <p>
                                                Any payment in excess of £1 subsequently received by us or due to you from
                                                us
                                                will be paid to your designated bank account within 30 working days of
                                                receipt. Any payment of £1 or less will not be paid over to you and will be
                                                retained by Hubwise for its own account.
                                            </p>

                                            <h4 className="mt-medium mb-small">Communication</h4>
                                            <p>
                                                The standard method of communication with regards your Account(s) is via
                                                email. A £10 administration fee to cover additional costs will apply if you
                                                opt to receive paper communications.
                                            </p>
                                        </div>
                                        <div id="fees_charges_expenses">
                                            <h3 className="mt-large mb-small">11. Fees, Charges and Expenses</h3>
                                            <p>
                                                Our charges will be in accordance with our Schedule of Charges in force at
                                                the time they are incurred. Our Schedule of Charges is part of your
                                                T&Cs.
                                            </p>
                                            <h4 className="mt-medium mb-small">The Octopus Platform remuneration</h4>
                                            <p>
                                                All Fees are calculated daily, based on the Account value. Fees in respect
                                                of
                                                the previous month, will be deducted from the respective Cash Account(s) by
                                                the end of the first full working week of the month.
                                            </p>

                                            <p>
                                                This payment will be deducted from the cash held through the Platform at the
                                                end of the first full working week of the month.
                                            </p>

                                            <p>
                                                By signing the Application, you have authorised us to collect any fees,
                                                charges and expenses due in respect of the Platform Services we are to
                                                provide to you. A copy of your signed Application is available to us from
                                                your Adviser, to validate your instructions.
                                            </p>

                                            <p>
                                                In the event of your Account being transferred, withdrawn or terminated,
                                                charges will be payable until the date of notification of transfer,
                                                withdrawal or termination and a charge to cover transaction costs may also
                                                apply. We reserve the right to pass on any charges imposed by any third
                                                parties incurred by any transfer, withdrawal or termination.
                                            </p>

                                            <h4 className="mt-medium mb-small">Dealing</h4>
                                            <p>
                                                No fee is charged for dealing Funds on the Octopus Platform’s Serviceable
                                                Asset
                                                list electronically. Your Adviser will notify you if Acceptable Assets can
                                                be dealt; such transactions will incur a £15 dealing fee.
                                            </p>

                                            <p>
                                                All other charges, including fees for transactions in Securities are levied
                                                in accordance with the Octopus Platform’s Schedule of Charges detailed
                                                hereunder.
                                            </p>

                                            <h4 className="mt-medium mb-small">Octopus ISA & JISA</h4>
                                            <p>
                                                Upon the transfer, withdrawal or termination of the ISA or JISA, the amount
                                                of any pro-rata Platform and Adviser fees that have accrued up to the date
                                                of such transfer, withdrawal or termination will be paid from monies then
                                                available within the ISA or JISA, by you separately or, upon receipt of a
                                                written request, from your General Investment Account.
                                            </p>

                                            <p>
                                                Any charges due to us (or agents used by us), plus any applicable value
                                                added
                                                tax, may after notice to you be deducted from any funds held by us on your
                                                behalf or, at our discretion, will be paid by you as stated in the relevant
                                                contract note or advice.
                                            </p>

                                            <h4 className="mt-medium mb-small">Fund manager</h4>
                                            <p>
                                                The manager of each Fund in your Account may receive an initial charge
                                                normally of up to 5.25%. However, the Octopus Platform has negotiated with
                                                the
                                                majority of fund managers to reduce the initial charge to 0%.
                                            </p>

                                            <p>
                                                An AMC and other fees, charges or expenses properly payable to them may be
                                                paid out of the property of that Fund. A KIID will have been provided to you
                                                by your Adviser which has a breakdown of all component charges.
                                            </p>

                                            <h4 className="mt-medium mb-small">
Payments to your Adviser and Discretionary
                                                Manager
                                            </h4>
                                            <p>
                                                Where the Octopus Platform collects Fees payable to your Adviser or
                                                Discretionary Manager the details are displayed in your personal
                                                illustration with the amount and frequency displayed in your account
                                                statement.
                                            </p>

                                            <p>
                                                By signing the Application for your Account(s) you are agreeing to allow us
                                                to collect and pay initial, one-off and ongoing fees to your Adviser or DM.
                                                If there are insufficient monies within your Account sales from the
                                                portfolio will be made.
                                            </p>

                                            <p>
                                                A copy of your signed Application is available to the Octopus Platform to
                                                validate your instructions.
                                            </p>
                                        </div>
                                        <div id="variation_termination_amendent">
                                            <h3 className="mt-large mb-medium">
12. Variation, Termination and Amendment of
                                                T&Cs
                                            </h3>
                                            <h4 className="mb-small">Funds offered by the Octopus Platform</h4>
                                            <p>
                                                The Octopus Platform reserves the right to introduce new Funds to the
                                                Platform
                                                and to withdraw existing Funds. Where a Fund in which you have invested is
                                                withdrawn you will:
                                            </p>

                                            <ol>
                                                <li>remain invested in it;</li>
                                                <li>be unable to add to your investment; and</li>
                                                <li>may or may not be able to sell your investment.</li>
                                            </ol>

                                            <h4 className="mt-medium mb-small">Suspended Funds</h4>
                                            <p>
                                                If a Fund is suspended by the fund manager, the Octopus Platform may hold or
                                                reject instructions to deal until the suspension is lifted. Should a Fund
                                                pay income during a period of suspension and you have instructed us to
                                                reinvest we may not be able to fulfil your request. In the event that we are
                                                unable to fulfil your request, your Adviser will contact you.
                                            </p>

                                            <h4 className="mt-medium mb-small">Changes to these T&Cs</h4>
                                            <p>
                                                We may introduce changes to our services and to these T&Cs from time to
                                                time.
                                                We will give you at least 30 days advance notice of any change, except where
                                                the change does not disadvantage you or is required in order to comply with
                                                a legal or regulatory requirement.
                                            </p>

                                            <p>
                                                If you are not happy with a change, you can contact your Adviser for a more
                                                detailed explanation of the change. If you are still unhappy with the change
                                                you can close your Account by giving an Account closure instruction and
                                                cashing in your Assets at any time or transferring them to another
                                                Custodian, ISA manager or pension provider, as appropriate.
                                            </p>

                                            <h4 className="mt-medium mb-small">Termination</h4>
                                            <p>
                                                The Octopus Platform may terminate this Agreement at any time by giving you
                                                a
                                                minimum of 30 days’ notice.
                                            </p>

                                            <p>
                                                Your Adviser may also terminate this Agreement by sending an instruction to
                                                the Administration Address.
                                            </p>

                                            <p>
                                                Upon termination, the Octopus Platform will realise all your Investments and
                                                pay the proceeds, together with any other monies in your Account, to your
                                                Nominated Bank Account or transfer Assets in specie to your new provider. In
                                                the event of a withdrawal, termination or transfer any charges not paid or
                                                due to us will be retained prior to termination or transfer.
                                            </p>

                                            <p>
                                                For Octopus Personal Pension and Octopus SIPP Account investors only, the
                                                Octopus
                                                Platform will notify your existing provider that your Account is to be
                                                terminated. They will contact you directly to explain your options and
                                                associated charges. The Octopus Platform reserves the right to apply a
                                                charge.
                                            </p>
                                        </div>
                                        <div id="liability">
                                            <h3 className="mt-large mb-medium">13. Liability</h3>
                                            <h4 className="mb-small">Loss caused to the Octopus Platform</h4>
                                            <p>
                                                You will be responsible for any liability or loss suffered or incurred by
                                                Octopus Platform or the Nominee (including taxes for which you are primarily
                                                liable and any expenses reasonably and properly incurred) as a result of you
                                                deliberately breaching these T&Cs or providing untrue or inaccurate
                                                information to the Octopus Platform in connection with your Account.
                                            </p>

                                            <p>
                                                This clause will not apply if and to the extent that any liability or loss
                                                arises from any negligence, willful default, fraud or breach of duty on the
                                                part of the Octopus Platform or the Nominee.
                                            </p>

                                            <h4 className="mt-medium mb-small">
Circumstances beyond our control &quot;Force Majeure&quot;
                                            </h4>
                                            <p>
                                                The Octopus Platform will not be responsible for any loss that you suffer as
                                                a
                                                result of events or circumstances which are beyond its reasonable control
                                                including without limitation any breakdown or failure of transmission or any
                                                computer failure or communication, postal or other strikes or similar
                                                industrial action and/or terrorism, government action, failure of any
                                                relevant Exchange, clearing house and/or broker or fund manager to perform
                                                its obligations.
                                            </p>

                                            <p>
                                                Other examples of when these circumstances apply could be when the loss
                                                occurred as a result of a natural disaster such as a flood or
                                                earthquake.
                                            </p>
                                        </div>
                                        <div id="general">
                                            <h3 className="mt-large mb-medium">14. General</h3>
                                            <h4 className="mb-small">Delegation</h4>
                                            <p>
                                                The Octopus Platform may appoint one or more third parties to assist in
                                                providing services under this Agreement.
                                            </p>

                                            <h4 className="mt-medium mb-small">Data Protection</h4>
                                            <p>
                                                All personal data relating to you that we hold for the purpose of providing
                                                services under this Agreement is held in accordance with the requirements of
                                                Data Protection legislation.
                                            </p>

                                            <p>
                                                The Octopus Platform will use your information for the administration and
                                                servicing of your investments and other related activities. We may disclose
                                                your information to our agents and service providers for these purposes.
                                            </p>

                                            <p>
                                                We may disclose information concerning you and your Account to your
                                                Adviser.
                                            </p>

                                            <p>
                                                We may also disclose your information to third parties where required in
                                                order to comply with legal and regulatory requirements. With the exception
                                                of the preceding provisions, we will not pass on your information to any
                                                other third party without your permission.
                                            </p>

                                            <p>
                                                The Octopus Platform may transfer your information to countries outside of
                                                the
                                                EEA for the servicing of your investments. In such cases, contracts will be
                                                put in place to ensure that the service providers protect your information
                                                in accordance with the requirements of Data Protection legislation.
                                            </p>

                                            <p>
                                                You are protected under the Data Protection Act 1998 and under these T&Cs
                                                you
                                                can have a copy of the information we hold about you and correct any
                                                inaccuracies (we may charge a nominal fee for providing copies of
                                                information). We will keep records relating to the administration of your
                                                Accounts for a minimum of 6 years from the date of Account closure or any
                                                individual transactions.
                                            </p>

                                            <p>
                                                The Octopus Platform Data Protection Policy Document is available from your
                                                Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Conflicts of Interest</h4>
                                            <p>
                                                We are determined to treat our clients fairly at all times. In case
                                                conflicts
                                                arise between the interests of the Octopus Platform, our employees and our
                                                clients and also between clients, we have a policy in place to ensure that
                                                we identify and handle conflicts fairly and treat our clients with honesty
                                                and integrity at all times.
                                            </p>

                                            <p>
                                                A copy of our Conflicts of Interest Policy is available from your
                                                Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Civil Partnership Act</h4>
                                            <p>
                                                The Civil Partnership Act 2004 (CP Act) came into force on 5th December
                                                2005.
                                                The CP Act is designed to provide a system of registration for same sex
                                                relationships. Registered civil partners will be in a relationship akin to
                                                marriage in respect of the laws of survivorship and benefits.
                                            </p>

                                            <p>
                                                As such, all references to the rights and benefits of a spouse or widow(er)
                                                in any Octopus Platform literature will apply equally to married couples and
                                                registered civil partners.
                                            </p>

                                            <h4 className="mt-medium mb-small">Notices</h4>
                                            <p>
                                                Except as otherwise provided, notices to the Octopus Platform should be sent
                                                to
                                                your Adviser’s Administration Address.
                                            </p>

                                            <h4 className="mt-medium mb-small">Governing law</h4>
                                            <p>
                                                These T&Cs are governed by and are to be construed in accordance with
                                                English
                                                law. The information contained in these T&Cs and the Application is based on
                                                our understanding of current legislation and HMRC practice and could be
                                                affected by changes in legislation and practice.
                                            </p>

                                            <p>
                                                If there is any conflict between these T&Cs and the ISA Regulations or other
                                                legislation relating to your Account, the ISA Regulations and/or other
                                                legislation will prevail.
                                            </p>

                                            <h4 className="mt-medium mb-small">Third Party Rights</h4>
                                            <p>
                                                A person who is not party to this agreement may not enforce any of its terms
                                                under the Contracts (Rights of Third Parties) Act 1999.
                                            </p>
                                        </div>
                                        <hr />
                                        <div id="octopus_gia_customer_agreement">
                                            <h1 className="mt-xlarge mb-large">
Octopus Platform General Investment Account
                                                Customer Agreement
                                            </h1>
                                            <p>
                                                These T&Cs are in addition to those applicable to the Octopus Platform above
                                                and are Octopus ISA specific.
                                            </p>
                                            <h4 className="mt-medium mb-small">
Title and registering investments in joint
                                                names
                                            </h4>
                                            <p>
                                                The first named applicant will be the ‘Primary’ Holder of the investment.
                                                This is purely for administrative purposes and does not affect the legal
                                                status of your joint ownership.
                                            </p>
                                            <p>
                                                All communications and documentation will be sent by your Adviser to the
                                                Primary Holder’s address. Secondary holders may request copies of
                                                correspondence from the Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Opening Your Account</h4>
                                            <p>
                                                This agreement will take effect if the Octopus Platform accepts your
                                                Application, which normally takes place on the day it is receive. The
                                                Octopus Platform has discretion to reject an Application without providing a
                                                reason.
                                            </p>

                                            <h4 className="mt-medium mb-small">In the event of Death</h4>
                                            <p>
                                                Upon your death, your legal representative should inform the Octopus
                                                Platform
                                                and your Adviser as soon as reasonably possible.
                                            </p>

                                            <p>
                                                We will continue to hold your Assets and monies until we receive a Sealed
                                                Grant of Probate or equivalent document, together with instructions from
                                                your Adviser as detailed by your personal representatives, upon whom these
                                                T&Cs become binding.
                                            </p>
                                            <p>
                                                We do not reinvest Income but hold it in our Client Account until we can pay
                                                it as your personal representatives direct.
                                            </p>
                                            <p>
                                                If a Primary Holder dies then the next named holder is promoted to Primary
                                                Holder.
                                            </p>
                                            <p>
                                                We reserve the right to carry out further anti-money laundering checks if
                                                the
                                                new Primary Holder’s bank account differs from the original.
                                            </p>
                                            <p>
                                                The procedure for investments held in a Hubwise Personal Pension, Hubwise
                                                SIPP or Hubwise Offshore Bond will depend on the respective providers T&Cs.
                                                They should also be informed of the death as soon as possible. The Octopus
                                                Platform will act in accordance with the instructions of the TPPP or RL360°
                                                thereafter.
                                            </p>

                                        </div>
                                        <hr />
                                        <div id="octopus_isa_and_jisa_customer">
                                            <h1 className="mt-xlarge mb-large">Octopus ISA and JISA Customer Agreement</h1>
                                            <p>
                                                These T&Cs are in addition to those applicable to the Octopus Platform
                                                above and are Octopus ISA specific.
                                            </p>
                                            <h4 className="mt-medium mb-small">Our Role</h4>
                                            <p>
                                                We appoint Hubwise to act as ISA Manager for your Account(s). Hubwise
                                                make all necessary claims for tax relief relating to your Account and
                                                the Assets held in it. Hubwise Securities Limited (HMRC ISA Manager No.
                                                Z1723) acts in its capacity as manager of your ISA.
                                            </p>
                                            <h4 className="mb-small">
                                                ISA
                                                Regulations
                                            </h4>
                                            <p>
                                                Your ISA and JISA will be managed in accordance with the HMRC regulations.
                                                In
                                                the event of a dispute regarding the T&Cs of this agreement and HMRC
                                                regulations, the HMRC regulations shall be overriding.
                                            </p>
                                            <h3 className="mt-large mb-medium">Opening your Account</h3>
                                            <h4 className="mb-small">ISA and JISA Applications</h4>
                                            <p>
                                                A Octopus ISA or JISA Account is opened when we receive and accept the
                                                correctly completed Octopus ISA and JISA Application and payment. If
                                                there
                                                is no clear instruction accompanying the Application, your
                                                contribution(s) will be automatically placed into a Cash Reserve Account
                                                pending receipt from your Adviser of your investment instructions.
                                            </p>

                                            <p>
                                                The account must be and must remain in the beneficial ownership of the
                                                child for the Hubwise JISA and you, in respect of the Octopus ISA.
                                            </p>

                                            <p>
                                                Your Octopus ISA or JISA Application covers the current Year and each
                                                subsequent Year. Where we receive no contributions into your Octopus ISA
                                                or JISA during any Tax Year a new Octopus ISA or JISA Application will
                                                be
                                                required.
                                            </p>

                                            <p>
                                                When third parties wish to contribute to the Hubwise JISA they should
                                                make the funds available to the Registered Contact so they can be
                                                applied to the account.
                                            </p>

                                            <p>
                                                A direct debit instruction authorises us to collect regular contributions
                                                from your Nominated Bank Account until you notify us to the
                                                contrary.
                                            </p>

                                            <p>
                                                In the event your contributions exceed the permitted HM Treasury limit in
                                                any Tax Year, the excess will be transferred to a Octopus GIA either in
                                                or
                                                opened in your name. Your Adviser will seek instructions from you if
                                                this situation occurs. If you are applying for a Octopus ISA for the
                                                next
                                                tax year, we shall hold your money in a Client Account until the 6th
                                                April.
                                            </p>

                                            <p>
                                                On the first working day of the new tax year we will open your Octopus
                                                ISA
                                                pending receipt from your Adviser of your investment instructions.
                                            </p>

                                            <h4 className="mt-medium mb-small">ISA and JISA transfers-in</h4>
                                            <p>
                                                The Octopus Platform may accept transfers from your existing ISA manager
                                                or
                                                Child Trust Fund (CTF) provider, in the case of JISAs. Your Adviser will
                                                provide you with the necessary documentation.
                                            </p>

                                            <p>
                                                Where you have transferred to the Octopus Platform your current Year’s
                                                ISA
                                                or JISA investment, you may reactivate your Account by restarting
                                                payments into your ISA or JISA although you must submit another
                                                Application if we receive no payments for one full Year.
                                            </p>

                                            <p>
                                                We generally make no charge when receiving plans from other managers, but
                                                reserve the right to do so. We are able to accept partial transfers.
                                            </p>

                                            <p>
                                                Shares received through a public offer for sale will not be eligible for
                                                a transfer in specie into ISAs or JISAs.
                                            </p>

                                            <h4 className="mt-medium mb-small">
                                                Transferring existing investments held by the Octopus Platform into an
                                                Octopus ISA or JISA
                                            </h4>
                                            <p>
                                                In order to place your Octopus GIA Securities and Funds into a Octopus
                                                ISA or
                                                JISA, we will sell your investments and apply the proceeds as a cash
                                                payment into your Octopus ISA’s or JISA’s Cash Reserve Account. Normal
                                                dealing fees will apply to both the sale and reinvestment.
                                            </p>

                                            <p>
                                                The new Securities and Funds will then be purchased within your Octopus
                                                ISA
                                                or JISA.
                                            </p>

                                            <p>
                                                In order to ensure that this transaction is processed in the current Tax
                                                Year, your application must be received by the Octopus Platform no less
                                                than five Business Days before the end of the Tax Year.
                                            </p>

                                            <h4 className="mt-medium mb-small">Octopus ISA Account closure</h4>
                                            <p>
                                                All or part of the Investments held in your Octopus ISA and proceeds
                                                arising from those investments can be transferred or paid to the plan
                                                holder.
                                            </p>

                                            <p>
                                                In the case of the JISA no monies can be paid to the plan holder until
                                                the child is 18.
                                            </p>

                                            <p>
                                                There is no charge for partial withdrawals of cash from the ISA. Partial
                                                cash withdrawals from a ISA shall be treated as capital, not interest,
                                                under HMRC regulations. When liquidating a ISA before transferring the
                                                cash proceeds, normal dealing fees apply.
                                            </p>

                                            <h4 className="mt-medium mb-small">Tax Status</h4>
                                            <p>
                                                You may not subscribe to your Octopus ISA Account while not resident in
                                                the
                                                UK for tax purposes unless you qualify as a Crown employee (a person
                                                holding public office or employment under the Crown and paid out of the
                                                public revenue of the UK and Northern Ireland), their spouse or civil
                                                partner.
                                            </p>

                                            <p>
                                                You must inform us immediately if you stop being resident in the UK for
                                                tax purposes, or if as a non-resident you stop being a Crown employee,
                                                their spouse or civil partner. Interest paid on cash is tax free.
                                            </p>

                                            <h4 className="mt-medium mb-small">Timing</h4>
                                            <p>
                                                These T&Cs will take effect if the Octopus Platform accepts your
                                                Application, which normally takes place on the day of receipt. The
                                                Octopus
                                                Platform has discretion to reject an Application without providing a
                                                reason.
                                            </p>

                                            <p>
                                                In the case of a ISA or JISA transfer, the date of transfer is the date
                                                agreed between the Plan Managers.
                                            </p>

                                            <h4 className="mt-medium mb-small">Cash Reserve Account</h4>
                                            <p>
                                                The Cash Reserve provides a temporary shelter for your Investment. Under
                                                HMRC regulations monies held in this way must be destined for investment
                                                in one or more of the Securities and Funds available on the Octopus
                                                Platform.
                                            </p>

                                            <h4 className="mt-medium mb-small">Void Accounts</h4>
                                            <p>
                                                We will notify your Adviser if, by reason of any failure to satisfy the
                                                provisions of the Regulations, your Octopus ISA or JISA has or will
                                                become
                                                no longer exempt from tax. If your ISA or JISA is voided, we will sell
                                                the investments and after deducting any cash available to cover any tax
                                                we have to pay or repay, pay you the proceeds together with any
                                                remaining cash balance held in your Octopus ISA or JISA.
                                            </p>

                                            <p>
                                                If you pay a contribution into your Octopus ISA or JISA by a cheque that
                                                fails to clear or a direct debit that is subsequently reversed, that
                                                contribution will be treated as if it had never been made for the
                                                purposes of these T&Cs and the ISA Regulations.
                                            </p>

                                            <h4 className="mt-medium mb-small">Reports, notices, meetings and voting</h4>
                                            <p>If you wish to see paper copies, please speak to your Adviser.</p>

                                            <p>
                                                Additionally, at your request in writing to your Adviser, we can arrange
                                                for you to receive a copy of the annual report and accounts for each
                                                Security or Fund in which you are invested.
                                            </p>

                                            <p>
                                                We do not exercise voting rights for any of your Investments unless you
                                                instruct us to vote on your behalf as part of your trade instruction. If
                                                you have requested this, you will be notified of each voting event.
                                                Notification can also be provided to allow attendance at shareholders’
                                                or unit holders’ meetings.
                                            </p>

                                            <p>
                                                Each request/notification will incur a £20 charge per Security or Fund to
                                                cover our administration costs. The charge may be deducted from monies
                                                in your Account.
                                            </p>
                                        </div>
                                        <div id="transferring_out_of_the_octopus">
                                            <h3 className="mt-large mb-medium">
Transferring Out of the Octopus ISA or
                                                JISA
                                            </h3>
                                            <h4 className="mb-small">ISA and JISA Transfers-out</h4>
                                            <p>
                                                Upon receiving your written instructions, the Octopus Platform will
                                                transfer all the JISA Assets or part of your Octopus ISA, with all your
                                                rights and obligations under it, to another ISA Manager who has agreed
                                                to accept the transfer. In the case of your current Year payments, you
                                                may either transfer these as part of a transfer of the whole of your ISA
                                                to another ISA Manager or you may retain them in your Octopus ISA.
                                            </p>

                                            <p>
                                                We require that the transfer is made in specie and or cash after
                                                deducting all charges due to us. If we subsequently receive any Income
                                                arising from Investments transferred out, we will send it directly to
                                                you.
                                            </p>

                                            <p>
                                                These T&Cs continue to apply to the part of your Octopus ISA being
                                                transferred until the transfer is complete, all outstanding transactions
                                                have been settled and all liabilities met.
                                            </p>

                                            <p>
                                                We will aim to complete the transfer request within 30 days of receiving
                                                your written instruction from your Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">ISA Termination</h4>
                                            <p>
                                                A ISA or JISA automatically terminates upon the plan holder’s death. The
                                                ISA or JISA will cease to be tax exempt and will be closed. We will
                                                continue to hold the Assets until we receive a Court Probate or
                                                equivalent document, together with instructions from your Adviser as
                                                detailed by your personal representatives or for the JISA the Registered
                                                Contact, upon whom these T&Cs become binding.
                                            </p>

                                            <p>
                                                We do not reinvest income but hold it in our Client Account until we can
                                                pay it as your personal representatives direct. Any tax reclaimed on
                                                income distributions paid between the date of your death and
                                                notification of your death will be deducted by us.
                                            </p>

                                            <p>
                                                The JISA may also be terminated if the child is terminally ill. A
                                                definition of terminally ill and the procedures to release the Assets
                                                are covered in the Hubwise JISA Key Features Document.
                                            </p>

                                            <p>
                                                If we decide to cease to act as an ISA manager, we shall give you at
                                                least 30 days’ notice in writing and the account will need to transfer
                                                to another manager.
                                            </p>

                                            <h4 className="mt-medium mb-small">In the event of Death</h4>
                                            <p>
                                                Subject to HMRC rules, the surviving spouse or civil partner, if over 18,
                                                of a deceased ISA holder who died on or after 3rd December 2014, can pay
                                                in additional subscriptions in cash on top of the annual subscription
                                                limit up to the value of the deceased’s ISA at the date of their death,
                                                provided they have not transferred these rights to another ISA
                                                manager.
                                            </p>
                                        </div>
                                        <div id="flexible_ISA">
                                            <h3 className="mt-large mb-small">Flexible ISA</h3>
                                            <p>
                                                A Flexible ISA is a ISA whose T&Cs allow the investor to replace cash
                                                they have withdrawn, without the replacement counting towards their
                                                annual subscription limit.
                                            </p>

                                            <p>
                                                Where a cash withdrawal is made, any subsequent subscriptions in the same
                                                tax year that would otherwise count towards the subscription limit will
                                                do so only to the to the extent that previously withdrawn amounts have
                                                been fully replaced.
                                            </p>

                                            <p>
                                                No application or declarations are required in respect of replacement
                                                subscriptions.
                                            </p>
                                            <h4 className="mt-medium mb-small">Replacement subscriptions</h4>
                                            <p>
                                                Must be made to the account from which the withdrawal was made, and in
                                                the same tax year. Monies removed from the ISA:
                                            </p>
                                            <ol>
                                                <li>by way of a ISA transfer to another provider:</li>
                                                <li>by HMRC to cover a tax debt;</li>
                                                <li>on the instruction of HMRC to remove invalid subscriptions;</li>
                                                <li>on cancellation;</li>
                                                <li>on authority of a court order; or</li>
                                                <li>by the ISA manager to cover fees, charges and penalty charges,</li>
                                            </ol>
                                            <p>
                                                are not withdrawals of cash by the investor and cannot be replaced
                                                without the subscription counting towards the annual subscription
                                                limit.
                                            </p>

                                            <p>
                                                Where a withdrawal closes a Flexible ISA no replacement of any previous
                                                year funds withdrawn but not replaced in the current year will be
                                                possible unless the manager re-opens the ISA.
                                            </p>
                                        </div>
                                        <hr />
                                        <div id="octopus_personal_pension_and_octopus">
                                            <h1 className="mt-xlarge mb-large">
Octopus Personal Pension and Octopus SIPP
                                                Customer Agreement
                                            </h1>

                                            <p>
                                                These T&Cs are in addition to those applicable to the Octopus Platform
                                                above,
                                                are Octopus Personal Pension and Octopus SIPP specific and should be read in
                                                conjunction with the Octopus Personal Pension and Octopus SIPP
                                                <a
                                                    href="/octopus-sipp"
                                                    target="_blank"
                                                >
                                                    “Key features documents”
                                                </a>
                                                .
                                            </p>
                                            <p>
                                                The Octopus Personal Pension and Octopus SIPP are Registered Schemes
                                                approved
                                                by
                                                HMRC and governed by a Declaration of Trust and Rules and any subsequent
                                                deeds amending these. A copy of the Rules and amendments to them is
                                                available by writing to the Administrator, at the “Point of contact” address
                                                below.
                                            </p>
                                            <h4 className="mt-medium mb-small">Third Party Pension Provider (TPPP)</h4>
                                            <p>
                                                The Octopus Personal Pension and Octopus SIPP are Personal Pensions and
                                                SIPPs
                                                approved by HMRC and arranged through TPPPs who operate and act as Scheme
                                                Administrator and Trustee.
                                            </p>

                                            <p>
                                                The Trustee is the legal owner of all the Assets of your Octopus Personal
                                                Pension and Octopus SIPP which it holds in Trust for you and/or your
                                                beneficiaries.
                                            </p>

                                            <p>
                                                All investments not held in the name of Hubwise Nominees must be registered
                                                in the name of the Trustee. You will become a client of the TPPP in relation
                                                to these elements of our service.
                                            </p>
                                            <h4 className="mt-medium mb-small">Point of contact</h4>
                                            <p>
                                                All queries relating to your Octopus Personal Pension and Octopus SIPP
                                                should
                                                be
                                                addressed in the first instance to your adviser who will assist you. Contact
                                                details of your Personal Pension or SIPP provider will be provided in the
                                                application pack on completion
                                            </p>
                                            <h4 className="mt-medium mb-small">Information for the Octopus Platform</h4>
                                            <p>
                                                You must complete the relevant Hubwise Personal Pension or Hubwise SIPP
                                                Account Application Form. You must tell your Adviser promptly of any changes
                                                to your personal details/ circumstances that occur after completing your
                                                Application.
                                            </p>
                                            <h4 className="mt-medium mb-small">Eligibility</h4>
                                            <p>
                                                You must be a UK resident in order to apply for the Octopus Personal Pension
                                                and Octopus SIPP. Applications from non-UK residents will be rejected.
                                            </p>
                                            <h4 className="mt-medium mb-small">Valuations</h4>
                                            <p>
                                                If you require a valuation of your Octopus Personal Pension and Octopus
                                                SIPP,
                                                please contact your Adviser. If you have access to the website you will also
                                                be able to view a valuation.
                                            </p>
                                            <h4 className="mt-medium mb-small">
Transferring or drawing benefits from your
                                                pension
                                            </h4>
                                            <p>
                                                If you wish either to transfer your pension to another provider or draw all
                                                or part of the benefits from it, you should instruct your Adviser and or
                                                your TPPP, who will make the necessary arrangements.
                                            </p>
                                            <h4 className="mt-medium mb-small">In the event of Death</h4>
                                            <p>
                                                If it is necessary to make a claim under the Octopus Personal Pension and
                                                Octopus
                                                SIPP Account, the personal representatives should contact your Adviser who
                                                will notify the TPPP.
                                            </p>

                                            <p>
                                                We will continue to hold your Assets until we receive a Court Probate or
                                                equivalent document, together with instructions from your Adviser as
                                                detailed by your personal representatives, upon whom these T&Cs become
                                                binding.
                                            </p>

                                            <p>
                                                We do not reinvest income but hold it in our Client Account until we can pay
                                                it as your personal representatives direct. Any tax reclaimed on income
                                                distributions paid between the date of your death and notification of your
                                                death will be deducted by us.
                                            </p>

                                            <h4 className="mt-medium mb-small">Transfers-In</h4>
                                            <p>
                                                You may arrange for a transfer of any other pension arrangement you may have
                                                into the Octopus Personal Pension or Octopus SIPP, provided it is consistent
                                                with the Rules and the transfer rules applicable to Registered Pension
                                                Schemes. Cash transferred in will not be available for investment until the
                                                TPPP is satisfied the transfer is acceptable and the cash has been
                                                received.
                                            </p>

                                            <p>
                                                The TPPP does not check transfers for suitability. It is you and your
                                                Adviser’s responsibility to decide that the Hubwise Personal Pension or
                                                Hubwise SIPP is suitable and appropriate to your needs.
                                            </p>

                                            <h4 className="mt-medium mb-small">Transfers-Out</h4>
                                            <p>
                                                You may request a transfer payment to be made from your Plan to another
                                                Registered Pension Scheme or certain qualifying overseas pension
                                                schemes.
                                            </p>
                                        </div>
                                        <div id="sipp_customer_agreement">
                                            <h3 className="mt-large mb-medium">
Octopus Personal Pension and Octopus
                                                SIPP
                                            </h3>
                                            <h4 className="mb-small">General</h4>
                                            <p>
                                                The Octopus Personal Pension and Octopus SIPP allow Securities and Funds to
                                                be
                                                held and traded on the Octopus Platform. It enables your Adviser to:
                                            </p>
                                            <ol>
                                                <li>buy and sell Securities and Funds on your behalf;</li>
                                                <li>
                                                    hold monies destined for purchasing Securities and Funds in the Octopus
                                                    Personal Pension or Octopus SIPP in the Scheme Bank Account;
                                                </li>
                                                <li>create pending trades;</li>
                                                <li>create a Standing Investment Instruction; and</li>
                                                <li>create a Regular Contribution Instruction.</li>
                                            </ol>
                                            <p>
                                                You can only have one Octopus Personal Pension or Octopus SIPP at any given
                                                time.
                                            </p>

                                            <h4 className="mt-medium mb-small">Taxation</h4>
                                            <p>
                                                Interest on the Octopus Personal Pension or Octopus SIPP is paid without
                                                deduction of tax.
                                            </p>

                                            <p>
                                                Tax Relief will be collected and applied to the account as per the terms of
                                                the product. Where applicable the monies will be presented for investment in
                                                line with the Regular Investment (Direct Debit) schedule.
                                            </p>
                                            <p>Dealing within the Octopus Personal Pension or Octopus SIPP Account</p>
                                            <p>
                                                To purchase Securities and Funds using monies held within your Scheme Bank
                                                Account, or to sell existing Securities and Funds held within the Octopus
                                                Personal Pension or Octopus SIPP, please refer to your Adviser and/or DM who
                                                will deal with your request. The Octopus Platform will process the
                                                transaction
                                                upon receipt of a valid instruction.
                                            </p>
                                            <h4 className="mt-medium mb-small">Payments-in</h4>
                                            <p>
                                                All new contributions to your Octopus Personal Pension or Octopus SIPP
                                                should
                                                be
                                                made payable as per the instructions on the TPPP Application Form.
                                            </p>

                                            <p>
                                                All income and proceeds from the sale of Securities and Funds from within
                                                the
                                                Octopus Personal Pension or Octopus SIPP will be paid into the Scheme Bank
                                                Account.
                                            </p>
                                            <h4 className="mt-medium mb-small">Payments-Out</h4>
                                            <p>
                                                Monies held may only be used to purchase Securities and Funds on the Octopus
                                                Platform or transferred directly to the TPPP where they will be available to
                                                provide pension benefits for you. Monies may also be transferred to the TPPP
                                                to purchase an annuity on the open market, to transfer out of your pension
                                                or transfer to a third party.
                                            </p>
                                            <h4 className="mt-medium mb-small">Regular Contribution Instruction</h4>
                                            <p>
                                                This is an instruction you can set up on the Octopus Personal Pension or
                                                Octopus
                                                SIPP to automatically invest into Securities and Funds, on a monthly basis,
                                                a specified amount of the monies available in your Octopus Personal Pension
                                                or
                                                Octopus SIPP Scheme Bank Account.
                                            </p>
                                            <h4 className="mt-medium mb-small">Instruction</h4>
                                            <p>
                                                If you wish to make Regular Contributions into Securities or Funds within
                                                your Octopus Personal Pension or Octopus SIPP Account, please contact your
                                                Adviser who will make the necessary arrangements.
                                            </p>
                                            <h4 className="mt-medium mb-small">Timing</h4>
                                            <p>
                                                Monies to fund Regular Contributions will be taken from your Octopus
                                                Personal
                                                Pension or Octopus SIPP Account on the 1st or the 14th of each month.
                                            </p>

                                            <p>
                                                The Octopus Platform must receive five working days’ notice for your
                                                instruction to take effect that month. Even if you also have a Client
                                                Account, the monies for a Regular Contribution will always be taken from
                                                your Octopus Personal Pension or Octopus SIPP Account, so you must have
                                                sufficient Available Balance in this account.
                                            </p>

                                            <p>
                                                If, on the first investment date of your Regular Contributions you have
                                                insufficient monies within your Octopus Personal Pension or Octopus SIPP to
                                                fund
                                                your first investment as instructed, we will suspend your Regular
                                                Contributions until the next month.
                                            </p>

                                            <p>
                                                If on the first investment date you do hold some money in your Octopus
                                                Personal
                                                Pension or Octopus SIPP, it will not be used to part-pay the Regular
                                                Contributions, but will remain unaffected until the next month’s Regular
                                                Contribution when we will pay out the required amount (if sufficient monies
                                                are held).
                                            </p>

                                            <p>
                                                If you wish to alter your Regular Contribution, your amended instruction
                                                will
                                                need to be received by the Hubwise Platform Five Business Days prior to the
                                                investment date on the 21st of the month in order for your amendments to
                                                take effect in that month’s Regular Contribution.
                                            </p>

                                            <p>
                                                Note: Providing an instruction to commence, amend or stop a Regular
                                                Contribution will not alter any existing regular pension contribution being
                                                paid to your Octopus Personal Pension or Octopus SIPP. A separate
                                                instruction
                                                must be provided if you wish to commence, amend, or cancel a regular
                                                contribution payment.
                                            </p>
                                            <h4 className="mt-medium mb-small">Failure of Regular Contributions</h4>
                                            <p>
                                                If on the investment date for three consecutive months we cannot make the
                                                necessary investment because there are insufficient monies held in your
                                                Octopus Personal Pension or Octopus SIPP Accounts we will cancel your
                                                Regular
                                                Contribution.
                                            </p>

                                            <p>
                                                If you wish to reinstate Regular Contributions you must ask your Adviser to
                                                make a new request.
                                            </p>

                                            <h4 className="mt-medium mb-small">
Standing Investment Instruction (non-regular
                                                contributions)
                                            </h4>
                                            <p>
                                                A Standing Investment Instruction makes ongoing investment in your Octopus
                                                Personal Pension or Octopus SIPP much easier. By simply choosing the
                                                Securities and Funds that you wish to invest in and what percentage of new
                                                money you want to allocate to each, you can create a Standing Investment
                                                Instruction that automatically applies to all new single contributions or
                                                transfer payments deposited into your Octopus Personal Pension or Octopus
                                                SIPP.
                                            </p>

                                            <p>
                                                This will continue to apply until you or your Adviser amends your
                                                instruction:
                                            </p>
                                            <ol>
                                                <li>
                                                    Your Standing Investment Instruction can only be created, edited or
                                                    stopped by you through your Adviser. We will not accept instructions in
                                                    any other form.
                                                </li>

                                                <li>
                                                    Once a Standing Investment Instruction has been created, all new monies
                                                    paid into your Octopus Personal Pension or Octopus SIPP will be
                                                    automatically invested into Securities and Funds in line with your
                                                    instruction. However, we will not automatically invest other monies
                                                    received into your Octopus Personal Pension or Octopus SIPP Account,
                                                    including income, interest or proceeds from sales;
                                                </li>

                                                <li>
                                                    Standing Investment Instruction trades are collated on each Business Day
                                                    at 16:30 and executed at the next available Valuation Pricing Time or
                                                    commencement of trading the next Business Day. For more information,
                                                    refer to section dealing in Investments in these T&Cs;
                                                </li>

                                                <li>
                                                    Monies held in the Octopus Personal Pension or Octopus SIPP Account at
                                                    the
                                                    time when you give or amend a Standing Investment Instruction will not
                                                    be invested under that instruction. Any such monies will remain in your
                                                    Octopus Personal Pension or Octopus SIPP;
                                                </li>

                                                <li>
                                                    If a Fund closes, it is up to your Adviser to amend your Standing
                                                    Investment Instruction. If no action is taken by the next time a
                                                    contribution is paid, then the monies destined for this closed Fund will
                                                    remain in your Octopus Personal Pension and Octopus SIPP Account until
                                                    instructed otherwise. The remainder of your Standing Investment
                                                    Instruction will be unaffected; and
                                                </li>

                                                <li>
                                                    If a Fund merges, we will replace this Fund with the newly merged Fund
                                                    when we receive your next contribution.
                                                </li>
                                            </ol>
                                            <h4 className="mt-medium mb-small">
                                                Regular Withdrawals within your Octopus Personal Pension or Octopus SIPP
                                                Account
                                                (retirement drawdown)
                                            </h4>
                                            <p>
                                                The regular withdrawal (retirement drawdown) facility allows you to pay a
                                                predetermined fixed amount of monies from your Octopus Personal Pension or
                                                Octopus SIPP, to the Scheme Bank Account. This facility can only be used in
                                                conjunction with drawdown of unsecured income. Natural Income is treated
                                                separately.
                                            </p>

                                            <p>
                                                Requests for Regular Withdrawals must be made through your Adviser. Your
                                                regular withdrawal (retirement drawdown) can be paid monthly, quarterly,
                                                half-yearly or annually to your TPPP Client Bank Account.
                                            </p>

                                            <p>
                                                If you choose to take a regular withdrawal (retirement drawdown), you must
                                                set up an instruction.
                                            </p>

                                            <p>
                                                The regular withdrawal and income will be paid to the TPPP Client Bank
                                                Account on the last business day of the month.
                                            </p>
                                            <h4 className="mt-medium mb-small">Fees charges and expenses</h4>
                                            <p>
                                                The charges payable under the Octopus Personal Pension and Octopus SIPP are
                                                described in the Key Features of the Octopus Personal Pension and Octopus
                                                SIPP
                                                provided by the TPPP.
                                            </p>

                                            <p>
                                                The product charges for the Octopus Personal Pension and Octopus SIPP will
                                                be
                                                deducted automatically from your account.
                                            </p>
                                        </div>
                                        <hr />
                                        <div id="octopus_offshore_bond">
                                            <h1 className="mt-xlarge mb-large">Octopus Offshore Bond</h1>
                                            <p>
                                                These T&Cs are in addition to those applicable to the Octopus Platform above
                                                and are Hubwise RL360° Offshore Bond specific.
                                            </p>
                                            <p>
                                                The Hubwise Offshore Bond is provided in association with RL360° which is
                                                based in the Isle of Man.
                                            </p>
                                            <p>
                                                This product is only available to individuals on receipt of a recommendation
                                                from their Adviser.
                                            </p>

                                            <h4 className="mt-medium mb-small">Your Contract with RL360°</h4>
                                            <p>The contract is governed by the following documentation:</p>
                                            <ol>
                                                <li>Your application Form;</li>
                                                <li>The Key Features document;</li>
                                                <li>The Product T&Cs;</li>
                                                <li>Your Policy Schedule;</li>
                                                <li>Any Endorsements to Your Policy Schedule; and</li>
                                                <li>
                                                    Any other documentation that evidences a change in the contract between
                                                    you and RL360°.
                                                </li>
                                            </ol>
                                            <p>
                                                All documentation specific to this product is available from your
                                                Adviser.
                                            </p>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </StickyContainer>
            </div>
        );
    }
}

export default TermsAndConditions;
