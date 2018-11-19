// eslint-disable-next-line max-len
import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

// IMAGE
import exampleProfile from '../../../../../static/img/website/example_profile_breakdown.png';

const AnchorLink = Scroll.Link;
const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class octopusPortfolioService extends Component {
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
                <div id="bannerHeader" className="bg_violet">
                    <h6 className="fontFamilyDefault">An Octopus Weath guide</h6>
                    <h1>Octopus Portfolio Service</h1>
                    <h5>Diversified investment portfolios, managed by experts</h5>
                </div>
                <StickyContainer className="wrapContent">
                    <Sticky id="stickyMenu" distanceFromTop="200px">
                        {
                            ({
                                style,
                            }) => (
                                <div style={style} className="wrap_anchor_menu bg_violet">
                                    <Link to="/guides">
                                            All guides
                                    </Link>
                                    <ul className="navMenuInline bg_violet">
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="the_octopus_portfolio_service"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    The Octopus Portfolio Service
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="an_investment_that_does_the_hard_work_for_you"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    An investment that does the hard work for you
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="the_building_blocks_of_your_portfolio"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    The building blocks of your portfolio
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="how_an_investment_profile_is_constructed"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    How an investment profile is constructed
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="targeting_levels_of_risk_and_return"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Targeting levels of risk and return
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="the_octopus_multi_manager_team"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    The Octopus Multi Manager team
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink
                                                activeClass="active"
                                                to="understanding_the_risks"
                                                spy
                                                smooth
                                                offset={-120}
                                                duration={500}
                                            >
                                                    Understanding the risks
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
                                        <p>
The Octopus Portfolio Service has been designed to give clients of Octopus
                                            Wealth access to some of the most effective investment strategies available
                                            – within one professionally managed portfolio.
                                        </p>
                                        <div className="box_info">
                                            <h5>Important information</h5>
                                            <p>For UK investors only.</p>
                                            <ul>
                                                <li>
The value of your investment, and any income from it, could fall or
                                                    rise and you may not get back the full amount you invest.
                                                </li>
                                                <li>Past performance is not a reliable indicator of future results.</li>
                                                <li>
Tax treatment depends on the individual circumstances of each
                                                    investor and may be subject to change.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="the_octopus_portfolio_service">
                                        <div className="col-8">
                                            <h2 className="mb-medium">The Octopus Portfolio Service</h2>
                                            <h5 className="mb-small">
No-one understands your financial goals better than you. But building
                                                the right investment portfolio to help you achieve them is something we
                                                – together with
                                                your Octopus Wealth adviser – can help with.
                                            </h5>
                                            <p>
For most investors, assembling (and managing) a well-diversified
                                                investment portfolio can be a complicated, and expensive, task. Not only
                                                are there thousands of funds to choose from, but selecting the right
                                                funds, and investing at the most appropriate time, is a challenging
                                                proposition. Finding value for money, and building an investment
                                                portfolio capable of reaching your investment goals, is getting harder.
                                                But it doesn’t have to be. The Octopus Portfolio Service has been
                                                designed to make investing straightforward.
                                            </p>
                                            <h5 className="mt-medium mb-small">How Octopus Portfolio Service works</h5>
                                            <p>
Octopus Portfolio Service is a discretionary investment management
                                                service, which means we use your money to make investments on your
                                                behalf. Based on the recommendation made by your Octopus Wealth adviser,
                                                your investment will be placed in one of eight risk-targeted investment
                                                profiles.
                                                <b>
Each investment profile is formed from different
                                                    combinations of both active and passive funds spread across
                                                    different asset classes.
                                                </b>
                                            </p>

                                            <p>
The Octopus Portfolio Service is one of the simplest ways for investors
                                                to get to a genuinely diversified portfolio.
                                            </p>
                                            <h5 className="mt-medium mb-small">What’s the Octopus Portfolio Service difference?</h5>
                                            <p>
The Octopus Portfolio Service aims to manage money to specifically target
                                                a level of risk. Of course, it’s important to generate the best
                                                available investment returns. But when it comes to investing, returns
                                                really only tell half the story. Our fund managers focus on managing
                                                investment risk, and use a wide variety of investment tools, combined
                                                with their experience, to target the required returns for the risk
                                                profile selected.
                                            </p>

                                            <p>
Our portfolios are closely managed to make sure they stay within the risk
                                                guidelines we set ourselves and in a way that we think best meets the
                                                long-term objective of our investors. Your Octopus Wealth adviser will
                                                help you choose the investment profile that most closely matches your
                                                requirements.
                                            </p>
                                        </div>
                                        <div className="col-10 quote">
                                            <h5 className="mt-medium mb-small">
“We are risk managers first and foremost. Our investment approach aims
                                                to maximise returns for the level of risk we are targeting. We believe
                                                that&apos;s the right way to manage client&apos;s money.”
                                                <small>Bish Limbu, Fund Manager</small>
                                            </h5>
                                        </div>
                                        <div className="col-10 highlight_text">
                                            <h5 className="mt-medium mb-small">
Investing in the Octopus Portfolio Service puts your capital at risk.
                                                You can find out more about these risks here and in the Octopus Wealth
                                                guide: Explaining risk, return and volatility. Just contact your Octopus
                                                Wealth adviser and they’ll be happy to send you a copy.
                                            </h5>
                                        </div>
                                    </div>
                                    <div id="an_investment_that_does_the_hard_work_for_you">
                                        <div className="col-8">
                                            <h2 className="mb-medium">An investment that does the hard work for you</h2>
                                            <h4 className="mb-small">
                                                Octopus Portfolio Service is designed to give investors access to
                                                high-quality portfolios of investments, managed by an experienced
                                                team.
                                            </h4>
                                            <div className="table_info">
                                                <h3 className="mt-medium mb-small">Octopus Portfolio Service features</h3>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p><b>A &apos;best of both worlds&apos; approach</b></p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
Active and passive investments both deserve a place in a
                                                            well-managed portfolio. We only pay a premium for active
                                                            fund management where it offers the potential for meaningful
                                                            outperformance.
                                                        </p>
                                                        <b>What does this mean for you?</b>
                                                        <p>
Blending both active and passive investments in one portfolio
                                                            gives investors a combination of flexibility and
                                                            outperformance potential, while ensuring that we manage the
                                                            impact of costs, making the portfolio more efficient.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p>
                                                            <b>A choice of eight risk-targeted investment profiles</b>
                                                        </p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
Each one is actively managed across different asset classes,
                                                            with the aim of delivering the best investment performance
                                                            for the amount of risk you are willing to take.
                                                        </p>

                                                        <b>What does this mean for you?</b>
                                                        <p>
After discussions with your Octopus Wealth adviser to
                                                            determine your attitude towards risk, you can then choose an
                                                            investment profile that matches your risk appetite and
                                                            targets the best available return.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p><b>A pragmatic investment approach</b></p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
Our investment team will shift between different fund
                                                            managers, depending on their investment style, and the
                                                            prevailing conditions to generate the targeted risk and
                                                            returns.
                                                        </p>

                                                        <b>What does this mean for you?</b>
                                                        <p>
Being flexible means adapting to changing conditions, and
                                                            minimising the impact of market volatility. At the same
                                                            time, funds in the ‘sweet spot’ are given the maximum
                                                            opportunity to shine.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p><b>Unparalleled diversification</b></p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
The Octopus Portfolio Service gives you instant access to a
                                                            diversified portfolio of investments. Our team chooses from
                                                            a universe of more than 15,000 active and passive
                                                            investments.
                                                        </p>

                                                        <b>What does this mean for you?</b>
                                                        <p>
No matter how much you invest with us, you’ll own a portfolio
                                                            of different funds from a broad selection of fund managers.
                                                            Each portfolio is invested across different geographic
                                                            regions and asset classes.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p><b>Ongoing portfolio management</b></p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
We choose the investments in your portfolio and make any
                                                            necessary changes.
                                                        </p>

                                                        <b>What does this mean for you?</b>
                                                        <p>
With Octopus Portfolio Service, owning an investment
                                                            portfolio is easy, because we do all the hard work for
                                                            you.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <p><b>Several ways to invest</b></p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>
The Octopus Portfolio Service allows you to make use of
                                                            tax-efficient wrappers including Individual Savings Accounts
                                                            (ISAs) and Self-Invested Personal Pensions (SIPPs) that may
                                                            be available on your selected platform.
                                                        </p>

                                                        <b>What does this mean for you?</b>
                                                        <p>
Your Octopus Wealth adviser will help you work out the best
                                                            way to take full advantage of your tax-efficient wrapper
                                                            allowances.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="the_building_blocks_of_your_portfolio">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-large">The building blocks of your portfolio</h1>
                                            <h4 className="mb-medium">
We build our portfolios using multi manager funds and tracker funds.
                                                This gives you access to a diversified selection of investments within a
                                                single portfolio,
                                                at a very competitive price.
                                            </h4>
                                            <h5 className="mb-small">The multi manager approach</h5>
                                            <p>
A multi manager fund is a fund that invests in other funds, run by other
                                                fund managers. The aim of a multi manager fund is to assemble a
                                                well-diversified portfolio of investments that is capable of generating
                                                consistent levels of return and can grow over the long term, while
                                                staying within acceptable risk boundaries.
                                            </p>
                                            <p>
Each fund focuses on a particular asset class or region, which determines
                                                its own unique approach to managing risk and return. This investment
                                                structure provides access to a broad range of different funds, and this
                                                diversification helps to reduce the impact of any single fund, region or
                                                asset class underperforming. This diversification is ‘managed’, meaning
                                                there is less risk of unintentionally having too much money in one
                                                particular market or sector, which can occur with a collection of single
                                                manager funds.
                                            </p>
                                            <p>
Each Octopus multi manager fund is an active fund, managed by the Octopus
                                                Multi Manager team. Their responsibilities include:
                                            </p>
                                            <ul>
                                                <li>
Keeping track of global investment markets, analysing fund
                                                    performance and forming their own views on markets.
                                                </li>
                                                <li>
Ensuring that portfolio holdings complement each other well,
                                                    avoiding an over-reliance on any particular asset class, region or
                                                    sector.
                                                </li>
                                                <li>
Regularly meeting with the managers of the funds they invest in,
                                                    asking the awkward questions that most investors never get the
                                                    chance to ask.
                                                </li>
                                                <li>
Examining the potential impact of fund manager changes or departures
                                                    in greater depth.
                                                </li>
                                                <li>
Taking decisions to buy or sell part, or all, of the funds within
                                                    the portfolio, and reinvesting where the best investment
                                                    opportunities can be found.
                                                </li>
                                            </ul>
                                            <h5 className="mt-medium mb-small">Tracker funds</h5>
                                            <p>
The Octopus Portfolio Service uses tracker funds as core portfolio
                                                holdings alongside the Octopus multi manager funds. Tracker funds are
                                                passive funds that aim to track a market or index, with little
                                                managerial involvement to keep costs low.
                                                <br />
                                                These tracker funds are typically managed by large asset managers such
                                                as Blackrock or Vanguard. They enable the portfolios to get exposure to
                                                equities and bonds very cheaply. This helps keeps the costs in the
                                                portfolios down, while the Octopus multi manager funds provide the
                                                potential for market-beating returns and provide exposure to asset
                                                classes that tracker funds can&apos;t access, delivering better
                                                diversification.
                                            </p>
                                            <h5 className="mt-medium mb-small">Focus on fund selection</h5>
                                            <p>
The component mix for each of the Octopus multi manager funds will vary
                                                according to a number of factors that are constantly monitored by our
                                                experienced fund management team. The same team also selects the tracker
                                                funds and decides how much of each portfolio goes into each fund. From
                                                time to time, in certain portfolios, the fund management team may decide
                                                to hold different funds to the Octopus multi manager funds or tracker
                                                funds. Before including a fund, a rigorous and exhaustive review process
                                                is undertaken as we seek to ensure that the best funds and fund managers
                                                are selected. The team will never invest in something they don’t
                                                understand or in areas where returns can’t be explained.
                                            </p>
                                            <p>
At all times, the investment team will make decisions with the sole aim
                                                of delivering the best return in the Octopus Portfolio Service for the
                                                level of risk they are targeting, while keeping costs as low as
                                                possible.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="how_an_investment_profile_is_constructed">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-large">How an investment profile is constructed</h1>
                                            <p>
Each investment profile is made up of a combination of Octopus multi
                                                manager funds and tracker funds. Profiles at the lower end of the range
                                                will have a greater amount invested in cash, fixed interest investments
                                                and alternative assets, whereas the higher numbered profiles will
                                                generally have a greater exposure to international and emerging market
                                                equities.
                                            </p>
                                            <p>
The blend of these funds determines the risk and return level for each
                                                profile. A low volatility profile, such as Octopus Portfolio Service 3,
                                                will target lower risk and lower long-term returns than a higher
                                                volatility profile, such as Octopus Portfolio Service 8. Your Octopus
                                                Wealth adviser will help you choose the most appropriate investment
                                                profile for you.
                                            </p>
                                        </div>
                                        <div className="col-10 wrap_rect">
                                            <h3 className="mt-medium mb-small">Octopus Portfolio Service investment profiles</h3>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 3
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 4
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 5
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 6
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 7
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 8
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 9
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <div className="rect bg_light_violet">
                                                        Octopus Portfolio Service 10
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 single_img">
                                            <p>Example profile breakdown:</p>
                                            <img src={exampleProfile} alt="Example Profile" />
                                            <div className="col-8 light_text">
                                                <p>
This breakdown is provided for illustrative purposes only, and may
                                                    not be consistent with the latest asset breakdown.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="targeting_levels_of_risk_and_return">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-large">Targeting levels of risk and return</h1>
                                            <h4 className="mb-small">
                                                The investment profiles are managed to a pre-determined level of risk,
                                                and therefore each targets a specific level of return.
                                            </h4>
                                            <p>
                                                Not only do the eight investment profiles offer investors greater
                                                diversity and choice, because each profile is individually risk-managed,
                                                they offer greater certainty that the risks taken are those that are
                                                most appropriate to your needs. What’s more, should your risk tolerance
                                                change, for example due to retirement or starting a family, you can
                                                easily switch from one investment profile to another.
                                            </p>
                                            <p>
As each investment profile is managed to a long-term volatility target,
                                                the level of risk is designed to remain consistent over time.
                                            </p>
                                            <p>
The investment profiles are reviewed by the investment team on a frequent
                                                basis and ‘rebalanced’ as necessary, by selling and buying different
                                                proportions of the funds in the portfolio. This ensures that the level
                                                of risk is managed appropriately over the suggested timeframe of the
                                                investment. This timeframe is very important, as every asset class can
                                                have periods where volatility is higher or lower than normal. Therefore,
                                                holding the investment for a shorter period increases the risk that the
                                                investment profile will deviate from its long-term target.
                                            </p>

                                            <table className="table_layout">
                                                <thead>
                                                    <tr>
                                                        <th>Investment profile</th>
                                                        <th>Volatility target range (annual)</th>
                                                        <th>Long-term targeted return over cash (annualised)</th>
                                                        <th>Suggested investment timeframe</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 3</td>
                                                        <td>4-6%</td>
                                                        <td>+2.0%</td>
                                                        <td>less than 5 years</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 4</td>
                                                        <td>6-8%</td>
                                                        <td>+2.5%</td>
                                                        <td rowSpan={4}>5-10 years</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 5</td>
                                                        <td>8-10%</td>
                                                        <td>+3.0%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 6</td>
                                                        <td>10-12%</td>
                                                        <td>+3.5%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 7</td>
                                                        <td>12-14%</td>
                                                        <td>+4.0%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 8</td>
                                                        <td>14-16%</td>
                                                        <td>+4.5%</td>
                                                        <td rowSpan={3}>more than 10 years</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 9</td>
                                                        <td>16-18%</td>
                                                        <td>+5.0%</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Octopus Portfolio Service 10</td>
                                                        <td>18-20%</td>
                                                        <td>+5.5%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p>
Long-term targeted return is expressed as the increase in return above
                                                that of a cash deposit (as measured by LIBOR 3 months GBP). Long-term
                                                targeted return relies on long-term asset class assumptions that are not
                                                guaranteed to be achieved. These assumptions are based on a range of
                                                inputs, including historical asset class data and third party research.
                                                The long-term targeted return includes all fund charges. Note that the
                                                volatility target range is based on a three-year holding period.
                                                <b>
There
                                                    is no guarantee that the actual performance of your portfolio will
                                                    meet the objectives of your investment profile. The value of your
                                                    investment and the income you derive from it may go down as well as
                                                    up and there is a chance you may not get back the full amount
                                                    invested.
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div id="the_octopus_multi_manager_team">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-large">The Octopus Multi Manager team</h1>
                                            <p>
                                                <b>
Octopus Investments launched its multi manager business in 2008 and
                                                now manages more than £1.2 billion across investments distributed
                                                primarily through financial advisers.
                                                </b>
                                            </p>
                                            <p>
The Octopus Multi Manager team is a respected and established fund
                                                management team with a wealth of experience. The team is currently
                                                responsible for over
                                                20 multi manager funds. They select all the investments for the
                                                investment profiles in the Octopus Portfolio Service, and are the fund
                                                managers for the Octopus multi manager funds.
                                            </p>

                                            <h5 className="mt-medium mb-small">Global reach</h5>
                                            <p>
The team is free to select investment managers from around the world.
                                                Their overarching aim is to achieve a superior risk and return outcome
                                                for each portfolio. Their investment approach also involves constant
                                                monitoring of the funds and fund managers they invest in. They do this
                                                to make sure they keep performing – and those who aren’t are
                                                replaced.
                                            </p>

                                            <h5 className="mt-medium mb-small">Expertise in alternatives</h5>
                                            <p>
While equities and bonds form the foundation of all investment
                                                portfolios, the Octopus Multi Manager team excels through its use of
                                                alternatives as a means to managing risk. The team has a great deal of
                                                experience in this important but underused asset class, which enables
                                                them to look more widely than the usual alternative asset classes of
                                                property and commodities.
                                            </p>
                                            <p>
The Global Strategies fund, which is a part of most of the Octopus
                                                Portfolio Service investment profiles, helps demonstrate the team’s
                                                approach to alternatives. It includes absolute return funds and other
                                                investment strategies that are designed to deliver positive returns even
                                                when markets are falling. When included alongside the other Foundation
                                                Funds, it can help to enhance portfolio returns, especially during
                                                periods of volatility, without increasing the risk level of the
                                                investment profile.
                                            </p>

                                            <h5 className="mt-medium mb-small">Broader resources</h5>
                                            <p>
The fund managers are supported by internal fund analysts and external
                                                research to help them decide which funds to invest in. The team analyses
                                                thousands of investment funds to determine whether they merit inclusion.
                                                The team also has access to wider investment resources at Octopus,
                                                including more than 100 dedicated investment professionals. If you would
                                                like to speak to one of the fund managers, please ask your Octopus
                                                Wealth adviser and they will set up a meeting for you.
                                            </p>
                                        </div>
                                        <div className="col-10 quote">
                                            <p>
                                                <b>
“The Multi Manager team has honed its investment approach down the
                                                years, delivering high-quality investment portfolios for individuals,
                                                charities
                                                and other institutions.”
                                                </b>
                                                <small>Simon Reynolds, Fund Manager</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div id="understanding_the_risks">
                                        <div className="col-8">
                                            <h1 className="mt-xlarge mb-large">Understanding the risks</h1>
                                            <p>
                                                <b>
All of us face different risks every day. We want to make sure you
                                                understand and feel comfortable with the key risks associated with the
                                                Octopus Portfolio Service before making any decisions.
                                                </b>
                                            </p>
                                            <ul className="thick_thunder">
                                                <li>
                                                    <h5 className="mb-small">You could lose money</h5>
                                                    <p>
Investing in the Octopus Portfolio Service puts your capital at
                                                        risk. The value of your investment and the income you derive
                                                        from it may go down as well as up and there is a chance you may
                                                        not get back the full amount invested.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5 className="mb-small">The value of your investment may fluctuate</h5>
                                                    <p>
Investment markets can be volatile and, as the value of markets
                                                        goes up and down, the value of your Octopus Portfolio Service
                                                        investment will change too. The extent to which your investment
                                                        may rise and fall will depend on the combination of different
                                                        assets within your portfolio. It is therefore important to talk
                                                        to your adviser first about the volatility of the investment
                                                        profile you choose, and select an option that best reflects your
                                                        tolerance for risk and potential losses.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5 className="mb-small">Past performance is no guide to the future</h5>
                                                    <p>
The past performance of an investment is not a reliable indicator
                                                        of future results. Nor should you rely on any forecasts made
                                                        about future returns. We can’t guarantee the level of capital
                                                        gains or income that will be generated through your Octopus
                                                        Portfolio Service investment. There is no guarantee that your
                                                        portfolio will meet the objectives of your investment
                                                        profile.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5 className="mb-small">This is a medium to long-term investment</h5>
                                                    <p>
As your Octopus Wealth adviser will explain, any investment in
                                                        the Octopus Portfolio Service should be considered a medium to
                                                        long-term investment. Suggested minimum holding periods are
                                                        shown in the investment profile factsheets, available from your
                                                        Octopus Wealth adviser.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5 className="mb-small">Fees and charges will reduce the value of your investment</h5>
                                                    <p>
The performance of your investment will be affected by the fees
                                                        and charges. Your Octopus Wealth adviser will explain to you how
                                                        the fees and charges work, for both the Octopus Portfolio
                                                        Service, and the supporting advice. This will form part of any
                                                        proposal prepared for you.
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5 className="mb-small">
Your chosen investment profile may not meet your performance
                                                    goals
                                                    </h5>
                                                    <p>
We will manage your portfolio according to the investment profile
                                                        your Octopus Wealth adviser has recommended for you. There is no
                                                        guarantee the investment profiles will meet their investment
                                                        objectives. Changing market conditions mean that, for short
                                                        periods of time, the risk of the investment profiles can deviate
                                                        from the long-term target.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-10 quote">
                                            <h5>
“Our goal is to be totally transparent with
                                                our investors. We want them to understand how our products work, how
                                                their money is being invested and what the investment risks are, before
                                                they decide to invest.”
                                                <small>John Averill, Head of Compliance and Risk</small>
                                            </h5>
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

export default octopusPortfolioService;
