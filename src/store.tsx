import React, { useState } from 'react';
import customers from './customers'

type Actions<T> = {
  add: (newRecord: T) => void,
  remove: (removeRecord: T) => void
  update: (updateRecord: T) => void
}

export const StoreContext = React.createContext({} as {
  data: typeof customers,
  actions: Actions<typeof customers[number]>
});

type StoreProviderProps = {
  children: React.ReactNode
}

export const StoreProvider = ({children} : StoreProviderProps) => {
  const [data, setData] = useState(customers)

  const actions: Actions<typeof data[number]> = {
    add: (newRecord) => {
      setData([...data, newRecord]);
    },
    remove: (removeRecord) => {
      setData(data.filter(element => element.id !== removeRecord.id));
    },
    update: (updateRecord) => {
      setData([...data.filter(element => element.id !== updateRecord.id), updateRecord]);
    },
  }

  return <StoreContext.Provider value={{data, actions}}>{children}</StoreContext.Provider>
}