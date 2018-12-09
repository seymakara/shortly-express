const parseCookies = (req, res, next) => {
  let cookies = {};
  if (req.headers['cookie']) {
    let stringOfCookies = req.headers['cookie'];
    let keyValuePairs = stringOfCookies.split('; ');
    let splitOnEqual = keyValuePairs.map(pair => {
      return pair.split('=');
    });
    splitOnEqual.forEach(pair => {
      cookies[pair[0]] = pair[1];
    });
  }
  req.cookies = cookies;
  next();
};

module.exports = parseCookies;
