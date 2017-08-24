import React, { Component } from 'react';
import { Link } from 'react-router'

class NevybranePriklady extends Component {
  render() {
    return (
    <div className="jumbotron">
      <h3>Žádné příklady zatím nebyly vygenerovány</h3>
      <p>Musíš si je vygenerovat v sekci <Link to="/">Výběr příkladů</Link>.</p>
    </div>
    )
  }
}

export default NevybranePriklady;
