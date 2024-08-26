console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []
 function addToCollection(array, object) {
  array.push(object);
  return object;
 }




 function showCollection(collection) {
  console.log('should show my collection of albums');
  for (let i = 0; i < collection; i++) {
    console.log('title by artist, published in yearPublished');
    
    
  }
 }

 showCollection('');


 for (let i = 0; i <myCollection.length; i++) {
 console.log('calling every item until the end', [i]);  
 }


let album1 = {
  title: 'car',
  artist: 'laxCity',
  yearPublished: '2022',

  
   
}

let album2 = {
  title: 'Hostage',
  artist: 'ChelseaGrin',
  yearPublished: '2018',

  
   
}

let album3 = {
  title: 'death will reign',
  artist: 'inpendingDoom',
  yearPublished: '2002',

  
   
}

let album4 = {
  title: 'aLittleGrace',
  artist: 'yaahnHunter',
  yearPublished: '2023',

  
   
}

let album5 = {
  title: 'faultLines',
  artist: 'latitudes',
  yearPublished: '2022',

  
   
}

let album6 = {
  title: 'brooklyn95',
  artist: 'robotaki',
  yearPublished: '2018',

  
   
}

let album7 = {
  title: 'blackLikeYou',
  artist: 'josephSolomon',
  yearPublished: '2023',

  
   
}

addToCollection(myCollection, album1);
addToCollection(myCollection, album2);
addToCollection(myCollection, album3);
addToCollection(myCollection, album4);
addToCollection(myCollection, album5);
addToCollection(myCollection, album6);
addToCollection(myCollection, album7);

console.log();

    
  


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}



// function addToCollection(collection, title, artist, yearPublished) {
//   const newAlbum = {
//     title: title,
//     artist: artist,
//     yearPublished: yearPublished
//   };
//   collection.push(newAlbum);
//   return newAlbum;
// }

// addToCollection(myCollection, 'car', 'laxCity', 2022);
// addToCollection(myCollection, 'Hostage', 'ChelseaGrin', 2018);
// addToCollection(myCollection, 'deathWillReign', 'impendingDoom', 2002 );
// addToCollection(myCollection,'alittleGrace', 'yaahnHunter', 2023);
// addToCollection(myCollection, 'brooklyn95', 'robotaki', 2018);
// addToCollection(myCollection, 'blackLikeYou', 'josephSolomon', 2023);

// function showCollection(collection) {
//   console.log('albums in colection:' + collection.length);
// for (let i = 0; i < collection.length; i++) {
//  console.log();
 
  
// }
  
// }




