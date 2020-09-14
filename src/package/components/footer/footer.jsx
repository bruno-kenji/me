import React, { memo } from 'react';

import { createUseStyles } from 'react-jss';

import { ShareLinks } from './share_links/share_links';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div />
            <ShareLinks />
            <div />
        </div>
    );
};

export const Footer = memo(FooterComponent);
