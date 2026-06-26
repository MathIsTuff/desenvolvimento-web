import { useState } from "react";
import type { FormEvent } from "react";
import "../styles/contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setFeedback("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          message: `Nome: ${formData.name.trim()}\n\n${formData.message.trim()}`,
        }),
      });

      const responseText = await response.text();
      let result: { message?: string; error?: string } = {};

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          `O servidor retornou uma resposta inválida (${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar a mensagem.");
      }

      setFeedback(result.message || "Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFeedback(
        error instanceof Error ? error.message : "Erro ao enviar a mensagem."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="container py-sm">
      <header className="contact-header">
        <div>
          <p>Restou alguma dúvida</p>
          <h2>Entre em contato!</h2>
        </div>
        <p>
          Entre em contato, estamos dispostos a tirar qualquer dúvida, seja sobre as formas de pagamento ou dúvidas técnicas. Estamos à sua disposição.
        </p>
      </header>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Sua mensagem aqui..."
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            rows={5}
            required
          />
        </div>

        <button type="submit" disabled={isSending} className="submit-btn">
          {isSending ? "Enviando..." : "Enviar Mensagem"}
        </button>

        {feedback && (
          <p role="status" className={`feedback ${isSending ? "" : "show"}`}>
            {feedback}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;