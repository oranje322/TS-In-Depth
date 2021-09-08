import { timeout } from '../decorators';

class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating new instance');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    id: number;
    static department: string = 'research d';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, public year: number) {
        console.log('Creating new instance');
        this.id = id;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.id;
    }
}

export { ReferenceItem}