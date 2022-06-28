import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction,nextPokemonsAction } from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array);
    console.log(pokemones);

    return(
        <div>
            lista de Pokemones
            <button onClick={() => dispatch(getPokemonsAction())}>Get Pokemones</button>
            <button onClick={() => dispatch(nextPokemonsAction())}>Next</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones;