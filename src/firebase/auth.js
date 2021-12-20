import { auth, firestore } from './firebase.config';

const loginUserFirebase = async (email, password) => {
	try {
		const userCredential = await auth.signInWithEmailAndPassword(
			email,
			password
		);
		console.log('logged in');
	} catch (error) {
		console.log(error);
		console.log('failed to login');
	}
};

const signupUserFirebase = async (name, username, email, password) => {
	try {
		const userCredential = await auth.createUserWithEmailAndPassword(
			email,
			password
		);

		firestore.collection('users').doc(userCredential.user.uid).set({
			name,
			username,
			email,
			password,
		});

		auth.currentUser.updateProfile({ displayName: name });
		console.log(`user ${userCredential.user.uid} created`);
	} catch (error) {
		console.log(error);
		console.log('failed to create user');
	}
};

export { loginUserFirebase, signupUserFirebase, auth };
