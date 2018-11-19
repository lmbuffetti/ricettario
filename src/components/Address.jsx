import React, { Component } from 'react';
import { Field, change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import arrayMove from 'array-move';
import findIndex from 'lodash/findIndex';

import { getAddressList, getPostalAddressList, resetAddressList } from '../actions/AddressActions';
import SelectAddress from './SelectAddress';
import Select from './Select';
import InputCustom from './InputCustom';
import InputSearch from './InputSearch';
import { isPostcode, required } from '../utils/validation.helper';

class Address extends Component {
    constructor(props) {
        super(props);

        this.submitPostcode = this.submitPostcode.bind(this);
        this.renderAddressSelect = this.renderAddressSelect.bind(this);

        this.state = {
            searchPostcodeClicked: false,
        };
    }

    componentWillUnmount() {
        const { handleResetAddressList } = this.props;

        handleResetAddressList();
    }

    changeSelect = (e) => {
        const {
            addressList,
            postalAddressList,
            changeFieldValue,
            formName,
            isPostal,
        } = this.props;
        const selectedAddress = e.target.value.split(',')[0];

        if (!isPostal) {
            const currentValue = addressList.find(item => selectedAddress === item.Line1);
            changeFieldValue(formName, 'address_1', currentValue.Line1);
            changeFieldValue(formName, 'address_2', currentValue.Line2);
            changeFieldValue(formName, 'city', currentValue['Town/City']);
            changeFieldValue(formName, 'country_cd', 'GB');
        } else {
            const currentValue = postalAddressList.find(item => selectedAddress === item.Line1);
            changeFieldValue(formName, 'postal_address_1', currentValue.Line1);
            changeFieldValue(formName, 'postal_address_2', currentValue.Line2);
            changeFieldValue(formName, 'postal_city', currentValue['Town/City']);
            changeFieldValue(formName, 'postal_country_cd', 'GB');
        }
    };

    submitPostcode(e) {
        const {
            postcode,
            getPostcode,
        } = this.props;
        this.setState({ searchPostcodeClicked: true });
        e.preventDefault();
        if (isPostcode(postcode) === null) {
            const postcodeSearch = postcode.replace(/^\s+|\s+$/g, '')
                .replace(/ /g, '');
            getPostcode(postcodeSearch);
        }
    }

    renderAddressSelect = (addressList) => {
        const {
            searchPostcodeClicked,
        } = this.state;
        const {
            isPostal,
        } = this.props;

        if (!isEmpty(addressList) && searchPostcodeClicked) {
            return (
                <div className="input-wrap">
                    <Field
                        component={SelectAddress}
                        extraClasses="col span-8"
                        name={isPostal ? 'select-primary-address' : 'select-address'}
                        placeholder="Please select your address from list"
                        options={addressList}
                        onChange={this.changeSelect}
                    />
                </div>
            );
        }
        return null;
    };

    render() {
        const {
            isShowErrors, label, countriesOptions, addressList, postalAddressList, isPostal, isNotRequired,
        } = this.props;
        const {
            searchPostcodeClicked,
        } = this.state;
        const collectedAddressList = {};
        const collectedPostalAddressList = {};
        const orderedCountriesOptions = arrayMove(countriesOptions, findIndex(countriesOptions, o => o.code === 'GB'), 0);

        addressList.map((item, index) => {
            const Line1 = !isEmpty(item.Line1) ? `${item.Line1}` : '';
            const Line2 = !isEmpty(item.Line2) ? `, ${item.Line2}` : '';
            const Line3 = !isEmpty(item.Line3) ? `, ${item.Line3}` : '';
            const Line4 = !isEmpty(item.Line4) ? `, ${item.Line4}` : '';
            const Town = !isEmpty(item['Town/City']) ? `, ${item['Town/City']}` : '';
            const Country = !isEmpty(item.Country) ? `, ${item.Country}` : '';
            collectedAddressList[index] = Line1 + Line2 + Line3 + Line4 + Town + Country;
            return collectedAddressList;
        });
        postalAddressList.map((item, index) => {
            const Line1 = !isEmpty(item.Line1) ? `${item.Line1}` : '';
            const Line2 = !isEmpty(item.Line2) ? `, ${item.Line2}` : '';
            const Line3 = !isEmpty(item.Line3) ? `, ${item.Line3}` : '';
            const Line4 = !isEmpty(item.Line4) ? `, ${item.Line4}` : '';
            const Town = !isEmpty(item['Town/City']) ? `, ${item['Town/City']}` : '';
            const Country = !isEmpty(item.Country) ? `, ${item.Country}` : '';
            collectedPostalAddressList[index] = Line1 + Line2 + Line3 + Line4 + Town + Country;
            return collectedPostalAddressList;
        });

        return (
            <div className="address">
                <label className="input-label pb-2rem" htmlFor="postcode">
                    {label}
                </label>
                <Field
                    component={InputSearch}
                    label="Postcode"
                    placeholder="Type postcode and choose from the list"
                    type="text"
                    name={isPostal ? 'postal_postcode' : 'postcode'}
                    extraClasses={`col span-8 ${!isEmpty(isPostal ? collectedPostalAddressList : collectedAddressList) ? 'pb-0' : ''}`}
                    isShowErrors={isShowErrors || searchPostcodeClicked}
                    onClickSubmit={this.submitPostcode}
                    isPostal={isPostal}
                    validate={!isNotRequired ? [
                        required, isPostcode,
                    ] : null}
                />
                {this.renderAddressSelect(isPostal ? collectedPostalAddressList : collectedAddressList)}
                <Field
                    component={InputCustom}
                    label="Address line 1"
                    type="text"
                    name={isPostal ? 'postal_address_1' : 'address_1'}
                    extraClasses="col span-8"
                    isShowErrors={isShowErrors}
                    validate={!isNotRequired ? [
                        required,
                    ] : null}
                />
                <Field
                    component={InputCustom}
                    label="Address line 2 (optional)"
                    type="text"
                    name={isPostal ? 'postal_address_2' : 'address_2'}
                    extraClasses="col span-8"
                />
                <div className="dis-f span-8">
                    <Field
                        component={InputCustom}
                        label="City"
                        type="text"
                        name={isPostal ? 'postal_city' : 'city'}
                        extraClasses="col span-4"
                        isShowErrors={isShowErrors}
                        validate={!isNotRequired ? [
                            required,
                        ] : null}
                    />
                    <Field
                        name={isPostal ? 'postal_country_cd' : 'country_cd'}
                        component={Select}
                        extraClasses="span-4 col-last"
                        placeholder="Select country"
                        options={orderedCountriesOptions}
                        isShowErrors={isShowErrors}
                    />
                </div>
            </div>
        );
    }
}

Address.propTypes = {
    getPostcode: PropTypes.func.isRequired,
    changeFieldValue: PropTypes.func.isRequired,
    isShowErrors: PropTypes.bool.isRequired,
    isPostal: PropTypes.bool,
    isNotRequired: PropTypes.bool,
    postcode: PropTypes.string,
    formName: PropTypes.string.isRequired,
    addressList: PropTypes.arrayOf(PropTypes.object),
    postalAddressList: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string.isRequired,
    countriesOptions: PropTypes.arrayOf(PropTypes.object),
    handleResetAddressList: PropTypes.func.isRequired,
};

Address.defaultProps = {
    addressList: [],
    postalAddressList: [],
    countriesOptions: [],
    postcode: null,
    isPostal: false,
    isNotRequired: false,
};

const mapStateToProps = (state, ownProps) => ({
    addressList: get(state, 'address.items', []),
    postalAddressList: get(state, 'address.postalItems', []),
    formValue: get(state, `form.${ownProps.formName}`, {}),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getPostcode: (postcode) => {
        dispatch(ownProps.isPostal ? getPostalAddressList(postcode) : getAddressList(postcode));
    },
    changeFieldValue: (formName, field, value) => {
        dispatch(change(formName, field, value));
    },
    handleResetAddressList: bindActionCreators(resetAddressList, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Address));
