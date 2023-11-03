// List of current users
const current_users: string[] = ["John", "Alice", "Bob", "Eve", "Charlie"];

// List of new users
const new_users: string[] = ["Mary", "ALICE", "Dave", "John", "Grace"];

// Function to check if a username is already in use (case-insensitive)
function isUsernameTaken(username: string): boolean {
    return current_users.some((currentUsername) => currentUsername.toLowerCase() === username.toLowerCase());
}

// Loop through new_users to check for unique usernames
for (const new_username of new_users) {
    if (isUsernameTaken(new_username)) {
        console.log(`Sorry, the username '${new_username}' is already in use. Please choose a different one.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
