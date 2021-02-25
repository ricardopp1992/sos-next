// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { name, surname, email, message } = JSON.parse(req.body);
  res.status(200).json(body)
}
