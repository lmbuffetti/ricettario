import React, { Component } from 'react';
// import { post } from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import connect from 'react-redux/es/connect/connect';
import { isJson } from '../../helpers/WebappFunctions';


class LetStarted extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { handleChageText } = this.props;
        handleChageText(e.target.value);
    }

    render() {
        const {
            value, edit, adviser,
        } = this.props;
        const { handleChange } = this;
        const labelDone1 = isJson(value) ? JSON.parse(value) : value;
        return (
            <div className="rowFlexTop">
                <div className="center_text">
                    {
                        edit
                            ? (
                                <textarea
                                    value={labelDone1.replace(/<br\s*[/]?>/gi, '\n')}
                                    onChange={handleChange}
                                />
                            )
                            : <p dangerouslySetInnerHTML={{ __html: labelDone1 }} />
                    }
                    <p key={1}>{adviser}</p>
                </div>
            </div>
        );
    }
}

LetStarted.propTypes = {
    edit: PropTypes.bool,
    value: PropTypes.string,
    adviser: PropTypes.string,
    handleChageText: PropTypes.func,
};

LetStarted.defaultProps = {
    handleChageText: null,
    value: '',
    edit: false,
    adviser: '',
};

export default withRouter(connect()(LetStarted));
