import PokemonCard from "./components/PokemonCard";
import "./App.css";
import { useState } from "react";

interface Pokeprops {
	name: string;
	imgSrc?: string;
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonList, setPokemonIndex] = useState(0);
	const handleClickNext = () => {
		setPokemonIndex(pokemonList + 1);
	};
	const handleClickPrevious = () => {
		setPokemonIndex(pokemonList - 1);
	};

	return (
		<>
			/
			<div>
				<PokemonCard />
			</div>
			<button type="button" onClick={handleClickNext} />
			<button type="button" onClick={handleClickPrevious} />
		</>
	);
}

export default App;
