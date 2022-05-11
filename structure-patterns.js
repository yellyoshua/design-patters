// Mixin patterns
{
    const methods = {
        updateUserName(name) {
            this.name = name;
        }
    }
    class UserModule {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    }

    Object.assign(UserModule.prototype, methods);
    const user = new UserModule("Yoshua");
    console.log(user.name); // Output: "Yoshua"
    user.updateUserName("Jose");
    console.log(user.name); // Output: "Jose"
}

// Decorator patterns
{
    class UserStore {
        constructor() {
            this.users = [];
        }
    }

    const store = new UserStore();
    store.addUser = function (newUser) {
        this.users = [
            ...this.users,
            newUser,
        ];
    }
    console.log(store.users); // Output: "[]"
    store.addUser("Yoshua");
    console.log(store.users); // Output: "[Yoshua]"
}

// Adapter pattern
{
    class UserStoreDeprecated {
        constructor() {
            this.users = []
            this.add = function (user) {
                this.users.push(user);
            };
        }
    }
    class UserStore {
        constructor() {
            const store = new UserStoreDeprecated();
            this.users = store.users;
            this.addUser = function (user) {
                if (user && user.length > 1) {
                    store.add(user);
                }
            }
        }
    }

    const store = new UserStore();
    store.addUser("Yoshua");
    store.addUser("Jose");
    console.log(store.users); // Output: "[Yoshua, Jose]"
}