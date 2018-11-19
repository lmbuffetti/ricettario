/* eslint-disable max-len */
import React, { Component } from 'react';
import { StickyContainer } from 'react-sticky';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const arrowLeft = '/static/img/arrow-left.svg';

const {
    Events,
    scrollSpy,
} = Scroll;
const scroll = Scroll.animateScroll;

// IMAGE

class guides extends Component {
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
            <div className="htmlPage staticMenu">
                <div id="bannerHeader" className="bg_light_white">
                    <h3 className="fontFamilyDefault">Octopus Wealth</h3>
                    <h1>Guides</h1>
                </div>
                <StickyContainer className="wrapContent">

                    <div>
                        <div className="one_column">
                            <div className="textDescription">
                                <div className="container">
                                    <div className="col-8">
                                        <div className="boxView">
                                            <div>
                                                <Link to="/risk-and-volatility">
                                                    <h3 className="mb-small">Explaining risk return and volatility</h3>
                                                    <small>
Read more
                                                        <img src={arrowLeft} alt="arrow Left" />
                                                    </small>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/understanding-fees">
                                                    <h3 className="mb-small">Understanding fees</h3>
                                                    <small>
Read more
                                                        <img src={arrowLeft} alt="arrow Left" />
                                                    </small>
                                                </Link>
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

export default guides;
