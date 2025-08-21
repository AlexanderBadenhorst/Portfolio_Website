export function gmailComposeUrl(
  to: string,
  subject?: string,
  body?: string
): string {
  const base = "https://mail.google.com/mail/";
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `${base}?${params.toString()}`;
}
