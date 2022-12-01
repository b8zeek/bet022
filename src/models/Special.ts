import { Event } from './Event'

export type Special = Event & {
  type: 'Special'
  description: string
}
