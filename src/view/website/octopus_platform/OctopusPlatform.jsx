import React, { Component } from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const arrowLeft = '/static/img/arrow-left.svg';

const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

class OctopusPlatform extends Component {
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

    render() {
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
                                        <li className="active">
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
                        <h1 className="mt-xlarge mb-large">Octopus Platform T&Cs</h1>
                        <div className="boxView largeHeight">
                            <div>
                                <Link to="terms-and-conditions">
                                    <h3 className="mb-small">Terms and Conditions</h3>
                                    <p>Agreement that applies to investments made through the Octopus Platform.</p>
                                    <small>
Read more
                                        <img src={arrowLeft} alt="arrow=left" />
                                    </small>
                                </Link>
                            </div>
                            <div>
                                <Link to="octopus-gia">
                                    <h3 className="mb-small">Octopus GIA Key Features</h3>
                                    <p>
A guide to help you decide whether the Octopus Platform General Investment Account
                                        (GIA) is right for you.
                                    </p>
                                    <small>
Read more
                                        <img src={arrowLeft} alt="arrow=left" />
                                    </small>
                                </Link>
                            </div>
                        </div>
                        <div className="boxView largeHeight">
                            <div>
                                <Link to="octopus-isa">
                                    <h3 className="mb-small">Octopus ISA Key Features</h3>
                                    <p>
A guide to help you decide whether the Octopus Platform Individual Savings Account
                                        (ISA) is right for you.
                                    </p>
                                    <small>
Read more
                                        <img src={arrowLeft} alt="arrow=left" />
                                    </small>
                                </Link>
                            </div>
                            <div>
                                <Link to="octopus-sipp">
                                    <h3 className="mb-small">Octopus SIPP Key Features</h3>
                                    <p>
A guide to help you decide whether the Octopus Self-Invested Personal (SIPP) is
                                        right for you.
                                    </p>
                                    <small>
Read more
                                        <img src={arrowLeft} alt="arrow=left" />
                                    </small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </StickyContainer>
            </div>
        );
    }
}

export default OctopusPlatform;
