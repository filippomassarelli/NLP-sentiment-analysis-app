import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handleSubmit function from formHandler", () => {
  test("handleSubmit function should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
