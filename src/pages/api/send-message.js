import Mailgun from 'mailgun-js';

const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

//import contactEmailGenerator from '../../lib/contactEmailGenerator';

export default (req, res) => {
  const { name, surname, email, message } = JSON.parse(req.body);

  const data = {
    from: 'work@sosprivatesecurity.com',
    to: 'ricardopp1992@gmail.com',
    subject: 'Contact Form of sosprivatesecurity.com',
    html: `
      <h3>This is a message from sosprivatesecurity.com</h3>
      <b>from:</b> ${name} ${surname}
      <b>email:</b> ${email}

      <p>${message}</p>
    `
  }

  /*mg.messages().send(data, function (error, body) {
    if (error || !body) {
      console.log(error);
      return res.status(400).end(error || 'No email sent');
    }});*/

    return res.status(400).json({message:"todo ok"});
  
}
