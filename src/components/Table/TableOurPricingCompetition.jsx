import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrentIcon } from '../Charts/assetsIcon';

class TableOurPricingCompetition extends Component {
    constructor(props) {
        super(props);
        this.changeIHTA = this.changeIHTA.bind(this);
    }

    changeIHTA(e) {
        const { ihtA } = this.props;
        ihtA(e);
    }

    render() {
        const {
            width, height, edit, childName1, year, ihtAVal, ihtBVal, competition, octopusCarib, assumesPortfolio,
        } = this.props;
        return (
            <div className="table_data" style={{ width, height }}>
                <div>
                    <div className="boxShadow">
                        <h2>
                            <div>
                                <svg viewBox="0 0 1024 1024">{getCurrentIcon.trends_up}</svg>
                            </div>
                                £
                            {
                                edit
                                    ? (
                                        <input
                                            type="text"
                                            name="childName1"
                                            value={childName1}
                                            onChange={this.changeIHTA}
                                        />
                                    )
                                    : <span>{parseInt(childName1, 10).toLocaleString('en')}</span>
                            }
                        </h2>
                        <h5>
                                Addition to your asset base over
                            {
                                edit
                                    ? (
                                        <input
                                            type="text"
                                            name="year"
                                            value={year}
                                            onChange={this.changeIHTA}
                                        />
                                    )
                                    : (
                                        <span
                                            dangerouslySetInnerHTML={{ __html: `&nbsp;${year}&nbsp;` }}
                                        />
                                    )
                            }
                                years (today&apos;s money*)
                        </h5>
                    </div>
                    <table className="table_layout table_column_2">
                        <thead>
                            <tr>
                                <th className="bg_grey" colSpan={2}>Costo differential (TER)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Competition</td>
                                {
                                    edit
                                        ? (
                                            <td>
                                                <input
                                                    type="text"
                                                    name="ihtAVal"
                                                    value={ihtAVal}
                                                    onChange={this.changeIHTA}
                                                />
                                            </td>
                                        )
                                        : (
                                            <td>
                                                {ihtAVal.toLocaleString('en')}
%
                                            </td>
                                        )
                                }
                            </tr>
                            <tr>
                                <td>Octopus (Carib)</td>
                                {
                                    edit
                                        ? (
                                            <td>
                                                <input
                                                    type="text"
                                                    name="competition"
                                                    value={competition}
                                                    onChange={this.changeIHTA}
                                                />
% p.a.
                                            </td>
                                        )
                                        : (
                                            <td>
                                                {competition}
% p.a.
                                            </td>
                                        )
                                }
                            </tr>
                            <tr>
                                {
                                    edit
                                        ? (
                                            <td>
Average cost saving p.a.
                                                <br />
(assumes £
                                                <input
                                                    type="text"
                                                    name="octopusCarib"
                                                    value={octopusCarib}
                                                    onChange={this.changeIHTA}
                                                />
                                        portfolio)
                                            </td>
                                        )
                                        : (
                                            <td>
Average cost saving p.a.
                                                <br />
(assumes
                                        £
                                                {parseFloat(octopusCarib).toLocaleString('en')}
                                                {' '}
portfolio)
                                            </td>
                                        )
                                }
                                {
                                    edit
                                        ? (
                                            <td>
                                                <input
                                                    type="text"
                                                    name="assumesPortfolio"
                                                    value={assumesPortfolio}
                                                    onChange={this.changeIHTA}
                                                />
% p.a.
                                            </td>
                                        )
                                        : (
                                            <td>
                                                {assumesPortfolio}
% p.a.
                                            </td>
                                        )
                                }
                            </tr>
                            <tr>
                                <td>Total cost save for 1st Year</td>
                                {
                                    edit
                                        ? (
                                            <td>
£
                                                <input
                                                    type="text"
                                                    name="ihtBVal"
                                                    value={ihtBVal}
                                                    onChange={this.changeIHTA}
                                                />
                                            </td>
                                        )
                                        : <td>{ihtBVal.toLocaleString('en')}</td>
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TableOurPricingCompetition.propTypes = {
    ihtA: PropTypes.func,
    ihtAVal: PropTypes.number,
    ihtBVal: PropTypes.number,
    childName1: PropTypes.string,
    assumesPortfolio: PropTypes.string,
    octopusCarib: PropTypes.string,
    competition: PropTypes.string,
    year: PropTypes.number,
    edit: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
};
TableOurPricingCompetition.defaultProps = {
    ihtA: null,
    ihtAVal: 0,
    ihtBVal: 0,
    childName1: '',
    assumesPortfolio: '',
    octopusCarib: '',
    competition: '',
    year: 0,
    edit: false,
    height: 0,
    width: 0,
};
export default TableOurPricingCompetition;
