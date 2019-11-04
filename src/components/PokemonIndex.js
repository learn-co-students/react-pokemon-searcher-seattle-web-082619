import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor() {
    super()
    
    this.state = {
      allPokemon: [],
      searchWord: ''
    }
  }



componentDidMount(){
  fetch('http://localhost:3000/pokemon')
  .then(res=> res.json())
  .then(pokemonData => this.setState({ allPokemon: pokemonData}))
}




  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection />
      </div>
    )
  }

}

export default PokemonPage
