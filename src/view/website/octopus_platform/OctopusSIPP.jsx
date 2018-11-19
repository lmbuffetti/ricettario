import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const keyFacts = '/static/img/website/keyfacts-black-r-high.png';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class OctopusSIPP extends Component {
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
                                        <li>
                                            <Link to="/octopus-isa">
                                                    Octopus ISA Key Features
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/octopus-sipp">
                                                    Octopus SIPP Key Features
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
                                    </ul>
                                )
                            }
                        </Sticky>
                    </div>
                    <div className="col-8 textDescription">
                        <h1 className="mt-xlarge mb-large">Octopus SIPP Key Features</h1>
                        <img src={keyFacts} alt="keyFacts" />
                        <div id="key_features_of_octopus_platform">
                            <h3 className="mt-large mb-small">Key Features of the Octopus Platform SIPP</h3>
                            <p>
The Financial Conduct Authority is the independent financial services regulator. It
                                requires us to give you this important information to help you decide whether the
                                Octopus
                                Platform Self-Invested Personal Pension (SIPP) is right for you. You should read this
                                document carefully so you understand what you are buying and then keep it safe for
                                future reference.
                            </p>
                        </div>
                        <div id="please_read_document_carefully">
                            <h3 className="mt-large mb-small">Please read this document carefully</h3>
                            <p>
Please read the following document carefully to ensure that the Octopus SIPP is the
                                correct
                                product for your investment needs. If you require any more information or clarification
                                before you make your decision, please do not hesitate to contact us.
                            </p>

                        </div>
                        <div id="overview">
                            <h3 className="mt-large mb-small">Overview</h3>
                            <p>
The Octopus SIPP is a self-invested personal pension scheme established under one master
                                trust deed and set of rules (copies of which are available on request) and registered in
                                accordance with the Finance Act 2004. The Octopus SIPP is provided and operated by
                                Hartley
                                Pensions Limited, a UK registered company under number 09469576 which is authorised by
                                the Financial Conduct Authority (FCA) to provide regulated products and services. The
                                trustee of the SIPP is Hartley Pensions Trustees Limited, a UK registered company under
                                number 09962237. Hartley Pensions Limited and Hartley Pensions Trustees Limited have
                                entered into a service agreement with Hartley-SAS Limited (“Hartley”) for the provision
                                of day to day administration services relating to your Octopus SIPP (“your SIPP”).
                                Hartley-SAS Limited, a UK-registered company under number 06037774 will be your first
                                point of contact in relation to your SIPP – contact details are below.
                            </p>
                        </div>
                        <div id="risks">
                            <h3 className="mt-large mb-small">Risks</h3>
                            <p>
Investments can fall as well as rise and you may find that the value of your SIPP does
                                not meet your investment expectations. Past performance of investments is not
                                necessarily an indication of future performance. You should also consider how long you
                                are required to hold a particular investment and if this is suitable for your lifestyle
                                and investment aims. If investing outside of the UK for example, you may experience
                                higher dealing costs and may be subject to varying exchange rates. You should also be
                                aware that the investment/s you choose may pose a liquidity risk and you should consider
                                the timespan of your investment/s and how easily you can disinvest should you wish to do
                                so.
                                <b>We do not give financial or tax advice under any circumstances</b>
.
                            </p>

                            <p>
With the freedom to choose your own investments comes responsibility; you should make
                                sure that you are comfortable making investment decisions. Please note that the Octopus
                                SIPP is denominated in British Pounds therefore you may experience bank charges when
                                investing in products with a different currency. Our charging schedule is described
                                below and also on our website,
                                <a
                                    href="https://wwww.hubwise.co.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.hubwise.co.uk
                                </a>
.
                            </p>
                        </div>
                        <div id="questions_and_answer">
                            <h3 className="mt-large">Questions and Answers</h3>

                            <h4 className="mt-medium mb-small">What is a SIPP?</h4>
                            <p>
A Self-Invested Personal Pension or SIPP is a tax-efficient investment vehicle through
                                which you can invest in a wide range of UK and international investment products. A SIPP
                                offers up to 45% tax relief on contributions. Any investment gains that arise from your
                                SIPP are free from income, dividend and capital gains tax.
                            </p>

                            <h4 className="mt-medium mb-small">Who can open a Octopus SIPP?</h4>
                            <p>Any UK-resident person can open a Octopus SIPP.</p>

                            <h4 className="mt-medium mb-small">How do I open a Octopus SIPP?</h4>
                            <p>To open a Octopus SIPP you need to:</p>
                            <ul>
                                <li>
read the Hartley Pensions Limited Terms and Conditions, the Hubwise Securities
                                    Limited Terms and Conditions, this Key Features Document and any other documentation
                                    which we provide you with, very carefully;
                                </li>
                                <li>
be aware of the risks attached to a Octopus SIPP and be comfortable with the fact
                                    that
                                    the value of your investments could fall as well as rise;
                                </li>
                                <li>complete and send to us the relevant application form;</li>
                                <li>
either transfer an eligible existing pension (see details below) or make a first
                                    contribution to your SIPP.
                                </li>
                            </ul>
                            <p>
By choosing to open a Octopus SIPP, you are agreeing to be bound by the Terms and
                                Conditions of Hartley Pensions Limited and Hubwise Securities Limited and the rules of
                                the Hartley Pension SIPP Scheme and to make payments as and when requested.
                            </p>

                            <h4 className="mt-medium mb-small">Can I change my mind?</h4>
                            <p>
Yes, you have a legal right to cancel the establishment of your SIPP, within 30 days of
                                when you receive our welcome pack which contains a cancellation notice. Please note that
                                any fees incurred during the time between the establishment of the SIPP and the
                                cancellation will be borne by you. Similarly, any losses on investments are borne by
                                you.
                            </p>

                            <h4 className="mt-medium mb-small">Can I transfer my existing pension to a Octopus SIPP?</h4>
                            <p>
In most cases, yes. We accept transfers in from HMRC-recognised schemes. However, defined
                                benefit schemes (e.g. final salary schemes) generally prevent transfers to a SIPP unless
                                you have received personal advice from an FCA-regulated financial adviser who holds the
                                appropriate pension transfer qualifications. If the value of your transfer is £30,000 or
                                above, the transfer must be on a fully-advised basis by a suitably-qualified pensions
                                specialist. Please contact us if you wish to transfer your existing pension to a Octopus
                                SIPP.
                            </p>
                            <p>
Please note that, although we do not charge a fee to transfer your pension into a Octopus
                                SIPP, your pension provider may charge you to transfer out of their scheme.
                            </p>

                            <h4 className="mt-medium mb-small">
How much money can I contribute in a year and what tax relief will I receive on
                                contributions?
                            </h4>
                            <p>
There is no limit on the amount of money you can contribute to your SIPP each year but
                                the amount you contribute may have tax implications. The contribution amounts are based
                                on your UK relevant earnings. If you have no relevant UK earnings then you are still
                                able to make contributions up to £3,600 each year. If you do have relevant UK earnings
                                then you can receive tax relief on contributions up to the amount you earn, to a maximum
                                of £40,000. We will claim tax relief at the basic rate (currently 20%) from HMRC on a
                                monthly basis.
                            </p>
                            <p>
However, if you make contributions above the current limit of £40,000, you may incur a
                                tax charge via HMRC’s ‘annual allowance tax charge’. The annual allowance is set each
                                year by the UK Government and therefore may change in the future. Further information on
                                the annual allowance tax charge and on contributions in general is available on the
                                technical pages of our website,
                                <a
                                    href="https://www.hartleypensions.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.hartleypensions.com
                                </a>
. Please
                                seek specialist tax
                                advice if you have specific tax concerns. All contributions made into your SIPP are
                                subject to a correctly completed contributions form which can be found on our website,
                                <a
                                    href="https://hartleypensions.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.hartleypensions.com
                                </a>
.
                            </p>

                            <h4 className="mt-medium mb-small">Is there a minimum contribution level?</h4>
                            <p>
If you transfer your existing pension to a Octopus SIPP there is no requirement to make
                                any
                                contribution. There is no minimum level for one off or regular monthly
                                contributions.
                            </p>

                            <h4 className="mt-medium mb-small">Who can contribute to my SIPP?</h4>
                            <p>
You can make personal contributions, other people can make contributions e.g. your spouse
                                or parents, and your employer can make contributions.
                            </p>

                            <h4 className="mt-medium mb-small">Can I have more than one SIPP?</h4>
                            <p>
We would not open two Octopus SIPPs for you but it is possible to have another SIPP with
                                a
                                different provider. If you run two SIPPs concurrently you may have to pay a tax relief
                                charge to HMRC if you have received more than the allocated tax relief in any one
                                year.
                            </p>

                            <h4 className="mt-medium mb-small">Who manages the investment portfolio held in my Octopus SIPP?</h4>
                            <p>
All investment decisions in relation to your Octopus SIPP are taken by you personally and
                                your financial adviser. We are neither managers nor advisers; it is imperative that you
                                consider if a Octopus SIPP is an appropriate investment product for you based on your
                                investment experience and personal circumstances.
                            </p>

                            <h4 className="mt-medium mb-small">Can I hold property in a Octopus SIPP?</h4>
                            <p>Yes. Please contact Hartley in the first instance for more details.</p>

                            <h4 className="mt-medium mb-small">How can I check the value of my pension?</h4>
                            <p>
You can phone Hartley during office hours (9am to 5pm) and they will be able to tell you
                                the current value of your fund. We will send you a yearly statement for your records. It
                                is also prudent to review your SIPP on a regular basis to ensure that it is the correct
                                product for your investment needs.
                            </p>

                            <h4 className="mt-medium mb-small">What is the lifetime allowance?</h4>
                            <p>
This is the amount that you can receive over your lifetime before being liable for a tax
                                charge. The limit is currently £1 million pounds but this is subject to change. Your
                                SIPP may be subject to additional tax charges at the point you withdraw funds if your
                                pension is valued at more than the lifetime allowance.
                            </p>

                            <h4 className="mt-medium mb-small">When can I access my SIPP?</h4>
                            <p>
The earliest age you can start taking money from your SIPP is 55 years (due to rise to 57
                                in 2028) unless you are in serious ill health, as defined by the Finance Act 2004.
                            </p>

                            <h4 className="mt-medium mb-small">How can I take my benefits?</h4>
                            <p>
You can drawdown up to 25% of your SIPP tax free from the age of 55 as a Pension
                                Commencement Lump Sum (PCLS), but the remaining pot must form a ‘drawdown plan’. From
                                2028 the age you can withdraw a PCLS will rise to 57 years.
                            </p>
                            <p>
After taking a PCLS, you can opt to have complete flexibility (known as ‘flexi-access’)
                                as to how you drawdown from your drawdown plan (i.e. any combination of lump sums or
                                monthly payment), but each drawdown will be taxed at your normal income tax rate,
                                whether you take further lump sums or a monthly income. As soon as you take any money
                                from your SIPP a restriction on any future tax relievable money purchase contributions
                                to your pot applies of £4,000 a year.
                            </p>
                            <p>
Alternatively, you can take money direct from your pot without having to put the money
                                into a drawdown plan and 25% of this sum will be tax free. This is called an
                                ‘uncrystallised funds pension lump sum’ (‘UFPLS’). You can take one or more UFPLS
                                payments and these can be regular or irregular payments. Payment of a UFPLS will trigger
                                a restriction on any future tax relievable money purchase contributions to your pot to
                                £4,000 a year.
                            </p>
                            <p>
You can also take up to three small pots of up to £10,000. 25% will be tax free and 75%
                                will be subject to marginal rate income tax in the same way as UFPLS. Taking small pot
                                payments does not trigger a restriction on future tax relievable money contributions to
                                your pot.
                            </p>
                            <p>
Taking money from your pot may erode the capital value of your SIPP and could result in a
                                lower income than anticipated in the future. You should take advice from an
                                FCA-authorised financial advisor or suitably qualified tax advisor as to the best method
                                to take your SIPP benefit in your particular circumstances, before making any such
                                decisions.
                            </p>

                            <h4 className="mt-medium mb-small">After I have taken a PCLS, does my SIPP still benefit from tax relief?</h4>
                            <p>
Yes. If you are in flexi access-drawdown, until you drawdown from your drawdown plan, you
                                receive tax relief on contributions to your pension up to your annual personal
                                allowance.
                            </p>

                            <h4 className="mt-medium mb-small">What happens if I am in capped drawdown?</h4>
                            <p>
If you had started to take payments from your pension prior to the April 2015 pension
                                freedoms, your pension is designated as capped drawdown. This will mean that you are
                                allowed to take income from your pension up to a certain limit each year. You are
                                entitled to keep your pension as capped drawdown or if you wish to have more freedom,
                                you can convert to a flexi-access drawdown arrangement meaning that there would be no
                                capped income limit. You will need to consider implications such as the Money Purchase
                                Annual Allowance and a different charging structure.
                            </p>

                            <h4 className="mt-medium mb-small">Do you offer annuities?</h4>
                            <p>
No. If you are looking to purchase an annuity, you must transfer all or part of your
                                pension to an annuity provider.
                            </p>

                            <h4 className="mt-medium mb-small">Is SIPP income subject to National Insurance?</h4>
                            <p>No.</p>

                            <h4 className="mt-medium mb-small">What happens to my SIPP if I die?</h4>
                            <p>
When we are notified of your death by your personal representative, we will ask for a
                                copy of your death certificate. We will carry out due diligence on the beneficiary and
                                then discuss options with him or her. Please note that the trustee retains ultimate
                                discretion over the distribution of your pension, despite a beneficiary being named.
                            </p>

                            <p>If you die before you reach the age of 75, your beneficiary can choose:</p>

                            <ol className="number_list_simple">
                                <li>
to take a tax-free lump sum or transfer the SIPP into their own name or an external
                                    pension scheme. If you die after the age of 75, your beneficiary can choose to take
                                    the whole pot as a lump sum but this will be subject to a tax charge at the marginal
                                    rate of the beneficiary; or.
                                </li>
                                <li>
to transfer the SIPP into a SIPP of their own or take a regular income from the
                                    deceased’s pension through what is called pension drawdown, which will be taxed at
                                    the beneficiary’s normal rate of income tax; or
                                </li>
                                <li>
to elect to take periodical lump sums. These payments will be treated as income,
                                    therefore would be taxable at the beneficiary’s normal rate of income tax. The SIPP
                                    must be kept open but transferred to the name of the beneficiary and all normal
                                    charges e.g. administration fees will apply.
                                </li>
                            </ol>

                            <h4 className="mt-medium mb-small">Do I have to choose a beneficiary to receive my SIPP if I die?</h4>
                            <p>
No. Clients normally choose a beneficiary e.g. a spouse or a child. This is not legally
                                required but we strongly recommend that you do tell us of your wishes to help ensure we
                                consider paying the correct beneficiaries.
                            </p>

                            <h4 className="mt-medium mb-small">How much does a Octopus SIPP cost?</h4>
                            <p>
There is no initial fee. The one-off first year fee will be calculated on the six month
                                anniversary of your SIPP opening; the fee charged is dependent on the fund value, as per
                                the table below:
                            </p>
                            <table className="twoColumns">
                                <tbody>
                                    <tr>
                                        <td>200,000 - 299,999</td>
                                        <td>£5</td>
                                    </tr>
                                    <tr>
                                        <td>300,000 - 449,999</td>
                                        <td>£10</td>
                                    </tr>
                                    <tr>
                                        <td>450,000 - 599,999</td>
                                        <td>£15</td>
                                    </tr>
                                    <tr>
                                        <td>600,000 - 749,999</td>
                                        <td>£20</td>
                                    </tr>
                                    <tr>
                                        <td>750,000 - 899,999</td>
                                        <td>£25</td>
                                    </tr>
                                    <tr>
                                        <td>900,000 +</td>
                                        <td>£30</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
The ongoing fee is 0.1% + VAT payable in monthly instalments subject to a minimum annual
                                charge of £15 + VAT and a maximum annual charge of £50 + VAT. Ongoing fees are
                                calculated using basis points (BPs) where 100 BPs is the equivalent to 1%.
                            </p>
                            <p>
There are no additional charges for transfers in and the fee for transfers out will not
                                exceed the previous year’s fee. An additional fee of £125 + VAT applies to any SIPP that
                                is in drawdown. Other fees for work in relation to commercial property, divorce and
                                death for example are available on request and will be quoted to you before any work is
                                carried out. Please note that there will be additional fees charged by Hubwise. Please
                                contact them in this regard or go to
                                <a
                                    href="https://wwww.hubwise.co.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.hubwise.co.uk
                                </a>
.
                            </p>

                            <h4 className="mt-medium mb-small">When do I pay the administration fee?</h4>
                            <p>We will withdraw the annual fee from your account on a monthly, pro-rata basis.</p>

                            <h4 className="mt-medium mb-small">Do you set up a bank account for me?</h4>
                            <p>
Yes, a bank account will be set up in the name of your SIPP, currently at RBS. Please
                                note that no interest is payable by RBS at present.
                            </p>

                            <h4 className="mt-medium mb-small">Ability to disinvest</h4>
                            <p>
If you owe us any outstanding fees, we reserve the right to disinvest from your most
                                liquid investment, including cash.
                            </p>

                            <h4 className="mt-medium mb-small">If I am not satisfied, can I transfer out to another provider?</h4>
                            <p>
Yes, you can transfer out to another provider as long as the provider is HMRC-approved.
                                Subject to the entire portfolio moving, a fee not exceeding the previous year’s
                                management charge would be levied.
                            </p>

                            <h4 className="mt-medium mb-small">If I have any queries, who can I speak to?</h4>
                            <p>
Hartley provides scheme administration services to Hartley Pensions Limited. Upon opening
                                a Octopus SIPP you will be assigned a dedicated SIPP administrator at Hartley who will
                                answer any of your queries by telephone or email. Hartley is not a call centre; all of
                                the SIPP team are pension professionals who have gained or are currently studying
                                towards industry-recognised pension qualifications.
                            </p>

                            <h4 className="mt-medium mb-small">Is my money protected in any way?</h4>
                            <p>
Whilst your money is being held in your SIPP bank account which we set up for you, it is
                                covered by the FSCS’s UK deposit recovery scheme, up to the maximum (£85,000 at the time
                                of writing). When your money is invested on a particular platform/s it may not be
                                covered by the FSCS. For more information, please visit:
                                <a
                                    href="https://wwww.fscs.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.fscs.org.uk
                                </a>
.
                            </p>

                            <h4 className="mt-medium mb-small">Can you close my SIPP?</h4>
                            <p>
The Trustee has absolute discretion over your SIPP and can close it at any time. In this
                                instance we would give you 30 days notice.
                            </p>

                            <h4 className="mt-medium mb-small">Business language</h4>
                            <p>All communications will be in English.</p>

                            <h4 className="mt-medium mb-small">Who can I contact if I have any further questions?</h4>
                            <p>We are happy to answer any questions you may have.</p>
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
                            <p>
A government-backed service called Pension Wise is provided by The Pensions Advisory
                                Service and Citizens Advice to assist members and beneficiaries with pension queries or
                                with unresolved issues they may have with pension scheme trustees. You can receive this
                                guidance online, by telephone or face to face. To use the service visit the Pension Wise
                                website at
                                <a
                                    href="https://wwww.pensionwise.gov.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
www.pensionwise.gov.uk
                                </a>
                                {' '}
or call
                                <b>0800 138 3944</b>
.
                            </p>

                            <h4 className="mt-medium mb-small">What happens if I want to make a complaint?</h4>
                            <p>
We pride ourselves on our dedication to customer care. However, if you feel that you wish
                                to make a complaint regarding our service, you can write to us at:
                            </p>
                            <p>
                                SIPP Complaints
                                <br />
                                Hartley SAS
                                <br />
                                5th Floor
                                <br />
                                25 Marsh Street
                                <br />
                                Bristol BS1 4AQ
                            </p>

                            <h4 className="mt-medium mb-small">Law</h4>
                            <p>
Octopus SIPPs operate under the laws of England and Wales. Any disputes would be subject
                                to
                                the English Court system exclusively. This Key Features Document and the legislation
                                referred to herein are correct at the time of writing.
                                <br />
                                December, 2017
                            </p>

                        </div>


                        <p>
                            <small>
The Octopus Platform is a trading name of Carib Planning Limited. Carib Planning
                                Limited is authorised and regulated by the Financial Conduct Authority No. 778951.
                                Registered Office: 33 Holborn, London, EC1N 2HT. Company No. 10739796. Hubwise
                                Securities Limited are Authorised and Regulated by the Financial Conduct Authority (No.
                                502619). Registered Office: Waverley Court, Wiltell Road, Lichfield, Staffordshire, WS14
                                9ET. Registered in England and Wales. Company No. 060713714
                            </small>
                        </p>

                    </div>

                </StickyContainer>
            </div>
        );
    }
}

export default OctopusSIPP;
