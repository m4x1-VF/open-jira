import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | IEntry[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    case "POST":
      return createEntry(req, res);

    default:
      return res.status(400).json({ message: "Enpoint not found" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: "ascending" });
  await db.disconnect();
  res.status(200).json(entries);
};

const createEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (!req.body.description) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }
  const { description = "" } = req.body;
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  });
  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();
    return res.status(201).json(newEntry);
  } catch (error) {
    await db.disconnect();
    console.error("Error al crear la entrada:", error);
    return res.status(500).json({ message: "Error al crear la entrada" });
  }
};
