/* eslint-disable max-len */
import React, { Component } from 'react';

const glossary = {
    'ACCEPTABLE ASSETS': 'Assets that may be held in custody and may only be sold, or listed on the Octopus Platform for valuation purposes.',
    ACCOUNT: 'The account opened to record investments that are made through the Octopus Platform.',
    ACT: 'The Financial Services and Markets Act 2000.',
    'ADMINISTRATION ADDRESS': 'Carib Planning Limited, 33 Holborn, London, EC1N 2HT',
    ADVISER: 'A person authorised by the FCA to advise on investments, provide basic advice on stakeholder products, deal investments or arrange (bring about) deals in investments and arrange the safeguarding and administration of Assets. Your Adviser will be authorised by you to give instructions on your behalf on all matters concerning your Account.',
    'ADVISER FEES': 'The fees agreed between Carib Planning Limited and you, for the services they provide, as detailed in the Application.',
    '“AMC”': 'The Annual Management Charge is levied by the fund manager for managing the Fund’s investments.',
    APPLICATION: 'An application completed by you to open an Account.',
    'APPROVED BANK': 'This has the meaning given in the FCA Rules.',
    ASSETS: 'Are Securities and Funds, income, interest, cash balances and any other rights and entitlements from time to time held within your Account.',
    'AVAILABLE BALANCE': 'The cash balance(s) in your Account(s) that you can use to settle trades or pay fees on the Octopus Platform.',
    BANK: 'An Institution appointed from time to time to hold your money. Details are available from your Adviser.',
    'BEST EXECUTION POLICY': 'As defined in the Policy Document which lays out the approach that the Platform will take when executing deals to establish the best possible result for you taking into account price, costs, speed, likelihood of execution and settlement, size, nature or any other consideration relevant to the execution of the trade. Details are available from your Adviser.',
    'BULK TRADE': 'Multiple client orders to deal in one Security that are processed as a single trade.',
    'BUSINESS DAY': 'Any day other than a Saturday, Sunday or Bank Holiday, or on which banks are open for business in London.',
    'BUYING POWER': 'This enables the maintenance of model portfolios without any fixed percentage allocation to cash, and also ensures that the investors assets are not needlessly divested to generate suficient cash to cover future obligations. To achieve this the Platform will automatically estimate and ‘ring-fence’ suficient cash to cover future Adviser, Platform and any DM fees (12 months fees) and, where requested to cover withdrawals (6 months withdrawals). This ‘ring-fenced’ or uninvested cash will be automatically re-calculated each time a cashflow event occurs namely a transaction, contribution or withdrawal.',
    'CASH RESERVE': 'A Client Account within your Octopus ISA and JISA used solely for money destined for eventual investment in one or more Investments available on the Octopus Platform.',
    'CLEAN SHARE CLASS': 'Fund Units where the AMC is the charge the manager applies for managing the funds with no rebates.',
    CLIENT: 'An individual or Corporate entity opening an Account on the Octopus Platform.',
    'CLIENT ACCOUNT': 'Client money trust account as designated by the FCA CASS (Client Money Rules) which are managed by us.',
    'CLIENT MONEY RULES': 'The provisiconsoleons in respect of Client money set out in the FCA Rules.',
    'CLIENT REFERENCE': 'The number assigned to the account(s) we hold in your name to record investments you make through the Octopus Platform.',
    COLLECTIVE: 'An investment such as a Unit Trust (Fund), Investment Trust, Exchange Traded Funds (ETFs) and Open-Ended Investment Companies (OEICs).',
    'CONFLICTS OF INTEREST POLICY': 'The policy as required by the FCA Rules, a summary of which is provided to you below. Further details are available upon request.',
    'CONTRACT NOTE / LIST/ CONFIRMATION': 'Is an electronic record detailing the particulars of your deal(s).',
    CUSTODIAN: 'This has the meaning given in the FCA Rules.',
    DEAL: 'Means to buy or sell Securities and Funds (and cognate expressions, such as dealings, trades, transactions, shall be construed accordingly).',
    'DEALING CUT-OFF TIME': 'The time by which an instruction needs to be processed in order to be placed at the next Valuation Pricing Time.',
    '“DM” - DISCRETIONARY MANAGER': 'A Firm authorised by the FCA to manage investments, which may be appointed by you or your Adviser.',
    '“DM FEES”': 'The fees agreed between your DM and you, for the services they provide, as detailed in the Application.',
    '“EEA”': 'The European Economic Area.',
    '“ETF”': 'An Exchange Traded Fund.',
    'EXECUTION VENUES': 'A Regulated Market, Multilateral Trading Facility, an authorised firm that executes orders off its own book, a market maker, a liquidity provider or any entity outside the European Economic Area which performs a similar function to any of these and the fund managers or their administrators using EMX, Allfunds Bank or other proprietary messaging links.',
    '“FCA” THE FINANCIAL CONDUCT AUTHORITY': 'The regulator for the UK’s Financial Services Industry, which can be contacted at 25 The North Colonnade, Canary Wharf, London, E14 5HS or through its website www.fca.org.uk.',
    'FCA RULES': 'The FCA Handbook and any other rules and guidance of the FCA, as amended, replaced or supplemented from time to time.',
    FEES: 'One of the bases of remuneration permitted by the FCA Rules.',
    '“FSCS” FINANCIAL SERVICES COMPENSATION SCHEME': 'The compensation fund of last resort for customers of authorised  financial services  firms. If a  firm becomes insolvent or ceases trading they may be able to pay limited compensation to its customers.',
    'FUND(S)': 'An authorised Unit Trust, recognised scheme or Open-Ended Investment Company (OEIC), or sub-fund thereof.',
    '“HMRC”': 'Her Majesty’s Revenue and Customs.',
    '“HUBWISE”': 'Hubwise Securities Limited.',
    'HUBWISE JISA': 'A Junior Individual Savings Account managed under the ISA Regulations. The Hubwise JISA is a Stocks and Shares JISA as defined by HMRC.',
    'HUBWISE OFFSHORE BOND': 'An Offshore Bond arranged with RL360°, part of the International Finance Group.',
    'HUBWISE PERSONAL PENSION': 'A Personal Pension arranged with a Third-Party Pension Provider (TPPP).',
    'HUBWISE SERVICES': 'refers to those services required to be provided directly to you from time to time by Hubwise as a retail client of Hubwise for compliance with the FCA Rules which are referred to in these T&Cs.',
    'HUBWISE SIPP': 'A Self-Invested Personal Pension arranged with a Third-Party Pension Provider (TPPP).',
    'IN SPECIE': 'A phrase describing the transfer of an asset in its present form, rather than selling it and distributing the cash.',
    INCOME: 'All payments received as income including any tax payments we reclaim for your Account.',
    '“ISA” INDIVIDUAL SAVINGS ACCOUNT': 'An Individual Savings Account managed under the ISA Regulations.',
    'ISA MANAGER': 'Hubwise Securities Limited (HMRC ISA Manager No. Z1723) acting in its capacity as manager of your ISA.',
    'ISA REGULATIONS': 'The Individual Savings Account Regulations 1998 as amended supplemented and modified from time to time.',
    'JUNIOR INDIVIDUAL SAVINGS ACCOUNT (JISA)': 'An Individual Savings Account that can be opened by a parent or guardian to save for a child’s benefit at age 18.',
    'JOINT HOLDERS': 'Additional persons who can invest in the same investment within a GIA.',
    '“KIID” KEY INVESTOR INFORMATION DOCUMENT': 'A document that provides essential information and key facts about Funds to help investors assess whether a particular Fund meets their needs.',
    '‘LEI’ LEGAL ENTITY IDENTIFIER': 'is a unique reference required by legal entities or structures, which includes companies, charities and trusts. The LEI allows the parties to financial transactions to be identified in any jurisdiction. Legal entities trading on regulated exchanges such as the London Stock Exchange, will require a LEI for all transactions from 3 January 2018. Bare (Absolute) trusts are excluded.',
    'MODEL PORTFOLIO': 'Is a selection of Assets chosen by your Adviser or DM designed by them to be suitable and achieve a particular investment strategy or your goal.',
    'MULTILATERAL TRADING FACILITY': 'A multilateral system operated by an investment firm or market operator which brings together multiple third-party buyers and sellers in  nancial instruments and which is subject to nondiscretionary rules.',
    'NATIONAL CLIENT IDENTIFIERS': 'These are required to allow the platform to comply with European and FCA regulation regarding transaction reporting. For a UK citizen this will be their national insurance number. For other nationals this will be the prescribed Concat reference.',
    'NATURAL INCOME': 'Income derived from the Assets held on the Octopus Platform.',
    'NOMINATED BANK ACCOUNT': 'A UK Bank or Building Society account of yours which is associated with your Octopus Platform Account(s).',
    'NOMINEE/NOMINEE COMPANY': 'A Custodian, either the wholly owned Subsidiary of Hubwise (Hubwise Nominees Limited) or any other Nominee Company as may be agreed between Hubwise and your Adviser to hold certain asset classes.',
    'OCTOPUS GIA (GIA)': 'A taxable Investment Account.',
    'OCTOPUS ISA': 'An Individual Savings Account managed under the ISA Regulations. The Octopus ISA is a Stocks and Shares ISA as defined by HMRC.',
    'OCTOPUS PLATFORM': 'The Service provided by Hubwise Securities Limited ‘Hubwise’ to Carib Planning Limited.',
    OMBUDSMAN: 'The Financial Ombudsman Service who may be contacted at Exchange Tower, London, E14 9SR or through its website <a href="http://www.financial-ombudsman.org.uk/" target="_blank">www.financial-ombudsman.org.uk</a>.',
    'PENSION PRODUCTS': 'Means Pension Products offered by third parties on the Octopus Platform.',
    'PERSONAL DATA': 'Any information relating to you or your use of the services provided under these T&Cs and processed in connection with these T&Cs. Such Data will be held in accordance with the Data Protection Act 1998, as amended, replaced or supplemented from time to time.',
    'PLATFORM FEE': 'The Fee payable by you in relation to the Octopus Platform Services as detailed in the Schedule of Charges.',
    PORTFOLIO: 'The Assets belonging to you as detailed on the Octopus Platform.',
    'PRIMARY HOLDER': 'The  first named applicant on an Octopus Platform Application form.',
    'PRODUCT CHARGES': 'Charges for SIPP, Personal Pension and Offshore Bond as detailed in the Schedule of Charges which form part of these T&Cs and associated Product documents.',
    REBALANCE: 'A service which may be made available by your Adviser or a DM (if appointed) that enables them to align and maintain your Assets to the Portfolio percentages specified in a Model Portfolio.',
    'REGULAR CONTRIBUTIONS': 'A service offered by the Octopus Platform that enables you to set up regular monthly contributions into your Account. It includes a regular savings facility for Octopus GIA, Octopus ISA, Hubwise JISA, Hubwise Personal Pension and Hubwise SIPP Accounts.',
    'REGULAR WITHDRAWAL': 'An option to help manage payments you have arranged to go out of your Client Account for Octopus GIAs, Cash Reserve for Octopus ISAs and JISAs and Scheme Bank Account for the Hubwise Personal Pension or Hubwise SIPP. Where we receive instructions to make payments from any of the afore mentioned but do not have enough money in that account to meet the payments sales will be undertaken to raise the shortfall.',
    'REGULATED MARKET OR REGULATED INVESTMENT EXCHANGE (RIE)': 'Is a multilateral facility operated by a market operator in the EEA, such as the London Stock Exchange, that brings together multiple third parties buying and selling interests in financial instruments where the instruments traded are admitted to the market, according to its rules and systems.',
    'RETAIL CLIENT': 'Has the meaning given to that term in the FCA Rules.',
    'SCHEDULE OF CHARGES': 'Details of any interest, costs, fees or other charges, as varied from time to time, which apply to your account with us. Details are available from your Adviser and the Schedule of Charges.',
    SCHEME: 'Is a Hubwise Personal Pension or Hubwise SIPP appropriately registered as a Pension Scheme and established under trust deed and rules.',
    'SCHEME BANK ACCOUNT': 'A designated trustee bank account through which payments in and out of the scheme will be made, the equivalent of the Client Account for Pension Products.',
    SECURITIES: 'Equities, Fixed Interest Securities, Investment Trusts, ETFs, Structured Products and other Exchange tradable Securities available on the Octopus Platform.',
    'SERVICEABLE ASSETS': 'Assets that are held in custody that can be bought or sold.',
    '“SIPP” SELF-INVESTED PERSONAL PENSION': 'A specific type of Personal Pension that offers customers a wide choice of Assets in which to invest as opposed to just a selection of Funds and Securities. SIPPs typically allow the customer to take control of the underlying Assets, or to appoint an Adviser to do this on their behalf.',
    SUBSIDIARY: 'has the meaning given to it in Section 1159 of the UK Companies Act 2006 as amended or replaced.',
    SWITCH: 'Is where an Asset is sold and the sale proceeds reinvested into another Asset.',
    '“T&CS” - TERMS AND CONDITIONS': 'These T&Cs, as from time to time amended, together with those in your signed Application, that form the basis on which you accept the services in relation to the Platform. The T&Cs will take precedence if the two differ.',
    '“TPPP”- THIRD PARTY PENSION PROVIDER': 'The Company that provides the services of trustee, operator and administrator of Pension Schemes and maintains all the necessary legal authorisations and regulations to enable it to provide the Hubwise Personal Pension and Hubwise SIPP for the Octopus Platform.',
    UNITS: 'Units or shares of any class in a Fund, including any fractions or decimals of Units.',
    UK: 'The United Kingdom.',
    'VALUATION PRICING TIME/VALUATION POINT': 'On a Business Day, the time set by the fund managers when the Fund is valued and the price of units set.',
    'WE, US AND OUR': 'The Octopus Platform.',
    WRAPPER: 'Any General Investment Account, Third Party Product Account (Hubwise Offshore Bond), Individual Saving Account or Pension Product (Hubwise SIPP or Hubwise Personal Pension) on the Octopus Platform.',
    YEAR: 'A year beginning on 6th April and ending on the following 5th April. This is commonly known as the Tax Year.',
    'YOU AND YOUR': 'A person (including trustees, a company and any other legal entity) who invests in an Account through the Octopus Platform.',
};

class Glossary extends Component {
    render() {
        const wordsList = [];
        Object.keys(glossary).map((key) => {
            const title = (key.charAt(0) !== '‘' && key.charAt(0) !== '“') ? key.charAt(0) : key.charAt(1);
            wordsList.push({ title: key, text: glossary[key], letter: title });
            return null;
        });
        return (
            <ul className="glossary">
                {
                    wordsList.map((item, i) => (
                        <li key={i.toString()} className="row">
                            {
                                i > 0
                                    && (
                                        <div className="clearfix">
                                            {
                                                wordsList[i - 1].letter !== item.letter
                                            && <hr />
                                            }
                                        </div>
                                    )
                            }
                            <div className="col-md-4">
                                {
                                    i > 0
                                        ? (
                                            <span>
                                                {
                                                    wordsList[i - 1].letter !== item.letter
                                                && [item.letter]
                                                }
                                            </span>
                                        )
                                        : <span>{item.letter}</span>
                                }
                            </div>
                            <div className="col-md-8">
                                <p dangerouslySetInnerHTML={{ __html: `<b>${item.title}:</b> ${item.text}` }} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Glossary;
