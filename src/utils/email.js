export const sendMail = ({ name, email, phone, message }) => {
  const subject = encodeURIComponent("Message From PortFolio");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nPhone:\n${phone}\n\nMessage:\n${message}`
  );

  const mailtoLink = `mailto:shafishahuldq@gmail.com?subject=${subject}&body=${body}`;

  // Open default email client
  window.location.href = mailtoLink;
};
