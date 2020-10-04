const {fetch_animelist, fetch_invidious, fetch_reddit, fetch_devto, fetch_freecodecamp} = require('./fetch');

const cosenza = 'https://myanimelist.net/rss.php?type=rwe&u=Cosenza';
const mental_outlaw = 'https://invidious.snopyta.org/feed/channel/UC7YOGHUfC1Tb6E4pudI9STA';
const luke_smith = 'https://invidious.snopyta.org/feed/channel/UC2eYFnH61tmytImy1mTYvhA';
const devto = 'https://dev.to/rss';
const freecodecamp = 'https://www.freecodecamp.org/news/rss/';
const internetisbeatiful = 'https://www.reddit.com/r/InternetIsBeautiful/.rss';

async function fetch_all() {
    console.log('Carregando novos links...');

    try {
        // cosenza_list = await fetch_animelist(cosenza);
        luke_smith_videos = await fetch_invidious(luke_smith);
        mental_outlaw_videos = await fetch_invidious(mental_outlaw);
        devto_posts = await fetch_devto(devto);
        freecodecamp_posts = await fetch_freecodecamp(freecodecamp);
        internetisbeatiful_posts = await fetch_reddit(internetisbeatiful);
    } catch (error) {
        console.log(error);
    }

    console.log('Terminado de carregar.');

    return {luke_smith_videos, mental_outlaw_videos, devto_posts, freecodecamp_posts, internetisbeatiful_posts};
}

module.exports = fetch_all;
