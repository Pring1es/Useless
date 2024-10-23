interface Pokeprops {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: Pokeprops) {
	return (
		<>
			{imgSrc !== undefined ? (
				<figure>
					<img src={imgSrc} alt="Pokemon Bulbasaur" />
				</figure>
			) : (
				<p>???</p>
			)}
			<p>{name}</p>
		</>
	);
}

export default PokemonCard;
