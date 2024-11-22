export default function MixingFunction(props) {
	return (
		<div>
			<h1>Mixing</h1>
			<p>Let's get started!</p>
			<audio controls>
				<source src={props.audioFiles} type="audio/wav" />
			</audio>
		</div>
	);
}
