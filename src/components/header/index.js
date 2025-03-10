import React, { Fragment } from "react";
import _ from "lodash";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//import MenuDrop from './menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1d2126"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    width: 200,
    height: 45,
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 22.5
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: 22.5
    }
  }
});

function Header({ classes, user, history, deauthenticate }) {
  const login = () => {
    history.push("/login");
  };
  const signup = () => {
    history.push("/signup");
  };

  const createACourse = () => {
    history.push("/create-a-course");
  };
  return (
    <AppBar position="static" classes={{ root: classes.root }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item sm={7} xs={2} style={{ textAlign: "left" }}>
            <Link to="/">
              <img
                className={classes.logo}
                src="/images/white-100@2x.png"
                alt="Iters"
              />
            </Link>
          </Grid>
          <Grid item sm={5} xs={10} style={{ textAlign: "right" }}>
            <Fragment>
              {!_.isEmpty(user) && user.Role === "Instructor" && (
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={createACourse}
                >
                  Create a course
                </Button>
              )}

              {/* {!_.isEmpty(user) && (
                <MenuDrop user={user} deauthenticate={deauthenticate} history={history} />
              )} */}

              {_.isEmpty(user) && (
                <Fragment>
                  <Button size="small" color="secondary" onClick={login}>
                    Login
                  </Button>

                  <Button size="small" color="secondary" onClick={signup}>
                    Sign up
                  </Button>
                </Fragment>
              )}
            </Fragment>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
