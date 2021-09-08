import * as Interfaces from '../interfaces';
import { format, logMethod, logParameter, sealed, writable } from '../decorators';

@sealed('string')
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    prop: string = 'additional proprty';

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`)
    }
    @writable(true)
    assistFaculty(): void {
        console.log('assist faculty')
    }
    @writable(false)
    teachCommunity(): void {
        console.log('teach community')
    }
}

export { UniversityLibrarian}