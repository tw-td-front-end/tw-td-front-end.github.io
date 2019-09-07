import { Observable } from "rxjs";

// case 2 have many api to query book list
const bigQuery = query('key').subscribe(value => {
    // TODO something
})

function query(keywords) {
    const queryCollector = [
        queryComputerBook,
        queryPants,
        queryComicBook,
        queryArtBook
    ]
    return new Observable(subscriber => {
        queryCollector.forEach(query => {
            query(keywords).then(value => {
                subscriber.next(value)
            })
        })
    }) 
}

function queryComputerBook(bookName){
    return Promise.resolve(['xx1book'])
};
function queryArtBook(bookName){
    return Promise.resolve(['xx2book'])
};
function queryComicBook(bookName){
    return Promise.resolve(['xx3book']);
}
function queryPants(brandName){
    return Promise.resolve(['xx3BrandName']);
}