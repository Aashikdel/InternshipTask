const audio = document.getElementById('audio');
const trackTitle = document.getElementById('track-title');

const tracks = [
    { title: "Song 1", src: "music/song1.mp3" },
    { title: "Song 2", src: "music/song2.mp3" },
    { title: "Song 3", src: "music/song3.mp3" }
];

let currentTrackIndex = 0;

function togglePlay() {
    if (audio.paused) {
        audio.play();
        document.getElementById('play').textContent = 'Pause';
    } else {
        audio.pause();
        document.getElementById('play').textContent = 'Play';
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack();
}

function loadTrack() {
    audio.src = tracks[currentTrackIndex].src;
    trackTitle.textContent = `Track Title: ${tracks[currentTrackIndex].title}`;
    audio.play();
    document.getElementById('play').textContent = 'Pause';
}


loadTrack();