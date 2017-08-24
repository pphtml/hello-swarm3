import { UlohaTovarna } from '../logic/priklady';

const stateDefault = {
  list: [],
  zkontrolovano: false,
  vygenerovano: false,
  vyplnenoVse: false
  //pocetChyb: 3
};

// id:0
// text:"10 x 5"
// vysledek:"50"
// instrukce:"vynásob"
// odpoved:"60"
// spatne: true

export default function(state = stateDefault, action) {
  const kontrolaSpravnosti = (uloha) => {
    return _.trim(uloha.odpoved) == uloha.vysledek;
  }

  switch (action.type) {
    case 'VYGENERUJ_PRIKLADY':
      let tovarna = new UlohaTovarna(action.list);
      let range = _.range(action.pocet);
      let unikatniUlohy = [];
      range.forEach(i => {
        var objektUlohy, uzExistuje;
        do {
          let uloha = tovarna.vygeneruj();
          objektUlohy = {id: i,
            text: uloha.getTextUlohy(),
            vysledek: uloha.getSpravnyVysledek(),
            instrukce: uloha.getInstrukce()
          };
          uzExistuje = unikatniUlohy.some(ulohaExistujici => objektUlohy.text == ulohaExistujici.text)
        } while (uzExistuje);
        unikatniUlohy.push(objektUlohy );
      });
      //ulohy.forEach(uloha => console.info(uloha));
      return {list: unikatniUlohy, zkontrolovano: false, vygenerovano: true};
/*    case 'ZMENA_CB_VYBER_PRIKLADU':
      var result = {...state,
        list: state.list.map(tu => {return {...tu, selected:  tu.id == action.id ? !tu.selected : !!tu.selected}})};
      result.jeMozneGenerovat = result.list.some(tu=>tu.selected);
      console.log('REDUCED to:', result);
      return result;*/
    case 'ZKONTROLUJ_SPRAVNOST':
      return {...state,
        list: state.list.map(uloha => { return {...uloha, spatne: !kontrolaSpravnosti(uloha)}}),
        zkontrolovano: true,
        pocetChyb: state.list.filter(uloha => !kontrolaSpravnosti(uloha)).length
      };
    case 'VYPLNIT_ODPOVED':
      let novyList = state.list.map(uloha => { return {...uloha, odpoved: uloha.id == action.id ? action.odpoved : uloha.odpoved}});
      return {...state,
        list: novyList,
        vyplnenoVse: novyList.every(uloha => {
          let jo = uloha.hasOwnProperty('odpoved') && uloha.odpoved != undefined && uloha.odpoved.length > 0;
          // console.info(jo);
          return jo;
        })
      };

    default:
      return state;
  }
}