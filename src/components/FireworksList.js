import React from 'react'
import FireworkItem from './FireworkItem'

const FireworksList = (props) => (
  <div className='container'>
    <h3>All Fireworks</h3>
    <hr />
    { props.fireworks.map(firework => <FireworkItem firework={ firework } attributes={ props.attributes }/>) }
  </div>
)
 
export default FireworksList
