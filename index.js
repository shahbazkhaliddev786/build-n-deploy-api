const express = require("express");
require('dotenv').config()
const app = express();
const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("Hi from server");
})

app.get("/login",(req,res)=>{
    res.send(`<h2>Login</h2>`)
})

// https://api.github.com/users/shahbazkhaliddev786

const githubData ={
    "login": "shahbazkhaliddev786",
    "id": 130798658,
    "node_id": "U_kgDOB8vUQg",
    "avatar_url": "https://avatars.githubusercontent.com/u/130798658?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shahbazkhaliddev786",
    "html_url": "https://github.com/shahbazkhaliddev786",
    "followers_url": "https://api.github.com/users/shahbazkhaliddev786/followers",
    "following_url": "https://api.github.com/users/shahbazkhaliddev786/following{/other_user}",
    "gists_url": "https://api.github.com/users/shahbazkhaliddev786/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shahbazkhaliddev786/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shahbazkhaliddev786/subscriptions",
    "organizations_url": "https://api.github.com/users/shahbazkhaliddev786/orgs",
    "repos_url": "https://api.github.com/users/shahbazkhaliddev786/repos",
    "events_url": "https://api.github.com/users/shahbazkhaliddev786/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shahbazkhaliddev786/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shahbaz Khalid",
    "company": null,
    "blog": "",
    "location": "I-9 Islamabad, Pakistan",
    "email": null,
    "hireable": true,
    "bio": "MERN Stack Developer",
    "twitter_username": null,
    "public_repos": 48,
    "public_gists": 0,
    "followers": 2,
    "following": 2,
    "created_at": "2023-04-14T20:51:07Z",
    "updated_at": "2024-05-09T16:14:25Z"
    }

app.get("/github",(req,res)=>{
    res.json(githubData);
})
console.log(process.env.PORT)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT: ${process.env.PORT}`);
})