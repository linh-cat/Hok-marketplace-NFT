// import { accessories_type } from 'redux/constants/filterConstant';
interface loadAccesories {
	type: 'filter/Genx/accessories';
	payload: string;
}
interface loadArms {
	type: 'filter/Genx/arms';
	payload: string;
}
interface loadBack {
	type: 'filter/Genx/back';
	payload: string;
}
interface loadBody {
	type: 'filter/Genx/body';
	payload: string;
}
interface loadBrain {
	type: 'filter/Genx/brain';
	payload: string;
}
interface loadEndo {
	type: 'filter/Genx/endo';
	payload: string;
}
interface loadEnergy {
	type: 'filter/Genx/energy';
	payload: string;
}
interface loadDeltoid {
	type: 'filter/Genx/deltoid';
	payload: string;
}
interface loadSortGenx {
	type: 'filter/Genx/sort';
	payload: string;
}
interface loadPageGenx {
	type: 'filter/Genx/page';
	payload: number;
}
export type Action =
	| loadAccesories
	| loadArms
	| loadBack
	| loadBody
	| loadBrain
	| loadDeltoid
	| loadEndo
	| loadEnergy
	| loadSortGenx
	| loadPageGenx;
