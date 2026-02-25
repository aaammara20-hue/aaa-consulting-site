import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_41bcasg';
const EMAILJS_TEMPLATE_ID = 'template_bh7feyh';
const EMAILJS_PUBLIC_KEY = 'VDQbXX9w_AvFShisS';

// Recipients for contact form submissions
const RECIPIENTS = [
  'anouar-ali.ammara@mail.com',
  'aaaconsulting-dz@outlook.com',
];

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendContactEmails = async (formData: ContactFormData): Promise<void> => {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const emailPromises = RECIPIENTS.map((recipientEmail) =>
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: recipientEmail, // <-- Vérifie que {{to_email}} existe dans ton template EmailJS
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Non spécifié',
        message: formData.message,
      })
    );

    const results = await Promise.all(emailPromises);
    console.log("Succès EmailJS :", results);
  } catch (error) {
    console.error("Erreur détaillée EmailJS :", error);
  }
};
