import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter, Switch,
} from 'react-router-dom';
import jsonp from 'jsonp';
import { APIKeyGoogle } from '../helpers/constants_webapp';
import Routes from '../config/appRoutes';

const clientCaseJson = ('/static/json/clientCases.json');

export default class LoadPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: localStorage.getItem('token') || '',
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const { userUpdate, connectiontime } = this.state;

        this.loadPlan();
        setInterval(() => {
            const urlCheck = `https://www.googleapis.com/drive/v2/files/${match.params.name}?key=${APIKeyGoogle}&access_token=${localStorage.getItem('token')}`;
            jsonp(urlCheck, null, (err, data) => {
                const gsheetDate = new Date(data.modifiedDate);
                if (gsheetDate.getTime() >= connectiontime.getTime()) {
                    if (userUpdate !== data.lastModifyingUserName) {
                        this.setState({ lasChange: true, userUpdate: data.lastModifyingUserName });
                        this.loadPlan();
                    }
                } else if (userUpdate !== '') {
                    this.setState({ lasChange: false, userUpdate: '' });
                }
            });
        }, 300000);
    }

    loadPlan() {
        const { accessToken, icons } = this.state;
        const { match, onLoadPlan } = this.props;

        const idGoogle = match.params.name;
        const urlCurrent = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`;
        const urlSheets = `https://sheets.googleapis.com/v4/spreadsheets/${idGoogle}/?key=${APIKeyGoogle}&access_token=${accessToken}`;
        jsonp(urlCurrent, null, () => {
            const urlIcons = `https://sheets.googleapis.com/v4/spreadsheets/1QlRg05kfabk2fJdDLCDg2s1ZV3tNphT96t8Fb0OWPK8/values/IconsNew!A2:CE100?key=${APIKeyGoogle}&access_token=${accessToken}`;

            jsonp(urlIcons, null, (err, data) => {
                this.setState({ icons: data.values });
            });

            const clientCase = [];

            jsonp(urlSheets, null, (err, data) => {
                const arraySheets = [];
                let num = 0;
                const lengthPlan = typeof data.sheets !== 'undefined' ? data.sheets.length : 0;
                Object.keys(clientCaseJson).map((item) => {
                    clientCase[item] = clientCaseJson[item].values;

                    return null;
                });
                data.sheets.map((item) => {
                    const urlPlan = `https://sheets.googleapis.com/v4/spreadsheets/${idGoogle}/values/${item.properties.title}!A1:CE35?key=${APIKeyGoogle}&access_token=${accessToken}`;
                    jsonp(urlPlan, null, (Err, Data) => {
                        if (item.properties.title.indexOf('Plan') !== -1) {
                            if (Data.values[1][1] !== '#REF!') {
                                arraySheets[item.properties.title] = Data.values;
                            }
                        }
                        if (item.properties.title.indexOf('Presentation') !== -1) {
                            arraySheets.presentation = data.values;
                        }
                        if (lengthPlan === num + 1) {
                            onLoadPlan(arraySheets, icons, clientCase);
                        }
                        num += 1;
                    });

                    return null;
                });
            });
        });
    }

    render() {
        const { lasChange, userUpdate } = this.state;
        return (
            <div>
                {
                    lasChange
                    && (
                        <div id="wrap_user_change">
                            <div id="user_change">
                                <h4>
                                    New Data Saved
                                </h4>
                                <p>
                                    The users
                                    {userUpdate}
                                    {' '}
                                saved a new data, to upload with “user” changes, click
                                “Reload”, to save last changes - with potential data overriding - and also load new
                                data, click “Save & Reload”
                                </p>
                                <button type="button" onClick="window.location.reload()" className="primary_button">
                                    RELOAD
                                </button>
                                <button type="button" onClick="window.location.reload()" className="alert_button">
                                    SAVE & RELOAD
                                </button>
                            </div>
                        </div>
                    )
                }
                <BrowserRouter>
                    <Switch>
                        {
                            Object.keys(Routes.Webapp.routes.Meeting.children).map((item) => {
                                const routes = Routes.Webapp.routes.Meeting.children;
                                return (
                                    routes[item].component
                                );
                            })
                        }
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

LoadPlan.propTypes = {
    match: PropTypes.object.isRequired,
    onLoadPlan: PropTypes.func.isRequired,
};
