import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import isNaN from 'lodash/isNaN';
import { Loading } from '../Loading';

const TableLegacy = Loadable({
    loader: () => import('./TableLegacy' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TableLegacyIHT = Loadable({
    loader: () => import('./TableLegacyIHT' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TableOurPricingCompetition = Loadable({
    loader: () => import('./TableOurPricingCompetition' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TablePensionContribution = Loadable({
    loader: () => import('./TablePensionContribution.jsx' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TableOurPricing = Loadable({
    loader: () => import('./TableOurPricing.jsx' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TableMakingMoneyFull = Loadable({
    loader: () => import('./TableMakingMoneyFull.jsx' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
const TableMakingMoney = Loadable({
    loader: () => import('./TableMakingMoney.jsx' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});
class Table extends Component {
    constructor(props) {
        super(props);
        this.renderConditionalTable = this.renderConditionalTable.bind(this);
        this.changeValueTable = this.changeValueTable.bind(this);
        this.handleEditText = this.handleEditText.bind(this);
    }

    changeValueTable(e) {
        const { ihtA } = this.props;
        ihtA(e);
    }

    handleEditText(e) {
        const { editText } = this.props;
        editText(e);
    }

    renderConditionalTable() {
        const {
            data, chartsType, label1, label2, label3, label4, childName1, childName2, options, planCompare, edit, ihtAVal, ihtBVal, width, height, step, year, title, titleCompare, assumesPortfolio, competition, octopusCarib,
        } = this.props;
        switch (chartsType) {
            case 'legacy_tax':
                return (
                    <TableLegacyIHT
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        step={step}
                    />
                );
            case 'legacy':
                return (
                    <TableLegacy
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        step={step}
                    />
                );
            case 'pensions_contribution':
                return (
                    <TablePensionContribution
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        year={isNaN(year) ? 0 : year}
                        childName2={childName2}
                        step={step}
                    />
                );
            case 'making_money_full_table':
                return (
                    <TableMakingMoneyFull
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        step={step}
                        title={title}
                        titleCompare={titleCompare}
                    />
                );
            case 'making_money':
                return (
                    <TableMakingMoney
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        step={step}
                        title={title}
                        titleCompare={titleCompare}
                    />
                );
            case 'our_pricing':
                return (
                    <TableOurPricing
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        editText={this.handleEditText}
                        step={step}
                    />
                );
            case 'our_pricing_competition':
                return (
                    <TableOurPricingCompetition
                        data={data}
                        chartsType={chartsType}
                        label1={label1}
                        label2={label2}
                        label3={label3}
                        label4={label4}
                        ihtA={this.changeValueTable}
                        octopusCarib={octopusCarib}
                        year={isNaN(year) ? 0 : year}
                        childName1={childName1}
                        options={options}
                        planCompare={planCompare}
                        competition={competition}
                        assumesPortfolio={assumesPortfolio}
                        edit={edit}
                        ihtAVal={ihtAVal}
                        ihtBVal={ihtBVal}
                        width={width}
                        height={height}
                        step={step}
                    />
                );
            default:
                return (
                    <div>no table exist</div>
                );
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderConditionalTable()}
            </React.Fragment>
        );
    }
}

Table.propTypes = {
    assumesPortfolio: PropTypes.string,
    competition: PropTypes.string,
    editText: PropTypes.func,
    octopusCarib: PropTypes.string,
    ihtA: PropTypes.func,
    ihtAVal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    ihtBVal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    data: PropTypes.arrayOf(PropTypes.any),
    childName1: PropTypes.string,
    childName2: PropTypes.string,
    chartsType: PropTypes.string,
    edit: PropTypes.bool,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    planCompare: PropTypes.string,
    year: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    step: PropTypes.number,
    title: PropTypes.string,
    titleCompare: PropTypes.string,
    options: PropTypes.object,
};
Table.defaultProps = {
    assumesPortfolio: '',
    competition: '',
    editText: null,
    octopusCarib: '',
    ihtA: null,
    ihtAVal: 0,
    ihtBVal: 0,
    data: [],
    childName1: '',
    childName2: '',
    chartsType: '',
    edit: false,
    label1: '',
    label2: '',
    label3: '',
    label4: '',
    planCompare: '',
    year: 1900,
    width: 0,
    height: 0,
    step: 0,
    title: '',
    titleCompare: '',
    options: {},
};
export default Table;
