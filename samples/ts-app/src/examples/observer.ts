interface Subject {
    state: number;

    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number = 0;

    private observers: Observer[] = [];

    public attach(observer: Observer) {
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify() {
        console.log('Subject: Notifying observers...');

        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject) {
        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

(() => {
    const subject = new ConcreteSubject();

    const observer1 = new ConcreteObserverA();
    subject.attach(observer1);

    const observer2 = new ConcreteObserverB();
    subject.attach(observer2);

    subject.someBusinessLogic();
    subject.someBusinessLogic();

    subject.detach(observer2);

    subject.someBusinessLogic();
})();
