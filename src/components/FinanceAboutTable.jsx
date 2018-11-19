// eslint-disable-next-line jsx-a11y/alt-text
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line max-len
class FinanceAboutTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordion: [],
        };
        this.renderBlock = this.renderBlock.bind(this);
        this.accordionFunction = this.accordionFunction.bind(this);
        this.renderAccordionItem = this.renderAccordionItem.bind(this);
        this.renderArrayAccordion = this.renderArrayAccordion.bind(this);
        this.renderBalanceBlock = this.renderBalanceBlock.bind(this);
        this.renderExtraInformation = this.renderExtraInformation.bind(this);
        this.renderSecondBalanceBlock = this.renderSecondBalanceBlock.bind(this);
        this.renderActionButton = this.renderActionButton.bind(this);
    }

    accordionFunction(index) {
        const { accordion } = this.state;
        const getAccordion = accordion;
        getAccordion[index] = !getAccordion[index];
        this.setState({
            accordion: getAccordion,
        });
    }

    renderExtraInformation = (info) => {
        if (info) {
            return (
                <div className="extra-information">
                    <p className="extra-information-title">
                        Extra information
                    </p>
                    <p className="extra-information-text">
                        {info}
                    </p>
                </div>
            );
        }

        return null;
    };

    renderArrayAccordion = (element, $type) => {
        let title;
        switch ($type) {
            case 'contribution':
                title = 'Contribution';
                break;
            case 'annual_salary':
                title = 'Annual salary';
                break;
            case 'annual_dividends':
                title = 'Annual dividends';
                break;
            case 'other_work':
                title = 'Other work benefits';
                break;
            case 'average_annual_bonus':
                title = 'Average annual bonus';
                break;
            case 'other_income_per_year':
                title = 'Other income per year';
                break;
            case 'other_income':
                title = 'Other income';
                break;
            case 'employer_contribution':
                title = 'Employer contribution';
                break;
            case 'company_ownership':
                title = 'Company ownership';
                break;
            case 'estimated_value_of_stake':
                title = 'Estimated value of stake';
                break;
            case 'personal_contribution':
                title = 'Personal contribution';
                break;
            case 'income_received':
                title = 'Income received';
                break;
            case 'isa_savings':
                title = 'ISA savings';
                break;
            case 'tax_scheme':
                title = 'Tax scheme';
                break;
            case 'address':
                title = 'Address';
                break;
            case 'rental_income':
                title = 'Rental income received';
                break;
            case 'interest_rate':
                title = 'Interest rate';
                break;
            case 'years_remaining':
                title = 'Years remaining';
                break;
            case 'rate_type':
                title = 'Rate type';
                break;
            case 'monthly_repayment':
                title = 'Minim. monthly repayment';
                break;
            case 'interest_type':
                title = 'Interest type';
                break;
            case 'loan_type':
                title = 'Loan Type';
                break;
            case 'child_date_of_birth':
                title = 'Date of birth';
                break;
            case 'child_childcare_costs':
                title = 'Childcare Costs';
                break;
            case 'child_education_costs':
                title = 'Education costs';
                break;
            case 'mortgage_type':
                title = 'Mortgage type';
                break;
            case 'date_of_birth':
                title = 'Date of birth';
                break;
            case 'relationship_to_client':
                title = 'Relationship';
                break;
            default:
                title = '';
        }

        if (element[$type] && element[$type][0] !== null && element[$type][0] !== 'null') {
            return (
                <div className="balance_box">
                    <h6>
                        {title}
                    </h6>
                    {
                        element[$type].length > 0
                            ? (
                                <ul>
                                    {
                                        element[$type].map((contribution, i) => (
                                            <li key={i.toString()}>
                                                {contribution}
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                            : (
                                <ul>
                                    <li>
                                        None
                                    </li>
                                </ul>
                            )
                    }
                </div>
            );
        }

        return null;
    };

    renderAccordionItem(index) {
        const {
            data,
        } = this.props;

        const { accordion } = this.state;

        if (!accordion[index]) {
            const element = data[index];
            return (
                <div className="button_img_text accordion_item">
                    {this.renderArrayAccordion(element, 'contribution')}
                    {this.renderArrayAccordion(element, 'annual_salary')}
                    {this.renderArrayAccordion(element, 'annual_dividends')}
                    {this.renderArrayAccordion(element, 'other_work')}
                    {this.renderArrayAccordion(element, 'other_income')}
                    {this.renderArrayAccordion(element, 'other_income_per_year')}
                    {this.renderArrayAccordion(element, 'company_ownership')}
                    {this.renderArrayAccordion(element, 'estimated_value_of_stake')}
                    {this.renderArrayAccordion(element, 'average_annual_bonus')}
                    {this.renderArrayAccordion(element, 'employer_contribution')}
                    {this.renderArrayAccordion(element, 'personal_contribution')}
                    {this.renderArrayAccordion(element, 'income_received')}
                    {this.renderArrayAccordion(element, 'isa_savings')}
                    {this.renderArrayAccordion(element, 'tax_scheme')}
                    {this.renderArrayAccordion(element, 'mortgage_type')}
                    {this.renderArrayAccordion(element, 'address')}
                    {this.renderArrayAccordion(element, 'rental_income')}
                    {this.renderArrayAccordion(element, 'interest_type')}
                    {this.renderArrayAccordion(element, 'interest_rate')}
                    {this.renderArrayAccordion(element, 'years_remaining')}
                    {this.renderArrayAccordion(element, 'rate_type')}
                    {this.renderArrayAccordion(element, 'monthly_repayment')}
                    {this.renderArrayAccordion(element, 'loan_type')}
                    {this.renderArrayAccordion(element, 'child_date_of_birth')}
                    {this.renderArrayAccordion(element, 'child_childcare_costs')}
                    {this.renderArrayAccordion(element, 'child_education_costs')}
                    {this.renderArrayAccordion(element, 'date_of_birth')}
                    {this.renderArrayAccordion(element, 'relationship_to_client')}
                    {this.renderExtraInformation(element.extra_information)}
                </div>
            );
        }

        return null;
    }

    renderBalanceBlock(item, i) {
        if (item.balance) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Balance
                    </h6>
                    <p>
                        {item.balance}
                    </p>
                </div>
            );
        }

        if (item.value) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Value
                    </h6>
                    <p>
                        {item.value}
                    </p>
                </div>
            );
        }

        if (item.outstanding) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Outstanding
                    </h6>
                    <p>
                        {item.outstanding}
                    </p>
                </div>
            );
        }

        if (item.textResume) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Outstanding
                    </h6>
                    <p>
                        {item.textResume}
                    </p>
                </div>
            );
        }

        if (item.childcare_expense) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Childare Expense
                    </h6>
                    <p>
                        {item.childcare_expense}
                    </p>
                </div>
            );
        }

        if (item.education_expense) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Education Expense
                    </h6>
                    <p>
                        {item.education_expense}
                    </p>
                </div>
            );
        }

        if (item.child_childcare_costs) {
            return (
                <Fragment>
                    <div
                        role="presentation"
                        className="balance_box_title cursor-p"
                        onClick={this.accordionFunction.bind(this, i)}
                    >
                        <h6>
                            Total costs
                        </h6>
                        <p>
                            {item.child_total_costs}
                        </p>
                    </div>
                </Fragment>
            );
        }

        return null;
    }

    renderSecondBalanceBlock(item, i) {
        if (item.education_expense) {
            return (
                <div
                    role="presentation"
                    className="balance_box_title cursor-p"
                    onClick={this.accordionFunction.bind(this, i)}
                >
                    <h6>
                        Education Expense
                    </h6>
                    <p>
                        {item.education_expense}
                    </p>
                </div>
            );
        }

        return null;
    }

    renderActionButton(item, i) {
        const { accordion } = this.state;

        const showAccordion = item.hideAccordion !== true;
        const addNew = item.addNew === true;
        const buttonText = item.buttonText ? item.buttonText : 'Edit';

        if (addNew) {
            return (
                <div className="action_btn large jc-fe">
                    <Link to={item.edit_link} className="btn btn-purple">
                        {buttonText}
                    </Link>
                </div>
            );
        }

        return (
            <div className="action_btn">
                <Link to={item.edit_link} className="btn-border-purple">
                        Edit
                </Link>
                {showAccordion
                    && (
                        <button
                            className="btn_clear mstart-0-5rem cursor-p"
                            type="button"
                            onClick={this.accordionFunction.bind(this, i)}
                        >
                            <img
                                src={`/static/img/stre-${!accordion[i] ? 'up' : 'down'}.svg`}
                                alt={`${accordion[i] ? 'Close' : 'Open'}`}
                            />
                        </button>
                    )
                }
            </div>
        );
    }

    renderBlock() {
        const {
            data,
            section,
        } = this.props;

        const { accordion } = this.state;
        if (data.length > 0) {
            return data.map((item, i) => (
                <Fragment key={i.toString()}>
                    <div className={`info-holder ${accordion[i] ? 'close' : 'open'}`}>
                        <div
                            role="presentation"
                            className={item.icon === 'user_child.svg' ? 'mr-15rem cursor-p' : 'icon_btn cursor-p'}
                            onClick={this.accordionFunction.bind(this, i)}
                        >
                            <img src={`/static/img/icons/${item.icon}`} alt={`Icons ${item.title}`} />
                        </div>
                        <div className="button_img_text" key={i.toString()}>
                            <div
                                role="presentation"
                                className="title_box cursor-p"
                                onClick={this.accordionFunction.bind(this, i)}
                            >
                                <h5>
                                    {item.title}
                                </h5>
                                <p>
                                    {item.subtitle}
                                </p>
                            </div>
                            {this.renderBalanceBlock(item, i)}
                            {this.renderSecondBalanceBlock(item, i)}
                            <div className="controls-holder">
                                {item.client_image
                                    ? (
                                        <div className="image_box">
                                            <p
                                                role="presentation"
                                                onClick={this.accordionFunction.bind(this, i)}
                                                className="cursor-p"
                                            >
                                                <img
                                                    src={`/static/img/icons/${item.client_image}`}
                                                    alt={`Icons ${item.clientName}`}
                                                />
                                                <span className="mstart-0-5rem">
                                                    {item.clientName}
                                                </span>
                                            </p>
                                        </div>
                                    ) : null}
                                {this.renderActionButton(item, i)}
                            </div>
                        </div>
                    </div>
                    {this.renderAccordionItem(i)}
                </Fragment>
            ));
        }

        if (section) {
            return (
                <div className="no-result">
                    <img src="/static/img/info-icon.svg" className="icon" alt="No Result" />
                    <span>
                    You don’t have any
                        {' '}
                        {section}
                        {' '}
                    entered, you can add a new one now or continue the survey and add it later.
                    </span>
                </div>
            );
        }

        return null;
    }


    render() {
        return (
            <div className="span-8">
                {this.renderBlock()}
            </div>
        );
    }
}


FinanceAboutTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    section: PropTypes.string,
};

FinanceAboutTable.defaultProps = {
    data: [],
    section: '',
};

export default FinanceAboutTable;
