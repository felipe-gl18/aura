import emailjs from "@emailjs/browser";

type EmailData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  organization: "creas" | "ddm";
  preferredChannel: "email" | "whatsapp";
};

export async function sendEmail(data: EmailData) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );
}
