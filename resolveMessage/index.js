const initial = require('./messages/initial');

const variants = {
  initial: {
    message: initial,
  },
  success: {
    message: initial,
  },
  error: {
    message: initial,
  },
}

export default function (githubContext, msgVariant) {
  return variants[msgVariant].message(githubContext);
}
