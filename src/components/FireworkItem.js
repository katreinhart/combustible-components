import React from 'react'
import FireworkAttribute from './FireworkAttribute'

const FireworkItem = ({ firework, attributes }) => (
  <div>
    <h5>{ firework.name }</h5>
    <hr />
      { attributes
        .filter(attr => firework.attributeIds
          .includes(attr.id))
        .map(item => <div key={ item.id }>{ item.kind }: { item.value }</div>)
      }
  </div>
)
 
export default FireworkItem
