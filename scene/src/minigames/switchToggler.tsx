import ReactEcs from '@dcl/sdk/react-ecs'
import { GameController } from '../game.controller'
import SwitchTogglersUi from '../ui/minigames/SwitchTogglers'

export class SwitchTogglers {
  private states = Array.from({ length: 12 }, () => false)
  private visibleUi = false
  successNeeded = 12
  currentSuccesses = 0
  started: boolean
  onWinCallback: () => void
  gameController: GameController
  constructor(gameController: GameController, onWinCallback: () => void) {
    this.gameController = gameController
    this.onWinCallback = onWinCallback
    this.started = false
  }
  mainUi() {
    return <SwitchTogglersUi
      visible={this.visibleUi}
      states={this.states}
      onToggle={this.checkSuccess.bind(this)}
      closeRequest={() => this.Hide()}
    />
  }
  Start() {
    this.Reset()
    this.visibleUi = true
  }
  Hide() {
    this.visibleUi = false
    this.Reset()
  }
  checkSuccess() {
    if (this.states.filter(item => item).length === this.successNeeded) {
      this.visibleUi = false
      this.Win()
    }
  }
  Win() {
    this.visibleUi = false
    this.Reset()
    this.onWinCallback()
  }
  Reset() {
    this.currentSuccesses = 0
    this.states = Array.from({ length: 12 }, () => false)
  }
}