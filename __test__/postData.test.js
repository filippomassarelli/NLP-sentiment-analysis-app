import { postData } from "../src/client/js/postData";

describe("Testing the postData function", () => {
  test("The postData function should be defined", async () => {
    await expect(postData).toBeDefined();
  });
});
