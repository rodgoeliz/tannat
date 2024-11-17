export const paramsToKeys = (
    params?: { [k: string]: string | number | boolean }
) =>
    params ? Object.entries(params).map(([key, value]) => `${key}-${value?.toString()}`) : []


