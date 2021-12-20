import { auth, firestore } from './firebase.config';

const editUserProfile = async (name, bio) => {
	try {
		const userRef = firestore.doc(`users/${auth.currentUser.uid}`);
		const snapshot = await userRef.get();

		if (snapshot.exists) {
			try {
				userRef.update({
					bio,
					name,
				});
				auth.currentUser.updateProfile({ displayName: name });
			} catch (error) {
				console.log('Error updating User profile', error.message);
			}
		}
	} catch (error) {
		console.log(error);
	}
};

const getUserBio = async () => {
	try {
		const userRef = firestore.doc(`users/${auth.currentUser.uid}`);
		userRef.get().then(userDoc => {
			if (userDoc.exists) {
				return userDoc.data().bio;
			} else {
				console.log('No such document!');
			}
		});
	} catch (error) {
		console.log('not able to get user bio');
	}
};

export { editUserProfile, getUserBio };
