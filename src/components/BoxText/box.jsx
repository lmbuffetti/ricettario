import React, { Component } from 'react';
// import { post } from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import Icon from '../Charts/Icon';
import { indexOfMax } from '../../helpers/WebappFunctions';

class Box extends Component {
    constructor(props) {
        super(props);
        const {
            arrayLabel1, arrayLabel2, arrayLabel3, arrayLabel4,
        } = this.props;
        this.state = {
            labelTitle1: arrayLabel1.title,
            labelTitle2: arrayLabel2.title,
            labelTitle3: arrayLabel3.title,
            labelTitle4: arrayLabel4.title,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changePreselect = this.changePreselect.bind(this);
        this.PreselectBox = this.PreselectBox.bind(this);
        this.handlePopUpIcon = this.handlePopUpIcon.bind(this);
    }

    handleChange(id, type, e) {
        let name;
        let value;
        const {
            changeLabel, arrayLabel1, arrayLabel2, arrayLabel3, arrayLabel4, icon1, icon2, icon3, icon4,
        } = this.props;
        const self = this;
        if (typeof e.name !== 'undefined') {
            ({
                name, value,
            } = e);
        } else if (typeof e.target !== 'undefined') {
            ({
                name, value,
            } = e.target);
        } else {
            name = Object.keys(self.refs)[0];
        }
        this.setState({
            [`character_${name}`]: 600 - value.length,
        });
        let icon;
        let title;
        let text;
        switch (id) {
            case 1:
                icon = icon1;
                title = type === 'title' ? value : arrayLabel1.title;
                text = type === 'desc' ? value.replace(/\r?\n/g, '<br>') : arrayLabel1.text;
                break;
            case 2:
                icon = icon2;
                title = type === 'title' ? value : arrayLabel2.title;
                text = type === 'desc' ? value.replace(/\r?\n/g, '<br>') : arrayLabel2.text;
                break;
            case 3:
                icon = icon3;
                title = type === 'title' ? value : arrayLabel3.title;
                text = type === 'desc' ? value.replace(/\r?\n/g, '<br>') : arrayLabel3.text;
                break;
            case 4:
                icon = icon4;
                title = type === 'title' ? value : arrayLabel4.title;
                text = type === 'desc' ? value.replace(/\r?\n/g, '<br>') : arrayLabel4.text;
                break;
            default:
                icon = icon1;
                title = type === 'title' ? value : arrayLabel1.title;
                text = type === 'desc' ? value.replace(/\r?\n/g, '<br>') : arrayLabel1.text;
        }
        const arrayLabel = {
            icon,
            title,
            text,
        };
        const data = {
            arrayLabel,
            id,
        };
        changeLabel(data);
    }

    changePreselect(id, e) {
        const { preselect, changeIcon, changeLabel } = this.props;
        const val = e.target.value;
        preselect.map((item) => {
            if (item.title === val) {
                const arrayLabel = {
                    icon: item.icon,
                    title: item.title,
                    text: item.text,
                };
                const dataLabel = {
                    arrayLabel,
                    id,
                };
                changeLabel(dataLabel);
                const dataIcon = {
                    icon: item.icon,
                    id,
                };
                changeIcon(dataIcon);
            }
            return null;
        });
    }

    PreselectBox(id, value) {
        const { preselect, edit } = this.props;
        if (edit) {
            return (
                <div>
                    <select
                        className="preselect_box"
                        value={value}
                        onChange={this.changePreselect.bind(this, id)}
                    >
                        <option>Select prevalue</option>
                        {
                            preselect.map((item, i) => (
                                <option key={i.toString()} value={item.title}>{item.title}</option>
                            ))
                        }
                    </select>
                </div>
            );
        }
        return null;
    }

    handlePopUpIcon(val, type, num) {
        const { popupIcon } = this.props;
        const data = {
            val,
            type,
            num,
        };
        popupIcon(data);
    }

    render() {
        const {
            numBox,
            width,
            height,
            edit,
            arrayLabel1,
            arrayLabel2,
            arrayLabel3,
            arrayLabel4,
            icon1,
            icon2,
            icon3,
            icon4,
        } = this.props;
        const {
            labelTitle1, labelTitle2, labelTitle3, labelTitle4,
        } = this.state;
        const { handlePopUpIcon } = this;
        const classBox = 12 / numBox;
        const labelTitle1Lenght = labelTitle1 ? labelTitle1.length : 0;
        const labelTitle2Lenght = labelTitle2 ? labelTitle2.length : 0;
        const labelTitle3Lenght = labelTitle3 ? labelTitle3.length : 0;
        const labelTitle4Lenght = labelTitle4 ? labelTitle4.length : 0;
        const numRow = indexOfMax([
            Math.ceil(labelTitle1Lenght / 22),
            Math.ceil(labelTitle2Lenght / 22),
            Math.ceil(labelTitle3Lenght / 22),
            Math.ceil(labelTitle4Lenght / 22),
        ]);
        return (
            <div
                className="boxPresentation box_edit"
                style={{
                    width,
                    height: edit ? 'auto' : height,
                }}
            >
                <div className="rowFlexTop">
                    {
                        numBox > 0
                        && (
                            <div className={`col-md-${classBox}`}>
                                <div>
                                    {this.PreselectBox(1, arrayLabel1.title)}
                                    <div className="box_icon">
                                        <div>
                                            <button
                                                className="no_btn"
                                                type="button"
                                                onClick={edit ? handlePopUpIcon.bind(this, true, 'single', 1) : undefined}
                                            >
                                                <Icon
                                                    key={numBox}
                                                    label=""
                                                    icon={icon1}
                                                    x={0}
                                                    y={0}
                                                    width={80}
                                                    height={80}
                                                    fill="black"
                                                    viewBox="0 0 1024 1024"
                                                    array={0}
                                                    color="black"
                                                    near={false}
                                                    lastPoint={0}
                                                    lastLabel=""
                                                    lastPointView={false}
                                                    name=""
                                                    edit={edit}
                                                    section="box"
                                                    id={numBox}
                                                    editLine={false}
                                                    editPos={0}
                                                    preview_point={0}
                                                    editPosX={0}
                                                    editPosDot={0}
                                                    editPosDotX={0}
                                                    preview_point_x={0}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        edit
                                            ? [
                                                <textarea
                                                    key={0}
                                                    name="labelTitle1"
                                                    className={`title_box title_${numRow}`}
                                                    onChange={this.handleChange.bind(this, 1, 'title')}
                                                    value={arrayLabel1.title}
                                                />,
                                                <textarea
                                                    key={1}
                                                    name="labelDesc1"
                                                    className="text_box"
                                                    onChange={this.handleChange.bind(this, 1, 'desc')}
                                                    value={arrayLabel1.text.replace(/<br\s*[/]?>/gi, '\n')}
                                                />,
                                                <p key={2}>
                                                    {600 - arrayLabel1.text.length}
                                                    {' '}
characters left
                                                </p>,
                                            ]
                                            : [
                                                <h3
                                                    key={0}
                                                    className={`title_${numRow}`}
                                                >
                                                    {arrayLabel1.title}
                                                </h3>,
                                                <p
                                                    key={1}
                                                    dangerouslySetInnerHTML={{ __html: arrayLabel1.text }}
                                                />,
                                            ]

                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        numBox > 1

                        && (
                            <div className={`col-md-${classBox}`}>
                                <div>
                                    {this.PreselectBox(2, arrayLabel2.title)}
                                    <div className="box_icon">
                                        <div>
                                            <button
                                                className="no_btn"
                                                type="button"
                                                onClick={edit ? handlePopUpIcon.bind(this, true, 'single', 2) : undefined}
                                            >
                                                <Icon
                                                    key={numBox}
                                                    label=""
                                                    icon={icon2}
                                                    x={0}
                                                    y={0}
                                                    width={80}
                                                    height={80}
                                                    fill="black"
                                                    viewBox="0 0 1024 1024"
                                                    array={0}
                                                    color="black"
                                                    near={false}
                                                    lastPoint={0}
                                                    lastLabel=""
                                                    lastPointView={false}
                                                    name=""
                                                    edit={edit}
                                                    section="box"
                                                    id={numBox}
                                                    editLine={false}
                                                    editPos={0}
                                                    preview_point={0}
                                                    editPosX={0}
                                                    editPosDot={0}
                                                    editPosDotX={0}
                                                    preview_point_x={0}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        edit
                                            ? [
                                                <textarea
                                                    key={0}
                                                    name="labelTitle1"
                                                    className={`title_box title_${numRow}`}
                                                    onChange={this.handleChange.bind(this, 2, 'title')}
                                                    value={arrayLabel2.title}
                                                />,
                                                <textarea
                                                    key={1}
                                                    name="labelDesc1"
                                                    className="text_box"
                                                    onChange={this.handleChange.bind(this, 2, 'desc')}
                                                    value={arrayLabel2.text.replace(/<br\s*[/]?>/gi, '\n')}
                                                />,
                                                <p key={2}>
                                                    {600 - arrayLabel2.text.length}
                                                    {' '}
characters left
                                                </p>,
                                            ]
                                            : [
                                                <h3
                                                    key={0}
                                                    className={`title_${numRow}`}
                                                >
                                                    {arrayLabel2.title}
                                                </h3>,
                                                <p
                                                    key={1}
                                                    dangerouslySetInnerHTML={{ __html: arrayLabel2.text }}
                                                />,
                                            ]

                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        numBox > 2
                        && (
                            <div className={`col-md-${classBox}`}>
                                <div>
                                    {this.PreselectBox(3, arrayLabel3.title)}
                                    <div className="box_icon">
                                        <div>
                                            <button
                                                className="no_btn"
                                                type="button"
                                                onClick={edit ? handlePopUpIcon.bind(this, true, 'single', 3) : undefined}
                                            >
                                                <Icon
                                                    key={numBox}
                                                    label=""
                                                    icon={icon3}
                                                    x={0}
                                                    y={0}
                                                    width={80}
                                                    height={80}
                                                    fill="black"
                                                    viewBox="0 0 1024 1024"
                                                    array={0}
                                                    color="black"
                                                    near={false}
                                                    lastPoint={0}
                                                    lastLabel=""
                                                    lastPointView={false}
                                                    name=""
                                                    edit={edit}
                                                    section="box"
                                                    id={numBox}
                                                    editLine={false}
                                                    editPos={0}
                                                    preview_point={0}
                                                    editPosX={0}
                                                    editPosDot={0}
                                                    editPosDotX={0}
                                                    preview_point_x={0}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        edit
                                            ? [
                                                <textarea
                                                    key={0}
                                                    name="labelTitle1"
                                                    className={`title_box title_${numRow}`}
                                                    onChange={this.handleChange.bind(this, 3, 'title')}
                                                    value={arrayLabel3.title}
                                                />,
                                                <textarea
                                                    key={1}
                                                    name="labelDesc1"
                                                    className="text_box"
                                                    onChange={this.handleChange.bind(this, 3, 'desc')}
                                                    value={arrayLabel3.text.replace(/<br\s*[/]?>/gi, '\n')}
                                                />,
                                                <p key={2}>
                                                    {600 - arrayLabel3.text.length}
                                                    {' '}
characters left
                                                </p>,
                                            ]
                                            : [
                                                <h3
                                                    key={0}
                                                    className={`title_${numRow}`}
                                                >
                                                    {arrayLabel3.title}
                                                </h3>,
                                                <p
                                                    key={1}
                                                    dangerouslySetInnerHTML={{ __html: arrayLabel3.text }}
                                                />,
                                            ]

                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        numBox > 3
                        && (
                            <div className={`col-md-${classBox}`}>
                                <div>
                                    {this.PreselectBox(4, arrayLabel4.title)}
                                    <div className="box_icon">
                                        <div>
                                            <button
                                                className="no_btn"
                                                type="button"
                                                onClick={edit ? handlePopUpIcon.bind(this, true, 'single', 4) : undefined}
                                            >
                                                <Icon
                                                    key={numBox}
                                                    label=""
                                                    icon={icon4}
                                                    x={0}
                                                    y={0}
                                                    width={80}
                                                    height={80}
                                                    fill="black"
                                                    viewBox="0 0 1024 1024"
                                                    array={0}
                                                    color="black"
                                                    near={false}
                                                    lastPoint={0}
                                                    lastLabel=""
                                                    lastPointView={false}
                                                    name=""
                                                    edit={edit}
                                                    section="box"
                                                    id={numBox}
                                                    editLine={false}
                                                    editPos={0}
                                                    preview_point={0}
                                                    editPosX={0}
                                                    editPosDot={0}
                                                    editPosDotX={0}
                                                    preview_point_x={0}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        edit
                                            ? [
                                                <textarea
                                                    key={0}
                                                    name="labelTitle1"
                                                    className={`title_box title_${numRow}`}
                                                    onChange={this.handleChange.bind(this, 4, 'title')}
                                                    value={arrayLabel4.title}
                                                />,
                                                <textarea
                                                    key={1}
                                                    name="labelDesc1"
                                                    className="text_box"
                                                    onChange={this.handleChange.bind(this, 4, 'desc')}
                                                    value={arrayLabel4.text.replace(/<br\s*[/]?>/gi, '\n')}
                                                />,
                                                <p key={2}>
                                                    {600 - arrayLabel4.text.length}
                                                    {' '}
characters left
                                                </p>,
                                            ]
                                            : [
                                                <h3
                                                    key={0}
                                                    className={`title_${numRow}`}
                                                >
                                                    {arrayLabel4.title}
                                                </h3>,
                                                <p
                                                    key={1}
                                                    dangerouslySetInnerHTML={{ __html: arrayLabel4.text }}
                                                />,
                                            ]

                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

Box.propTypes = {
    changeIcon: PropTypes.func,
    numBox: PropTypes.number,
    edit: PropTypes.bool,
    // popIcon: PropTypes.bool,
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    icon3: PropTypes.string,
    icon4: PropTypes.string,
    arrayLabel1: PropTypes.object,
    arrayLabel2: PropTypes.object,
    arrayLabel3: PropTypes.object,
    arrayLabel4: PropTypes.object,
    changeLabel: PropTypes.func,
    popupIcon: PropTypes.func,
    preselect: PropTypes.arrayOf(PropTypes.any),
    width: PropTypes.number,
    height: PropTypes.number,
};

Box.defaultProps = {
    changeLabel: null,
    popupIcon: null,
    changeIcon: null,
    numBox: 4,
    edit: false,
    icon1: '',
    icon2: '',
    icon3: '',
    icon4: '',
    arrayLabel1: { icon: '', title: '', text: '' },
    arrayLabel2: { icon: '', title: '', text: '' },
    arrayLabel3: { icon: '', title: '', text: '' },
    arrayLabel4: { icon: '', title: '', text: '' },
    preselect: [],
    width: 1440,
    height: 810,
};

export default withRouter(connect()(Box));
