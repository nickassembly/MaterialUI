import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControllerLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles({
  root: {
    border: 0,
    marginBottom: 14,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FE688B, #FE8E53)'
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  }
);

function ButtonStyled() {
  const classes = useStyles();

  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControllerLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material Ui
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>

            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button
                startIcon={<SaveIcon />}
                color="primary">
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                variant="contained"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider >
  );
}

export default App;
