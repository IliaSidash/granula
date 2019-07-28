(function() {
  const playBtn = document.querySelector('.play');
  const videoContainer = document.querySelector('.video__container');
  let video;
  let videoIsPlayed = false;

  const createVideo = function() {
    const video = document.createElement('video');
    video.src = '/static/video.mp4';
    video.className = 'video__media';
    video.autoplay = true;

    return video;
  };

  const stopVideo = function() {
    this.pause();
    playBtn.classList.remove('hidden');
  };

  const playVideo = function() {
    if (!video) {
      video = createVideo();
      videoContainer.querySelector('img').remove();
      videoContainer.appendChild(video);
      video.load();
      video.play();
      videoIsPlayed = true;

      video.addEventListener('click', stopVideo);
    } else {
      video.play();
    }

    this.classList.add('hidden');
  };

  playBtn.addEventListener('click', playVideo);
})();
