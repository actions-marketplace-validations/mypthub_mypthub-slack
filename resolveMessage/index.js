import initial from "./messages/initial"

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

export default function resolveMessage(githubContext, msgVariant) {
  return variants[msgVariant].message(githubContext);
}
