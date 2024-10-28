import { useState } from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar() {
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	pokemonIndex > 0 ? (
		<button type="button" onClick={handleClickPrevious}>
			Previous
		</button>
	) : (
		""
	);
	pokemonIndex < pokemonList.length - 1 ? (
		<button type="button" onClick={handleClickNext}>
			Suivant
		</button>
	) : (
		""
	);
}

export default NavBar;
