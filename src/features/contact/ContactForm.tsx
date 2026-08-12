import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/services/email";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoading(true);

      await sendEmail({
        ...formValues,
        preferredChannel: "email", // since its the contact form, we can hardcode the preferred channel value here
        organization: "creas", // since its the contact form for creas, we can hardcode the organization value here
      });

      toast.success(
        "Sua mensagem foi enviada. Logo a equipe CREAS entrará com contato",
        { position: "top-center" },
      );

      setFormValues({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-primary-light shadow-sm">
      <CardHeader>
        <CardTitle>Envie uma mensagem</CardTitle>

        <p className="text-sm text-text-secondary">
          Preencha os campos abaixo. Em breve sua mensagem poderá ser enviada
          diretamente para o e-mail do CREAS.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium text-text">Nome</label>

            <Input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-text">Telefone</label>

            <Input
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-text">Email</label>

            <Input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-text">Assunto</label>

            <Input
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              placeholder="Ex.: Gostaria de obter mais informações"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-text">Mensagem</label>

            <Textarea
              name="message"
              rows={8}
              value={formValues.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem..."
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark h-[44px]"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
