import React from 'react'
import { Pokemon } from '@/app/types'

type Props = {
    pokemons: Pokemon[]
}

const PokemonTable: React.FC<Props> = ({ pokemons }) => {
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon) => (
              <tr key={pokemon.name}>
                <td>{pokemon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default PokemonTable