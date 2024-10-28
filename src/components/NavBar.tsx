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
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const handleClickNext = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};
	return (
		<nav>
			{pokemonIndex > 0 ? (
				<button type="button" onClick={handleClickPrevious}>
					Previous
				</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonList.length - 1 ? (
				<button type="button" onClick={handleClickNext}>
					Suivant
				</button>
			) : (
				""
			)}
		</nav>
	);
};

export default NavBar;
