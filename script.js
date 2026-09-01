document.addEventListener('DOMContentLoaded', () => {
    const likedSongs = Array.from({ length: 82 }, (_, i) => ({
        name: `Liked Song ${i + 1}`,
        artist: `Liked Artist ${i + 1}`,
        src: `liked songs/1 (${i + 1}).mp3`,
        cover: 'liked songs/hearts.png',
        liked: true
    }));

    const playlists = {
        playlist1: Array.from({ length: 36 }, (_, i) => ({
            name: `Siddhu Song ${i + 1}`,
            artist: `Artist: Sidhu Moose wala`,
            src: `playlist1/1 (${i + 1}).mp3`,
            cover: 'playlist1/bigph.jpg',
            liked: false
        })),
        playlist2: Array.from({ length: 31 }, (_, i) => ({
            name: `Badshah Song ${i + 1}`,
            artist: `Artist: Badshah `,
            src: `playlist2/2 (${i + 1}).mp3`,
            cover: 'playlist2/badshahbigph.png',
            liked: false
        })),
        playlist3: Array.from({ length: 9 }, (_, i) => ({
            name: `Raftaar Song ${i + 1}`,
            artist: `Artist: Raftaar`,
            src: `playlist3/3 (${i + 1}).ogg`,
            cover: 'playlist3/raftar.png',
            liked: false
        })),
        playlist4: Array.from({ length: 40 }, (_, i) => ({
            name: `Honey Singh song ${i + 1}`,
            artist: `Artist: Honey singh`,
            src: `playlist4/4 (${i + 1}).mp3`,
            cover: 'playlist4/honeySingh.png',
            liked: false
        })),
        playlist5: Array.from({ length: 25 }, (_, i) => ({
            name: `Arjit singh ${i + 1}`,
            artist: `Artist: Arigit Singh`,
            src: `playlist5/5 (${i + 1}).mp3`,
            cover: 'playlist5/Arjit (9).png',
            liked: false
        })),
        playlist6: Array.from({ length: 80 }, (_, i) => ({
            name: `Diljit Singh Song ${i + 1}`,
            artist: `Artist Diljit Singh`,
            src: `playlist6/6 (${i + 1}).mp3`,
            cover: 'playlist6/Dilgit (3).png',
            liked: false
        })),
        playlist7: Array.from({ length: 80 }, (_, i) => ({
            name: `A.R. Rahman Song ${i + 1}`,
            artist: `Artist: A.R Rahman`,
            src: `playlist7/7 (${i + 1}).mp3`,
            cover: 'playlist7/ARRahman.png',
            liked: false
        })),
        playlist8: Array.from({ length: 80 }, (_, i) => ({
            name: `Karan Song ${i + 1}`,
            artist: `Artist: Karan Aujla`,
            src: `playlist8/8 (${i + 1}).mp3`,
            cover: 'playlist8/karan.png',
            liked: false
        })),
        playlist9: Array.from({ length: 80 }, (_, i) => ({
            name: `Stillforms Song ${i + 1}`,
            artist: `Artist: Stillform`,
            src: `playlist9/9 (${i + 1}).mp3`,
            cover: 'playlist9/stillforms.png',
            liked: false
        })),
        playlist10: Array.from({ length: 28 }, (_, i) => ({
            name: `hit Punjabi Song ${i + 1}`,
            artist: `hit punjabi`,
            src: `playlist10/10 (${i + 1}).mp3`,
            cover: 'playlist10/1.4.jpg',
            liked: false
        })),
        playlist11: Array.from({ length: 80 }, (_, i) => ({
            name: `Cheema Y song ${i + 1}`,
            artist: `Cheema Y`,
            src: `playlist11/11 (${i + 1}).mp3`,
            cover: 'playlist11/cheemay.png',
            liked: false
        })),
        playlist12: Array.from({ length: 80 }, (_, i) => ({
            name: `Irshad Kamil Song ${i + 1}`,
            artist: `Irshad Kamil`,
            src: `playlist12/12 (${i + 1}).mp3`,
            cover: 'playlist12/Irshad.png',
            liked: false
        })),
        playlist13: Array.from({ length: 80 }, (_, i) => ({
            name: `Parmish Vermama Song ${i + 1}`,
            artist: `Parmish Verma`,
            src: `playlist13/13 (${i + 1}).mp3`,
            cover: 'playlist13/Parmish.png',
            liked: false
        })),
        playlist14: Array.from({ length: 80 }, (_, i) => ({
            name: `AwaraAngara ${i + 1}`,
            artist: `unknown`,
            src: `playlist14/14 (${i + 1}).mp3`,
            cover: 'playlist14/awara.png',
            liked: false
        })),
        playlist15: Array.from({ length: 80 }, (_, i) => ({
            name: `Seene se tum mere ${i + 1}`,
            artist: `Unknown`,
            src: `playlist15/15 (${i + 1}).mp3`,
            cover: 'playlist15/sine se.png',
            liked: false
        })),
        playlist16: Array.from({ length: 80 }, (_, i) => ({
            name: `Seene se tum ${i + 1}`,
            artist: `Unknown`,
            src: `playlist16/16 (${i + 1}).mp3`,
            cover: 'playlist16/seene.png',
            liked: false
        })),
        playlist17: Array.from({ length: 80 }, (_, i) => ({
            name: `Navan Sandhu ${i + 1}`,
            artist: `Unknown`,
            src: `playlist17/17 (${i + 1}).mp3`,
            cover: 'playlist17/navan1.png',
            liked: false
        })),
        playlist18: Array.from({ length: 80 }, (_, i) => ({
            name: `Pritam ${i + 1}`,
            artist: `Unknown`,
            src: `playlist17/17 (${i + 1}).mp3`,
            cover: 'playlist18/pritam.png',
            liked: false
        }))
    };

    const tracks = [...likedSongs, ...Object.values(playlists).flat()];

    const audio = new Audio();
    audio.volume = 0.8;

    let currentIndex = 0;
    let isShuffle = false;
    let isRepeat = false;
    let currentView = 'all';

    const footerTrack = document.querySelector('.track-info a');
    const footerArtist = document.querySelector('.track-info p');
    const coverImage = document.querySelector('.footer-left img');
    const bigPhoto = document.getElementById('big-photo');
    const playBtn = document.querySelector('.play-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const shuffleBtn = document.querySelector('.shuffle-btn');
    const repeatBtn = document.querySelector('.repeat-btn');
    const progressFilled = document.querySelector('.progress-filled');
    const currentTimeEl = document.querySelector('.current-time');
    const durationTimeEl = document.querySelector('.duration-time');
    const trackProgress = document.querySelector('.track-progress');
    const volumeSlider = document.querySelector('.volume-slider');
    const playlistView = document.getElementById('playlist-view');
    const homeContent = document.querySelector('.home-content');
    const playlistTriggers = document.querySelectorAll('.playlist-trigger');

    playlistTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const playlistKey = trigger.dataset.playlist;
            if (playlistKey) {
                showPlaylist(playlistKey);
            }
        });
    });

    function updateUI() {
        if (footerTrack) footerTrack.textContent = tracks[currentIndex].name;
        if (footerArtist) footerArtist.textContent = tracks[currentIndex].artist;
        if (coverImage && tracks[currentIndex].cover) coverImage.src = tracks[currentIndex].cover;
        if (bigPhoto && tracks[currentIndex].cover) bigPhoto.src = tracks[currentIndex].cover;
        if (shuffleBtn) shuffleBtn.classList.toggle('active', isShuffle);
        if (repeatBtn) repeatBtn.classList.toggle('active', isRepeat);
        renderPlaylist();
    }

    function formatTime(seconds) {
        const rounded = Math.floor(seconds || 0);
        const minutes = Math.floor(rounded / 60);
        const secs = rounded % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    function updatePlayButton(isPlaying) {
        if (!playBtn) return;
        playBtn.src = isPlaying ? 'All_logos/pause.png' : 'All_logos/play-button.png';
    }

    function loadTrack(index, play = true) {
        currentIndex = (index + tracks.length) % tracks.length;
        audio.src = tracks[currentIndex].src;
        audio.load();
        updateUI();
        if (play) {
            audio.play().catch(() => {});
        } else {
            updatePlayButton(false);
        }
    }

    function nextTrack() {
        if (isShuffle) {
            currentIndex = Math.floor(Math.random() * tracks.length);
        } else {
            currentIndex = (currentIndex + 1) % tracks.length;
        }
        loadTrack(currentIndex, true);
    }

    function prevTrack() {
        if (isShuffle) {
            currentIndex = Math.floor(Math.random() * tracks.length);
        } else {
            currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        }
        loadTrack(currentIndex, true);
    }

    function showPlaylist(view = 'all') {
        currentView = view;
        if (homeContent) homeContent.classList.add('hidden');
        if (playlistView) {
            playlistView.classList.add('active');
            renderPlaylist();
        }
    }

    function showHome() {
        if (homeContent) homeContent.classList.remove('hidden');
        if (playlistView) playlistView.classList.remove('active');
    }

    function renderPlaylist() {
        if (!playlistView) return;

        const playlistKeys = Object.keys(playlists);
        const visibleTracks = currentView === 'liked'
            ? likedSongs
            : currentView === 'all'
                ? tracks
                : playlists[currentView] || [];

        const playlistTitle = currentView === 'liked'
            ? 'Liked Songs'
            : currentView === 'all'
                ? 'All Songs'
                : playlists[currentView]
                    ? currentView.replace(/playlist(\d+)/, 'Playlist $1')
                    : 'Playlist';

        playlistView.innerHTML = `
            <div class="playlist-header">
                <h2>${playlistTitle}</h2>
                <div class="playlist-actions">
                    <button class="toggle-view-btn ${currentView === 'all' ? 'active' : ''}" data-view="all">All Songs</button>
                    <button class="toggle-view-btn ${currentView === 'liked' ? 'active' : ''}" data-view="liked">Liked Songs</button>
                    <button class="toggle-view-btn" data-view="home">Back to Home</button>
                </div>
            </div>

            <div class="playlist-list">
                ${visibleTracks.length ? visibleTracks.map((track, index) => {
                    const realIndex = currentView === 'liked'
                        ? index
                        : currentView === 'all'
                            ? index
                            : likedSongs.length + playlistKeys
                                .slice(0, playlistKeys.indexOf(currentView))
                                .reduce((sum, key) => sum + playlists[key].length, 0) + index;
                    return `
                        <div class="playlist-row ${currentIndex === realIndex ? 'playing' : ''}">
                            <div class="playlist-info">
                                <strong>${track.name}</strong>
                                <span>${track.artist}</span>
                            </div>
                            <div class="playlist-actions-row">
                                <button class="like-btn ${track.liked ? 'active' : ''}" data-index="${realIndex}">♥</button>
                                <button class="play-row-btn" data-index="${realIndex}">
                                    ${currentIndex === realIndex && !audio.paused ? 'Pause' : 'Play'}
                                </button>
                            </div>
                        </div>
                    `;
                }).join('') : '<p class="empty-state">No songs in this playlist.</p>'}
            </div>
        `;

        playlistView.querySelectorAll('.toggle-view-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const view = btn.dataset.view;
                if (view === 'home') {
                    showHome();
                } else {
                    currentView = view;
                    renderPlaylist();
                }
            });
        });

        playlistView.querySelectorAll('.play-row-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = Number(btn.dataset.index);
                loadTrack(index, true);
            });
        });

        playlistView.querySelectorAll('.like-btn').forEach((btn) => {
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                const index = Number(btn.dataset.index);
                tracks[index].liked = !tracks[index].liked;
                renderPlaylist();
            });
        });
    }

    playBtn?.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(() => {});
        } else {
            audio.pause();
        }
    });

    prevBtn?.addEventListener('click', prevTrack);
    nextBtn?.addEventListener('click', nextTrack);

    shuffleBtn?.addEventListener('click', () => {
        isShuffle = !isShuffle;
        updateUI();
    });

    repeatBtn?.addEventListener('click', () => {
        isRepeat = !isRepeat;
        updateUI();
    });

    audio.addEventListener('play', () => {
        updatePlayButton(true);
        renderPlaylist();
    });

    audio.addEventListener('pause', () => {
        updatePlayButton(false);
        renderPlaylist();
    });

    audio.addEventListener('timeupdate', () => {
        const current = audio.currentTime;
        const duration = audio.duration || 0;
        const percent = duration ? (current / duration) * 100 : 0;
        if (progressFilled) progressFilled.style.width = `${percent}%`;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(current);
        if (durationTimeEl) durationTimeEl.textContent = formatTime(duration);
    });

    audio.addEventListener('ended', () => {
        if (isRepeat) {
            loadTrack(currentIndex, true);
        } else {
            nextTrack();
        }
    });

    trackProgress?.addEventListener('click', (event) => {
        const rect = trackProgress.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;
        audio.currentTime = percentage * audio.duration;
    });

    volumeSlider?.addEventListener('input', (event) => {
        if (audio && event.target instanceof HTMLInputElement) {
            audio.volume = Number(event.target.value);
        }
    });

    loadTrack(0, false);
});