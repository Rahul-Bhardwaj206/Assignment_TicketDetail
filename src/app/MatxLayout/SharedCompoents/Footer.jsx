import React from "react";
import { withStyles, MuiThemeProvider, Button } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

const Footer = ({ theme, settings }) => {
    const footerTheme = settings.themes[settings.footer.theme] || theme;
    return (
        <MuiThemeProvider theme={footerTheme}>
            <Helmet>
                <style>
                    {`
              .footer {
                background: ${footerTheme.palette.primary.main};
                color: ${footerTheme.palette.primary.contrastText};
              }
            `}
                </style>
            </Helmet>
            <div className="footer flex flex-middle h-20" style={{ bottom: '0px', paddingTop: '12px !important', position: 'fixed'}}>
                <div className="flex flex-middle container px-sm-30 w-100">
          <span className="m-auto">
              <p className="m-0">
            E-Office@2020
          </p>
          </span>
                </div>
            </div>
        </MuiThemeProvider>
    );
};

Footer.propTypes = {
    settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    settings: state.layout.settings
});

export default withStyles({}, { withTheme: true })(
    connect(
        mapStateToProps,
        {}
    )(Footer)
);
