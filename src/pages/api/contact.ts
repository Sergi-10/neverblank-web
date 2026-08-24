import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

// Ruta dinámica: la única del sitio. El resto de páginas siguen prerenderizadas
// (output "static" por defecto, ver astro.config.mjs).
export const prerender = false;

interface ContactPayload {
  nombre?: unknown;
  email?: unknown;
  asunto?: unknown;
  mensaje?: unknown;
}

const jsonResponse = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Cuerpo de la petición inválido." }, 400);
  }

  const nombre = typeof payload.nombre === "string" ? payload.nombre.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const asunto = typeof payload.asunto === "string" ? payload.asunto.trim() : "";
  const mensaje = typeof payload.mensaje === "string" ? payload.mensaje.trim() : "";

  // Validación en servidor: nunca confíes solo en el JS del cliente.
  const missing: string[] = [];
  if (!nombre) missing.push("nombre");
  if (!email) missing.push("email");
  if (!asunto) missing.push("asunto");

  if (missing.length > 0) {
    return jsonResponse({ error: `Faltan campos obligatorios: ${missing.join(", ")}` }, 400);
  }

  const textContent = [
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Asunto: ${asunto}`,
    `Mensaje: ${mensaje || "(sin mensaje)"}`,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.neverblanc.com",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@neverblanc.com",
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"NeverBlanc" <noreply@neverblanc.com>',
      to: "hello@neverblanc.com",
      replyTo: `"${nombre}" <${email}>`,
      subject: `Nuevo contacto desde la web: ${asunto}`,
      text: textContent,
    });

    return jsonResponse({ success: true }, 200);
  } catch (err) {
    console.error("Error enviando el email por SMTP:", err);
    return jsonResponse({ error: "No se ha podido enviar el correo." }, 500);
  }
};
