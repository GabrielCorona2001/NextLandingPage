import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const filePath = path.join(process.cwd(), "src/app/api/email/formData.json");

    let existingData: any[] = [];
    try {
      const file = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(file);
    } catch {
      existingData = [];
    }

    existingData.push(data);

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to save data" }), { status: 500 });
  }
}