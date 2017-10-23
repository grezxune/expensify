import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYaOMc4XxbY60k4m0XErdcd2Zrf_I_000",
    authDomain: "expensify-e97f3.firebaseapp.com",
    databaseURL: "https://expensify-e97f3.firebaseio.com",
    projectId: "expensify-e97f3",
    storageBucket: "expensify-e97f3.appspot.com",
    messagingSenderId: "780664220032"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// const expense1 = {
//     description: 'Descriptionio',
//     note: 'test note',
//     amount: 123.45,
//     createdAt: 500000
// };

// const expense2 = {
//     description: 'Descriptionio',
//     note: 'test note 2',
//     amount: 123.45,
//     createdAt: 500000
// };

// const expense3 = {
//     description: 'Descriptionio',
//     note: 'test note 3',
//     amount: 123.45,
//     createdAt: 500000
// };

// database.ref('expenses').push(expense1);
// database.ref('expenses').push(expense2);
// database.ref('expenses').push(expense3);

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '13',
//     title: 'Second note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().set({
//     name: 'Tommy Treb',
//     age: 25,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'Software Engineer',
//         company: 'MCIS'
//     },
//     location: {
//         city: 'Marshfield',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Successfully updated data');
// }).catch((e) => {
//     console.log('Error!', e.message);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val();
//     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Successfully updated data');
// }).catch((e) => {
//     console.log('Error!', e.message);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const value = snapshot.val();
//         console.log(value);
//     })
//     .catch((e) => {
//     });

// Equivalent to calling remove on 'isSingle'
// database.ref('isSingle').set(null);

// database.ref().set('This is my data.');

// database.ref('age').set(29);
// database.ref('location/city').set('Iola');

// database.ref('attributes').set({
//     height: '5\' 10\'\'',
//     weight: 163
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Removed data!');
//     }).catch((e) => {
//         console.log('Remove failed: ', error.message);
//     });