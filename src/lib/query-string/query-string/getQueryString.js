import { jsonToString } from '@App/lib/Json/';

export default function getQueryString(queryFilters) {
  return Object.entries(queryFilters).reduce((reducer, filterEntry) => {
    if(reducer != "") {
      reducer += "&";
    }

    let [ key, filter ] = filterEntry;

    reducer += key + "=" + jsonToString(filter);

    return reducer;
  }, "");
}