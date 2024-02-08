import { FunctionComponent } from 'react';
import { GetOwnedItemsQuery, useGetOwnedItemsQuery } from '../hooks';
import classNames from 'classnames';
import { Dropdown } from '.';

export const Sidebar: FunctionComponent<{
	boxes: string[];
	addItem: (boxId: number, item: GetOwnedItemsQuery['ownedItems'][number]) => void;
}> = props => {
	const { data } = useGetOwnedItemsQuery();
	const items = data?.ownedItems ?? [];

	return (
		<div className="max-h-screen overflow-auto">
			<div className="inset-y-0 z-50 flex w-73 flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{items.map(item => (
										<li
											key={item.id}
											className={classNames(
												item.id ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
												'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
											)}>
											<Dropdown
												title="+"
												options={props.boxes.map((box, index) => ({
													title: box,
													onClick: () => {
														props.addItem(index, item);
													},
												}))}
											/>
											<img
												alt={item.nameNo}
												src={`https://hundeparken.net/h5/game/gfx/item/${item.gfxList.at(0)}.png`}
											/>
											{item.nameNo}
										</li>
									))}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};
