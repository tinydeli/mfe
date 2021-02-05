import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles( (theme) => {
    return createStyles({
        bar: {
            width: '100%',
            height: '1px',
            overflow: 'hidden',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    });
});

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    );
};