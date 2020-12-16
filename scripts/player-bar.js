{
    $('button#play-pause').on('click', function() {
           helper.playPauseAndUpdate(); //pllayer.playPause();
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
        
        helper.playPauseAndUpdate(NextSong);//player.playPause(nextSong)

        });


        $('#time-control input').on('input', function (event) {
            player.skipTo(event.target.value);
        });

        $('#volume-control input').on('input', function (event) {
            player.setVolume(event.target.value);
        });
        
        
        setInterval( () => {
            if (player.playState !== 'playing') { 
                return; 
            }
        
            const currentTime = player.getTime();
            const duration = player.getDuration();
            const percent = (currentTime / duration) * 100;

            $('#time-control .current-time').text( player.prettyTime(currentTime));
        
            $('#time-control input').val(percent);
        
        },1000);



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
        
            }    
            }
      });
}

