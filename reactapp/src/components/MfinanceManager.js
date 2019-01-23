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
import logo from '../icons/mf.jpg';

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
      marginLeft: '37%',
      marginBottom: '3%',
    },
    statusContent: {
      textAlign: 'center',
      fontSize: '1.5em',
      color: '#005577'
    },
    logo: {
      height: "10%",
      width: "15%",
      marginLeft: "42%"
    },
    warrning: {
      color: '#FF0000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.3em',
      marginBottom: '5%',
      marginTop: '10%'
    },
    success: {
        color: '#22AA22',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.3em',
        marginBottom: '5%',
        marginTop: '10%'
    }
  });

class MfinanceManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, history } = this.props;
    if (this.props.match.params.id == "succeded"){
        return(
            <Modal className={classes.modal} onClose={() => history.goBack()} open>
            <Card className={classes.modalCard}>
              <CardContent className={classes.modalCardContent}>
                <img src={logo} className={classes.logo}/>
                <div className={classes.success}> Votre déclaration de revenu est bien pris en compte, Merci pour votre sens de responsabilités</div>
              </CardContent>
              <CardActions>
                <Button className={classes.buttonsCenter} size="large" component={Link} to='/declaration-revenu'>Retour</Button>
              </CardActions>
            </Card>
          </Modal>
        );
    } else {
        console.log(this.props.match.params.id);
        return(
            <Modal className={classes.modal} onClose={() => history.goBack()} open>
            <Card className={classes.modalCard}>
              <CardContent className={classes.modalCardContent}>
                <img src={logo} className={classes.logo}/>
                <div className={classes.warrning}> une erreur est survenue veuillez verifier les informations saisie et réessayer</div>
              </CardContent>
              <CardActions>
                <Button className={classes.buttonsCenter} size="large" component={Link} to='/declaration-revenu'>Retour</Button>
              </CardActions>
            </Card>
          </Modal>
        );
    }
    
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(MfinanceManager);