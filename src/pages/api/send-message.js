// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



//import contactEmailGenerator from '../../lib/contactEmailGenerator';

export default (req, res) => {
  const { name, surname, email, message } = JSON.parse(req.body);
  console.log('sdasdasd')
  const data = {
    from: 'contact-form@sos.com',
    to: 'divirgiliocamila@outlook.com.ar',
    subject: 'Contact Form of sos',
    // html: contactEmailGenerator(`${name}`, message, email),
    html: `${name}, ${message}, ${email}`
  }
  console.log(JSON.stringify(data))
  res.status(200).json({ response: 'OK', message: 'message sent' })
}
