import React, { useState } from 'react';
import customers from './customers'

type Actions<T, W> = {
  add: (newRecord: T) => void;
  remove: (removeRecord: T) => void;
  update: (updateRecord: T) => void;
  setAction: (operation: W) => void;
}

enum Operations {
  create,
  update
}

export const StoreContext = React.createContext({} as {
  data: typeof customers,
  setId: (id: string) => void,
  Id?: string,
  operation: keyof typeof Operations,
  actions: Actions<typeof customers[number], keyof typeof Operations>
});

type StoreProviderProps = {
  children: React.ReactNode
}

export const StoreProvider = ({children} : StoreProviderProps) => {
  const [data, setData] = useState(customers)
  const [Id, setId] = useState<string>()
  const [operation, setOperation] = useState<keyof typeof Operations>('create')

  const actions: Actions<typeof data[number], keyof typeof Operations> = {
    add: (newRecord) => {
      setData([...data, newRecord]);
      setId('');
    },
    remove: (removeRecord) => {
      setData(data.filter(element => element.id !== removeRecord.id));
      setId('');
    },
    update: (updateRecord) => {
      setData([...data.filter(element => element.id !== updateRecord.id), updateRecord]);
      setId('');
      setOperation('create')
    },
    setAction: (operation) => {
      setOperation(operation)
    }
  }

  return <StoreContext.Provider value={{data, actions, operation, Id, setId}}>{children}</StoreContext.Provider>
}