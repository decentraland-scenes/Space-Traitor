

import { Room } from 'colyseus.js'
import { Color4 } from '@dcl/sdk/math'
import { getRealm } from '~system/Runtime'
import { GameController } from './game.controller'
import { UserData, getUserData } from "~system/UserIdentity";
import * as Colyseus from "colyseus.js";
import { MyRoomState } from './types';


export class Connection {
  private gameController: GameController
  public userData: UserData | undefined

  constructor(gameController: GameController) {
    this.gameController = gameController
  }

  async setUserData() {
    this.userData = (await getUserData({})).data
  }

  async connect(roomName: string) {
    const { realmInfo } = await getRealm({})
    //
    // make sure users are matched together by the same "realm".
    //
    const isLocal = realmInfo?.baseUrl.indexOf('localhost') !== -1 || realmInfo?.baseUrl.indexOf('127.0.0.1') !== -1 || realmInfo?.baseUrl.indexOf('192.168.') !== -1
    if (!this.userData) {
      await this.setUserData()
    }
    
    const options: JoinOptions = {
      displayName: this.userData?.displayName ?? 'Anonymous',
      userId: this.userData?.userId ?? '',
      realmName: realmInfo?.realmName ?? 'norealm',
    }

    console.log('data sent:', options)

    const ENDPOINT = isLocal && false ? 'ws://127.0.0.1:2567' : 'wss://test.dclexplorer.com/space-traitor/'
    if (isLocal) {
      this.addConnectionDebugger(ENDPOINT)
    }

    console.log('connecting to:', ENDPOINT)
    const client = new Colyseus.Client(ENDPOINT);

    try {
      const room = await client.joinOrCreate<MyRoomState>(roomName, options)
      console.log(room)
      if (realmInfo?.isPreview) {
        this.updateConnectionDebugger(room)
      }

      return room
    } catch (error) {
      this.updateConnectionMessage(`Error: ${error}`, Color4.Red())
      throw error
    }
  }
  addConnectionDebugger(endpoint: string) {
    this.updateConnectionMessage(`Connecting to ${endpoint}`, Color4.Black())
  }
  updateConnectionMessage(value: string, color: Color4) {
    this.gameController.ui.message = value
    this.gameController.ui.color = color
  }
  updateConnectionDebugger(room: Room) {
    this.updateConnectionMessage('Connected.', Color4.Green())
    room.onLeave(() => this.updateConnectionMessage('Connection lost', Color4.Red()))
  }
}