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

  const data:any = getMature().filter((player) => {
    if (
      (club && name)
      && player.Club === club
      && player.Name.toLowerCase().indexOf(name.toString().toLowerCase()) !== -1
    ) {
      return true;
    } else if (club && player.Club === club) {
      return true;
    } else if (name && player.Name.toLowerCase().indexOf(name.toString().toLowerCase()) !== -1) {
      return true;
    }
  });
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
