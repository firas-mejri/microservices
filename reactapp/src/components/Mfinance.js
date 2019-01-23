import React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
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
      marginBottom: "10%",
      marginTop: '5%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5em'
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
    this.state = {
        nom: '',
        prenom: '',
        cin: 0,
        dateNaissance: '',
        revenu: 0,
        response: 'failed',
    };
    this.nomChange = this.nomChange.bind(this);
    this.prenomChange = this.prenomChange.bind(this);
    this.cinChange = this.cinChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.revenuChange = this.revenuChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nomChange(event) {
    this.setState({nom: event.target.value});
  }
  prenomChange(event) {
    this.setState({prenom: event.target.value});
  }
  cinChange(event) {
    this.setState({cin: event.target.value});
  }
  dateChange(event) {
    this.setState({dateNaissance: event.target.value});
  }
  revenuChange(event) {
    this.setState({revenu: event.target.value});
  }

  handleSubmit(event){
      event.preventDefault();
      fetch('http://localhost/api/rf', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              nom: this.state.nom,
              prenom: this.state.prenom,
              cin: this.state.cin,
              dateNaissance: this.state.dateNaissance,
              revenu: this.state.revenu
          })
      })
      .then(res => res.text())
      .then(res => this.setState({response: res},
          () => {
            if (this.state.response == 'succeded'){
              this.props.history.push('/declaration-revenu/' + this.state.response);
            } else {
              this.props.history.push('/declaration-revenu/failed');
            }
          }));
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
              <label className={classes.labelContent}>Déclaration des revenus</label>

              <Table>
                  <TableBody>
                      <TableRow>
                        <TableCell>Nom :</TableCell>
                        <TableCell>
                            <input name="nom" onChange={this.nomChange} />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Prénom :</TableCell>
                          <TableCell>
                              <input name="Prenom" type="text" onChange={this.prenomChange} />
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>CIN :</TableCell>
                          <TableCell>
                              <input name="cin" type="text" onChange={this.cinChange} />
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Date de naissance :</TableCell>
                          <TableCell>
                              <input name="dateNaissance" type="text" onChange={this.dateChange} />
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Revenu annuel :</TableCell>
                          <TableCell>
                              <input name="revenu" type="text" onChange={this.revenuChange} />
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>

            </CardContent>
            <CardActions className={classes.buttonsCenter}>
              <Button size="large" color="primary" onClick={this.handleSubmit}>Envoyer la déclaration</Button>
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
