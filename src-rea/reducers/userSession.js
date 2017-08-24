const stateDefault = {
  userLoggedIn: false,
  userDisplayName: 'Nepřihlášený uživatel'
};

/*const jeMozneGenerovat = (list, pocet) => {
  return list.some(tu=>tu.selected) && /^\d+$/.test(pocet);
}*/

export default function(state = stateDefault, action) {
  switch (action.type) {
    case 'user.DATA_RECEIVED':
      return Object.assign(
        {userDisplayName: action.data.displayName},
        {userLoggedIn: true}
      );
    case 'user.LOGGED_OUT':
    case 'user.NOT_LOGGED_IN':
      return stateDefault;
/*    case 'ZMENA_CB_VYBER_PRIKLADU':
      var result = {...state,
        list: state.list.map(tu => {return {...tu, selected:  tu.id == action.id ? !tu.selected : !!tu.selected}})};
      result.jeMozneGenerovat = jeMozneGenerovat(result.list, state.pocetPrikladu);
      return result;
    case 'ZMENA_POCTU_PRIKLADU':
      return {...state, pocetPrikladu: action.pocet, jeMozneGenerovat: jeMozneGenerovat(state.list, action.pocet)};*/
    default:
      return state;
  }
}