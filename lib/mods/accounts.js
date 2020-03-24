const data = [
  {
    token: "2d40f55a64a36398462d81e486a82fa2",
    email: "sigureca@hostguru.top"
  },
  {
    token: "68e24ad59526139f82d06068733b79c0",
    email: "pino@daymail.life"
  },
  {
    token: "2d40f55a64a36398462d81e486a82fa2",
    email: "navidovan@daymail.life"
  },
  {
    token: "2110ea6f091c02361761121f53e7a541",
    email: "liduhopiko@marketlink.info"
  },
  {
    token: "c099f0e66862ff827d7d2d6be5efe441",
    email: "luyakoxora@uber-mail.com"
  }
];

const id = Math.floor(Math.random() * data.length);

module.exports = data[id];
