import React from "react";
import Header from "./components/header/Header";
import PokemonGrid from "./components/pokemonGrid/PokemonGrid";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <PokemonGrid />
      <Footer />
    </>
  );
}
