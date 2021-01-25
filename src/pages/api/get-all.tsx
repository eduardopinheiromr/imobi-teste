import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../mock";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};
