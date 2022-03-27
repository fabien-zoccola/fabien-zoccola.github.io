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

export function json_fetch_return(url, selector, filter, ...filter_criteria) {
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      // select a part of the array
      if (typeof selector != "undefined" && selector != null) {
        for (const sel of selector) {
          data = data[sel];
        }

        // transform the eventual dictionary in an array
        data = _transform_object_to_array(data);
      }

      // filter the array
      if (filter === undefined) return data;
      return data.sort((a, b) => filter(a, b, ...filter_criteria));
    });
}

export async function fetch_project(projectsFile, slug) {
  let projects = await json_fetch_return(projectsFile);

  let directory =
    projectsFile.split("/").slice(0, -1).join("/") +
    "/" +
    projects["directory"];

  // eslint-disable-next-line no-prototype-builtins
  if (!projects["projects"].hasOwnProperty(slug)) return null;
  else {
    let p = projects["projects"][slug];
    let data = await json_fetch_return(`${directory}/${slug}.json`);

    return Object.assign(data, p);
  }
}

function _transform_object_to_array(object) {
  let arr = [];

  for (const name in object) {
    // push the value to the array
    arr.push(object[name]);
    // add the key in the value
    arr[arr.length - 1]["__key"] = name;
  }
  return arr;
}

export function FILTER_DESC(a, b, criterium) {
  return b[criterium] > a[criterium] ? 1 : -1;
}

export function FILTER_DESC_THEN_ALPHABETICAL(a, b, criterium, name_criterium) {
  if (b[criterium] === a[criterium]) {
    return FILTER_ALPHABETICAL_ORDER(a, b, name_criterium);
  } else {
    return b[criterium] > a[criterium] ? 1 : -1;
  }
}

export function FILTER_ALPHABETICAL_ORDER(a, b, criterium) {
  if (a[criterium] === a[criterium]) return 0;
  else return a[criterium] > b[criterium] ? 1 : -1;
}
