console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []
  

  function addToCollection(title, artist, yearPublished) {
    let newAlbum = {
      artist:  'impendingDoom',
    title: 'ripTearAndBurn',
    yearPublished: '2013',
    }
    console.log(newAlbum);
    
  

  //addToCollection()
myCollection.push(newAlbum)
return newAlbum;
  }

addToCollection()



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
