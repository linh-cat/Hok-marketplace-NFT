import { Action } from 'redux/actions/action-interfaces/connectionActionInterface';
import { account_type, networkId_type } from 'redux/constants/connectionConstant';
interface Iinitstate {
	account: string | null;
	networkId: string | null;
}
const initstate = {
	account: null,
	networkId: null,
};

const connectionReducer = (state: Iinitstate = initstate, action: Action) => {
	switch (action.type) {
		case account_type:
			return {
				...state,
				account: action.payload,
			};
		case networkId_type:
			return {
				...state,
				networkId: action.payload,
			};
		default:
			return state;
	}
};

export default connectionReducer;
