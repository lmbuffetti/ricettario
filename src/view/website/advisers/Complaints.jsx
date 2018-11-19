/* eslint-disable max-len */
import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const {
    Events, scrollSpy, animateScroll,
} = Scroll;

class Complaints extends Component {
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
        animateScroll.scrollTo(0);
        return (
            <div className="container">
                <StickyContainer className="wrapContent row">
                    <div className="col-3">
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
                                        <li>
                                            <Link to="/privacy-policy">
                                                    Privacy Policy
                                            </Link>
                                        </li>
                                        <li className="active">
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
                        <h1 className="mt-xlarge mb-large">Complaints</h1>
                        <h5 className="mt-large mb-small">
We hope you never have to read this…
                            <br />
                            But if you do, we’re sorry
                        </h5>
                        <div className="introText">
                            <p>
Carib Planning Limited trading as Octopus Wealth is authorised and regulated in the UK by
                                the Financial Conduct Authority. Our reference number is 778951 and you can find us on
                                the FCA’s register at
                                <a
                                    href="https://register.fca.org.uk"
                                    rel="noopener noreferrer"
                                    target="_blank"
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
                        <div name="our_principles" id="our_principles">
                            <h3 className="mt-large mb-small">
We try to get it right first time, every time. But if something’s gone wrong, let’s fix
                                it.
                            </h3>
                            <p>
We always aim to provide the highest level of service. However, there may be times when
                                our service doesn’t live up to your expectations.
                            </p>

                            <p>
Here we explain how to make a complaint to us, and the process that we’ll follow. We aim
                                to make it as simple and easy as possible.
                            </p>
                            <ul>
                                <li>be open, honest and transparent in the way we deal with you;</li>
                                <li>not place our interests above yours;</li>
                                <li>communicate clearly, promptly and without jargon.</li>
                            </ul>
                        </div>
                        <div name="the_type_of_advice" id="the_type_of_advice">
                            <h3 className="mt-large mb-small">1. First, tell us what went wrong</h3>
                            <p>To outline the details of your complaint, get in touch either:</p>

                            <ul>
                                <h6>By email…</h6>
                                <a href="mailto:richard@octopuswealth.com">richard@octopuswealth.com</a>

                                <h6 className="mt-small">By phone…</h6>
                                <p>020 7390 0222</p>

                                <h6>Or by post…</h6>
                                <p>Complaint Manager, Octopus Wealth, 6th Floor 33 Holborn, London EC1N 2HT</p>

                            </ul>
                        </div>
                        <div name="investment_objectives_and_restrictions" id="investment_objectives_and_restrictions">
                            <h3 className="mt-large mb-small">2. We’ll do our best to resolve your complaint as soon as we can</h3>
                            <p>
We make a point of trying to resolve any complaints as quickly as possible – ideally the
                                same day, if we can.
                            </p>

                            <p>
If we can’t resolve the matter to your liking within three working days, we’ll send you a
                                printed copy of this procedure, along with a written acknowledgement that confirms we’ve
                                received your complaint, who’s looking into it for you. All complaints are handled by a
                                suitably qualified senior person who won’t have been involved in the initial complaint,
                                and who will be happy to speak to you directly.
                            </p>

                            <p>
Although our regulator allows us up to 8 weeks to communicate our findings to you in a
                                final response letter, we’ll try and do this at the earliest opportunity – and we’ll
                                keep you updated regularly on the progress of our enquiries. When we do send you our
                                findings, we hope you’ll be completely satisfied with how we’ve responded, and if you’ve
                                any further feedback we’d love to hear it.
                            </p>
                        </div>
                        <div name="how_we_are_paid" id="how_we_are_paid">
                            <h3 className="mt-large mb-small">3. How we’ll fix it for you</h3>
                            <p>
If we feel that we didn’t get things right, we’ll accept this. We’re never reluctant to
                                say sorry where it’s due. Where necessary we’ll look to fix anything outstanding, and if
                                we think that any compensation is warranted then we’re committed to offering a fair
                                amount.
                                {' '}
                            </p>
                        </div>
                        <div name="client_classification" id="client_classification">
                            <h3 className="mt-large mb-small">4. Escalating your complaint: the Financial Ombudsman Service</h3>
                            <p>
It’s important that we’re given the chance to try and resolve your concerns, and we’ll
                                always try to be fair and reasonable in our approach.
                            </p>

                            <p>
With this in mind, please allow us enough time to make our enquiries and to come back to
                                you with our findings. If at that time, you’re not happy with how we’ve proposed to
                                resolve your complaint, you can refer the matter to the Financial Ombudsman Service
                                within six months from the date we send you our final response.
                            </p>

                            <p>
The Financial Ombudsman Service is an independent, impartial and free-to-use service that
                                adjudicates unresolved complaints between financial services providers and their
                                customers. We’ll send you their details along with our final response.
                            </p>

                            <p>
You can find out more about them from their website –
                                <a href="http://www.financial-ombudsman.org.uk/" rel="noopener noreferrer" target="_blank">http://www.financial-ombudsman.org.uk/</a>
                                {' '}
– or you can give them a call on
                                <b>0300 123 9123.</b>
                            </p>
                            <p>
In the unlikely event that, after eight weeks, we still haven’t issued our final
                                response, you can then refer the matter due to our delay. We’d also write to you at that
                                point to let you know when we think we’ll be able to resolve the matter.
                            </p>
                        </div>
                        <div name="how_we_act_for_you" id="how_we_act_for_you">
                            <h3 className="mt-large mb-small">5. If we’ve made a mistake, we’ll try and do better in future</h3>
                            <p>
It goes without saying that we keep records of any complaints we receive and we’ll retain
                                these for at least five years from when a complaint was received. Importantly, we review
                                these to learn what may have gone wrong so that we can guard against making any similar
                                mistakes going forward. We’ll always look to do better in future.
                            </p>
                        </div>
                        <div name="anti-money_laundering" id="anti-money_laundering">
                            <p>
                                <b>
Thanks in advance for getting in touch. We’re sorry if we’ve let you down, and
                                appreciate you letting us know.
                                </b>
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

export default Complaints;
