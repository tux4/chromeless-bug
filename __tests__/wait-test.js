const { Chromeless } = require("chromeless");

const chromeless = new Chromeless();

function myWait(time=3000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

describe("Reproduce bug", () => {
  it("this should wait for 3 seconds but it doesn't", async () => {
    await chromeless.wait(3000);
  });

  it("this should wait for 3 seconds and it does", async () => {
    await myWait(3000);
  });
});

afterAll(async () => {
  await chromeless.end();
});
