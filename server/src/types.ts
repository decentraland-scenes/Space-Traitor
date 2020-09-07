import { startBrokenArray, FUSE_BOXES } from './config'

// data per each room
export class roomData {
  gameActive: boolean = false
  gamePaused: boolean = false
  fixCount: number = 0
  players: Player[] = []
  traitors: number[] = []
  timeLeft: number = 0
  toFix: EquiptmentChange[] = new Array(startBrokenArray.length)
  fuseBoxes: FullFuseState[] = [
    {
      id: 0,
      doorOpen: false,
      redCut: false,
      greenCut: false,
      blueCut: false,
    },
    {
      id: 1,
      doorOpen: false,
      redCut: false,
      greenCut: false,
      blueCut: false,
    },
    {
      id: 2,
      doorOpen: false,
      redCut: false,
      greenCut: false,
      blueCut: false,
    },
    {
      id: 3,
      doorOpen: false,
      redCut: false,
      greenCut: false,
      blueCut: false,
    },
  ]
}

export interface roomDictionary {
  [index: string]: roomData
}

export class Player extends Object {
  id: number
  name: string
  thumb: string | null
  isTraitor: boolean = false
  alive: boolean = true
  votes: number[] = []
  constructor(id: number, name: string, thumb?: string) {
    super()
    this.id = id
    this.name = name
    this.thumb = thumb ? thumb : null
  }
}

export enum MessageType {
  FULLSTATE = 'FullState',
  JOIN = 'join',
  NEWGAME = 'new',
  END = 'end',
  MESSAGE = 'msg',
  STARTVOTE = 'startvote',
  VOTE = 'vote',
  ENDVOTE = 'endvote',
  FIX = 'fix',
  BREAK = 'break',
}

export type FullState = {
  active: boolean
  gamePaused?: boolean
  playerIsTraitor: boolean
  timeLeft?: number
  toFix: EquiptmentChange[]
}

type EquiptmentChange = {
  id: number
  broken: boolean
  //type?: EquiptmentType
}

// export enum EquiptmentType {
//   CONSOLE,
//   CABLES,
//   OXYGEN,
//   REACTOR,
// }

type FuseChange = {
  id: number
  doorOpen?: boolean
  redCut?: boolean
  greenCut?: boolean
  blueCut?: boolean
}

type FullFuseState = {
  id: number
  doorOpen: boolean
  redCut: boolean
  greenCut: boolean
  blueCut: boolean
  timeLeft?: number
  broken?: boolean
}
