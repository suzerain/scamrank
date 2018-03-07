import twitter from 'twitter';
import twitterCredentials from 'config/twitter-config.js';

class responseGrabber {
	constructor(){
		this.twitterClient = new twitter(twitterCredentials);
	}
	
	getResponsesToUser( user ){
		const replies = this.twitterClient.get('search/tweets', {q: `to:${user}`, count: 100});
		console.log( replies );
	}
}
export default responseGrabber;