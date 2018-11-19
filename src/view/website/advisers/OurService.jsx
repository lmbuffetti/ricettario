/* eslint-disable max-len */
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class OurService extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        scrollSpy.update();
        window.addEventListener('resize', this.updateDimensions);
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

                                    // the following are also available but unused in this example
                                    // isSticky,
                                    // wasSticky,
                                    // distanceFromTop,
                                    // distanceFromBottom,
                                    // calculatedHeight,
                                }) => (
                                    <ul style={style} className="navMenuSidebar">
                                        <li className="active">
                                            <Link to="/our-service">
                                                    Our Service To You
                                            </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="customer_relationship"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Customer Relationship
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="your_commitment_to_us"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Your Commitment to Us
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="how_we_charge_for_our_service"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How we Charge for our Services
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="how_you_can_pay_us"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            How You Can Pay Us
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="value_added_tax"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Value Added Tax (VAT)
                                                    </AnchorLink>
                                                </li>
                                                <li>
                                                    <AnchorLink
                                                        activeClass="active"
                                                        to="refunds_cancellation_policy"
                                                        spy
                                                        smooth
                                                        offset={-120}
                                                        duration={500}
                                                    >
                                                            Refunds & Cancellation Policy
                                                    </AnchorLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/terms-of-business">
                                                    Terms of Business
                                            </Link>
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
                                                    rel="noopener noreferrer"
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
                        <h1 className="mt-xlarge mb-large">Our Service to You</h1>
                        <div id="customer_relationship">
                            <div id="customer_relation">
                                <h4 className="mb-small">Customer relationship</h4>
                                <p>
Transparency is something that matters greatly to us at Octopus Wealth. In a
                                    notoriously
                                    opaque industry, it’s not always clear what charges are for, what exactly is
                                    being delivered and whether clients are getting value for money. We want to
                                    change that and we want to be clear and transparent with our clients every step
                                    of the way.
                                </p>

                                <p>
That’s why we have prepared this document, which details exactly what you can expect
                                    from us as a service provider, our commitment to you in providing those services,
                                    and all the costs involved (including how we calculate them).
                                </p>

                                <p>
Below we outline the four key stages of every customer relationship, from initial
                                    conversations through to (if you choose to work with us) the provision of ongoing
                                    advice.
                                </p>
                            </div>
                            <div id="exploration_and_discovery">
                                <h4 className="mt-medium mb-small">1. Exploration and Discovery</h4>
                                <p>
After you make an initial enquiry, we will contact you (typically by telephone) to
                                    get an understanding of your personal and financial objectives, and explore what
                                    services you might require.
                                </p>
                                <p>
If appropriate we will send you an online questionnaire to complete prior to a
                                    meeting, to give us a fuller picture of your financial circumstances. We will then
                                    look to arrange our first meeting together.
                                </p>
                                <p>
At that meeting, which is of no cost to you, we will run through your current
                                    personal and financial situation, and discuss your financial objectives for the
                                    future. We will also start to explain the role of the Octopus LifeLine, a tool we
                                    use to visually represent your financial situation, showing how planning can work to
                                    help achieve your goals. Part of this discussion will assess your attitude to
                                    investment risk and your understanding of how such risks may affect you and your
                                    financial objectives.
                                </p>
                                <p>
Following our first meeting we will write to you, outlining our understanding of your
                                    objectives, our suggested financial plan to meet these, and our proposed fees for
                                    providing these services.
                                </p>
                                <p>
If you decide to proceed, any costs associated will be discussed and agreed before
                                    work is carried out. We will not undertake any chargeable work without first
                                    securing your permission via our fee agreement.
                                </p>
                                <p>There is no obligation to proceed at this stage.</p>
                            </div>
                            <div id="advice_and_recommendation">
                                <h4 className="mt-medium mb-small">2. Advice and Recommendation</h4>
                                <p>
With your agreement to proceed, we can get to work building the full versions of your
                                    LifeLine and financial plan. This begins by gathering additional information, both
                                    from you directly and providers of any financial products you hold, allowing us to
                                    build a detailed picture of your financial circumstances, needs and options. We use
                                    technology to ensure this process is as accurate and efficient as possible.
                                </p>
                                <p>
This information allows us to produce a fully personalised LifeLine, which
                                    demonstrates your projected financial health over the long term, and the financial
                                    plan that supports it. Within this we will identify the investments and products we
                                    think best meet your needs, aiming to maximise tax advantages where appropriate.
                                </p>
                                <p>
These findings and recommendations will be summarised in a report and presented to
                                    you at an in-person meeting, where we will finalise our priorities and approach
                                    together. Where appropriate we will have additional meetings.
                                </p>
                                <p>By this stage, having produced your personal LifeLine and report, we will have:</p>

                                <ul>
                                    <li>Established your financial objectives and requirements</li>
                                    <li>Identified any shortfall in your current arrangements</li>
                                    <li>Discussed and agreed your attitude to investment risk</li>
                                    <li>Gathered all relevant information and data</li>
                                    <li>
Selected an appropriate investment strategy with due regard to tax efficiency
                                    </li>
                                    <li>Agreed how and when to review your new financial plan</li>
                                    <li>Identified any further action required</li>
                                </ul>

                            </div>
                            <div id="implementation">
                                <h4 className="mt-medium mb-small">3. Implementation</h4>
                                <p>
Once you are comfortable with the advice that has been developed and tailored to your
                                    needs, and have given your agreement to proceed, we will put the plan into action.
                                    We work to make this activation as quick and efficient as possible, helping with the
                                    completion of any necessary forms and ensuring your applications are processed by
                                    any relevant providers in a timely manner.
                                </p>
                                <p>We will:</p>
                                <ul>
                                    <li>Use technology to minimise unnecessary paperwork</li>
                                    <li>Help you to complete applications</li>
                                    <li>Answer any queries you might have</li>
                                    <li>Arrange for any external paperwork to be processed efficiently</li>
                                    <li>Check information produced by external providers</li>
                                    <li>Finalise the details and issue contracts</li>
                                </ul>
                            </div>
                            <div id="review_and_ongoing_services">
                                <h4 className="mt-medium mb-small">4. Review and Ongoing Services</h4>
                                <p>
Financial planning doesn&apos;t stop after a starter plan has been put in place. All
                                    financial needs and objectives change over time, and a fundamental part of effective
                                    financial planning is regular monitoring of your arrangements to ensure they are
                                    still delivering optimum returns and helping you move towards life goals.
                                </p>
                                <p>
This is where LifeLine comes into its own, as a dynamic tool that constantly monitors
                                    your portfolio and progress against agreed milestones. LifeLine shows when you are
                                    on plan, what you need to do to stay on track, and allows us to adapt our plan when
                                    either general market or personal circumstances require a change in approach.
                                </p>
                                <p>Our review services can include:</p>
                                <ul>
                                    <li>
Contact with you, to keep the information we hold on you up to date and
                                        relevant
                                    </li>
                                    <li>Arrangement of a review meeting if appropriate</li>
                                    <li>A review of your financial objectives</li>
                                    <li>Provision of portfolio valuations</li>
                                    <li>Being on the front foot with changes to legislation that might affect you</li>
                                    <li>
Written review report, giving you an update on your financial plan and if you’re
                                        on track
                                    </li>
                                    <li>An investment portfolio health check</li>
                                    <li>Review of your documents to minimise paperwork</li>
                                </ul>
                                <p />
                                <p>Other services are available:</p>
                                <ul>
                                    <li>Additional meetings if required</li>
                                    <li>Access to your adviser by telephone and email</li>
                                    <li>
Introductions to other professionals (e.g. accountants, solicitors, mortgage
                                        brokers or specialist finance etc.)
                                    </li>
                                </ul>
                                <p>
Typically this review process will happen on an annual basis, when we will meet to
                                    assess your progress and situation together, amending your plan where appropriate.
                                    If our advice has been targeted around a specific or one-off need, an annual review
                                    of this kind may be unnecessary. In this case, your adviser will agree an
                                    alternative approach with you.
                                </p>
                            </div>
                        </div>
                        <div id="your_commitment_to_us">
                            <h3 className="mt-large mb-small">Your Commitment to Us</h3>
                            <p>
To ensure we are giving you the best possible advice, it is important that we gather as
                                much information regarding your circumstances as we can. It is your responsibility to
                                provide this information accurately and to let us know if and when anything changes.
                            </p>
                            <p>
We will occasionally ask you to make sure that the information you have provided remains
                                valid, so that we can ensure our advice matches your current financial situation. We ask
                                that you try to do this in a timely manner. If you do not notify us of changes to your
                                circumstances, this may result in us being unable to provide you with the agreed level
                                of service.
                            </p>
                        </div>
                        <div id="how_we_charge_for_our_service">
                            <div id="how_we_charge_for">
                                <h3 className="mt-large mb-small">How we Charge for our Services</h3>
                                <p>
In turn, part of our commitment to you is total transparency over fees. We will never
                                    do any chargeable work without explaining the fee, detailing what it is for, and
                                    specifically seeking your permission to proceed. Our pricing structure is
                                    transparent, there are no hidden costs, and we want you to have confidence that we
                                    are working efficiently and cost-effectively for your benefit.
                                </p>
                                <p>
Our fees are based wholly upon the provision of our qualified and professional
                                    expertise:
                                </p>
                                <ul>
                                    <li>The time taken to analyse your circumstances;</li>
                                    <li>
Create your personal LifeLine and devise an appropriate strategy going
                                        forward;
                                    </li>
                                    <li>
The design of an appropriate summary report to communicate this strategy to
                                        you;
                                    </li>
                                    <li>
And also take into account our firm’s exposure to regulatory, commercial and
                                        financial risk.
                                    </li>
                                </ul>
                                <p>
We have different fees for the preparation of your LifeLine and set-up of your
                                    financial plan, and the subsequent ongoing implementation and review of this
                                    plan.
                                </p>
                            </div>
                            <div id="our_initial_fees">
                                <h4 className="mt-medium mb-small">1. Our Initial Fees</h4>
                                <p>
Our initial fees cover the advice, recommendation and implementation parts of our
                                    service to new clients or for new investments. We believe in a charging structure
                                    that is clear and easy to understand. Our standard initial fees are detailed in the
                                    table below:
                                </p>
                                <table className="twoColumns">
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Our Initial Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>All activity up to and including the first meeting</td>
                                            <td>Nil</td>
                                        </tr>
                                        <tr>
                                            <td>
Analysis, research and creation of a personalised LifeLine, and associated set
                                            of recommendations and plan; presented to you at subsequent meeting(s)
                                            </td>
                                            <td>£2,000 per plan</td>
                                        </tr>
                                        <tr>
                                            <td>Investments made using our in-house investment solution</td>
                                            <td>Nil</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="additional_fees">
                                <h4 className="mt-medium mb-small">2. Additional Fees</h4>
                                <p>
There may also sometimes be additional charges in cases where the initial flat fee
                                    does not accurately reflect the time required and the complexity of the work
                                    involved. Certain policies or investments may also be subject to additional fees. If
                                    this is the case, we will always provide you with an estimate of the expected cost
                                    and seek your permission first before proceeding. Circumstances in which additional
                                    fees may apply include:
                                </p>
                                <table className="twoColumns">
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Defined Benefit Pension Transfers</td>
                                            <td>
Where applicable, we will provide you with an estimate of how much we expect
                                            this to cost and will not exceed this without checking with you first.
                                            Typically, we charge a minimum of £2,000 to review and analyse a defined
                                            benefit transfer.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Complex Trust Planning</td>
                                            <td>
For certain types of trust work, there may be additional fees or costs
                                            involved, depending on the time required and the complexity of the project.
                                            Where applicable, we will provide you with an estimate of how much we expect
                                            this to cost and will not exceed this without checking with you first.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Non-investment insurance contracts such as life assurance</td>
                                            <td>
For such contracts we charge a time-costed fee to provide advice and set up
                                            the contract. Rather than charge a fee, it may be possible for us to receive
                                            commission from the product provider.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mortgages</td>
                                            <td>
Rather than charge a fee, it may be possible for us to receive commission
                                            from the product provider.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Other investments</td>
                                            <td>
Other providers may charge additional fees, often as a percentage of amount
                                            invested. In such circumstances, we will provide you with an estimate of how
                                            much we expect this to cost and will not proceed without checking with you
                                            first.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="our_ongoing_fees">
                                <h4 className="mt-medium mb-medium">3. Our Ongoing Fees</h4>
                                <h5 className="mb-small">i) Advice and Service Fee</h5>
                                <p>Through ongoing advice, we ensure that your financial arrangements evolve to reflect, take advantage of, and manage risk inherent in changing circumstances. From shifting personal realities and goals, to the risk characteristics of assets, and overall market trends, any plan needs to adapt on a regular basis to reflect changes in its context. We do this by continually reviewing and updating your LifeLine, adapting your arrangements to manage these changes and risk factors.</p>
                                <p>We also provide a range of ongoing services designed to maintain and monitor your portfolio and to ensure that your objectives and attitude to risk are correctly aligned with your holdings over an extended period.</p>
                                <p>We charge a basic 0.95% ongoing advice and service fee for all investments up to £500,000 and subsequently offer a discounted tiered rate on larger amounts, detailed below.</p>
                                <p>As an example, for a £400,000 portfolio we would charge 0.95% pa, which would equate to £3,800. Where the value of your investments rises then the fees for this service will increase; conversely, if the value of your investments falls, the cost of this service will decrease.</p>
                                <p>Once total invested assets cross any of the thresholds listed, this portion of portfolio becomes subject to the new, discounted rate (this will be assessed at least annually). As an example, if you invest £1m, the first £500,000 will be charged at 0.95%, and the next £500,000 will be charged at 0.85%. This will equate to a total blended rate of circa 0.90%. We will also apply this to your aggregated family account:</p>
                                <table className="twoColumns">
                                    <thead>
                                        <tr>
                                            <th>Amount under advice</th>
                                            <th>Ongoing fee for advice and service</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Less than £500,000</td>
                                            <td>0.95% (subject to min £2,000 p.a.)</td>
                                        </tr>
                                        <tr>
                                            <td>£500,000 to £1m</td>
                                            <td>0.85%</td>
                                        </tr>
                                        <tr>
                                            <td>£1m to £5m</td>
                                            <td>0.60%</td>
                                        </tr>
                                        <tr>
                                            <td>£5m to £10m</td>
                                            <td>0.45%</td>
                                        </tr>
                                        <tr>
                                            <td>More than £10m</td>
                                            <td>0.40%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h5 className="mt-medium mb-small">ii) Investment Management Fee</h5>
                                <p>
In addition to ongoing advice and service fees, there are ongoing management fees and
                                    charges associated with the investments you make. Should you choose to utilise our
                                    in-house investment solution you can expect this fee to be approximately 0.60% per
                                    annum. The table below outlines the expected total cost of investing with us if you
                                    make use of this option. Other providers of investments which you may already be
                                    using, or we may recommend, will also have ongoing charges. In all cases we will
                                    present, discuss and agree these fees with you before taking any action on your
                                    behalf.
                                </p>
                                <table className="fourColumns">
                                    <thead>
                                        <tr>
                                            <th>Example amount invested</th>
                                            <th>Ongoing fee for advice and service (blended)</th>
                                            <th>Ongoing investment fee for in-house solution*</th>
                                            <th>Total cost to you</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>£500,000</td>
                                            <td>0.95%</td>
                                            <td>0.60%</td>
                                            <td>1.55%</td>
                                        </tr>
                                        <tr>
                                            <td>£1m</td>
                                            <td>0.90%</td>
                                            <td>0.60%</td>
                                            <td>1.50%</td>
                                        </tr>
                                        <tr>
                                            <td>£2m</td>
                                            <td>0.75%</td>
                                            <td>0.60%</td>
                                            <td>1.35%</td>
                                        </tr>
                                        <tr>
                                            <td>£3m</td>
                                            <td>0.70%</td>
                                            <td>0.60%</td>
                                            <td>1.30%</td>
                                        </tr>
                                        <tr>
                                            <td>£4m</td>
                                            <td>0.68%</td>
                                            <td>0.60%</td>
                                            <td>1.28%</td>
                                        </tr>
                                        <tr>
                                            <td>£5m</td>
                                            <td>0.66%</td>
                                            <td>0.60%</td>
                                            <td>1.26%</td>
                                        </tr>
                                        <tr>
                                            <td>£6m</td>
                                            <td>0.63%</td>
                                            <td>0.60%</td>
                                            <td>1.23%</td>
                                        </tr>
                                        <tr>
                                            <td>£7m</td>
                                            <td>0.60%</td>
                                            <td>0.60%</td>
                                            <td>1.20%</td>
                                        </tr>
                                        <tr>
                                            <td>£8m</td>
                                            <td>0.58%</td>
                                            <td>0.60%</td>
                                            <td>1.18%</td>
                                        </tr>
                                        <tr>
                                            <td>£9m</td>
                                            <td>0.57%</td>
                                            <td>0.60%</td>
                                            <td>1.17%</td>
                                        </tr>
                                        <tr>
                                            <td>£10m</td>
                                            <td>0.56%</td>
                                            <td>0.60%</td>
                                            <td>1.16%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
*For investment profile 10 of the
                                    <a
                                        href="/octopus-portfolio-service"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
Octopus Portfolio Service
                                    </a>
,
                                    there may be a surcharge
                                    of up to 0.10% to cover additional costs for achieving higher exposure in emerging
                                    market funds
                                </p>
                                <h5 className="mt-medium mb-small">iii) Investment Specific Fees</h5>
                                <p>
Self Invested Pension Plans (SIPPs) are subject to an ongoing 0.1% annual fee, with a
                                    minimum of £15 and a maximum of £50 per annum plus VAT. An additional fee of £125
                                    plus VAT applies to clients within drawdown. There is no fee for transfers in and
                                    the fee for transfers out will not exceed the previous year’s fee. More complex
                                    investments may be subjected to additional on-going fees. This includes non-standard
                                    assets (such as property) and off-shore bonds. In such circumstances, we will
                                    provide you with an estimate of how much we expect this to cost and will not proceed
                                    without checking with you first. Individual Savings Accounts (ISAs) and General
                                    Investment Accounts (GIAs) are included within the ongoing advice and service
                                    charge.
                                </p>
                            </div>
                        </div>
                        <div id="how_you_can_pay_us">
                            <h3 className="mt-large mb-small">How You Can Pay Us</h3>
                            <p>
There are a number of ways in which we can take payment of the fees outlined above. As
                                part of the overall financial planning process, we will also take into account how best
                                to charge for our services.
                            </p>
                            <p>
In some cases, it is best if the fee is taken from the sums invested in certain policies,
                                which either obtain tax relief on creation or are taxed on exit, because this
                                effectively saves you this percentage in tax. For example, if our fee to manage your
                                pension investments was £1,000 and this was taken via the pension itself, the net cost
                                to you may be as low as £550. In other cases, it may be in your best interests to pay us
                                directly from your own bank account by standing order or direct credit.
                            </p>
                            <p>
We will discuss the various payment options with you and answer any questions you may
                                have.
                            </p>
                        </div>
                        <div id="value_added_tax">
                            <h3 className="mt-large mb-small">Value Added Tax (VAT)</h3>
                            <p>
Because we act on your behalf as an intermediary with a view to arranging an investment
                                product, our fees are currently exempt from VAT. This means we do not usually have to
                                make an additional charge of 20%.
                            </p>
                            <p>
If we do have to charge you for a service which is subject to VAT we will inform you in
                                advance.
                            </p>
                        </div>
                        <div id="refunds_cancellation_policy">
                            <h3 className="mt-large mb-small">Refunds & Cancellation Policy</h3>
                            <p>
Fees are payable subsequent to our advice services being provided, and therefore refunds
                                are not available in normal circumstances. Ongoing services may be cancelled upon
                                request subject to 30 days’ notice.
                            </p>
                            <p>
Please also refer to the section on Termination Rights in our
                                <a
                                    href="/terms-of-business"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
Terms of Business
                                </a>
.
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
export default OurService;
