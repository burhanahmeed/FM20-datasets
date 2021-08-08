// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { calculateLimitAndOffset, paginate } = require('paginate-info')

import { getMature } from '../../db'

type Data = {
  lists: Object[],
  meta: Object
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query: { currentPage, pageSize = 30, club, name } } = req;
  const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);

  let data:any = getMature()

  if (club) {
    data = data.filter((player: any) => player.Club === club)
  }

  if (name) {
    data = data.filter((player: any) => player.Name.toLowerCase().indexOf(name.toString().toLowerCase()) !== -1)
  }

  const count = data.length
  const players = data.map((el: any, idx: number) => ({
    ...el,
    _id: idx
  })).slice(offset, offset + limit)
  const paginationInfo = paginate(currentPage, count, players);

  res.status(200).json({
    lists: players,
    meta: paginationInfo
  })
}
