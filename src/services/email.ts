import emailjs from "@emailjs/browser";

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
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
