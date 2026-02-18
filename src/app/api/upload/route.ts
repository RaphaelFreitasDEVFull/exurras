import { storage } from "@/lib/appwrite";
import { ID } from "node-appwrite";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "Arquivo não enviado" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploaded = await storage.createFile(
      process.env.APPWRITE_BUCKET_ID!, // bucketId
      ID.unique(),
      new File([buffer], file.name, { type: file.type }),
    );

    // URL de visualização/download
    const url = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.APPWRITE_BUCKET_ID}/files/${uploaded.$id}/view?project=${process.env.APPWRITE_PROJECT_ID}`;

    return Response.json({ url });
  } catch (error: unknown) {
    console.error("UPLOAD ERROR:", error);

    return Response.json(
      { error: error instanceof Error ? error.message : "Erro no upload" },
      { status: 500 },
    );
  }
}
