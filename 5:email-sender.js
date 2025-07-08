const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre.email@gmail.com",      // ⚠️ Remplacez par votre e-mail
    pass: "votre-mot-de-passe-ou-app-password" // ⚠️ Jamais publier ceci
  }
});

let mailOptions = {
  from: "votre.email@gmail.com",
  to: "destinataire@example.com",
  subject: "Hello from Node.js",
  text: "Ceci est un e-mail envoyé depuis Node.js avec Nodemailer"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Erreur :", error);
  }
  console.log("Email envoyé :", info.response);
});
