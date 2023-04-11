export function getIndex(req, res, next) {
  const data = {num:123};
  res.render('index',data)
}
