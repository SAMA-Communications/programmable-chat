const handler = async (message, user, accept, resolve, reject) => {
  const body = message.body;

  // Reject the message if it contains any prohibited words
  const prohibitedWords = ["asshole", "fuck", "bullshit"];
  if (prohibitedWords.some((word) => body.includes(word))) {
    return reject("Message blocked by moderation.");
  }

  return accept();
};

export default await handler(
  env.MESSAGE,
  env.USER,
  env.ACCEPT,
  env.RESOLVE,
  env.REJECT
);
