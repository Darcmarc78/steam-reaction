import getPlayerSummary from "../src/hooks/get-player-summary"

test("Test getting https://steamcommunity.com/profiles/76561198161853165/", () => {
  expect(getPlayerSummary("76561198161853165")).toBe("spilledcoffee")
})
