import PokemonCard from "./components/PokemonCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

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
	const [pokemonIndex, setPokemonIndex] = useState(0);
	useEffect(() => {
		console.log("hello pokemon trainer :)");
	}, []);
	return (
		<>
			<div>
				<PokemonCard
					name={pokemonList[pokemonIndex].name}
					imgSrc={pokemonList[pokemonIndex].imgSrc}
				/>
				<NavBar
					pokemonIndex={pokemonIndex}
					setPokemonIndex={setPokemonIndex}
					pokemonList={pokemonList}
				/>
			</div>
		</>
	);
}

export default App;
