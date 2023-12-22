'use client'
import store, { type AppStore } from '@/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>()

  if (storeRef.current == null) {
    storeRef.current = store()
  }

  return <Provider store={storeRef.current as any}>{children}</Provider>
}

export default StoreProvider
