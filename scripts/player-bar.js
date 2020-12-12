{
    $('button#play-pause').on('click', function() {
           player.playPause();
           $(this).attr('playState', player.playState);
      });

      $('button#next').on('click', function() {
        if (player.playState !== 'playing') { 
            return; 
        }

        //Obtains the index number for the current song in the array
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

        //Obtains the number of the next song
        const nextSongIndex = currentSongIndex + 1;

        //Idenficfies is there is a song from the album being played
        const nextSong = album.songs[nextSongIndex];

        // Indentifies when a user is the last song and there us nothinhg else next 
        if (nextSongIndex >= album.songs.length) { 
            return; 
        }
        
        player.playPause(nextSong);
    
    
        

        });

        $('button#previous').on('click', function() {
            if (player.playState === 'playing') {

            //Obtiene el número de canción actual del array Songs
           const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

            //Obtiene el número de la siguiente canción
           const previousSongIndex = currentSongIndex - 1;

            //Identifica si se está reproduciendo una canción del álbum
            if (previousSongIndex >= 0) {
            //Obtiene los datos de la siguiente canción 
            const previousSong = album.songs[previousSongIndex];
            player.playPause(previousSong);
        
            }    
            }
      });
}