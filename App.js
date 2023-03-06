import React from 'react'
import AppNavigation from './AppNavigation'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/redux/store/store'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

const App = () => {
  let persiste = persistStore(store)
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persiste}>
        <AppNavigation />
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
