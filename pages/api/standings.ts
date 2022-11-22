// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Participant } from '../../models'

export default function handler(_: NextApiRequest, res: NextApiResponse<{ standings: Participant[] }>) {
  res.status(200).json({
    standings: [
      {
        id: '1',
        position: 1,
        name: 'Goran Panjkov',
        favorite: '🇧🇷',
        score: 45
      },
      {
        id: '2',
        position: 2,
        name: 'Petar Vidovic',
        favorite: '🇧🇷',
        score: 44
      },
      {
        id: '3',
        position: 3,
        name: 'Mirko Basic',
        favorite: '🇧🇷',
        score: 32
      },
      {
        id: '4',
        position: 4,
        name: 'Milos Micic',
        favorite: '🇧🇷',
        score: 27
      },
      {
        id: '5',
        position: 5,
        name: 'Zoran Vlaisavljevic',
        favorite: '🇧🇷',
        score: 24
      },
      {
        id: '6',
        position: 6,
        name: 'Marko Iskic',
        favorite: '🇧🇷',
        score: 23
      },
      {
        id: '7',
        position: 7,
        name: 'Dusan Maukovic',
        favorite: '🇧🇷',
        score: 12
      },
      {
        id: '8',
        position: 8,
        name: 'Bojan Babic',
        favorite: '🇧🇷',
        score: 12
      },
      {
        id: '9',
        position: 9,
        name: 'Ljubo Vidovic',
        favorite: '🇧🇷',
        score: 12
      },
      {
        id: '10',
        position: 10,
        name: 'Kemal El Shairy',
        favorite: '🇧🇷',
        score: 0
      }
    ]
  })
}
