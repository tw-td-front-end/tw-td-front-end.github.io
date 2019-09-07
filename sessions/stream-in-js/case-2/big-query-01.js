// case 2 have many api to query book list
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

function query(keywords) {
    const results = [];
    // TODO ADD
    return results;
}

