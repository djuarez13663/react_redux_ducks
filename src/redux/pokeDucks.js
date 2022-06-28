import axios from 'axios';

// constantes

const dataInicial = {
    array : [],
    offset: 0
}

// types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCES'
const NEXT_POKE_SUCCES = 'NEXT_POKE_SUCCES'
// reducer

export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}
        case NEXT_POKE_SUCCES:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state
    }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    try{
        const {offset} = getState().pokemones
        const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error);
    }
}

export const nextPokemonsAction = () => async (dispatch, getState) => {
    const {offset} = getState().pokemones
    const siguiente = offset + 20
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: NEXT_POKE_SUCCES,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error);
    }
}