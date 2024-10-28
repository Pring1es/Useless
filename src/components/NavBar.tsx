interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}) => {
	const handleClick = (index: number) => {
		setPokemonIndex(index);
		const selectedPokemon = pokemonList[index];
		if (selectedPokemon.name === "pikachu") {
			alert("pika pikachu !!!");
		}
	};

	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<button key={pokemon.name} onClick={() => handleClick(index)}>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
};

export default NavBar;
