// Closures
{
    function printUserName() {
        const username = "yellyoshua";
        console.log(username);
    }

    printUserName(); // Output: "yellyoshua"
    console.log(username); // Error: "username is not defined"
}

// Closures
{
    const changes = 0;
    function getUsername() {
        const createUsername = () => {
            const username = "yellyoshua";
            changes++;
            console.log(changes); // Output: "1"
            return username;
        }

        console.log(changes); // Output: "0"

        return createUsername();
    };

    getUsername();
}