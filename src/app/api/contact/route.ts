import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["nom", "email", "telephone", "typeClient", "typeFuite", "adresse", "message"] as const;

export async function POST(request: Request) {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Corps de la requête invalide" }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]?.trim()) {
      return Response.json({ error: `Champ requis manquant : ${field}` }, { status: 400 });
    }
  }

  const { nom, email, telephone, typeClient, typeFuite, adresse, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
      <h2 style="background:#1a1a2e;color:#fff;padding:20px 24px;margin:0;border-radius:8px 8px 0 0">
        Nouvelle demande de devis — DiagFuite
      </h2>
      <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:24px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:160px">Nom</td><td style="padding:8px 0;font-weight:600">${nom}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Téléphone</td><td style="padding:8px 0"><a href="tel:${telephone}" style="color:#2563eb">${telephone}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Profil</td><td style="padding:8px 0">${typeClient}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Type de fuite</td><td style="padding:8px 0">${typeFuite}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">Adresse</td><td style="padding:8px 0">${adresse}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
        <p style="color:#6b7280;margin:0 0 8px">Message</p>
        <p style="margin:0;white-space:pre-wrap">${message}</p>
      </div>
      <p style="color:#9ca3af;font-size:12px;text-align:center;margin-top:16px">
        Envoyé via le formulaire de contact de diagfuite.fr
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${nom}`,
      html,
    });
  } catch (err) {
    console.error("Erreur envoi email :", err);
    return Response.json({ error: "Impossible d'envoyer l'email. Veuillez réessayer." }, { status: 500 });
  }

  return Response.json({ success: true });
}
