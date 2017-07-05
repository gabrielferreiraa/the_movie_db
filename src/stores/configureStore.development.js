import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import { DEV_TOOLS } from 'constants/configConstants'
import globalReducers from 'reducers/GlobalReducers'

export function configureStore () {
  return applyMiddleware(promise)(createStore)(globalReducers, DEV_TOOLS)
}
