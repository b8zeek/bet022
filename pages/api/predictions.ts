// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Game } from '../../models'

export default function handler(_: NextApiRequest, res: NextApiResponse<{ games: Game[] }>) {
  res.status(200).json({
    games: [
      {
        id: '1',
        time: 1669143600,
        homeTeam: 'Brasil',
        awayTeam: 'Argentina',
        tip: 1
      },
      {
        id: '2',
        time: 1669132800,
        homeTeam: 'Serbia',
        awayTeam: 'Croatia',
        tip: 1
      },
      {
        id: '3',
        time: 1669132800,
        homeTeam: 'France',
        awayTeam: 'England',
        tip: 1
      },
      {
        id: '4',
        time: 1669132800,
        homeTeam: 'Netherlands',
        awayTeam: 'Senegal',
        tip: 1
      },
      {
        id: '5',
        time: 1669132800,
        homeTeam: 'Ghana',
        awayTeam: 'Germany',
        tip: 1
      },
      {
        id: '6',
        time: 1669132800,
        homeTeam: 'Ecuador',
        awayTeam: 'Portugal',
        tip: 1
      },
      {
        id: '7',
        time: 1669132800,
        homeTeam: 'Qatar',
        awayTeam: 'Mexico',
        tip: 1
      },
      {
        id: '8',
        time: 1669132800,
        homeTeam: 'Switzerland',
        awayTeam: 'Cameroon',
        tip: 1
      },
      {
        id: '9',
        time: 1669132800,
        homeTeam: 'Costa Rica',
        awayTeam: 'South Korea',
        tip: 1
      },
      {
        id: '10',
        time: 1669132800,
        homeTeam: 'Japan',
        awayTeam: 'Spain',
        tip: 1
      }
    ]
  })
}
