"use strict";
function makeAlbum(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different album objects
const album1 = makeAlbum("Artist1", "Album 1", 12);
const album2 = makeAlbum("Artist2", "Album 2");
const album3 = makeAlbum("Artist3", "Album 3", 10);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
