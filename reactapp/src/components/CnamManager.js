import * as React from 'react';
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
  }
});

class CnamManager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost/api/cnam/'+ this.props.match.params.id)
      .then(response => response.json())
      .then(
        data => this.setState({items: data, isLoading: false}),
        (error) => { this.setState({ isLoading: false, error })}
      );
      
  }

  render() {
    const {items, isLoading, error} = this.state;
    const { classes, history } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      if(items.length == 0){
      
        return(
          <Modal className={classes.modal} onClose={() => history.goBack()} open>
            <Card className={classes.modalCard}>
              <CardContent className={classes.modalCardContent}>
                <img src={logo} className={classes.logo}/>
                <div className={classes.warrning}> Verifier votre numéro d'affiliation !!!</div>
              </CardContent>
              <CardActions>
                <Button className={classes.buttonsCenter} size="large" component={Link} to='/cnam'>Retour</Button>
              </CardActions>
            </Card>
          </Modal>
        );
  
      } else {

        return(
          <Modal className={classes.modal} onClose={() => history.goBack()} open>
            <Card className={classes.modalCard}>
              <CardContent className={classes.modalCardContent}>
                <img src={logo} className={classes.logo}/>
                <div className={classes.labelContent}>Status de votre demande de remboursement:</div>
                <div className={classes.statusContent}>
                  {items.map((item) => <div key={item.numAffiliation}> {item.etat}</div>)}
                </div>
              </CardContent>
              <CardActions>
                <Button className={classes.buttonsCenter} size="large" component={Link} to='/cnam'>Retour</Button>
              </CardActions>
            </Card>
          </Modal>
        );

      }
    }
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(CnamManager);