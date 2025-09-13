import { CORE_CONCEPTS } from '../data';
import CoreComponent from './CoreConsept';
import Section from './Section';

export default function CoreConsepts() {
	return (
		<Section
			id="core-concepts"
			title="Core Concepts"
		>
			<ul>
				{CORE_CONCEPTS.map((conseptItem) => (
					<CoreComponent
						key={conseptItem.title}
						{...conseptItem}
					/>
				))}
			</ul>
		</Section>
	);
}
