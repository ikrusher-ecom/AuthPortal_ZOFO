import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("shopifyZofo");
    const { code } = req.body;

    if (!code) {
      res.status(400).json({ success: false, message: "Code is required." });
      return;
    }

    const authCode = await db
      .collection("authenticity")
      .findOneAndUpdate(
        { code: code },
        { $inc: { count: 1 } },
        { returnDocument: "after" }
      );

    if (authCode) {
      res.status(200).json({
        success: true,
        data: authCode,
      });
    } else {
      res.status(404).json({ success: false, message: "Code not found." });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
