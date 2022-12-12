export type Event = {
  _id: string
  type: 'Game' | 'Special'
  date: Date
  availableTips: string[]
  outcome?: string
}
