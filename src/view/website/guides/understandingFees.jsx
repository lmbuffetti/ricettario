/* eslint-disable max-len */
import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
// IMAGE
import tableReallyPay from '../../../../../static/img/website/table_really_pay.png';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class understandingFees extends Component {
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
            <div>
                <div id="bannerHeader" className="bg_light_violet">
                    <h6 className="fontFamilyDefault">An Octopus Wealth guide</h6>
                    <h1>Understanding fees</h1>
                </div>
                <StickyContainer className="wrapContent">
                    <Sticky id="stickyMenu" distanceFromTop="200px">
                        {
                            ({
                                style,
                            }) => (
                                <div style={style} className="wrap_anchor_menu bg_light_violet">
                                    <Link to="/guides">
                                            All guides
                                    </Link>
                                    <ul className="navMenuInline bg_light_violet">
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="fee_types_and_what_they_mean"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Fee types and what they mean
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="the_questions_you_need_to_ask"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    The questions you need to ask
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="how_much_will_you_really_pay"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    How much will you really pay?
                                            </AnchorLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </Sticky>

                    <div>
                        <div className="one_column">
                            <div className="textDescription">
                                <div className="container">
                                    <div id="understanding_fees">
                                        <div className="col-8">
                                            <h2 className="mb-small">
Understanding fees
                                                <a
                                                    href="/static/pdf/Understanding_fees.pdf"
                                                    target="_blank"
                                                    className="fz-sml"
                                                >
Download as PDF
                                                </a>
                                            </h2>
                                            <p>
Financial advice has many strengths, but fee transparency isn’t always
                                                one of them. Payment structures can sometimes be difficult to
                                                understand: you probably won’t pay a single flat fee, but a series of
                                                variable rates for various different services. It’s not always as clear
                                                as it should be what is being charged, and for what reason.
                                            </p>
                                            <p>
You should only ever work with a financial adviser who has your trust,
                                                and a key part of building that trust is being comfortable about the
                                                fees you will pay. There is more to choosing a financial adviser than
                                                cost alone, but it’s still essential that you develop a proper
                                                understanding of the costs that you will incur (and others that you
                                                could, depending on whether additional services are required).
                                            </p>
                                            <p>A few simple questions will help you cut through the confusion.</p>
                                        </div>
                                    </div>
                                    <div id="fee_types_and_what_they_mean">
                                        <div className="col-8">
                                            <h1 className="mt-large mb-medium">Fee types and what they mean</h1>
                                            <h5 className="mb-small">
The starting point is to understand the different types of fees an
                                                adviser may charge, which typically fall into four categories:
                                            </h5>
                                            <h4 className="mt-medium mb-small">Advice fees</h4>
                                            <p>
The fee charged by an adviser for the work they do, developing and
                                                implementing a financial plan. This will likely be a combination of:
                                            </p>
                                            <ul>
                                                <li>one-off fees;</li>
                                                <li>upfront fees;</li>
                                                <li>ongoing annual fees;</li>
                                            </ul>
                                            <p>
calculated either as a fixed amount or a percentage of the assets
                                                invested and/or under management.
                                            </p>
                                            <h4 className="mt-medium mb-small">Platform & product fees.</h4>
                                            <p>
A fee that covers the cost of the software ‘platform’ an adviser will use
                                                to administer all your investments and track progress. Again, this could
                                                be a fixed fee or a percentage rate of assets under management on the
                                                platform.
                                            </p>
                                            <p>
Certain tax products or pensions held on the platform will then come with
                                                costs additional to these platform fees.
                                            </p>

                                            <p>
Some firms will include the platform costs as part of the overall advice
                                                fee, rather than charging it separately.
                                            </p>
                                            <h4 className="mt-medium mb-small">Investment fees</h4>
                                            <p>
The fee paid to providers of the investments your adviser makes on your
                                                behalf.
                                            </p>
                                            <p>
You might see these described as DFM (discretionary fund management) or
                                                AMC (annual management charge) fees. These could be a combination
                                                of:
                                            </p>
                                            <ul>
                                                <li>upfront fees;</li>
                                                <li>ongoing annual fees;</li>
                                                <li>fees based on performance;</li>
                                                <li>
underlying costs including dealing fees, stamp duty and sometimes
                                                    exit fees if you withdraw your investment.
                                                </li>
                                            </ul>
                                            <p>
Where possible you should always ask to see the TER (Total Expense Ratio)
                                                or OCF (Ongoing Costs Figure) to give you an accurate fee which includes
                                                all these extra underlying costs. The AMC rarely tells the whole
                                                story.
                                            </p>

                                            <h4 className="mt-medium mb-small">Additional fees</h4>
                                            <p>
The three categories described on this page are the standard ones, but
                                                there are also additional services for which your adviser might levy an
                                                extra charge; whether that is setting up an insurance policy, arranging
                                                a mortgage, or modelling cash-flow.
                                            </p>
                                            <p>
Additional fees may also apply for services considered complex
                                                advice.
                                            </p>
                                            <p>
Whenever an additional fee of this kind is required, your adviser should
                                                always agree it with you before going ahead with the work.
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="col-8" />
                                    <div id="the_questions_you_need_to_ask">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-small">The questions you need to ask</h1>
                                            <p>
As you can see, there is no one template for how financial advice fees
                                                will look. Every adviser will have their own system, and when assessing
                                                your options you should explore how they compare, and what is going to
                                                best suit your needs. In making this decision, it can be useful to think
                                                in terms of two cost areas:
                                            </p>
                                            <ol className="number_list_simple">
                                                <li>
                                                    <b>Total Set Up Cost</b>
                                                    {' '}
(the fees to get your plan in place and
                                                    your investments working)
                                                </li>
                                                <li>
                                                    <b>Total Annual Cost</b>
                                                    {' '}
(the fees for ongoing advice and investment
                                                    management)
                                                </li>
                                            </ol>

                                            <div className="box-columns rowFlex mt-large">
                                                <div className="col-md-6">
                                                    <div>
                                                        <h3 className="mb-small">Total Set Up Cost</h3>
                                                        <p>You should ask:</p>
                                                        <ol className="number_list_tras counter-start-0">
                                                            <li>
What are all the upfront set up fees for advice, or to
                                                                establish my plan?
                                                            </li>
                                                            <li>
What are the
                                                                <b>advice fees</b>
                                                                {' '}
associated with any new
                                                                investments?
                                                            </li>
                                                            <li>What are the set up fees for any new investments?</li>
                                                        </ol>
                                                        <p>
Those answers added together give you the number, which you
                                                            should subtract from your initial investment total to
                                                            understand the size of your initial investment pot, less
                                                            fees.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <h3 className="mb-small">Total Set Up Cost</h3>
                                                        <p>You should ask:</p>
                                                        <ol className="number_list_tras counter-start-3">
                                                            <li>
What is the ongoing
                                                                <b>advice</b>
                                                                {' '}
fee?
                                                            </li>
                                                            <li>
What are all the ongoing fees for your
                                                                chosen
                                                                <b>investments</b>
                                                                {' '}
and
                                                                <b>products</b>
?
                                                            </li>
                                                            <li>
Will there be any ongoing,
                                                                additional
                                                                <b>platform</b>
,
                                                                <b>performance</b>
,
                                                                <b>underlying</b>
                                                                {' '}
or
                                                                <b>service</b>
                                                                {' '}
fees?
                                                            </li>
                                                        </ol>
                                                        <p>
Again, add together the three answers to give you the total,
                                                            which you should subtract from your anticipated annual
                                                            investment performance to estimate what your return minus
                                                            fees is going to look like.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg_gray marginBottomFooter">
                                    <div className="container">
                                        <div id="how_much_will_you_really_pay">
                                            <div className="col-8">
                                                <h1 className="mb-large">How much will you really pay?</h1>
                                                <p>
Example questions to ask your adviser about expected fees.
                                                    <a
                                                        href="/static/pdf/Understanding_fees.pdf"
                                                        target="_blank"
                                                    >
Download this
                                                    guide as PDF
                                                    </a>
                                                </p>
                                                <div className="mt-large"><img src={tableReallyPay} alt="Table Really Pay" /></div>
                                                <div className="download_pdf mt-large">
                                                    <a
                                                        href="/static/pdf/Understanding_fees.pdf"
                                                        target="_blank"
                                                        className="alternative_button center_button"
                                                    >
Download
                                                        this guide as PDF
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </StickyContainer>
            </div>
        );
    }
}

export default understandingFees;
