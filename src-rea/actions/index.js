import axios from 'axios';

export const ZMENA_CB_VYBER_PRIKLADU = 'ZMENA_CB_VYBER_PRIKLADU';
export const VYGENERUJ_PRIKLADY = 'VYGENERUJ_PRIKLADY';

export function zmenaCBVyberPrikladu(id) {
  return {
    type: ZMENA_CB_VYBER_PRIKLADU,
    id
  }
}

export function zmenaPoctuPrikladu(pocet) {
  return {
    type: 'ZMENA_POCTU_PRIKLADU',
    pocet
  }
}

export function vygenerujPriklady(list, pocet) {
  return {
    type: VYGENERUJ_PRIKLADY,
    list,
    pocet
  }
}

export function zkontrolujSpravnost() {
  return {
    type: 'ZKONTROLUJ_SPRAVNOST'
  }
}

export function vyplnitOdpoved(id, odpoved) {
  return {
    type: 'VYPLNIT_ODPOVED',
    id,
    odpoved
  }
}

function requestData() {
	return {type: 'user.DATA_REQUESTED'};
};

function receiveData(json) {
	return {
		type: 'user.DATA_RECEIVED',
		data: json
	}
};

function userNotLoggedIn() {
  return {
    type: 'user.NOT_LOGGED_IN'
  }
}

function receiveError(json) {
	return {
		type: 'types.RECV_ERROR',
		data: json
	}
};

function loggedOut() {
  return {
    type: 'user.LOGGED_OUT'
  }
};

export function fetchUserSessionData() {
	return function(dispatch) {
		dispatch(requestData());
		return axios({
			url: '/user',
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(receiveData(response.data));
			})
			.catch(function(response){
        if (response.response.status == 404){
          dispatch(userNotLoggedIn());
        } else {
          dispatch(receiveError(response.data));
          dispatch(pushState(null,'/error'));
        }
			})
	}
};

export function logout() {
	return function(dispatch) {
		return axios({
			url: '/logout',
			timeout: 20000,
			method: 'get',
			responseType: 'json'
		})
			.then(function(response) {
				dispatch(loggedOut());
			})
			.catch(function(response){
        dispatch(receiveError(response.data));
        dispatch(pushState(null,'/error'));
			})
	}
}