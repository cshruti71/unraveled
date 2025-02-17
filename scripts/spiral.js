document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('background-audio');
    const audioControls = document.querySelectorAll('.audio-control');

    audioControls.forEach(control => {
        control.addEventListener('click', (event) => {
            const action = event.target.getAttribute('data-action');

            if (action === 'play-audio') {
                backgroundAudio.play();
            } else if (action === 'pause-audio') {
                backgroundAudio.pause();
            } else if (action === 'restart-audio') {
                backgroundAudio.pause();
                backgroundAudio.currentTime = 0;
                backgroundAudio.play();
            }
        });
    });
});