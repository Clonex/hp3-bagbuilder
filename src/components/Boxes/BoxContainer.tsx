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
			<button>Add box</button>
		</div>
	);
};
