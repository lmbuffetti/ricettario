/* eslint-disable max-len */
/* eslint react/forbid-prop-types:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon';
import {
    Area, AreaChart, Label, linearGradient, ReferenceLine, stop, XAxis, YAxis,
} from 'recharts';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import get from 'lodash/get';
import { Loading } from '../Loading';
import CustomizedLabel from './CustomizedLabelChart';
import CustomizedAxisTick from './CustomizedAxisChart';
import CustomizedAxisYTick from './CustomizedAxisYChart';
import {
    indexOfMax, indexOfMax2, indexOfMin, indexOfMin2,
} from '../../helpers/WebappFunctions';
// import CustomizedDot from './Customized_Dot_Chart';
const CustomizedDot = Loadable({
    loader: () => import('./CustomizedDotChart' /* webpackChunkName: "customize-dot" */),
    loading: Loading,
});

const strokeWidth = 5;
const chartsLine = 'monotone';
class LineCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconSelect: false,
        };
        this.gradientOffsetVar = this.gradientOffsetVar.bind(this);
        this.gradientOffset = this.gradientOffset.bind(this);
        this.getChartScale = this.getChartScale.bind(this);
        this.getAreaLabel = this.getAreaLabel.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.selectedIcon = this.selectedIcon.bind(this);
        this.customIcon = this.customIcon.bind(this);
    }

    onChangePosition(type, e) {
        const {
            editNewPositionX,
            editNewPosition,
            editNewPositionLabelX,
            editNewPositionLabel,
            editNewPositionDotX,
            editNewPositionDot,
            edit,
        } = this.props;
        if (edit) {
            switch (type) {
                case 'iconX':
                    editNewPositionX(e);
                    break;
                case 'iconY':
                    editNewPosition(e);
                    break;
                case 'labelX':
                    editNewPositionLabelX(e);
                    break;
                case 'labelY':
                    editNewPositionLabel(e);
                    break;
                case 'dotX':
                    editNewPositionDotX(e);
                    break;
                case 'dotY':
                    editNewPositionDot(e);
                    break;
                default:
                    return null;
            }
        }
        return null;
    }

    getAreaLabel() {
        const {
            chartsCompareType,
            editAreaLabel,
            width,
            compare,
            data,
            chartsType,
            planCompare,
            viewAxisY,
        } = this.props;
        let labelValueCompare = 0;
        let lastArray;
        let lastPointWidth = 0;
        if (chartsCompareType.toLowerCase() === 'area' && editAreaLabel !== -1) {
            lastPointWidth = viewAxisY ? width - 30 - 100 - 80 + 80 - 60 : width - 30 - 100 - 80 + 80;
            if (compare) {
                let areaLabel = false;
                let id = 0;
                data.map((item, i) => {
                    if (chartsType === 'all_assets') {
                        if (item.areaLabelAssets) {
                            areaLabel = true;
                            id = i;
                        }
                    } else if (chartsType === 'liquid_assets') {
                        if (item.areaLabel) {
                            areaLabel = true;
                            id = i;
                        }
                    } else if (item.areaLabel) {
                        areaLabel = true;
                        id = i;
                    }
                    return null;
                });
                if (areaLabel && chartsType === 'liquid_assets') {
                    lastArray = data[id];
                    lastPointWidth = 0;
                } else if (areaLabel && chartsType === 'all_assets') {
                    lastArray = data[id];
                    lastPointWidth = 0;
                } else {
                    lastArray = data[data.length - 1];
                }
                let max;


                let min;
                switch (chartsType) {
                    case 'all_assets':
                        max = parseFloat(lastArray[`all_assets_compare_${planCompare}`]);
                        min = parseFloat(lastArray.all_assets_val);
                        labelValueCompare = (max - min).toFixed(0);
                        break;
                    case 'all_assets_netProperty':
                        max = parseFloat(lastArray[`all_assets_netPropertyCompare_${planCompare}`]) > parseFloat(lastArray.all_assets_netProperty) ? parseFloat(lastArray[`all_assets_netPropertyCompare_${planCompare}`]) : parseFloat(lastArray.all_assets_netProperty);
                        min = parseFloat(lastArray[`all_assets_netPropertyCompare_${planCompare}`]) > parseFloat(lastArray.all_assets_netProperty) ? parseFloat(lastArray.all_assets_netProperty) : parseFloat(lastArray[`all_assets_netPropertyCompare_${planCompare}`]);
                        labelValueCompare = (max - min).toFixed(0);
                        break;
                    case 'liquid_assets':
                        max = parseFloat(lastArray[`liquid_assets_compare_${planCompare}`]);
                        min = parseFloat(lastArray.liquid_assets_val);
                        labelValueCompare = (max - min).toFixed(0);
                        break;
                    case 'liquid_assets_trust':
                        max = parseFloat(lastArray[`liquid_assets_compare_${planCompare}`]) > parseFloat(lastArray[`netProperty_w_trust_compare_${planCompare}`]) ? parseFloat(lastArray[`liquid_assets_compare_${planCompare}`]) : parseFloat(lastArray[`netProperty_w_trust_compare_${planCompare}`]);
                        min = parseFloat(lastArray[`liquid_assets_compare_${planCompare}`]) > parseFloat(lastArray[`netProperty_w_trust_compare_${planCompare}`]) ? parseFloat(lastArray.liquid_assets_val) : parseFloat(lastArray[`netProperty_w_trust_compare_${planCompare}`]);
                        labelValueCompare = (max - min).toFixed(0);
                        break;
                    default:
                        return null;
                }
            }
        }
        let newValue;


        let defLabel;


        let overLabel = false;


        let sign = '+';
        if (labelValueCompare < 0) {
            labelValueCompare *= -1;
            sign = '-';
        }

        if (chartsCompareType === 'Area' || chartsCompareType === 'area') {
            if (labelValueCompare) {
                if (labelValueCompare > 1000000) {
                    newValue = (labelValueCompare / 1000000).toFixed(1);
                    newValue = sign === '-' ? newValue * -1 : newValue;
                    defLabel = `£${newValue}m`;
                    overLabel = true;
                } else if (labelValueCompare > 1000) {
                    newValue = (labelValueCompare / 1000).toFixed(0);
                    newValue = sign === '-' ? newValue * -1 : newValue;
                    defLabel = `£${newValue}k`;
                    overLabel = true;
                } else if (labelValueCompare > 0) {
                    newValue = labelValueCompare.toFixed(0);
                    newValue = sign === '-' ? newValue * -1 : newValue;
                    defLabel = `£${newValue}`;
                    overLabel = true;
                }
                labelValueCompare = sign === '-' ? labelValueCompare * -1 : labelValueCompare;
            }
        }
        return {
            newValue,
            defLabel,
            overLabel,
            lastPointWidth,
            labelValueCompare,
        };
    }

    getChartScale(type) {
        const {
            viewAxisYInterval,
            charScale,
            chartsType,
            maxAxisAllChart,
            exclude,
            maxAxisAllChart1,
            maxAxisAllChart2,
            maxAxisAllChart3,
            minAxisAllChart1,
            minAxisAllChart2,
            minAxisAllChart3,
        } = this.props;
        let maxScale;
        let minScale;
        const dataKeyY = [];
        let valMaxscale;
        if (exclude === 5) {
            if (chartsType === 'all_assets_detailed' || chartsType === 'all_assets_detailed_bpr' || chartsType === 'liquid_assets_detailed') {
                minScale = 0;
            } else {
                minScale = 'auto';
            }
        } else {
            switch (charScale) {
                case 2:
                    maxScale = maxAxisAllChart2;
                    minScale = minAxisAllChart2;
                    break;
                case 3:
                    maxScale = maxAxisAllChart3;
                    minScale = minAxisAllChart3;
                    break;
                default:
                    maxScale = maxAxisAllChart1;
                    minScale = minAxisAllChart1;
            }
            if (maxScale !== null && minScale !== null) {
                if (maxScale.length > 1) {
                    maxScale = indexOfMax2(maxScale);
                } else if (maxScale.length > 1) {
                    maxScale = maxScale[0];
                }
                if (minScale.length > 1) {
                    minScale = indexOfMin2(minScale);
                } else if (minScale.length > 1) {
                    minScale = minScale[0];
                }
            } else {
                minScale = 0;
                maxScale = 0;
            }
            minScale = minScale < 0 ? minScale : 0;
            minScale = Math.round(minScale);
            if (charScale === 1) {
                maxScale = Math.round(maxAxisAllChart);
            } else {
                maxScale = Math.round(maxScale);
            }
            switch (true) {
                case maxScale >= 2500000:
                    valMaxscale = (Math.ceil(maxScale / 1000000)) * 1000000;
                    break;
                case maxScale > 500000:
                    valMaxscale = (maxScale - (maxScale % 500000)) + 500000;
                    break;
                case maxScale > 0:
                    valMaxscale = (maxScale - (maxScale % 10000)) + 10000;
                    break;
                default:
                    return null;
            }
            for (let i = 0; i <= viewAxisYInterval; i += 1) {
                const singVal = valMaxscale / viewAxisYInterval;
                dataKeyY.push(Math.round(singVal * i));
            }
        }
        switch (type) {
            case 'maxScale':
                if (charScale === 1) {
                    return parseFloat(maxAxisAllChart);
                }
                return valMaxscale;

            case 'minScale':
                return minScale;
            case 'ticks':
                return dataKeyY;
            default:
                return null;
        }
        // return null;
    }

    customIcon = (props) => {
        const {
            gradientOffset,
        } = this;
        // const self = this;
        const off = gradientOffset('max', false);
        const {
            chartsType,
            options,
            color1,
            color2,
            color3,
            color5,
            editAreaLabel,
            clientCase,
            editIcon,
            compare,
            height,
            editLabel,
            label3,
            label4,
            edit,
            editPosition,
            editPositionX,
            editPositionLabel,
            editPositionLabelX,
            editPositionDot,
            editPositionDotX,
            editLine,
        } = this.props;
        let colorNew1;
        if (chartsType === 'all_assets_detailed') {
            if (!options.bprNlEnable && options.bprEnable) {
                colorNew1 = color3;
            } else if (!options.bprNlEnable && !options.bprEnable) {
                colorNew1 = color3;
            } else {
                colorNew1 = color3;
            }
        } else if (chartsType === 'liquid_assets_detailed') {
            colorNew1 = color5;
        } else {
            colorNew1 = color1;
        }
        const label = this.getAreaLabel() !== null ? this.getAreaLabel().labelValueCompare : -1;
        const nestEditAreaLabel = editAreaLabel === 1 ? 0 : editAreaLabel;
        const editAreaLabelNew = editAreaLabel === -1 ? false : nestEditAreaLabel;
        return (
            <CustomizedDot
                {...props}
                clientCase={clientCase}
                chartsType={chartsType}
                overLabel={options.viewAreaLabel || this.getAreaLabel().overLabel}
                label={parseFloat(label)}
                lastPointView={this.getAreaLabel().lastPointWidth}
                icon={editIcon}
                color={compare ? color2 : colorNew1}
                percentage={off}
                chartHeight={height - 250}
                handleToUpdate={this.handleToUpdate.bind(this)}
                editLabel={editLabel}
                clientLabel={{ label1: label3, label2: label4 }}
                edit={edit}
                editPosition={editPosition}
                editAreaLabel={editAreaLabelNew}
                editNewPosition={this.onChangePosition.bind(this, 'iconY')}
                editPositionX={editPositionX}
                editNewPositionX={this.onChangePosition.bind(this, 'iconX')}
                editPositionLabel={editPositionLabel}
                editNewPositionLabel={this.onChangePosition.bind(this, 'labelX')}
                editPositionLabelX={editPositionLabelX}
                editNewPositionLabelX={this.onChangePosition.bind(this, 'labelY')}
                editPositionDot={editPositionDot}
                editNewPositionDot={this.onChangePosition.bind(this, 'dotY')}
                editPositionDotX={editPositionDotX}
                editNewPositionDotX={this.onChangePosition.bind(this, 'dotX')}
                editLine={editLine}
                selectedIcon={this.selectedIcon}
                viewAxis={options.viewAxis}
                hideLabel={options.viewAreaLabel}
            />
        );
    };

    gradientOffset(type, compare) {
        const {
            data,
            chartsType,
            planCompare,
        } = this.props;
        const arr = data || [];
        let min = null;
        let max = null;
        let elem;
        let elem1;
        let elem2;
        let elem3;
        let elem4;
        for (let i = 1, len = arr.length; i < len; i += 1) {
            switch (chartsType) {
                case 'all_assets_detailed': {
                    elem1 = arr[i].netProperty;
                    elem2 = arr[i].pensions;
                    elem3 = arr[i].investments;
                    elem4 = arr[i].savings;
                    elem = [elem1, elem2, elem3, elem4];
                    const elemMin = indexOfMin(elem);
                    const elemMax = indexOfMax(elem);
                    if (min === null || min > elemMin) min = parseFloat(elemMin);
                    if (max === null || max < elemMax) max = parseFloat(elemMax);
                    break;
                }
                case 'all_assets_netProperty_detailed':
                case 'liquid_assets_detailed':
                    elem = arr[i].netProperty;
                    if (min === null || min > elem) min = parseFloat(elem);
                    if (max === null || max < elem) max = parseFloat(elem);
                    break;
                case 'all_assets':
                    elem = compare ? arr[i][`all_assets_compare_${planCompare}`] : arr[i].all_assets;
                    if (min === null || min > elem) min = parseFloat(elem);
                    if (max === null || max < elem) max = parseFloat(elem);
                    break;
                case 'liquid_assets':
                    elem = compare ? arr[i][`liquid_assets_compare_${planCompare}`] : arr[i].liquid_assets;
                    if (min === null || min > elem) min = parseFloat(elem);
                    if (max === null || max < elem) max = parseFloat(elem);
                    break;
                default:
                    return null;
            }
        }
        let calcDef = 100;
        if (min < 0) {
            min *= -1;
            if (type === 'max') {
                calcDef = (max * 100) / (min + max);
            } else {
                calcDef = (min * 100) / (min + max);
            }
        }
        return calcDef;
    }

    gradientOffsetVar(type, compare) {
        const {
            data,
        } = this.props;
        const arr = data || [];
        let min = null;
        let max = null;
        let elem;
        for (let i = 1, len = arr.length; i < len; i += 1) {
            switch (compare) {
                case 'netProperty':
                    elem = arr[i].netProperty;
                    break;
                case 'pensions':
                    elem = arr[i].pensions;
                    break;
                case 'investments':
                    elem = arr[i].investments;
                    break;
                case 'savings':
                    elem = arr[i].savings;
                    break;
                default:
                    return null;
            }
            if (min === null || min > elem) min = parseFloat(elem);
            if (max === null || max < elem) max = parseFloat(elem);
        }
        let calcDef = 100;
        if (min < 0) {
            min *= -1;
            if (type === 'max') {
                calcDef = (max * 100) / (min + max);
            } else {
                calcDef = (min * 100) / (min + max);
            }
        }
        return calcDef;
    }

    selectedIcon(val) {
        this.setState({ iconSelect: val });
    }

    handleToUpdate(val, elemType, id) {
        const {
            handleToUpdate,
        } = this.props;
        handleToUpdate(val, elemType, id);
    }

    render() {
        const {
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            chartsCompareType,
            width,
            height,
            data,
            chartsType,
            planCompare,
            options,
            editIcon,
            clientCase,
            editLabel,
            id,
            minAxisAllChart,
            maxAxisAllChart,
            viewAxisY,
            viewAxis,
            step,
            differenceAge,
            editAxis,
            client,
            partner,
        } = this.props;
        const {
            iconSelect,
        } = this.state;
        const {
            gradientOffset,
        } = this;
        const off = gradientOffset('max', false);
        const offs = gradientOffset('min', false);
        const offCompare = gradientOffset('max', true);
        const offsCompare = gradientOffset('min', true);
        let mLeft; let mTop; let mBottom; let widthChart; let heightCharts; let
            classChart;
        if (typeof options !== 'undefined') {
            mLeft = options.viewAxis === false ? 50 : 150;
            mTop = options.viewAxis === false ? 75 : 150;
            mBottom = options.viewAxis === false ? 100 : 50;
            widthChart = (options.viewTextAfterChart && !clientCase) ? 180 : 80;
            heightCharts = (options.viewTextAfterChart && !clientCase) ? 150 : 100;
            classChart = (options.viewTextAfterChart && !clientCase) ? 'SSoAChart' : 'nomarlChart';
        } else {
            mLeft = 150;
            mTop = 150;
            mBottom = 50;
            widthChart = 80;
            heightCharts = 100;
            classChart = 'nomarlChart';
        }
        return (

            <AreaChart
                width={width - widthChart}
                height={height - heightCharts}
                data={data}
                margin={{
                    top: mTop, right: 30, left: mLeft, bottom: mBottom,
                }}
                animationDuration={10000}
                className={iconSelect ? `selectedIcon ${classChart}` : classChart}
            >
                <defs>
                    <linearGradient id={`singleLine${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color1} />
                        <stop offset={`${off}%`} stopColor={color1} />
                        {off < 100
                        && [
                            <stop key={0} offset={`${off}%`} stopColor="#FC0D1C" />,
                            <stop key={1} offset="100%" stopColor="#FC0D1C" />,
                        ]
                        }
                    </linearGradient>
                    <linearGradient id={`double_line${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color2} />
                        <stop offset={`${offCompare}%`} stopColor={color2} />
                        {offCompare < 100
                        && [
                            <stop key={0} offset={`${offCompare}%`} stopColor="#FC0D1C" />,
                            <stop key={1} offset="100%" stopColor="#FC0D1C" />,
                        ]
                        }
                    </linearGradient>
                </defs>
                {
                    clientCase
                        ? (
                            <YAxis
                                type="number"
                                domain={[minAxisAllChart <= 0 ? minAxisAllChart : 0, maxAxisAllChart]}
                                hide
                            />
                        )
                        : (
                            <YAxis
                                allowDataOverflow
                                type="number"
                                domain={[this.getChartScale('minScale'), this.getChartScale('maxScale')]}
                                hide={viewAxisY !== true}
                                allowDecimals={false}
                                interval={0}
                                axisLine={false}
                                ticks={this.getChartScale('ticks')}
                                tickLine={false}
                                tick={<CustomizedAxisYTick maxScale={this.getChartScale('maxScale')} />}
                                dataKey="netProperty_icon"
                                orientation="right"
                            />
                        )
                }
                {/* ALL ASSETS SINGLE LINE AND COMPARE LINE AND LEGEND */}
                {chartsType === 'all_assets'
                && [
                    planCompare
                    && (
                        <Area
                            key={2}
                            fillOpacity="0.2"
                            type={chartsLine}
                            dataKey={`all_assets_compare_max_${planCompare}`}
                            stackId="2"
                            stroke="transparent"
                            strokeWidth={0}
                            fill={chartsCompareType === 'area' ? color2 : '#FFF'}
                        />
                    ),
                    planCompare
                    && (
                        <Area
                            key={3}
                            fillOpacity="1"
                            type={chartsLine}
                            dataKey={`all_assets_compare_min_${planCompare}`}
                            stackId="3"
                            stroke="transparent"
                            strokeWidth={0}
                            fill="#FFF"
                        />
                    ),
                    <Area
                        key={4}
                        fillOpacity="1"
                        type={chartsLine}
                        dataKey="all_assets"
                        stackId="4"
                        stroke={offs < 100 ? `${'url(#singleLine'}${id})` : color1}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        isAnimationActive={!planCompare}
                    />,
                    planCompare
                    && (
                        <Area
                            key={5}
                            fillOpacity="1"
                            type={chartsLine}
                            dataKey={`all_assets_compare_${planCompare}`}
                            stackId="5"
                            stroke={offsCompare < 100 ? `${'url(#double_line'}${id})` : color2}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                    ),
                    <Area
                        key={19}
                        fillOpacity="1"
                        type={chartsLine}
                        dataKey="liquid_assets_falls"
                        stackId="19"
                        stroke="#FF0000"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        animationBegin={2000}
                    />,
                    planCompare
                    && (
                        <Area
                            key={18}
                            fillOpacity="1"
                            type={chartsLine}
                            dataKey={`liquid_assets_falls_compare_${planCompare}`}
                            stackId="18"
                            stroke="#FF0000"
                            isAnimationActive={false}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            animationBegin={2000}
                        />
                    ),
                    <Area
                        key={6}
                        fillOpacity="1"
                        type={chartsLine}
                        dataKey={planCompare ? `all_assets_icon_compare_${planCompare}` : 'all_assets_icon'}
                        stackId="6"
                        stroke="transparent"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        dot={this.customIcon}
                        animationBegin={1000}
                    />,
                ]
                }
                {chartsType === 'liquid_assets'
                && [
                    planCompare
                    && (
                        <Area
                            key={20}
                            fillOpacity="0.2"
                            type={chartsLine}
                            dataKey={`liquid_assets_compare_max_${planCompare}`}
                            stackId="20"
                            stroke="transparent"
                            strokeWidth={1}
                            fill={chartsCompareType === 'area' ? color2 : 'transparent'}
                        />
                    ),
                    planCompare
                    && (
                        <Area
                            key={21}
                            fillOpacity="1"
                            type={chartsLine}
                            dataKey={`liquid_assets_compare_min_${planCompare}`}
                            stackId="21"
                            stroke="transparent"
                            strokeWidth={0}
                            fill="#FFF"
                        />
                    ),
                    <Area
                        key={22}
                        fillOpacity="1"
                        type={chartsLine}
                        dataKey="liquid_assets"
                        stackId="22"
                        stroke={offs < 100 ? `${'url(#singleLine'}${id})` : color1}
                        isAnimationActive={!planCompare}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />,
                    planCompare
                    && (
                        <Area
                            key={23}
                            fillOpacity="1"
                            type={chartsLine}
                            dataKey={`liquid_assets_compare_${planCompare}`}
                            stackId="23"
                            stroke={offsCompare < 100 ? `${'url(#double_line'}${id})` : color2}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                    ),
                    <Area
                        key={24}
                        type={chartsLine}
                        dataKey={planCompare ? `liquid_assets_icon_compare_${planCompare}` : 'liquid_assets_icon'}
                        stackId="24"
                        fill="transparent"
                        stroke="transparent"
                        strokeWidth={0}
                        dot={this.customIcon}
                    />,
                ]
                }
                {chartsType === 'all_assets_detailed'
                && [
                    <Area
                        key={1}
                        type={chartsLine}
                        dataKey="savings"
                        stackId="1"
                        stroke={color6}
                        fillOpacity="0.2"
                        strokeWidth={strokeWidth}
                        fill={color6}
                        isAnimationActive={!(step > 1)}
                        animationBegin={3000}
                    />,
                    <Area
                        key={2}
                        type={chartsLine}
                        dataKey="investments"
                        stackId="1"
                        stroke={color5}
                        fillOpacity="0.2"
                        strokeWidth={strokeWidth}
                        fill={color5}
                        isAnimationActive={!(step > 1)}
                        animationBegin={6000}
                    />,
                    step < 2
                    && (
                        <Area
                            key={3}
                            type={chartsLine}
                            dataKey="liquid_assets"
                            stackId="0"
                            stroke="#32D7F3"
                            fillOpacity="0.2"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                    ),
                    <Area
                        key={4}
                        type={chartsLine}
                        dataKey="pensions_val"
                        stackId="1"
                        stroke={color4}
                        fillOpacity="0.2"
                        strokeWidth="5"
                        fill={color4}
                        isAnimationActive={!(step > 1)}
                        animationBegin={9000}
                    />,
                    (options.bprEnable)
                    && (
                        <Area
                            key={6}
                            type={chartsLine}
                            dataKey="bpr"
                            stackId="1"
                            stroke={color2}
                            fillOpacity="0.2"
                            strokeWidth={strokeWidth}
                            fill={color2}
                            isAnimationActive={!(step > 1)}
                            animationBegin={12000}
                        />
                    ),
                    (step > 1 && options.bprNlEnable)
                    && (
                        <Area
                            key={7}
                            type={chartsLine}
                            dataKey="bprNl"
                            stackId="1"
                            stroke={color1}
                            fillOpacity="0.2"
                            strokeWidth={strokeWidth}
                            fill={color1}
                            isAnimationActive={!(step > 2)}
                        />
                    ),
                    ((step > 2 && options.bprNlEnable) || (step > 1 && !options.bprNlEnable))
                    && (
                        <Area
                            key={5}
                            type={chartsLine}
                            dataKey="netProperty"
                            stackId="1"
                            stroke={color3}
                            fillOpacity="0.2"
                            strokeWidth="5"
                            fill={color3}
                            isAnimationActive={!(step > 3)}
                        />
                    ),
                    <Area
                        key={0}
                        type={chartsLine}
                        dataKey="abs_min"
                        stackId="5"
                        stroke="transparent"
                        fillOpacity="1"
                        strokeWidth={strokeWidth}
                        fill="#FFF"
                        isAnimationActive={false}
                    />,
                    ((step > 2 && options.bprNlEnable) || (step > 1 && !options.bprNlEnable))
                    && (
                        <Area
                            key={8}
                            type={chartsLine}
                            dataKey="netProperty_icon"
                            stackId="4"
                            stroke="trasnparent"
                            fillOpacity="0"
                            strokeWidth="5"
                            fill="trasnparent"
                            dot={this.customIcon}
                        />
                    ),
                ]
                }
                {chartsType === 'liquid_assets_detailed'
                && [
                    step < 2
                    && (
                        <Area
                            key={0}
                            type={chartsLine}
                            dataKey="liquid_assets"
                            stackId="0"
                            stroke="#32D7F3"
                            fillOpacity="0.2"
                            strokeWidth={strokeWidth}
                            fill="transparent"
                        />
                    ),
                    <Area
                        key={1}
                        type={chartsLine}
                        dataKey="savings"
                        stackId="1"
                        stroke={color6}
                        fillOpacity="0.2"
                        strokeWidth={strokeWidth}
                        fill={color6}
                        animationBegin={3000}
                        isAnimationActive={!(step > 3)}
                    />,
                    <Area
                        key={2}
                        type={chartsLine}
                        dataKey="investments"
                        stackId="1"
                        stroke={color4}
                        fillOpacity="0.2"
                        strokeWidth={strokeWidth}
                        fill={color4}
                        animationBegin={6000}
                        isAnimationActive={!(step > 3)}
                    />,
                    <Area
                        key={3}
                        type={chartsLine}
                        dataKey="pensions"
                        stackId="1"
                        fill={color5}
                        fillOpacity="0.2"
                        strokeWidth={strokeWidth}
                        stroke={color5}
                        animationBegin={9000}
                        isAnimationActive={!(step > 3)}
                    />,
                    <Area
                        key={4}
                        type={chartsLine}
                        dataKey="liquid_assets_icon"
                        stackId="2"
                        stroke="transparent"
                        fillOpacity="0"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        dot={this.customIcon}
                        animationBegin={6000}
                        isAnimationActive={!(step > 3)}
                    />,
                ]
                }
                {viewAxis
                && <ReferenceLine y={0} label="" stroke="#000" strokeWidth={2} fill="#000" />
                }
                <XAxis
                    dataKey={planCompare && !clientCase ? `age_show_${planCompare}` : 'age_show'}
                    tickLine={false}
                    tick={<CustomizedAxisTick age={differenceAge} axis={editAxis} icon={editIcon} label={editLabel} chartsType={chartsType} data={data} clientCase={clientCase} />}
                    interval={0}
                    hide={!viewAxis}
                    stroke="transparent"
                >
                    <Label
                        content={(
                            <CustomizedLabel
                                width={width}
                                height={height - heightCharts - 50}
                                client={client}
                                partner={partner}
                            />
                        )}
                        offset={0}
                        position="insideBottomLeft"
                    />
                </XAxis>
            </AreaChart>
        );
    }
}

LineCharts.propTypes = {
    planCompare: PropTypes.string,
    plan: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    chartsType: PropTypes.string,
    differenceAge: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    client: PropTypes.string,
    partner: PropTypes.string,
    label: PropTypes.string,
    color1: PropTypes.string,
    color2: PropTypes.string,
    color3: PropTypes.string,
    color4: PropTypes.string,
    color5: PropTypes.string,
    color6: PropTypes.string,
    label1: PropTypes.string,
    label2: PropTypes.string,
    label3: PropTypes.string,
    label4: PropTypes.string,
    editAreaLabel: PropTypes.number,
    editLabel: PropTypes.arrayOf(PropTypes.any),
    editIcon: PropTypes.arrayOf(PropTypes.any),
    editAxis: PropTypes.arrayOf(PropTypes.any),
    editPosition: PropTypes.arrayOf(PropTypes.any),
    chartsCompareType: PropTypes.string,
    edit: PropTypes.bool,
    clientCase: PropTypes.bool,
    editNewPosition: PropTypes.func,
    viewAxis: PropTypes.bool,
    compare: PropTypes.bool,
    options: PropTypes.object,
    editPositionLabel: PropTypes.any,
    editNewPositionLabel: PropTypes.func,
    editNewPositionX: PropTypes.func,
    editPositionX: PropTypes.arrayOf(PropTypes.any),
    editPositionLabelX: PropTypes.any,
    editNewPositionLabelX: PropTypes.func,
    editPositionDot: PropTypes.arrayOf(PropTypes.any),
    editNewPositionDot: PropTypes.func,
    editPositionDotX: PropTypes.arrayOf(PropTypes.any),
    editNewPositionDotX: PropTypes.func,
    editLine: PropTypes.arrayOf(PropTypes.any),
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    minAxisAllChart: PropTypes.number,
    maxAxisAllChart: PropTypes.any,
    viewAxisY: PropTypes.bool,
    viewAxisYInterval: PropTypes.number,
    iconSelect: PropTypes.bool,
    step: PropTypes.any,
    charScale: PropTypes.number,
    webapp: PropTypes.object,
    exclude: PropTypes.number,
    maxAxisAllChart1: PropTypes.any,
    maxAxisAllChart2: PropTypes.any,
    maxAxisAllChart3: PropTypes.any,
    minAxisAllChart1: PropTypes.any,
    minAxisAllChart2: PropTypes.any,
    minAxisAllChart3: PropTypes.any,
    handleToUpdate: PropTypes.func,
};

LineCharts.defaultProps = {
    handleToUpdate: null,
    editNewPosition: null,
    editNewPositionLabel: null,
    editNewPositionX: null,
    editNewPositionLabelX: null,
    editNewPositionDot: null,
    editNewPositionDotX: null,
    webapp: {},
    planCompare: '',
    plan: '',
    data: [],
    chartsType: '',
    differenceAge: 0,
    width: 0,
    height: 0,
    client: '',
    partner: '',
    label: '',
    color1: '',
    color2: '',
    color3: '',
    color4: '',
    color5: '',
    color6: '',
    label1: '',
    label2: '',
    label3: '',
    label4: '',
    editAreaLabel: 0,
    editLabel: [],
    editIcon: [],
    editAxis: [],
    editPosition: [],
    chartsCompareType: '',
    edit: false,
    clientCase: false,
    viewAxis: false,
    compare: false,
    options: {},
    editPositionLabel: 0,
    editPositionX: [],
    editPositionLabelX: -100,
    editPositionDot: [],
    editPositionDotX: [],
    editLine: [],
    id: 0,
    minAxisAllChart: 0,
    maxAxisAllChart: 0,
    viewAxisY: false,
    viewAxisYInterval: 5,
    iconSelect: false,
    step: 0,
    charScale: 1,
    exclude: 0,
    maxAxisAllChart1: [],
    maxAxisAllChart2: [],
    maxAxisAllChart3: [],
    minAxisAllChart1: [],
    minAxisAllChart2: [],
    minAxisAllChart3: [],
};

const mapStateToProps = state => ({
    webapp: get(state, 'webapp', {}),
});

export default withRouter(connect(mapStateToProps)(LineCharts));
