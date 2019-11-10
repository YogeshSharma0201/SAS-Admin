import React, { Component } from 'react';
import { Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';

import './App.css';

import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import englishMessages from './i18n/en';

import reviews from './reviews';
import teachers from './teachers';
import classes from './classes';
import students from './students';

import dataProviderFactory from './dataProvider';

const i18nProvider = locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
};

class App extends Component {
    state = { dataProvider: null };

    async componentWillMount() {
        const dataProvider = await dataProviderFactory(
            process.env.REACT_APP_DATA_PROVIDER
        );

        this.setState({ dataProvider });
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return (
                <div className="loader-container">
                    <div className="loader">Loading...</div>
                </div>
            );
        }

        return (
            <Admin
                title=""
                dataProvider={dataProvider}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={customRoutes}
                authProvider={authProvider}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                locale="en"
                i18nProvider={i18nProvider}
            >
                <Resource name="teachers" {...teachers} />
                <Resource name="classes" {...classes} />
                <Resource name="students" {...students} />
                <Resource name="attendances" list={ListGuesser} />
                <Resource name="reviews" {...reviews} />
            </Admin>
        );
    }
}

export default App;
