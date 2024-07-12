const { expect } = require("chai");

describe("Token Contract", function () {
  it("Deploment assigns total supply", async function () {
    const[owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});