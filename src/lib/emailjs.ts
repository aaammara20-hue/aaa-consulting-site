// ...existing code...
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_95e1rh3";
const EMAILJS_NOTIFY_TEMPLATE_ID = "template_jcds1o4";   // notification to business owners
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_mxy9qta"; // auto-reply to customer
const EMAILJS_PUBLIC_KEY = "1jpCtlKiHqnW2QIk4";

// Business owners who receive form notifications
const RECIPIENTS = [
  "anouar-ali.ammara@mail.com",
  "aaaconsulting-dz@outlook.com",
];

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Initialize EmailJS once when the module is loaded
emailjs.init(EMAILJS_PUBLIC_KEY);

// ...existing code...
export const sendContactEmails = async (formData: ContactFormData): Promise<void> => {
  const templateBase = {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || "Non spécifié",
    message: formData.message,
  };

  try {
    // Notify business owners
    const notifyPromises = RECIPIENTS.map((to_email) =>
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TEMPLATE_ID, { ...templateBase, to_email })
    );

    // Auto-reply to the customer
    const autoReply = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, {
      ...templateBase,
      to_email: formData.email,
    });

    await Promise.all([...notifyPromises, autoReply]);
  } catch (err) {
    console.error("EmailJS send error:", err);
    throw err;
  }
};
// ...existing code...
