import * as firebase from 'firebase';
import {
	apiKey, databaseURL, projectId, storageBucket
} from 'react-native-dotenv';

const config = {
	apiKey,
	databaseURL,
	projectId, 
	storageBucket,
}

firebase.initializeApp(config);

export default firebase;