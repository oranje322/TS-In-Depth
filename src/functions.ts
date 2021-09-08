/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, Callback, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import RefBook from './classes/Encyclopedia';

export function getAllBooks(): ReadonlyArray<Book> {
    const books = <const>[
        { id: 1, category: Category.CSS, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        {
            id: 2,
            category: Category.Angular,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, category: Category.JavaScript, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        {
            id: 4,
            category: Category.JavaScript,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numberOfBooks = books.length;
    const firstBook = books.find((book: Book) => book.available).title;
    console.log(numberOfBooks, firstBook);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        {
            lib: 'libName2',
            books: 5_000_000_000,
            avgPagesPerBook: 300,
        },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    return result;
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer age: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`Customer name ${customer}`);
    return booksIDs.map(id => getBookByID(id)).filter(book => book.available).map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertsStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertsRefBookInstance(condition: any): asserts condition {
    if (!condition) throw new Error('its not instance  refbook');
}

export function bookTitleTransform(title: any): string {
    assertsStringValue(title);
    return [...title].reverse().join('');
}

export function printRefBook(data: any): void {
    assertsRefBookInstance(data instanceof RefBook);
    data.printItem();
}

// export function getProperty(book: Book, prop: BookProperties): any {
//     if (typeof book[prop] === 'function') {
//         return book[prop]['name'];
//     }
//     return book[prop];
// }

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name'];
    }
    return obj[prop];
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

// export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (e) {
            callback(e, null);
        }
    }, 5000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`error msg: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise<string[]>(((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('not found books')
            }
        }, 5000);
    }));
    return p
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const p = await getBooksByCategoryPromise(category)
    console.log(p)
    return p
}