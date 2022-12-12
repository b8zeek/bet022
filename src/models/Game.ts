import { Event } from './Event'

export type Game = Event & {
  type: 'Game'
  homeTeam: string
  awayTeam: string
}
