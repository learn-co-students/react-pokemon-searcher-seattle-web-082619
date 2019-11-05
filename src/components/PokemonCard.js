import React from 'react'
import { Card } from 'semantic-ui-react'
import PokemonPage from '../components/PokemonIndex'

class PokemonCard extends React.Component {

  render(props) {
    return (
      <Card pokemonPlayer={props.allPokemon} >
        <div>
          <div className="image">
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">POKEMON NAME HERE  {props.allPokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
