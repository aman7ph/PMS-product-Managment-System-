import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyAKW718jK7erkoqf5FX4MDagtS7xuwOdwQ',
    authDomain: 'pms-development-fa123.firebaseapp.com',
    projectId: 'pms-development-fa123',
    storageBucket: 'pms-development-fa123.appspot.com',
    messagingSenderId: '249006524899',
    appId: '1:249006524899:web:c4a879bec73e3126b178d6',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
