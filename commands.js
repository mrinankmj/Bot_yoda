const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIzNTE2OTE4ODUzNzA0NTAwMg.GokQKi.W4UskiowZyFWX0xs - BOPKwq6WTwFIvEsKbIF10"
);

  try {
  console.log("Started refreshing application (/) commands.");

   await rest.put(Routes.applicationCommands("1235169188537045002"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}