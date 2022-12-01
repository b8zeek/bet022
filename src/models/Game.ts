export type Game = {
  type: 'game'
  id: string
  homeTeam: string
  awayTeam: string
  date: Date
  availableTips: string[]
  tip?: number
}
