import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { sampleUserData } from "../../../utils/sample-data";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const type = _req.query.type;

    const client = await clientPromise;
    const db = await client.db("story_wheel");
    const ud = await db.collection("questions").find({ type }).toArray();

    res.status(200).json(ud);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
