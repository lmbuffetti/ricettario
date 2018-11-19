import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { Field } from 'redux-form';
import RadioButtonVerticalList from './RadioButtonVerticalList';
import CheckboxButtonVerticalList from './CheckboxButtonVerticalList';
import { requiredAtLeastOne, requiredYesNo } from '../utils/validation.helper';

class RiskToleranceQuestion extends Component {
    constructor(props) {
        super(props);
        this.getAnswer = this.getAnswer.bind(this);
    }

    getAnswer = () => {
        const { step, question } = this.props;
        const listAnswer = [];
        question[step].options.map((item, i) => {
            listAnswer[i] = {
                id: item.option_uuid,
                code: item.option_uuid,
                name: item.option_text,
            };
            return null;
        });
        return listAnswer;
    };

    render() {
        const {
            isSubmitted, formValue, step, extraClass, extraClasses, onNextStep, question,
        } = this.props;

        const valSel = get(formValue, `values.step_${question[step].question_uuid}`, '0');
        const type = question[step].question_type === 'Select' ? 'checkbox' : 'radio';
        return (
            <section className={`${extraClasses} single_question`}>
                {
                    typeof question[step].img_url !== 'undefined' && (
                        <img className="mb-medium" src={question[step].img_url} alt={question[step].question_uuid} />
                    )
                }
                <h5 className="mb-medium" dangerouslySetInnerHTML={{ __html: question[step].question_text }} />
                {
                    question[step].question_type === 'Option' && (
                        <Field
                            component={RadioButtonVerticalList}
                            blocks={this.getAnswer()}
                            formValue={formValue}
                            name={`step_${question[step].question_uuid}`}
                            fieldsName={`step_${question[step].question_uuid}`}
                            extraClass={extraClass}
                            typeValue={type}
                            selectedValue={valSel}
                            isShowErrors={isSubmitted}
                            validate={[
                                requiredYesNo,
                            ]}
                            onNextStep={onNextStep}
                        />
                    )
                }
                {
                    question[step].question_type === 'Select' && (
                        <div className="form-inline span-8 box_checkbox">
                            <CheckboxButtonVerticalList
                                formValue={formValue}
                                checkboxes={this.getAnswer()}
                                isSubmitted={isSubmitted}
                                extraClass={extraClass}
                                name={`checkbox_${question[step].question_uuid}`}
                                fieldsName={`checkbox_${question[step].question_uuid}`}
                                blockLabel="Select all that apply"
                                validate={[
                                    requiredAtLeastOne,
                                ]}
                            />
                        </div>
                    )
                }
            </section>
        );
    }
}

RiskToleranceQuestion.propTypes = {
    isSubmitted: PropTypes.bool,
    extraClasses: PropTypes.string,
    formValue: PropTypes.object,
    extraClass: PropTypes.string,
    step: PropTypes.number.isRequired,
    onNextStep: PropTypes.func,
    question: PropTypes.arrayOf(PropTypes.object),
};
RiskToleranceQuestion.defaultProps = {
    onNextStep: null,
    extraClass: '',
    extraClasses: '',
    isSubmitted: false,
    formValue: {},
    question: [],
};

const mapStateToProps = (state, { formName }) => ({
    formValue: get(state, `form.${formName}`, {}),
});

const mapDispatchToProps = () => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RiskToleranceQuestion));
