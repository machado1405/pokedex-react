import React from "react";
import Form from "./Form/Form";
import Title from "./Title";
import Image from "./Image";
import PokedexImg from "../Images/pokedex.png";
import styles from "./Pokedex.module.css";
import { GET_POKEMON } from "../Api";
import useFetch from "../Hooks/useFetch";

function Pokedex() {
  const [pokemon, setPokemon] = React.useState("");
  const [gif, setGif] = React.useState("");
  const { request } = useFetch();

  React.useEffect(() => {
    async function getPokemon() {
      const { url, options } = GET_POKEMON("1");
      const { response, json } = await request(url, options);

      if (response.ok) {
        setPokemon(json);
        setGif(
          json.sprites.versions["generation-v"]["black-white"].animated[
            "front_default"
          ],
        );
      }
    }
    getPokemon();
  }, []);

  return (
    <main>
      <Image src={gif} alt={pokemon && pokemon.name} />
      <Title name={pokemon && pokemon.name} number={pokemon && pokemon.id} />
      <Form
        id={pokemon && pokemon.id}
        setPokemon={setPokemon}
        setGif={setGif}
        pokemon={pokemon}
      />
      <img src={PokedexImg} alt="Pokedex" className={styles.pokedex} />
    </main>
  );
}

export default Pokedex;
