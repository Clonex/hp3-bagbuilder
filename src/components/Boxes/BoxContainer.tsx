import { FunctionComponent } from 'react';
import { Box, BoxContent } from './Box';

export const BoxContainer: FunctionComponent<{
	boxes: Box[];
	addBox: (title: string) => void;
}> = props => {
	return (
		<div>
			{props.boxes.map((box, index) => (
				<BoxContent key={index} data={box} />
			))}
			<button
				onClick={() => {
					const name = prompt('Name'); // TODO: Use own prompt implementation
					if (name) {
						props.addBox(name);
					}
				}}>
				Add box
			</button>
		</div>
	);
};
