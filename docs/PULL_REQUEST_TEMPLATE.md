# Problem 
Need a "Recent Library" component to display info from [GetRecentlyPlayedGames (v0001)](https://developer.valvesoftware.com/wiki/Steam_Web_API#GetRecentlyPlayedGames_.28v0001.29)

# Solution
Added placeholder "game" `<div>` tags
Created "RecentLibrary" component, then "YourLibraryPage" to differentiate.

# Impact
![image](https://github.com/Darcmarc78/steam-reaction/assets/20177405/03ee925a-4aac-4856-9dd4-8696baae7545)

# Test Plan
1. Pull branch to local environment
2. Open a terminal in the local repository, enter `npm i` or `npm install`
3. Run `npm run dev` to start front-end
4. Run `npm start` to start back-end
5. Open `localhost:8000/` in a browser.

See #49 for an example