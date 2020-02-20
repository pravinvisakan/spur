const SEARCH_DETAILS_DEFAULTS = {
    startTime: -1,
    endTime: -1,
    location: -1,
    cost: -1,
    partySize: -1,
    categories: -1
}

class SearchDetails {
    constructor(startTime, endTime, location, cost, partySize, categories) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.cost = cost;
        this.partySize = partySize;
        this.categories = categories;
    }
}

export default SearchDetails;
export { SEARCH_DETAILS_DEFAULTS };
