const { handleSubmit } = require('../client/js/formHandler');
const { getAnalys } = require('../client/js/getAnalys');
const { updateUI } = require('../client/js/update');

describe("Testing the form handle function", () => {
    test("Testing the handleSubmit function", () => {
        expect(handleSubmit).toBeDefined()
    })
})

describe("Testing the updateUI function", () => {
    test("updateUI function should be defined", () => {
        expect(updateUI).toBeDefined()
    })

    test("update function must return false", () => {
        expect(updateUI({})).toBe(false);
    })
})

describe("Testing the getAnalys function", () => {
    test("getAnalys function must be defined", () => {
        expect(getAnalys).toBeDefined()
    })

    test('the fetch fails with an error', () => {
        return getAnalys().catch(e => expect(e.error).toBeDefined);
    });
})
