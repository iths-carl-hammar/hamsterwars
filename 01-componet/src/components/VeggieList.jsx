import React, { useState } from 'react';
import Veggie from './Veggie';

const VeggieList = () => {
    const veggies = ['morot', 'palsternacka', 'tomat', 'selleri', 'vitlök'];
    const jsxList = veggies.map(v => (<li key={v}> {v} </li>));
    // Alternativ lösning med forEach:
    // const jsxList = [];
    // veggies.forEach(v => { jsxList.push(<li> {v} </li>); });

    const [veggieRanks, setVeggieRanks] = useState([
        { id: 1, name: 'morot', score: 3 },
        { id: 2, name: 'palsternacka', score: 2.5 },
        { id: 3, name: 'tomat', score: 4 },
        { id: 4, name: 'selleri', score: 0 },
        { id: 5, name: 'vitlök', score: 5 }
    ]);
    const jsxRanks = veggieRanks.map(v => (
        <Veggie key={v.id} v={v}
            doUpvote={() => setVeggieRanks(veggieRanks.map(
                veg => veg.id === v.id
                    ? ({ ...veg, score: veg.score + 1 })
                    : veg
            ))}
            doDownvote={() => setVeggieRanks(veggieRanks.map(
                veg => veg.id === v.id
                    ? ({ ...veg, score: veg.score - 1 })
                    : veg
            ))} />
    ))
    return (
        <div>
            <ol>
                {jsxList}
            </ol>

            <ul> {jsxRanks} </ul>
        </div>
    )
}

export default VeggieList;