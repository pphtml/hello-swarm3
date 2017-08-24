const stateDefault = {
  list: [
      {id: 'sci5', name: 'sčítání do pěti'},
      {id: 'odci5', name: 'odčítání do pěti'},
      {id: 'nas100', name: 'násobení do sta'},
      {id: 'del100', name: 'dělení do sta'},
      {id: 'sci.zakl1000', name: 'sčítání do tisíce přes základ'},
      {id: 'odci.zakl1000', name: 'odčítání do tisíce přes základ'}
    ],
  jeMozneGenerovat: false,
  pocetPrikladu: 12
};

const jeMozneGenerovat = (list, pocet) => {
  return list.some(tu=>tu.selected) && /^\d+$/.test(pocet);
}

export default function(state = stateDefault, action) {
  // console.info('action', action);
  switch (action.type) {
    case 'ZMENA_CB_VYBER_PRIKLADU':
      var result = {...state,
        list: state.list.map(tu => {return {...tu, selected:  tu.id == action.id ? !tu.selected : !!tu.selected}})};
      result.jeMozneGenerovat = jeMozneGenerovat(result.list, state.pocetPrikladu);
      // console.log('REDUCED to:', result);
      return result;
    case 'ZMENA_POCTU_PRIKLADU':
      return {...state, pocetPrikladu: action.pocet, jeMozneGenerovat: jeMozneGenerovat(state.list, action.pocet)};
    default:
      return state;
  }
}