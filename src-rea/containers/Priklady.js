import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import ReactDOM from 'react-dom';
import NevybranePriklady from '../components/NevybranePriklady';

class Priklady extends React.Component {
  componentDidMount(){
    if (this.props.priklady.vygenerovano) {
      ReactDOM.findDOMNode(this.refs[this.props.priklady.list[0].id]).focus();
    }
  }

  render() {
    // console.info(this.props.priklady.list);

/*    const listovaniPrikladu = this.props.priklady.list.map((tp) => {
      return(
        <div key={tp.id} className="column">
          {tp.text}
        </div>
      );
    });*/

    const listovaniPrikladu = this.props.priklady.list.map((tp) => {
      return(
        <div key={tp.id} className="col-xs-6 col-sm-4 col-md-3">
          <div className="thumbnail">
            <small>{tp.instrukce}</small>

            <h4>{tp.text}</h4>

            {/*[class.chyba]="priklad.uloha.chyba" [(ngModel)]="priklad.uloha.zadanyVysledek" */}
            <input type="number" className={'form-control' + (tp.spatne ? ' chyba' : '')} ref={tp.id} value={tp.odpoved || ''} onChange={ev => {odpovedZmena(ev, tp.id)}}/>
          </div>
        </div>
      );
    });

    const odpovedZmena = (event, id) => {
      this.props.actions.vyplnitOdpoved(id, event.target.value);
    };

    const zkontrolujSpravnost = event => {
      //let vybranePriklady = this.props.vyberPrikladu.list.filter(typ => typ.selected).map(typ => typ.id);
      this.props.actions.zkontrolujSpravnost();
      //browserHistory.push('/priklady');
    };

/*    return (
        <div>
          <div className="row">
            <h1>Příklady</h1>
          </div>
          <div className="row small-up-1 medium-up-2 large-up-4">
            {listovaniPrikladu}
          </div>
          <div className="row">
            <a href="about.html" className={"button "  + (false ? "" : "disabled")} >Zkontrolovat</a>
          </div>
        </div>
    );*/

    let divVysledek = null;
    if (this.props.priklady.zkontrolovano) {
      divVysledek =
        <div>
          {this.props.priklady.pocetChyb == 0 &&
            <div className="alert alert-success" role="alert">
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                &nbsp;Gratuluji! Máš vše správně!
            </div>
          }
          {this.props.priklady.pocetChyb == 1 &&
            <div className="alert alert-warning" role="alert">
                <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                &nbsp;Chybička se vloudila. Oprav si ji.
            </div>
          }
          {this.props.priklady.pocetChyb > 1 &&
            <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                &nbsp;Máš {this.props.priklady.pocetChyb} {this.props.priklady.pocetChyb < 5 ? 'chyby' : 'chyb'}. Oprav je.
            </div>
          }
        </div>
    } else {
      divVysledek = <div></div>;
    }

    if (this.props.priklady.vygenerovano) {
      return (
        <div>
          <div className="row">
            {listovaniPrikladu}
          </div>

          <p>
            {/*<button type="button" class="btn btn-primary btn-lg" [class.disabled]="!jeVseVyplneno()" (click)="zkontroluj()" (keypress)="zkontroluj()">Zkontroluj</button>*/}
            <button type="button"
              className={'btn btn-primary' + (this.props.priklady.vyplnenoVse ? '' : ' disabled')}
              onClick={()=>{this.props.priklady.vyplnenoVse && zkontrolujSpravnost()}}>Zkontroluj</button>
          </p>

          {divVysledek}

          {/*<div *ngIf="zkontrolovano">
            *ngIf="pocetChyb === 0"
            *ngIf="pocetChyb === 1"
            *ngIf="pocetChyb > 1"
            {{pocetChyb}}   {{pocetChyb < 5 ? 'chyby' : 'chyb'}}
      */}
        </div>
      );
    } else {
      return (
        <div><NevybranePriklady/></div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    priklady: state.priklady
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Priklady);