const guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];

console.log("Great news! We've found a bigger dinner table!");


guestList.unshift("Isaac Newton");


guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla");


guestList.push("Charles Darwin");

console.log(`You are inviting ${guestList.length} people to dinner.`);


guestList.forEach((guest) => {
  console.log(`Dear ${guest}, I would be honored to invite you to a dinner at my place. Your contributions to science and art have been truly inspirational. Please let me know if you can join us for this special evening.`);
});
