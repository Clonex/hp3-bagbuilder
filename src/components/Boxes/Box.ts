import { FunctionComponent } from 'react';
import { GetOwnedItemsQuery } from '../../hooks';

interface Item {
	amount: number;
	data: GetOwnedItemsQuery['ownedItems'][number];
}

export interface Box {
	title: string;
	items: Item[];
}

export const BoxContent: FunctionComponent<{ data: Box }> = () => {
	return null;
};
