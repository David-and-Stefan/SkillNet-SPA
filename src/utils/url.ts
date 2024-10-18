export function buildUrl(
  urlParam: string,
  searchParams?: URLSearchParams | Object
) {
  let params: Object = searchParams || {};
  if (searchParams instanceof URLSearchParams) {
    params = Object.fromEntries(searchParams);
  }

  let searchParamsString = Object.entries(params)
    .filter(([_, val]) => val !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  if (searchParamsString) {
    searchParamsString = '?' + searchParamsString;
  }

  return encodeURI(`${urlParam}${searchParamsString}`);
}
