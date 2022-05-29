import { State } from 'redux/reducer/index';
import { createSelector } from 'reselect';
export const account = (state: State) => state.connection.account;
export const collectionContract = (state: State) => state.collection.contract;
export const collection = (state: State) => state.collection.collection;
export const totalSupply = (state: State) => state.collection.totalSupply;
export const marketplaceContract = (state: State) => state.marketplace.contract;
export const offer = (state: State) => state.marketplace.offers;
export const offerCount = (state: State) => state.marketplace.offerCount;
export const accessories = (state: State) => state.filter.Genx.accessories;
export const arms = (state: State) => state.filter.Genx.arms;
export const back = (state: State) => state.filter.Genx.back;
export const body = (state: State) => state.filter.Genx.body;
export const brain = (state: State) => state.filter.Genx.brain;
export const endo = (state: State) => state.filter.Genx.endo;
export const energy = (state: State) => state.filter.Genx.energy;
export const deltoid = (state: State) => state.filter.Genx.deltoid;
export const pageGenx = (state: State) => state.filter.Genx.page;

export const collectionGenx = createSelector(
	collection,
	accessories,
	arms,
	back,
	body,
	brain,
	endo,
	energy,
	deltoid,
	pageGenx,
	(collection, accessories, arms, back, body, brain, endo, energy, deltoid, pageGenx) => {
		return collection.filter((nft: any) => {
			if (nft.type === 'Genx')
				return (
					nft.accessories.includes(accessories) &&
					nft.arms.includes(arms) &&
					nft.back.includes(back) &&
					nft.body.includes(body) &&
					nft.brain.includes(brain) &&
					nft.endo.includes(endo) &&
					nft.energy.includes(energy) &&
					nft.deltoid.includes(deltoid)
				);
			return false;
		});
	}
);
