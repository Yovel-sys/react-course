import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreComponents from './components/CoreConsept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
	function handleClick() {
		console.log('Hello World! - selected');
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreComponents
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreComponents {...CORE_CONCEPTS[1]} />
						<CoreComponents {...CORE_CONCEPTS[2]} />
						<CoreComponents {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={handleClick}>Components</TabButton>
						<TabButton onSelect={handleClick}>JSX</TabButton>
						<TabButton onSelect={handleClick}>Props</TabButton>
						<TabButton onSelect={handleClick}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
