import { Pokemon } from "@/app/types";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { SearchInput } from "@/components/SearchInput";

export default async function Home() {

  const res = await fetch("http://localhost:3000/api/search")
  const data: Pokemon[] = await res.json();

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SearchInput />
    </main>
  )
}
