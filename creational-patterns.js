// Constructor pattern

{
    class UserModule {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    }
    const user = new UserModule(
        "Yoshua",
        "Lopez",
    );
    console.log(user.name); // Output: "Yoshua"
    console.log(user.surname); // Output: "Lopez"
}

// Constructor pattern with props

{
    class UserModule {
        constructor(name) {
            this.name = name;
        }
    }
    UserModule.prototype.sayHi = function (){
        console.log(`Hi, ${this.name}!`)
    }

    const user = new UserModule(
        "Yoshua",
    );

    user.sayHi(); // Output: "Hi, Yoshua!"
}

// Module pattern

{
    const userModule = {
        name: "",
        updateName(newName) {
            userModule.name = newName;
            return userModule;
        }
    }

    console.log(
        userModule.updateName("Yoshua").name,
    ); // Output: "Yoshua"
    console.log(
        userModule.updateName("Jose").name,
    ); // Output: "Jose"
    console.log(userModule.name); // Output: "Jose"
}

// Module "revelador" pattern

{
    const newUsersStore = function () {
        let users = [];

        return {
            addUser(user) {
                users = [...users, user];
            },
            getUsers() {
                return users;
            }
        };
    }

    const usersStore = newUsersStore();
    console.log(usersStore.getUsers()); // Output: "[]"
    usersStore.addUser("Yoshua");
    console.log(usersStore.getUsers()); // Output: "[Yoshua]"
    console.log(usersStore.users); // Output: "undefined"
}