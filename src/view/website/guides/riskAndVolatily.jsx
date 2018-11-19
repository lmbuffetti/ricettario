/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
// IMAGE
import simonRogerson from '../../../../../static/img/website/simon_rogerson.png';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class RiskAndVolatily extends Component {
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
                <div id="bannerHeader" className="bg_light_grey">
                    <h6 className="fontFamilyDefault">An Octopus Wealth guide</h6>
                    <h1>Explaining risk return and volatility</h1>
                </div>
                <StickyContainer className="wrapContent">
                    <Sticky id="stickyMenu" distanceFromTop="200px">
                        {
                            ({
                                style,
                            }) => (
                                <div style={style} className="wrap_anchor_menu bg_light_grey">
                                    <Link to="/guides">
                                            All guides
                                    </Link>
                                    <ul className="navMenuInline bg_light_grey">
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="introduction"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Intro
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="how_we_define_risk"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    How we define risk
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="the_relationship_between_risk_and_return"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    The relationship between risk and return
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="volatility_explained"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Volatility explained
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="volatility_and_time"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Volatility and time
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="how_octopus_wealth_can_help_you"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    How Octopus Wealth can help you
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="about_octopus"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    About Octopus
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="five_promises_from_octopus"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Five promises from Octopus
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
                                    <div className="col-8">
                                        <div className="box_info">
                                            <h5>Important information</h5>
                                            <ul>
                                                <li>
The value of an investment, and any income from it, can fall as well
                                                    as rise.
                                                </li>
                                                <li>You may not get back the full amount you invest.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="introduction">
                                        <div className="col-8">
                                            <h2 className="mb-medium">Introduction</h2>
                                            <h5 className="mb-small">
There’s an intrinsic link between risk and return in everything that
                                                you do. Investing is no different.
                                            </h5>
                                            <p>
You may not think about risk too much on a regular basis. But you take
                                                hundreds of risks (driving a car, stepping into the shower, choosing
                                                what to eat) every day. In most instances these are ‘calculated’ risks:
                                                you’ve assessed the situation, weighed up your options and decided the
                                                risk is worth taking. It’s really only when things go wrong that the
                                                risks you take become significant.
                                            </p>
                                            <p>
There’s no greater example of failing to take risk seriously than the
                                                2008 ‘Global Financial Crisis’. Financial institutions all over the
                                                world had been putting money into assets that were much riskier than
                                                were claimed, in the pursuit of returns. These assets were ultimately
                                                revealed to be worth far less than they were being bought and sold for.
                                                It was a painful lesson that taking a calculated risk can be disastrous
                                                if you’ve got the calculations wrong.
                                            </p>
                                            <h5 className="mt-medium mb-small">Risk should be calculated, assessed and understood</h5>
                                            <p>
Investors tend to judge the success of their investments by the returns
                                                they make, but the return tells only half the story. Risk is as
                                                important as any other aspect of making an investment decision. In fact,
                                                it’s arguably the most important aspect. But everyone’s view of risk is
                                                different; an investment that appears low risk to one individual may be
                                                considered high risk by someone else.
                                            </p>
                                            <p>
So, before you make any investment decision, it is important that
                                                you:
                                            </p>
                                            <ul className="number_list">
                                                <li>Understand the relationship between risk, return and volatility</li>
                                                <li>
Recognise the potential impact that risk could have on your current
                                                    and future investments
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-10 highlight_text">
                                            <h5 className="mt-medium mb-small">
Ignoring risk when making investments can prove costly. Understanding
                                                the risk of an investment is as important as understanding the possible
                                                returns.
                                            </h5>
                                        </div>
                                    </div>
                                    <div id="how_we_define_risk">
                                        <div className="col-8">
                                            <h2 className="mb-medium">How we define risk</h2>
                                            <h5 className="mb-small">
The concept of risk has many different definitions. But to keep things
                                                simple, it makes sense to think about investment risk in these ways.
                                            </h5>
                                            <h5 className="mt-medium mb-small">You could lose some or all of your investment</h5>
                                            <p>
When you make an investment, you hope that it will increase in value and
                                                one day be sold for a profit. But there’s no guarantee. There is always
                                                a possibility that you end up losing part or all of your investment.
                                                Even if your investment grows in value, there’s no guarantee it will
                                                perform to your expectations. You can’t rely on an investment’s past
                                                performance to be repeated in the future.
                                            </p>
                                            <h5 className="mt-medium mb-small">Your investment may be worth less in the future</h5>
                                            <p>
It’s also worth remembering that inflation (the rising cost of everyday
                                                goods and services) can erode the value of an investment over time. For
                                                example, if an investment returns 1.5% every year, but annual inflation
                                                rises at 2%, the money invested will be worth less when you look to
                                                spend it. This ‘inflation risk’ has become more of a concern in recent
                                                years, as very low interest rates have reduced returns available through
                                                cash savings accounts.
                                            </p>
                                            <h5 className="mt-medium mb-small">Your investment journey may be uncomfortable</h5>
                                            <p>
Investments can be volatile, and the riskier the investment, the more
                                                unpredictable its return is likely to be. Alternatively, taking fewer
                                                risks should make your journey more comfortable, but could mean it takes
                                                much longer to reach your destination.
                                            </p>
                                            <h5 className="mt-medium mb-small">Putting risk into context</h5>
                                            <p>
For most investors, the biggest risk they face is losing money. While the
                                                probability of losing capital can be high, especially in the case of
                                                individual stocks or shares, it may be reduced through diversification.
                                                Spreading your investments can provide greater control over a
                                                portfolio’s expected risk and return.
                                            </p>
                                        </div>
                                        <div className="col-10">
                                            <h5 className="mt-medium mb-small">
The key to long-term performance is about generating consistent
                                                returns while staying within acceptable levels of risk. When managing
                                                investments, striking the right balance is vital.
                                            </h5>
                                        </div>
                                    </div>
                                    <div id="the_relationship_between_risk_and_return">
                                        <div className="col-8">
                                            <h2 className="mb-medium">The relationship between risk and return</h2>
                                            <h5 className="mb-small">
The aim of an investment is to deliver returns. You need your
                                                investments to deliver sufficient returns in order to achieve your
                                                long-term goals. But this means taking some necessary risks to get
                                                there.
                                            </h5>
                                            <h5 className="mt-medium mb-small">Risk and return go together</h5>
                                            <p>
You can’t have a sensible discussion about investing without talking
                                                about risk. And while everyone would like their investments to deliver
                                                the best possible returns, those returns shouldn’t come at any price. If
                                                an investment promises high returns without mentioning the risks it
                                                intends to take with your money, then it is definitely too good to be
                                                true.
                                            </p>
                                            <h5 className="mt-medium mb-small">Choosing higher or lower risk investments</h5>
                                            <p>
One of the fundamental principles of investing is that higher risk
                                                investments should, in theory, lead to higher rewards. But there are no
                                                guarantees. Investments that offer the potential for higher returns also
                                                come with a greater possibility that the investment will fail to meet
                                                expectations or fall in value. At the other end of the risk spectrum, an
                                                investment that takes as little risk as possible, such as putting your
                                                money in a cash savings account will not deliver much of a return, and
                                                this low return may not even keep up with inflation.
                                            </p>
                                            <p>
The amount of risk you are prepared to take is really a matter of
                                                personal choice – there’s no ‘one size fits all’ approach. Some people
                                                want to take very little risk, because their priority is to not lose
                                                money. Others are prepared to take greater risks with their money if it
                                                means the possibility of achieving much higher returns.
                                            </p>
                                            <p>
However, most people sit somewhere between the two extremes, prepared to
                                                take some risks with their money but willing to sacrifice the potential
                                                for higher returns by investing in ways that make them less likely to
                                                suffer capital losses. Therefore, assembling the right combination of
                                                investments to meet these different requirements, and building
                                                portfolios that are designed to achieve the best return for the required
                                                level of risk is hugely important.
                                            </p>
                                        </div>
                                        <div className="col-10 highlight_text">
                                            <h5 className="mt-medium mb-small">
Finding out your own attitude towards risk is one of the first steps
                                                towards successful investing. Your Octopus Wealth adviser will help you
                                                with this.
                                            </h5>
                                        </div>
                                    </div>
                                    <div id="volatility_explained">
                                        <div className="col-8">
                                            <h2 className="mb-medium">Volatility explained</h2>
                                            <h5 className="mb-small">
Understanding volatility is vital when it comes to choosing the right
                                                investments. But volatility doesn’t usually get discussed in depth.
                                            </h5>
                                            <p>
Volatility is a way to calculate the risk of a particular investment,
                                                over a set period of time. A highly volatile investment is likely to
                                                experience more frequent, and possibly large, upward and downward
                                                movements in price than an investment with low volatility.
                                            </p>
                                            <h5 className="mt-medium mb-small">Measuring volatility</h5>
                                            <p>
The most common way to measure volatility is through ‘standard
                                                deviation’. This measures how much the returns of an investment move
                                                away (or deviate) from its average returns. More volatile investments
                                                deviate further and more frequently from their average. Volatility is
                                                shown as a percentage, in the same way as investment returns are
                                                shown.
                                            </p>
                                            <h5 className="mt-medium mb-small">Example:</h5>
                                            <p>
Let’s say an investment has an historical annualised volatility of 10%
                                                and has achieved an average annual return of 7% over the last ten years.
                                                These numbers tell us that over the last ten years, for just over two
                                                thirds of the time, the range of returns has been between 17% and -3% (a
                                                variance of +/-10% over the average return). For the other third of the
                                                time the returns were outside this range.
                                            </p>
                                            <h5 className="mt-medium mb-small">Managing volatility</h5>
                                            <p>
Fund managers can use their predictions of the volatility of different
                                                sorts of investments when constructing portfolios to target certain
                                                levels of risk. This is known as ‘risk targeting’, and while it is
                                                impossible to predict exactly what the return and volatility of an
                                                investment will be in the future, this approach makes it more likely
                                                that a portfolio of investments will perform as expected.
                                            </p>
                                            <p>
However, most funds don’t primarily focus on managing volatility.
                                                Instead, they tend to look to maximise returns from the assets they
                                                invest in. This typically means trying to ‘beat the benchmark’ within
                                                the sector in which they operate. As a consequence, the amount of risk
                                                within funds can vary wildly and their volatility is very difficult to
                                                predict, even for funds in the same sector.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="volatility_and_time">
                                        <div className="col-8">
                                            <h2 className="mt-large mb-medium">Volatility and time</h2>
                                            <h5 className="mb-small">
Volatility cannot be avoided or removed from an investment, but it can be
                                                managed to make it work to the advantage of investors.
                                            </h5>
                                            <p>
Your investment timeframe can play a key factor in the performance of an
                                                investment portfolio. If you’re planning on holding an investment for a
                                                long time, the impact of its volatility is reduced. If you are invested
                                                in the market for a very long period of time, the ups and downs are much
                                                less significant.
                                            </p>
                                            <p>
However, investing in the market for shorter time frames means that the
                                                potential swings are much more pronounced, and more likely to have a
                                                bigger impact on your returns. This is why investors taking a longer
                                                term view are usually more willing – and able – to hold a greater
                                                proportion of higher risk investments.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg_gray">
                                    <div className="container">
                                        <div id="how_octopus_wealth_can_help_you">
                                            <div className="col-8">
                                                <h2 className="mb-medium">How Octopus Wealth can help you</h2>
                                                <h5 className="mb-small">
One of the first things your Octopus Wealth adviser will do is to
                                                    discuss risk, return and volatility in more detail.
                                                </h5>
                                                <ul className="thick_icon">
                                                    <li>
                                                        <h5 className="mt-medium mb-small">Understanding your objectives</h5>
                                                        <p>
With your Octopus Wealth adviser’s help, you will find the
                                                            answers to the questions that will help to determine the
                                                            right investment to suit you.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <b>What are your investment goals?</b>
                                                                <p>
Are you investing for a short-term goal (like a
                                                                    holiday or new kitchen) or investing for the
                                                                    longer-term, to help pay for your retirement?
                                                                    Understanding your investment timeframe and the
                                                                    return you need from your investment will largely
                                                                    determine the types of investment you should be
                                                                    considering.
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <b>How much risk are you prepared to accept?</b>
                                                                <p>
Would you be comfortable if your portfolio fell in
                                                                    value by 5% over your investment timeframe? What if,
                                                                    in any one year period, it fell by 20%? Answering
                                                                    these questions will help you become more realistic
                                                                    about your personal attitude towards risk and losing
                                                                    money.
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h5 className="mt-medium mb-small">Avoiding the ‘risk lottery’ when choosing investments</h5>
                                                        <p>
Funds are usually grouped into one or more different sectors
                                                            or ‘peer groups’, depending on the type of investments they
                                                            hold. However, it’s worth remembering that funds within the
                                                            same sector can be managed quite differently, with diverse
                                                            underlying investments, and with stark differences in
                                                            attitudes towards risk. Therefore, choosing a fund purely by
                                                            its sector, or by its performance ranking within that
                                                            sector, can be something of a ‘risk lottery’. And there’s no
                                                            guarantee the fund will continue to be managed with that
                                                            risk target in mind. A fund that claims to be low risk now
                                                            may not necessarily remain so in the future.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h5 className="mt-medium mb-small">Diversification is important</h5>
                                                        <p>
You’ve probably heard the saying: ‘don’t put all your eggs in
                                                            one basket’. In the investment world, this phrase is summed
                                                            up in one word – diversification. No professional investment
                                                            manager, no matter how experienced or gifted, can predict
                                                            exactly which investments will perform well in any given
                                                            year. So it makes sense to diversify – or spread – your
                                                            money across a number of investments as broadly as possible,
                                                            preferably across different assets, investment types,
                                                            sectors and geographical regions.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h5 className="mt-medium mb-small">Looking for risk-targeted investments</h5>
                                                        <p>
Risk-targeted investments take a different approach to more
                                                            traditional ‘return-based’ funds. Investors start by
                                                            choosing a level of risk (and return) they feel comfortable
                                                            with. The investment manager manages a diversified portfolio
                                                            of investments, with the aim of making sure it is capable of
                                                            achieving its objectives. The risk target is important, as
                                                            it helps to ensure:
                                                        </p>
                                                        <ul>
                                                            <li>
The returns generated by the investment become more
                                                                reliable and predictable.
                                                            </li>
                                                            <li>
Investors don’t take unnecessary risks and have too much
                                                                exposure to the negative consequences of volatile
                                                                markets.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-10 highlight_text">
                                                <h5 className="mt-medium mb-small">
After determining your attitude towards risk and return, the next
                                                    step is to find an investment that maximises the potential returns
                                                    while closely managing the risks taken to achieve it.
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div id="about_octopus">
                                        <div className="col-8">
                                            <h2 className="mb-medium">About Octopus</h2>
                                            <h5 className="mb-small">
When Octopus launched in 2000, the aim was to create a company in the
                                                investment sector that put its customers first. We started by looking at
                                                what didn’t work very well, and found ways to do things differently.
                                            </h5>
                                            <p>
Today the Octopus Group has more than 700 employees and over £7.5 billion
                                                in assets under management (at April 2018). But no matter how big we
                                                get, we’ll keep doing the simple things well and we’ll keep looking
                                                after each of our customers, day in, day out.
                                            </p>
                                            <p>
At Octopus, we offer something different for investors who want to make
                                                sure their appetite for risk is at the heart of how their money is
                                                invested. In order to manage risk and achieve long-term returns, the
                                                Octopus Portfolio Service assembles portfolios formed from different
                                                combinations of funds spread across different asset classes. Investors
                                                gain access to a full complement of investment styles and geographic
                                                regions, all within a single diversified portfolio. These portfolios are
                                                managed by an established and experienced fund management team.
                                            </p>
                                        </div>
                                        <div className="col-10 quote_image clearfix">
                                            <img src={simonRogerson} alt="Simone Rogerson" />
                                            <h5>
“Investors need consistency and reliability from their investments. At
                                                Octopus we only design products that we believe will do what we say they
                                                will. This approach has served our investors well down the years.”
                                                <small>Simon Rogerson, Chief Executive</small>
                                            </h5>
                                        </div>
                                        <div className="col-10 highlight_text">
                                            <h5 className="mt-medium mb-small">
Investing in Octopus Portfolio Service puts your capital at risk. The
                                                value of your investment and the income you derive from it may go down
                                                as well as up and there is a chance you may not get back the full amount
                                                invested.
                                            </h5>
                                        </div>
                                    </div>
                                    <div id="five_promises_from_octopus">
                                        <div className="col-8">
                                            <h2 className="mb-medium">Five promises from Octopus</h2>
                                            <h5 className="mt-medium mb-small">
Being different means putting our customers first, every time. Our
                                                relationship with our customers is more important than anything else.
                                                So, here are five promises we are determined to keep.
                                            </h5>
                                            <ul className="number_list">
                                                <li>
We’ll always remember it’s your money – this means we work for you,
                                                    so if you want to talk to the fund managers who invest your money,
                                                    just let your Octopus Wealth adviser know, and they can make
                                                    an introduction.
                                                </li>
                                                <li>
We’ll never treat you like just another customer – we don’t use call
                                                    centres and we don’t have recorded messages telling you “how
                                                    important your call is”.
                                                    Our teams are frequently praised by our customers
                                                    for the help and attention they give.
                                                </li>
                                                <li>
We’ll always keep trying to improve – having the courage to do
                                                    things differently lets us create innovative solutions to the real
                                                    problems people face.
                                                </li>
                                                <li>
We’ll keep putting customers first – Octopus is not listed on a
                                                    stock exchange, and is mostly owned by the people who work here.
                                                    That means we’re not accountable to public shareholders demanding
                                                    short-term profits, so we don’t have to cut corners or lower our
                                                    standards.
                                                </li>
                                                <li>
We’ll never let complexity win – the best companies and products
                                                    make your life simpler, not harder. Why should financial services be
                                                    any different? Although we have to include some fairly complicated
                                                    information in our brochures, we’ve done our best to avoid small
                                                    print and tried to remove any unhelpful jargon. If we haven’t got it
                                                    right, tell us.
                                                </li>
                                            </ul>
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

export default RiskAndVolatily;
