import { store } from "@/store";
import PokemonTable from "../components/PokemonTable";

function SSRPokemonTable() {

  console.log("SSR Pokemon Table")

  return (
    <main>
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </main>
  )
}

export default SSRPokemonTable