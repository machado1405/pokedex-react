import React from "react";
import Button from "./Button";
import Input from "./Input";
import styles from "./Form.module.css";
import { GET_POKEMON } from "../../Api";
import useFetch from "../../Hooks/useFetch";

function Form({ pokemon, setPokemon, setGif }) {
  const [next, setNext] = React.useState(2);
  const [prev, setPrev] = React.useState("");
  const [search, setSearch] = React.useState("");
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = GET_POKEMON(search);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setPokemon(json);
      setGif(
        json.sprites.versions["generation-v"]["black-white"].animated[
          "front_default"
        ],
      );
      setNext(json.id + 1);
      setPrev(json.id - 1);
    }
  }

  async function handleClick(event) {
    const clickou = event.target.innerText;
    const { url, options } = GET_POKEMON(clickou == "Next >" ? next : prev);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setPokemon(json);
      setGif(
        json.sprites.versions["generation-v"]["black-white"].animated[
          "front_default"
        ],
      );
      setNext(json.id + 1);
      setPrev(json.id - 1);
    }
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar Pokémon..."
          onChange={({ target }) => setSearch(target.value)}
        />
      </form>
      <div className={styles.buttons}>
        <Button onClick={handleClick}>Prev &lt;</Button>
        <Button onClick={handleClick}>Next &gt;</Button>
      </div>
      {error ? (
        <p className="errorMessage">Não foi possível efetuar a busca!</p>
      ) : null}
    </div>
  );
}

export default Form;
