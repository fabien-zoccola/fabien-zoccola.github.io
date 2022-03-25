export function to_html_hex(text) {
  return text
    .split("")
    .map((el) => `&#${el.charCodeAt(0)}`)
    .join("");
}

export function from_html_ex(text) {
  return text
    .split("&#")
    .map((el) => String.fromCharCode(Number(el)))
    .join("");
}

export function json_fetch_return(url, filter) {
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (filter === undefined) filter = FILTER_NONE;
      console.log(data.sort(filter));
      return data.sort(filter);
    });
}

export function FILTER_NONE() {
  return 0;
}
export function FILTER_START_DATE_DESC(a, b) {
  return b["startDate"] > a["startDate"] ? 1 : -1;
}
