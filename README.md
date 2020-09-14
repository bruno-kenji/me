# Me

Based on [JSON Resume](https://github.com/jsonresume), a community driven open source initiative to create a JSON based standard for resumes, and welovedevs React implementation of it, found [here](https://github.com/welovedevs/react-ultimate-resume).

### Features

The resume is designed with 10 Cards (we plan to add more !)
- 🙂 Basics: Your basics : Where are you ? When did you start coding ...
- 📊 Skills: Beautiful Graphs to show your skills
- 💼 Dream job: Explain easily to recruiters what is your dream job
- 💾 Experiences: Describe your professional experiences
- 🎓 Studies: How did you learn to code ?
- 📺 Hobbies: Show your hobbies with GIF !
- 🎶 Music: Add your favorite Spotify Playlist
- 🔭 Interested by: Tell more about technologies you would love to learn
- 🌎 Languages: What language do you master?

### Getting started

Install

```
yarn install
```

Run

```
yarn start
```

Replace the default JSON Resume
```
/src/data/json_stub.json
```

### Deploy on github-pages

Edit `package.json` with your homepage

```
"name": ...,
"homepage": "https://{myGithubUsername}.github.io/{repoName}",
"version": ...,
```

Deploy to your `gh-pages` branch

```
yarn gh-deploy
```

Go to your project's GitHub Pages settings and select `gh-pages` branch in Source dropdown.

Done!

### License

react-ultimate-resume is relased under [GNU AGPL v3 license](https://github.com/welovedevs/developer-profile/blob/master/LICENSE.md)
