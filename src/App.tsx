import React from "react";
import Header from "./components/header/Header";
import PokemonList from "./components/pokemonList/PokemonList";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <PokemonList />
      <Footer />
    </>
  );
}
