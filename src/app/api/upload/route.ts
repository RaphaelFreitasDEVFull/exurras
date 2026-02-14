import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/backblaze";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({ error: "Arquivo não enviado" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileName = `audios/${Date.now()}-${file.name}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.B2_BUCKET!,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      }),
    );

    const url = `https://f000.backblazeb2.com/file/${process.env.B2_BUCKET}/${fileName}`;

    return Response.json({ url });
  } catch (error: any) {
    console.error("UPLOAD ERROR:", error);

    return Response.json(
      { error: error.message || "Erro no upload" },
      { status: 500 },
    );
  }
}
