// Observer and Mediador pattern
{
    class User {
        #events = {};
        constructor() {}
        on(event, handler) {
            if (!this.#events[event])
                this.#events[event] = []
            this.#events[event].push(
                handler
            );
        }
        #runEvent(event) {
            if (!this.#events[event])
                return;
            this.#events[event].forEach(handler => {
                handler();
            });
        }
        trigger(event) {
            this.#runEvent(event);
        }
    }

    const user = new User();
    user.on("login", () => {
        console.log("User has login!");
    });
    user.on("login", () => {
        console.log("I notify to clients!");
    });
    user.trigger("login");
}