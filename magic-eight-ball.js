const handler = async (message, user, accept, resolve, reject) => {
  const body = message.body;

  // Reject the message if it contains any prohibited words
  if (body.includes("/MagicEightBall")) {
    const response = await fetch("https://m8b.gamerselimiko.workers.dev/");
    const json = await response.json();
    return resolve({ message: { body: json.answer } });
  }

  return accept();
};

export default await handler(env.MESSAGE, env.USER, env.RESOLVE, env.REJECT);
