import * as React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter, Link } from 'react-router-dom';
import logo from '../icons/mi.jpg';
import { PDFExport } from '@progress/kendo-react-pdf';



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
      marginBottom: '7%',
      marginTop: '3%',
      textAlign: 'center',
  },
  buttonsCenter: {
    marginLeft: '12%',
    marginBottom: '3%',
  },
  button2center: {
    marginLeft: '36%',
    marginBottom: '3%',
  },
  docTitle: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: '1.2em',
      marginBottom: '15%',
      textAlign: 'center'
  },
  logo: {
      marginBottom: '10%',
      marginLeft: '43%',
      marginTop: '5%',
      height: 'auto',
      width: '60px'
  },
  field: {
      fontWeight: 'bold',
      fontSize: '0.8em'

  },
  value: {
      fontSize: '0.8em',
      textAlign: 'center'
  },
    casier: {
        height: '150px'
    },
    spacing: {
        height: '150px',
    },
    table: {
        marginBottom: '5%'
    },
    warrning: {
        color: '#FF0000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5em',
        marginBottom: '5%'
    }
});

class MinterieurManager extends React.Component {

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

    fetch('http://localhost/api/mi/'+ this.props.match.params.id)
      .then(response => response.json())
      .then(
        data => this.setState({items: data, isLoading: false}),
        (error) => { this.setState({ isLoaded: true, error })}
      );
      
  }

  exportPDF = () => {
    this.b3.save();
  }

  render() {
    const {items, isLoading, error} = this.state;
    const { classes, history } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
        if(this.state.items.cin == 0 ){

            return(
                <Modal className={classes.modal} onClose={() => history.goBack()} open >
                    <Card className={classes.modalCard}>
                        <CardContent className={classes.modalCardContent}>
                          <div>
                            <img src={logo} className={classes.logo}/>
                          </div>
                          <div className={classes.warrning}> Verifier le numero de votre carte CIN !!!</div>
                        </CardContent>
                        <CardActions className={classes.button2center}>
                          <Button size="large" component={Link} to='/b3'>Retour</Button>
                        </CardActions>
                    </Card>
                </Modal>
            );

        } else {

            return(
                <form>
                    <Modal className={classes.modal} onClose={() => history.goBack()} open >
                        <Card className={classes.modalCard}>
                            <CardContent className={classes.modalCardContent}>

                                    <PDFExport paperSize={'Letter'} fileName={"B3-" + this.props.match.params.id + ".pdf"} title="" subject="" keywords="" ref={(r) => this.b3 = r}>

                                        <div>
                                            <img src={logo} className={classes.logo}/>
                                        </div>
                                        <div className={classes.docTitle}>
                                            Bulletin Numero 3
                                        </div>

                                        <Table className={classes.table}>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className={classes.field}>
                                                        Nom et Prenom : 
                                                    </TableCell>
                                                    <TableCell className={classes.value}>
                                                        { this.state.items.nom }
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.field}>
                                                        CIN :
                                                    </TableCell>
                                                    <TableCell className={classes.value}>
                                                        {this.state.items.cin}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.field}>
                                                        Date de Naissance :
                                                    </TableCell>
                                                    <TableCell className={classes.value}>
                                                        {this.state.items.dateNaissance}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className={classes.field}>
                                                        Adresse :
                                                    </TableCell>
                                                    <TableCell className={classes.value}>
                                                        {this.state.items.adresse}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow></TableRow>
                                                <TableRow className={classes.spacing}>
                                                    <TableCell className={classes.field}>
                                                        Casier Judiciaire 
                                                    </TableCell>
                                                    <TableCell className={classes.value}>
                                                        {this.state.items.casierJudiciaire}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow></TableRow>
                                            </TableBody>
                                        </Table>

                                    </PDFExport>

                            </CardContent>
                            <CardActions>
                                <Button className={classes.buttonsCenter} size="large" component={Link} to='/b3'>Retour</Button>
                                <Button className={classes.buttonsCenter} size="large" color="primary" onClick={this.exportPDF}>Télecharger en PDF</Button>
                            </CardActions>
                        </Card>
                    </Modal>
                </form>
            );

        }
    }
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(MinterieurManager);