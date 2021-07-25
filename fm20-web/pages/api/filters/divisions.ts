// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getDivisions } from '../../../db'

type Data = {
  lists: Object[],
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data:any = getDivisions()
  const count = data.length

  res.status(200).json({
    lists: data,
    count
  })
}
