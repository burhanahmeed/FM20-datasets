// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getPositions } from '../../../db'

type Data = {
  lists: Object[],
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data:any = getPositions()
  const count = data.length

  res.status(200).json({
    lists: data,
    count
  })
}
