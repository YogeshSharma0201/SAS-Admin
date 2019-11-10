import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import DollarIcon from '@material-ui/icons/AttachMoney';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

const styles = {
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
};

const MonthlyRevenue = ({ value, translate, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={LibraryBooks} bgColor="#31708f" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                {'Reports submitted today'}
            </Typography>
            <Typography variant="headline" component="h2">
                {'40'}
            </Typography>
        </Card>
    </div>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(MonthlyRevenue);
