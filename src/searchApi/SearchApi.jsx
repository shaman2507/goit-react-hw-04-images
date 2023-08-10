
function SearchApi(value, pageNumber = 1) {
    const KEY = "36665429-419efb0f167e76c277ad1e233";
    return fetch(`https://pixabay.com/api/?q=cat&page=${pageNumber}&key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`);
}


export default SearchApi;