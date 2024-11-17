export const paramsToQueryString = (params?: { [k: string]: string | number | boolean | undefined }): string => {
    if (!params) return '';
    return Object.entries(params)
        .filter(([_, value]) => value !== undefined)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        )
        .join('&');
}