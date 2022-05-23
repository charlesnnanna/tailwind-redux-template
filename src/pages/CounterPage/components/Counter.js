import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../../redux/counter/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const incrementValue = () => {
        dispatch(increment())
    }

    const decrementValue = () => {
        dispatch(decrement())
    }
  return (
    <>
        <div>
            <button
             aria-label = 'increase value'
             onClick={incrementValue}
            >
                Increase
            </button>
            <span>{count}</span>
            <button
            aria-label = 'Decrease value'
            onClick={decrementValue}
            >
                Decrease
            </button>
        </div>
    </>
  )
}

export default Counter
