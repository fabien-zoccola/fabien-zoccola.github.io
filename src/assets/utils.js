
export function json_fetch_return(url) {
    return fetch(url)
        .then((r) => r.json());
}