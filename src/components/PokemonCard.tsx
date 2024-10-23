interface Pokeprops {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ pokemon }) {
	return (
		<>
			{pokemon.imgSrc !== undefined ? (
				<figure>
					<img src={pokemon.imgSrc} alt="Pokemon Bulbasaur" />
				</figure>
			) : (
				<p>???</p>
			)}
			<p>{pokemon.name}</p>
		</>
	);
}

export default PokemonCard;
