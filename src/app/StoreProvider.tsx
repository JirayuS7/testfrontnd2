'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
// import { makeStore, AppStore } from '../lib/store'
import {store} from '../lib/store'
 

export default function StoreProvider({
   
  children,
}: {
 
  children: React.ReactNode
}) {
//   const storeRef = useRef<AppStore | null>(null)
//   if (!storeRef.current) {
//     storeRef.current = makeStore()
  
//   }

  return <Provider store={store}>{children}</Provider>
}