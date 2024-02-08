import { useState } from 'react';
import { Box, BoxContainer, Sidebar } from './components';

function App() {
	const [boxes, setBoxes] = useState<Box[]>([]);

	return (
		<div className="flex min-h-[720px] bg-white inset-y-0">
			<Sidebar
				boxes={boxes.map(box => box.title)}
				addItem={(boxId, item) => {
					const box = boxId in boxes ? { ...boxes[boxId] } : undefined;
					if (box) {
						const newBoxes = [...boxes];

						const boxItemIndex = box.items.findIndex(boxItem => boxItem.data.id === item.id);
						if (boxItemIndex === -1) {
							box.items.push({
								amount: 1,
								data: item,
							});
						} else {
							box.items[boxItemIndex].amount++;
						}

						newBoxes[boxId] = box;
						setBoxes(newBoxes);
					}
				}}
			/>
			<BoxContainer
				boxes={boxes}
				addBox={title => {
					setBoxes(currentBoxes => [
						...currentBoxes,
						{
							title,
							items: [],
						},
					]);
				}}
			/>
		</div>
	);
}

export default App;
