"use client";
import counterSlice from '@/lib/features/counter/counterSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { decrement, increment } from '@/lib/features/counter/counterSlice';

export default function Notfound() {


  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className='text-center'> <h2> Not-found</h2></div>
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
       */}
      </>
  )
}
