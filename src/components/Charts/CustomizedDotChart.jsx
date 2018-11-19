/* eslint-disable max-len */
/* eslint react/forbid-prop-types:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isNaN from 'lodash/isNaN';
import Icon from './Icon';
import clickDrag from './clickDrag';

class CustomizedDotList extends Component {
    constructor(props) {
        super(props);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.selectedIcon = this.selectedIcon.bind(this);
    }

    onDoubleClick(editArea, elem, arrayNum) {
        const {
            handleToUpdate,
            payload,
            edit,
        } = this.props;
        if (edit && !editArea) {
            handleToUpdate(payload.id, elem, arrayNum);
        }
    }

    onChangePosition(type, elem, arrayNum, e) {
        const {
            editNewPositionX,
            editNewPosition,
            editNewPositionLabelX,
            editNewPositionLabel,
            editNewPositionDotX,
            editNewPositionDot,
            payload,
            edit,
        } = this.props;
        if (edit) {
            const data = {
                val: e,
                ids: payload.id,
                elem,
                arrayNum,
            };
            switch (type) {
                case 'iconX':
                    editNewPositionX(data);
                    break;
                case 'iconY':
                    editNewPosition(data);
                    break;
                case 'labelX':
                    editNewPositionLabelX(data);
                    break;
                case 'labelY':
                    editNewPositionLabel(data);
                    break;
                case 'dotX':
                    editNewPositionDotX(data);
                    break;
                case 'dotY':
                    editNewPositionDot(data);
                    break;
                default:
                    return null;
            }
        }
        return null;
    }

    selectedIcon(e) {
        const { selectedIcon } = this.props;
        selectedIcon(e);
    }

    render() {
        const self = this;
        const {
            cx, cy, payload, icon, lastPointView, overLabel, label, edit, editLabel, color, editPosition, editPositionX, editLine, editPositionDot, editPositionDotX, chartsType, editAreaLabel,
        } = this.props;
        const arrayAll = [];
        // let valueLabel = 0;
        let {
            near,
        } = payload;
        let nearLastLabel = false;
        let editAreaLabelNew = false;
        if (((payload.age_show && cx > 100) || (payload.age_show && cx > 40))) {
            let selIcon = payload.icon;
            let setLabel = payload.label;
            let setPosition = payload.position_label;
            let setPositionX = payload.position_labelX;
            let setPositionDot = payload.position_dot;
            let setPositionDotX = payload.position_dot_x;
            let setLine = payload.line;

            if (typeof icon !== 'undefined') {
                const iconNear = [];
                icon.map((item, i) => {
                    iconNear[i] = false;
                    if (item) {
                        if (icon[i - 1] && !iconNear[i - 1]) {
                            iconNear[i] = true;
                        } else if (icon[i - 2] && !iconNear[i - 2] && !iconNear[i - 1]) {
                            iconNear[i] = true;
                        } else if (icon[i - 3] && !iconNear[i - 3] && !iconNear[i - 2] && !iconNear[i - 1]) {
                            iconNear[i] = true;
                        }
                    }
                    return null;
                });
                selIcon = icon[payload.id];
                near = iconNear[payload.id];
            }
            if (typeof icon[payload.id - 5] !== 'undefined' || typeof icon[payload.id - 4] !== 'undefined' || typeof icon[payload.id - 3] !== 'undefined' || typeof icon[payload.id - 2] !== 'undefined' || typeof icon[payload.id - 1] !== 'undefined') {
                nearLastLabel = true;
            }
            if (typeof editLabel[payload.id] !== 'undefined') {
                setLabel = editLabel[payload.id];
            }
            if (typeof editPosition !== 'undefined') {
                setPosition = editPosition[payload.id];
            }
            if (typeof editPositionX !== 'undefined') {
                setPositionX = editPositionX[payload.id];
            }
            if (typeof editPositionDot !== 'undefined') {
                setPositionDot = editPositionDot[payload.id];
            }
            if (typeof editPositionDotX !== 'undefined') {
                setPositionDotX = editPositionDotX[payload.id];
            }
            if (typeof editLine !== 'undefined') {
                setLine = editLine[payload.id];
            }
            if (typeof editAreaLabel !== 'undefined') {
                if (editAreaLabel === parseFloat(payload.age_show)) {
                    editAreaLabelNew = true;
                }
            }
            if (typeof setLabel !== 'undefined' && setLabel !== null && setLabel) {
                const arrayLabel = setLabel.split(';');
                const arrayIcon = selIcon ? selIcon.split(';') : '';
                const arrayPos = setPosition ? setPosition.split(';') : 0;
                const arrayPosX = setPositionX ? setPositionX.split(';') : 0;
                const arrayPosDot = setPositionDot ? setPositionDot.split(';') : 0;
                const arrayPosDotX = setPositionDotX ? setPositionDotX.split(';') : 0;
                const arrayLine = setLine ? setLine.split(';') : 0;
                if (arrayLabel.length > 1) {
                    if ((!arrayIcon[0] || arrayIcon[0] === '') && arrayIcon[1] && typeof arrayIcon[1] !== 'undefined') {
                        arrayIcon.reverse();
                        arrayLabel.reverse();
                    }
                    for (let $l = 0; $l < arrayLabel.length; $l += 1) {
                        arrayAll.push({
                            name: payload.age_show,
                            label: arrayLabel[$l],
                            icon: arrayIcon[$l] || '',
                            x: isNaN(cx) ? 0 : cx,
                            y: isNaN(cy) ? 0 : cy,
                            width: 40,
                            height: 40,
                            fill: 'black',
                            viewBox: '0 0 1024 1024',
                            array: $l,
                            near,
                            near_label: nearLastLabel,
                            color,
                            edit,
                            id: $l,
                            editAreaLabel: editAreaLabelNew,
                            editPos: near ? parseFloat(arrayPos[$l]) - 80 : parseFloat(arrayPos[$l]),
                            preview_point: parseFloat(arrayPos[$l - 1]),
                            editPosX: parseFloat(arrayPosX[$l]),
                            editPositionDot: arrayPosDot[$l],
                            editPositionDotX: arrayPosDotX[$l],
                            elem: 'array',
                            editLine: Boolean(Number(arrayLine[$l])),
                            arrayNum: $l,
                        });
                    }
                } else {
                    arrayAll.push({
                        id: 0,
                        name: payload.age_show,
                        label: setLabel,
                        icon: selIcon,
                        x: cx,
                        y: isNaN(cy) ? 0 : cy,
                        width: 40,
                        height: 40,
                        fill: 'black',
                        viewBox: '0 0 1024 1024',
                        array: 0,
                        near,
                        near_label: nearLastLabel,
                        color,
                        edit,
                        editAreaLabel,
                        editPos: near ? parseFloat(setPosition) - 80 : parseFloat(setPosition),
                        preview_point: parseFloat(setPosition),
                        editPosX: parseFloat(setPositionX),
                        preview_pointX: parseFloat(setPositionX),
                        editPositionDot: setPositionDot,
                        editPositionDotX: setPositionDotX,
                        editLine: Boolean(Number(setLine)),
                        elem: 'single',
                        arrayNum: 0,
                    });
                }
            } else if (edit || label) {
                arrayAll.push({
                    name: payload.age_show,
                    label: '',
                    icon: '',
                    x: cx,
                    y: cy,
                    width: 40,
                    height: 40,
                    fill: 'black',
                    viewBox: '0 0 1024 1024',
                    array: 0,
                    near: false,
                    near_label: nearLastLabel,
                    color,
                    editAreaLabel,
                    edit,
                    id: 0,
                    editPos: 0,
                    preview_point: 0,
                    editPosX: 0,
                    editPositionDot: 0,
                    editPositionDotX: 0,
                    elem: 'single',
                    editLine: false,
                    arrayNum: 0,
                });
            }
        }
        if (payload.areaLabel && overLabel && chartsType === 'liquid_assets') {
            arrayAll.unshift({
                name: payload.age_show,
                label: '',
                icon: '',
                x: cx,
                y: cy,
                width: 40,
                height: 40,
                fill: 'black',
                viewBox: '0 0 1024 1024',
                array: 0,
                near: false,
                near_label: nearLastLabel,
                color,
                editAreaLabel: true,
                edit,
                id: 0,
                editPos: 0,
                preview_point: 0,
                editPosX: 0,
                editPositionDot: 0,
                editPositionDotX: 0,
                elem: 'single',
                editLine: false,
                arrayNum: 0,
            });
        }
        if (payload.areaLabelAssets && overLabel && chartsType === 'all_assets') {
            arrayAll.unshift({
                name: payload.age_show,
                label: '',
                icon: '',
                x: cx,
                y: cy,
                width: 40,
                height: 40,
                fill: 'black',
                viewBox: '0 0 1024 1024',
                array: 0,
                near: false,
                near_label: nearLastLabel,
                color,
                editAreaLabel: true,
                edit,
                id: 0,
                editPos: 0,
                preview_point: 0,
                editPosX: 0,
                editPositionDot: 0,
                editPositionDotX: 0,
                elem: 'single',
                editLine: false,
                arrayNum: 0,
            });
        }
        return (
            <svg>
                {
                    arrayAll.map((item, i) => {
                        const classEl = ((label && item.x - 20 === lastPointView) || item.editAreaLabel) ? 'areaLAbel' : 'other';
                        const classIcon = (item.icon || item.label) ? 'iconWrap' : 'others';
                        const invertIcon = item.y - (100 * (item.id + 1)) < 0;
                        const heightIcon = item.near ? 180 : 140;
                        const preNestCurY = (item.id === 0 ? item.y - heightIcon : item.y - (130 * (item.id + 1)));
                        const nestCurY = (invertIcon ? item.y + 15 : preNestCurY);
                        return (
                            <foreignObject
                                key={(payload.id + 100 + i).toString()}
                                onDoubleClick={this.onDoubleClick.bind(this, item.editAreaLabel, item.elem, item.arrayNum)}
                                className={`${self.props.chartsType} ${classEl} ${classIcon} ${item.y - (70 * (item.id + 1))}`}
                                style={{ overflow: 'visible', textAlign: 'center' }}
                                width={((label && item.x - 20 === lastPointView) || item.editAreaLabel) ? 180 : 100}
                                height={heightIcon}
                                x={((label && item.x - 20 === lastPointView) || item.editAreaLabel) ? item.x - 70 : item.x - 50}
                                y={isNaN(item.y) ? 0 : nestCurY}
                            >
                                <Icon
                                    areaLabelValue={label}
                                    key={payload.id}
                                    label={item.label}
                                    icon={item.icon}
                                    x={item.x - 20}
                                    y={isNaN(item.y) ? 0 : item.y}
                                    curY={isNaN(item.y) ? 0 : nestCurY}
                                    width={100}
                                    height={140}
                                    chartHeight={self.props.chartHeight}
                                    fill={item.fill}
                                    viewBox={item.viewBox}
                                    array={item.id}
                                    color={item.color}
                                    near={item.near}
                                    nearLabel={item.near_label}
                                    lastPoint={lastPointView}
                                    lastLabel={label}
                                    lastPointView={overLabel}
                                    name={item.name}
                                    edit={item.edit}
                                    editAreaLabel={item.editAreaLabel}
                                    section="chart"
                                    id={item.id}
                                    percentage={self.props.percentage}
                                    editLine={item.editLine}
                                    multiEl={i}
                                    clientLabel={self.props.clientLabel}
                                    preview_point={parseFloat(item.preview_point)}
                                    editPos={parseFloat(item.editPos)}
                                    editPosX={parseFloat(item.editPosX)}
                                    editPosLabel={parseFloat(self.props.editPositionLabel)}
                                    editPosLabelx={parseFloat(self.props.editPositionLabelX)}
                                    editPosDot={isNaN(editPositionDot) ? 0 : parseFloat(item.editPositionDot)}
                                    editPosDotX={isNaN(editPositionDotX) ? 0 : parseFloat(item.editPositionDotX)}
                                    preview_point_x={parseFloat(item.preview_pointX)}
                                    editNewPositionX={this.onChangePosition.bind(this, 'iconX', item.elem, item.arrayNum)}
                                    editNewPosition={this.onChangePosition.bind(this, 'iconY', item.elem, item.arrayNum)}
                                    editNewPositionLabelX={this.onChangePosition.bind(this, 'labelX', item.elem, item.arrayNum)}
                                    editNewPositionLabel={this.onChangePosition.bind(this, 'labelY', item.elem, item.arrayNum)}
                                    editNewPositionDotX={this.onChangePosition.bind(this, 'dotX', item.elem, item.arrayNum)}
                                    editNewPositionDot={this.onChangePosition.bind(this, 'dotY', item.elem, item.arrayNum)}
                                    value={self.props.value[1]}
                                    clientCase={self.props.clientCase}
                                    selectedIcon={this.selectedIcon}
                                />
                            </foreignObject>
                        );
                    })
                }
            </svg>
        );
    }
}

CustomizedDotList.propTypes = {
    chartsType: PropTypes.string,
    // dataKey: PropTypes.string,
    editPosition: PropTypes.arrayOf(PropTypes.any),
    editNewPosition: PropTypes.func,
    selectedIcon: PropTypes.func,
    cx: PropTypes.number,
    cy: PropTypes.number,
    // stroke: PropTypes.string,
    payload: PropTypes.object,
    // value: PropTypes.arrayOf(PropTypes.array),
    icon: PropTypes.arrayOf(PropTypes.any),
    lastPointView: PropTypes.number,
    overLabel: PropTypes.bool,
    label: PropTypes.number,
    edit: PropTypes.bool,
    editAreaLabel: PropTypes.any,
    editLabel: PropTypes.arrayOf(PropTypes.any),
    color: PropTypes.string,
    editPositionX: PropTypes.arrayOf(PropTypes.any),
    editPositionDotX: PropTypes.arrayOf(PropTypes.any),
    editPositionDot: PropTypes.arrayOf(PropTypes.any),
    editLine: PropTypes.arrayOf(PropTypes.any),
    editNewPositionDot: PropTypes.func,
    editNewPositionDotX: PropTypes.func,
    editNewPositionLabelX: PropTypes.func,
    editNewPositionLabel: PropTypes.func,
    editNewPositionX: PropTypes.func,
    // viewAxis: PropTypes.bool,
    handleToUpdate: PropTypes.func,
};

CustomizedDotList.defaultProps = {
    chartsType: '',
    // dataKey: '',
    editPosition: [],
    editNewPosition: null,
    cx: 0,
    cy: 0,
    // stroke: '',
    payload: {},
    // value: [],
    icon: {},
    lastPointView: 0,
    overLabel: false,
    label: 0,
    edit: false,
    editAreaLabel: 0,
    editLabel: [],
    color: '',
    editPositionX: [],
    editPositionDotX: [],
    editPositionDot: [],
    editLine: [],
    editNewPositionDot: null,
    editNewPositionDotX: null,
    editNewPositionLabelX: null,
    editNewPositionLabel: null,
    editNewPositionX: null,
    selectedIcon: null,
    // viewAxis: true,
    handleToUpdate: null,
};

const CustomizedDot = clickDrag(CustomizedDotList, { touch: true });

export default CustomizedDot;
