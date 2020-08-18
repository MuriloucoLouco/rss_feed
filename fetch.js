const parseString = require('xml2js').parseString;
const fetch = require('node-fetch');

async function fetch_animelist(feed_url) {
    anime_updates = new Array();

    _=await fetch(feed_url)
    .then(res => res.text())
    .then(xml => parseString(xml, (err, res) => {
        itens = res.rss.channel[0].item;
        itens.forEach(item => {
            title = item.title[0];
            link = item.link[0];
            anime_updates.push({ title, link });
        });
    }));

    return anime_updates;
}

async function fetch_invidious(feed_url) {
    videos = new Array();

    _=await fetch(feed_url)
    .then(res => res.text())
    .then(xml => parseString(xml, (err, res) => {
        res.feed.entry.forEach(video => {
            link = video.link[0]['$'].href;
            title = video.title[0];
            videos.push({ title, link });
        });
        
    }));

    return videos;
}

async function fetch_devto(devto) {
    posts = new Array();

    _=await fetch(devto)
    .then(res => res.text())
    .then(xml => parseString(xml, (err, res) => {
        res.rss.channel[0].item.forEach(post => {
            title = post.title[0];
            link = post.link[0];
            posts.push({ title, link });
        });
    }));

    return posts;
}

async function fetch_freecodecamp(freecodecamp) {
    posts = new Array();

    _=await fetch(freecodecamp)
    .then(res => res.text())
    .then(xml => parseString(xml, (err, res) => {
        res.rss.channel[0].item.forEach(post => {
            title = post.title[0].split('\n')[1].slice(17,-1);
            link = post.link[0];
            posts.push({ title, link });
        });
    }));

    return posts;
}

async function fetch_reddit(feed_url) {
    posts = new Array();

    _=await fetch(feed_url)
    .then(res => res.text())
    .then(xml => parseString(xml, (err, res) => {
        res.feed.entry.forEach(post => {
            title = post.title[0];
            link = post.link[0]['$'].href;
            posts.push({ title, link });
        });
    }));

    return posts;
}

module.exports = {fetch_animelist, fetch_invidious, fetch_reddit, fetch_devto, fetch_freecodecamp};