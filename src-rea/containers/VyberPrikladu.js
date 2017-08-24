import React from 'react';
// import VyberPrikladu from '../components/VyberPrikladu';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class VyberPrikladu extends React.Component {
  render() {
    const onToggleVyber = (ev, id) => {
      //ev.preventDefault();
      // console.info(/*this.props.actions*/ 'toggle vyber');
      this.props.actions.zmenaCBVyberPrikladu(id);
    };

/*    const listovaniTypuUloh = this.props.vyberPrikladu.list.map((tp) => {
      return(
        <div key={tp.id} className="column" onChange={ev => {onToggleVyber(ev, tp.id)}}>
          <input type="checkbox" checked={tp.selected} /><label>{tp.name}</label>
        </div>
      );
    });*/

    const listovaniTypuUlohBT = this.props.vyberPrikladu.list.map((tp) => {
      return(
        <div className="col-sm-3" key={tp.id} >
          {/*onClick={ev=>{onToggleVyber(ev, tp.id)}}*/}
            <div className="checkbox">                
                <label><input type="checkbox" checked={tp.selected || false} onChange={ev => {onToggleVyber(ev, tp.id)}}/>
                {tp.name}</label>
            </div>
        </div>
      );
    });

    const posliListVybranychTypu = event => {
      let vybranePriklady = this.props.vyberPrikladu.list.filter(typ => typ.selected).map(typ => typ.id);
      this.props.actions.vygenerujPriklady(vybranePriklady, parseInt(this.props.vyberPrikladu.pocetPrikladu, 10));
      browserHistory.push('/priklady');
    };

    const pocetPrikladuSeZmenil = event => {
      //console.info('pocet prikladu se zmenil');
      this.props.actions.zmenaPoctuPrikladu(event.target.value);
    }

    return (
      <div>
        <h3>Výběr zkoušených oblastí</h3>
        <hr/>
        <div className="form-group row">
          <label htmlFor="pocetPrikladu" className="col-sm-2 control-label">Počet příkladů</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="pocetPrikladu" value={this.props.vyberPrikladu.pocetPrikladu} onChange={pocetPrikladuSeZmenil}/>
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 control-label">Oblasti</label>
          <div className="col-sm-10">
            <div className="row">
              {listovaniTypuUlohBT}
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-12">
            <button type="button"
              className={"btn btn-primary " + (this.props.vyberPrikladu.jeMozneGenerovat ? "" : "disabled")}
              onClick={()=>{this.props.vyberPrikladu.jeMozneGenerovat && posliListVybranychTypu()}}>Vygeneruj příklady</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vyberPrikladu: state.vyberPrikladu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VyberPrikladu);