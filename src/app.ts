/* eslint-disable no-redeclare */

import { Category } from './enums';
import {
    createCustomer,
    getAllBooks,
    getBooksByCategory,
    getBooksByCategoryPromise, getProperty,
    logCategorySearch,
    logSearchResults,
    printRefBook, purge,
} from './functions';
import { Library, RefBook, ReferenceItem, Shelf, UL, Reader } from './classes';
import Encyclopedia from './classes/Encyclopedia';
import { Book, Librarian, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// task02 ===========================================

// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.TypeScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());


// 03task

// const myBooks = checkoutBooks('Ann', 1, 2, 4);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id2: number) => `${id2}-${name}`;
// idGenerator = createCustomerID;

// console.log(idGenerator('Aleksandr', 27));

// bookTitleTransform('title')

// 04 task


// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };


// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason) => console.log(`Damaged: ${reason}`),
// };

// 04.01
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));
// 04.02
// const logDamage: Logger = (p: string) => console.log(`damaged: ${p}`);
// logDamage('missing back cover')
// 04.03
// const favoriteAuthor: Author = {
//     name: 'Aleks',
//     email: 'aleks@gmail.com',
//     numBooksPublished: 3,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Aleks',
//     email: 'aleks@gmail.com',
//     department: 'Classical',
//     assistCustomer: (name: string) => console.log(name),
// };


// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book?.getTitle());
// console.log(offer.book?.authors[0]);
//
//
// 05 task
//
// const ref = ReferenceItem = new ReferenceItem(1, 'learn css', 2020);
// console.log(ref)
// ref.printItem()
// ref.publisher = 'abc'
// console.log(ref.publisher);
// console.log(ref.getID());
//
// 05.02,03  06.03
// const refBook: Encyclopedia = new Encyclopedia(1, 'learn js', 2020, 3)
// const refBook = new RefBook(1, 'learn js', 2020, 3)
// console.log(refBook)
// refBook.printItem()
// refBook.printCitation()
// printRefBook(refBook)
// printRefBook(1)
//
// 05.04
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'aleks';
// favoriteLibrarian.assistCustomer('leha');
// console.log(favoriteLibrarian);
//
//
// 05.05
// const pBook: PersonBook = {
//     id: 1,
//     author: 'aleks',
//     available: false,
//     category: Category.JavaScript,
//     email: 'aleks@gmail.com',
//     name: 'aleks',
//     title: 'Learn js'
// }
// console.log(pBook)
//
// 06.05
//
// const flag = true
// if(flag) {
//     const module = await import('./classes')
//
//     const reader = new module.Reader();
//     reader.name = 'aleks';
//     reader.take(getAllBooks()[0]);
// }
//
// 06.06
//
// const lib: Library = new Library();
// const lib: Library = {
//     id: 1,
//     name: 'pepe',
//     address: 'qq',
// }
//
// 07 01
//
// const invenotry: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
//
// const books = purge(invenotry);
// console.log(books);
// const ns = purge([1, 2, 3, 4]);
// console.log(ns)
//
// 0702
//
// const bookShelf = new Shelf<Book>();
// invenotry.forEach(book => bookShelf.add(book))
// console.log(bookShelf.getFirst().title)
//
// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazinesShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazinesShelf.add(mag))
// console.log(magazinesShelf.getFirst().title)
//
// 07.03
// magazinesShelf.printTitles()
// console.log(magazinesShelf.find('Five Points'))
// console.log(getProperty<Book, 'title'>(getAllBooks()[0], 'title'))
//
// 07.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     pages: 22,
//     title: 'gfgf',
//     markDamaged: null,
// }
//
// const book2: UpdatedBook = {
//     id: 555,
// }
//
// const args: Parameters<CreateCustomerFunctionType> = ['aleks']
// createCustomer(...args)
//
//
// 08.01
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// UL.UniversityLibrarian['a'] = 1
// UL.UniversityLibrarian.prototype['a'] = 1;
//
// 08.02
// const obj = new UL.UniversityLibrarian()
// console.log(obj)
// obj.name = 'aleks';
// obj.assistCustomer('leha');
// obj['printLibrarian']();
//
//  08.03
// const obj = new UL.UniversityLibrarian();
// obj.assistFaculty = null;
// console.log(obj);
// obj.teachCommunity = null;
//
// 08.04
//
// const refBook = new RefBook(1, 'learn js', 2021, 3);
// refBook.printItem()
//
// 08.05
// const obj = new UL.UniversityLibrarian();
// console.log(obj);
// obj.name = 'Anna'
// obj.assistCustomer('boris')
//
// 08.06
// const obj = new UL.UniversityLibrarian();
// obj.name = 'Anna'
// console.log(obj);
// obj.assistCustomer('boris')
//
// 08.07
//
// const refBook = new RefBook(1, 'learn js', 2021, 3);
// refBook.copies = 4.5;
// console.log(refBook)
//
// 09.01
//
// console.log('begin');
// getBooksByCategory(Category.CSS, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end')
//
// 09.02
//
// console.log('begin');
// getBooksByCategoryPromise(Category.CSS)
//     .then(titles => {
//         console.log(titles)
//         return titles.length
//     })
//     .then(numberOfBooks => console.log(numberOfBooks))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('completed'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason))
//     .finally(() => console.log('completed'));
// console.log('end');
//
// 09.03
//
// logSearchResults(Category.CSS)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))




