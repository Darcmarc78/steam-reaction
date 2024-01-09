import getRecentlyPlayedGames from "../src/hooks/get-recently-played-games"

test("Confirm recenlty played games for https://steamcommunity.com/profiles/76561197972495328/ is undefined", () => {
  return getRecentlyPlayedGames("76561197972495328").then((data) => {
    expect(data as string).toBe(undefined)
  })
})
