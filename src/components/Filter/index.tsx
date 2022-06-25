import './index.scss';

import ComboBoxHok from 'components/ComboBoxHok';
import { accessories, arms, back, body, BrainShell, deltoid, energy, endoskeletion } from './List';
import { useDispatch } from 'react-redux';
import {
	loadAccessoriesHandler,
	loadArmsHandler,
	loadBackHandler,
	loadBodyHandler,
	loadBrainHandler,
	loadDeltoidHandler,
	loadEndoHandler,
	loadEnergyHandler,
	loadPaginate,
} from 'redux/actions/action-creators/filterAction';
const Index = () => {
	const dispatch = useDispatch();
	const enteredAccessories = (value: any) => {
		if (value === undefined) {
			dispatch(loadAccessoriesHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadAccessoriesHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredArms = (value: any) => {
		if (value === undefined) {
			dispatch(loadArmsHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadArmsHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredBack = (value: any) => {
		if (value === undefined) {
			dispatch(loadBackHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadBackHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredBody = (value: any) => {
		if (value === undefined) {
			dispatch(loadBodyHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadBodyHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredBrain = (value: any) => {
		if (value === undefined) {
			dispatch(loadBrainHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadBrainHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredDeltoid = (value: any) => {
		if (value === undefined) {
			dispatch(loadDeltoidHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadDeltoidHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredEndo = (value: any) => {
		if (value === undefined) {
			dispatch(loadEndoHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadEndoHandler(value));
		dispatch(loadPaginate(-1));
	};
	const enteredEnergy = (value: any) => {
		if (value === undefined) {
			dispatch(loadEnergyHandler(''));
			dispatch(loadPaginate(-1));
		} else dispatch(loadEnergyHandler(value));
		dispatch(loadPaginate(-1));
	};
	return (
		<div className="filter">
			<div className="title">Filter</div>
			<ComboBoxHok options={accessories} width="180px" title="Collection" defaultValue="ALL" />
			<ComboBoxHok
				options={accessories}
				width="180px"
				title="Accessories"
				defaultValue="ALL"
				onChangeValue={enteredAccessories}
			/>
			<ComboBoxHok
				options={arms}
				width="180px"
				title="Arms"
				defaultValue="ALL"
				onChangeValue={enteredArms}
			/>
			<ComboBoxHok
				options={back}
				width="180px"
				title="Back"
				defaultValue="ALL"
				onChangeValue={enteredBack}
			/>
			<ComboBoxHok
				options={body}
				width="180px"
				title="Body"
				defaultValue="ALL"
				onChangeValue={enteredBody}
			/>
			<ComboBoxHok
				options={BrainShell}
				width="180px"
				title="Brain Shell"
				defaultValue="ALL"
				onChangeValue={enteredBrain}
			/>
			<ComboBoxHok
				options={deltoid}
				width="180px"
				title="Deltoid"
				defaultValue="ALL"
				onChangeValue={enteredDeltoid}
			/>
			<ComboBoxHok
				options={energy}
				width="180px"
				title="Energy"
				defaultValue="ALL"
				onChangeValue={enteredEnergy}
			/>
			<ComboBoxHok
				options={endoskeletion}
				width="180px"
				title="Endoskeleton"
				defaultValue="ALL"
				onChangeValue={enteredEndo}
			/>
		</div>
	);
};

export default Index;
