import { createFileRoute } from "@tanstack/react-router";

/**
 * Newsletter subscription endpoint.
 *
 * Destino: news@utah.com.br
 *
 * Em produção (servidor Debian GNU/Linux com SMTP local), substitua o bloco
 * TODO abaixo por uma chamada ao sendmail local, por exemplo:
 *
 *   import { spawn } from "node:child_process";
 *   const sm = spawn("/usr/sbin/sendmail", ["-t", "-i"]);
 *   sm.stdin.write(
 *     `To: news@utah.com.br\r\n` +
 *     `From: no-reply@utah.com.br\r\n` +
 *     `Subject: Nova inscrição na Newsletter\r\n\r\n` +
 *     `E-mail: ${email}\r\n`
 *   );
 *   sm.stdin.end();
 */
export const Route = createFileRoute("/api/public/newsletter")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email } = (await request.json()) as { email?: string };
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(JSON.stringify({ ok: false, error: "invalid_email" }), {
              status: 400,
              headers: { "content-type": "application/json" },
            });
          }

          // TODO (produção Debian): enviar via /usr/sbin/sendmail para news@utah.com.br
          console.log("[newsletter] nova inscrição:", email, "→ news@utah.com.br");

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        } catch {
          return new Response(JSON.stringify({ ok: false }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});
