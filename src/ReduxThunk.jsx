import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUsers } from './app/redux_thunk/action'

export default function ReduxThunk() {

    const state = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetUsers())
    }, [dispatch])

    const { loading, users, error } = state

    return (
        <div>
            <h1>Redux_Thunk</h1>
            {
                loading ? <h1>Data loading ?</h1>
                    :
                    error && <p>{error}</p>
            }
        </div>
    )
}