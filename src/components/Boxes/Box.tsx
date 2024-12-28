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

export const BoxContent: FunctionComponent<{ data: Box }> = ({ data }) => {
	return (
		<div className="border-2">
			{data.title}

			<div>
				{data.items.map(item => (
					<div>
						<img
							alt={item.data.name.no}
							src={`https://hundeparken.net/h5/game/gfx/item/${item.data.gfxList.at(0)}.png`}
						/>
						{item.amount}x {item.data.name.no}
					</div>
				))}
			</div>
		</div>
	);
};
