import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA0qTWmSnG05oykiDAwbhFa9auXhnrOZCc',
	authDomain: 'social-change-9e59b.firebaseapp.com',
	projectId: 'social-change-9e59b',
	storageBucket: 'social-change-9e59b.appspot.com',
	messagingSenderId: '1008687891521',
	appId: '1:1008687891521:web:db9c6132a73e1a421372c0',
};

// if (firebase.app.length === 0) {
firebase.initializeApp(firebaseConfig);
// }

const auth = firebase.auth();

const firestore = firebase.firestore();

export { firestore, auth };

export default firebase;
