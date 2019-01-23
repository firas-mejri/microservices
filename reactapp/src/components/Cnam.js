import React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import logo from '../icons/cnam.jpg';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
  labelContent: {
      marginBottom: "7%",
      marginTop: '3%',
      textAlign: 'center',
  },
  buttonsCenter: {
    marginLeft: '11%',
    marginBottom: '3%',
  },
  logo: {
    height: "10%",
    width: "15%",
    marginLeft: "42%"
  }
});

class Cnam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    const { classes, history } = this.props;
    return(
      <form>
      <Modal
        className={classes.modal}
        onClose={() => history.goBack()}
        open
      >
        <Card className={classes.modalCard}>
            <CardContent className={classes.modalCardContent}>
              <img src={logo} className={classes.logo}/>
              <label className={classes.labelContent}>Saisir votre Numero d'affiliation CNAM</label>
              <input label="numAffiliation" value={this.state.value} onChange={this.handleChange} autoFocus />
            </CardContent>
            <CardActions className={classes.buttonsCenter}>
              <Button size="large" color="primary" component={Link} to={'/cnam/' + this.state.value}>Status de la demande</Button>
              <Button size="large" component={Link} to='/'>Retour</Button>
            </CardActions>
        </Card>
      </Modal>
  </form>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(Cnam);
