import { addTwo } from "./testLib";

describe('test test', () => {

	test('Some test', () => {
		expect(addTwo(2, 2)).toEqual(4);
	});

});