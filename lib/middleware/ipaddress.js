module.exports = function (req, next) {
  if (req.success === true) {
    console.log(('https://' + req.domain).red);
    process.exit(0);
  } else {
    console.log('error');
    process.exit(1);
  }

  return next();
};
