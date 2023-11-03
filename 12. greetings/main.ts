const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
const greetingMessage = "Hello, ";

for (let i = 0; i < names.length; i++) {
  const personalizedGreeting = greetingMessage + names[i] + "!";
  console.log(personalizedGreeting);
}
