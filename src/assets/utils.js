
export function json_fetch_return(url, filter) {
    return fetch(url)
        .then((r) => r.json())
        .then((data) => {
            if (filter === undefined) filter = FILTER_NONE;
            return data.sort(filter);
        })
}

export function FILTER_NONE(a, b) {}
export function FILTER_START_DATE_DESC(a, b) { return b['startDate'] > a['startDate'] }