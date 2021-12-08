// Mediator pattern adds a third party object(called mediator) to control the interaction between two objects. 
// It reduces the coupling between the classes communication with each other.
// Now they don't need to have knowledge of each oterh implementation.


class ChatRoom {
    showMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(time + '[' + sender + ']:' + message);
    }
}

class User {
    constructor(name, chatMediator) {
        this.name = name
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}


// usage


const mediator = new ChatRoom();
const roshan = new User('Roshan', mediator);
const rajat = new User('Rajat', mediator);

roshan.send('Hi there!');
rajat.send('Hey!');

/*
Output:
Fri Nov 26 2021 11:37:21 GMT+0530 (India Standard Time)[Roshan]:Hi there!
Fri Nov 26 2021 11:37:21 GMT+0530 (India Standard Time)[Rajat]:Hey!

 */