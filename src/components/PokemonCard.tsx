const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

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
