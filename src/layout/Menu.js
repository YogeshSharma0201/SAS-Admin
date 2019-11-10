import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { withRouter } from 'react-router-dom';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';

import visitors from '../visitors';
import orders from '../orders';
import invoices from '../invoices';
import products from '../products';
import categories from '../categories';
import reviews from '../reviews';
import SubMenu from './SubMenu';

class Menu extends Component {
    state = {
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false,
        menuReports: false,
        menuTeachers: false,
        menuStudents: false,
        menuClasses: false,
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
        logout: PropTypes.object,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

    render() {
        const { onMenuClick, open, logout, translate } = this.props;
        return (
            <div>
                {' '}
                <DashboardMenuItem onClick={onMenuClick} />
                <MenuItemLink
                    to={`/attendances`}
                    primaryText={'Reports'}
                    leftIcon={<LibraryBooks />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/students`}
                    primaryText={'Students'}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/teachers`}
                    primaryText={'Teachers'}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                <MenuItemLink
                    to={`/classes`}
                    primaryText={'Classes'}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                />
                <Responsive
                    xsmall={
                        <MenuItemLink
                            to="/configuration"
                            primaryText={translate('pos.configuration')}
                            leftIcon={<SettingsIcon />}
                            onClick={onMenuClick}
                        />
                    }
                    medium={null}
                />
                <Responsive
                    small={logout}
                    medium={null} // Pass null to render nothing on larger devices
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
    translate
);

export default enhance(Menu);
