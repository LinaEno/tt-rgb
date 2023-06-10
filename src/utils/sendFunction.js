import axios from "axios";

const KEY =
  "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";
const EMAIL = "linabudkova35@gmail.com";

const sendFormData = async (recipient, subject, message) => {
  try {
    const { data } = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [{ to: [{ email: recipient }] }],
        from: { email: EMAIL },
        subject,
        content: [{ type: "text/plain", value: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Письмо успешно отправлено");
    console.log(data);
  } catch (error) {
    console.error("Ошибка при отправке письма", error.message);
  }
};

export default sendFormData;
