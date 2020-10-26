const {fetch_animelist, fetch_invidious, fetch_reddit, fetch_devto, fetch_freecodecamp} = require('./fetch');

const cosenza = 'https://myanimelist.net/rss.php?type=rwe&u=Cosenza';
const mental_outlaw = 'https://invidious.snopyta.org/feed/channel/UC7YOGHUfC1Tb6E4pudI9STA';
const luke_smith = 'https://invidious.snopyta.org/feed/channel/UC2eYFnH61tmytImy1mTYvhA';
const devto = 'https://dev.to/rss';
const freecodecamp = 'https://www.freecodecamp.org/news/rss/';
const internetisbeatiful = 'https://www.reddit.com/r/InternetIsBeautiful/.rss';

async function fetch_all() {
    console.log('Carregando novos links...');
	
	rss_json = new Object();
	// cosenza_list = await fetch_animelist(cosenza);
	try {
		luke_smith_videos = await fetch_invidious(luke_smith);
		rss_json = {...rss_json, 'Luke Smith videos': luke_smith_videos};
	} catch (error) { console.log(error) };
	try {
		mental_outlaw_videos = await fetch_invidious(mental_outlaw);
		rss_json = {...rss_json, 'Mental Outlaw videos': mental_outlaw_videos};
	} catch (error) { console.log(error) };
	try {
		devto_posts = await fetch_devto(devto);
		rss_json = {...rss_json, 'Devto posts': devto_posts};
	} catch (error) { console.log(error) };
	try {
		freecodecamp_posts = await fetch_freecodecamp(freecodecamp);
		rss_json = {...rss_json, 'Freecodecamp posts': freecodecamp_posts};
	} catch (error) { console.log(error) };
	try {
		internetisbeatiful_posts = await fetch_reddit(internetisbeatiful);
		rss_json = {...rss_json, 'InternetIsBeautiful posts': internetisbeatiful_posts};
	} catch (error) { console.log(error) };
	
	console.log('Terminado de carregar.')
	return rss_json;
}

module.exports = fetch_all;
