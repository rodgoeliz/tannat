import { paramsToKeys } from "./paramsToKeys";

describe('paramsToKeys', () => {
    it('should return an empty array when params is undefined', () => {
        expect(paramsToKeys(undefined)).toEqual([]);
    });

    it('should return an empty array when params is an empty object', () => {
        expect(paramsToKeys({})).toEqual([]);
    });

    it('should convert a simple object into an array of key-value pairs', () => {
        const params = { a: 1, b: 'test', c: true };
        expect(paramsToKeys(params)).toEqual(['a-1', 'b-test', 'c-true']);
    });
});