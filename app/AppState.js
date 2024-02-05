import { Player } from "./models/Player.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  example = []

  /**@type {import('./models/Player.js').Player[]} */
  players = [new Player("Jake")]
}

export const AppState = createObservableProxy(new ObservableAppState())