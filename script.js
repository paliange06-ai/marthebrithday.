// Gestion de l'ouverture de la surprise et de toutes les interactions du site
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('openButton');
const nameInput = document.getElementById('nameInput');
const overlayMessage = document.getElementById('overlayMessage');
const startStory = document.getElementById('startStory');
const countdownMessage = document.getElementById('countdownMessage');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const reasonsGrid = document.getElementById('reasonsGrid');
const quoteText = document.getElementById('quoteText');
const giftMessage = document.getElementById('giftMessage');
const giftButtons = document.querySelectorAll('.gift-card');
const secretButton = document.getElementById('secretButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const audio = document.getElementById('audio');
const playPause = document.getElementById('playPause');
const volumeControl = document.getElementById('volumeControl');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressThumb = document.getElementById('progressThumb');
const trackTitle = document.getElementById('trackTitle');
const playlistEl = document.getElementById('playlist');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const albumArtInner = document.getElementById('albumArtInner');
const audioVisualizer = document.getElementById('audioVisualizer');
const musicPlayerCard = document.getElementById('musicPlayerCard');
const musicNotification = document.getElementById('musicNotification');
const notifTrackName = document.getElementById('notifTrackName');
const musicParticles = document.getElementById('musicParticles');
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const letterText = document.getElementById('letterText');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
const discoverReason = document.getElementById('discoverReason');
const reasonReveal = document.getElementById('reasonReveal');
const giftBox = document.getElementById('giftBox');
const giftMessageBox = document.getElementById('giftMessageBox');
const starMarthe = document.getElementById('starMarthe');
const constellationMessage = document.getElementById('constellationMessage');
const finalButton = document.getElementById('finalSurprise');
const finalMedia = document.getElementById('finalMedia');
const body = document.body;

// Éléments de la galerie photo moderne
const photoLightbox = document.getElementById('photoLightbox');
const photoGalleryCards = document.querySelectorAll('.gallery-photo-card');
const lightboxCloseBtn = document.querySelector('.lightbox-close');
const lightboxPrevBtn = document.querySelector('.lightbox-prev');
const lightboxNextBtn = document.querySelector('.lightbox-next');
const petalsContainer = document.getElementById('petalsContainer');
const currentPhotoNumber = document.getElementById('currentPhotoNumber');
const totalPhotos = document.getElementById('totalPhotos');

// Éléments vidéo premium
const premiumVideo = document.getElementById('premiumVideo');
const videoContainer = document.querySelector('.video-container');
const videoHeader = document.querySelector('.video-header');
const videoPlayPause = document.getElementById('videoPlayPause');
const videoProgress = document.getElementById('videoProgress');
const videoDuration = document.getElementById('videoDuration');
const videoEndCard = document.getElementById('videoEndCard');
const closeEndCard = document.getElementById('closeEndCard');
const videoLuminousParticles = document.querySelector('.video-luminous-particles');
const videoSection = document.getElementById('videoSection');

// Variables de la galerie
let currentPhotoIndex = 0;
const galleryPhotos = [
  'images/ChatGPT%20Image%2014%20juil.%202026%2C%2008_28_12.png',
  'images/ChatGPT%20Image%2014%20juil.%202026%2C%2008_33_22.png',
  'images/ChatGPT%20Image%2014%20juil.%202026%2C%2008_38_03.png',
  'images/file_00000000c36472438acb17b644fc9aa7%20%281%29.png'
];

const tracks = [
  { title: '_Notre_Histoire.mp3.mp3', src: 'music/_Notre_Histoire.mp3.mp3' },
  { title: 'Le_Message_Du_Coeur.mp3.mp3', src: 'music/Le_Message_Du_Coeur.mp3.mp3' },
  { title: 'Premiers_Souvenirs.mp3.mp3', src: 'music/Premiers_Souvenirs.mp3.mp3' },
  { title: 'Ton_Sourire.mp3.mp3', src: 'music/Ton_Sourire.mp3.mp3' }
];
let currentTrackIndex = 0;
let isShuffle = false;
let repeatMode = 'none';
let trackDurations = {};
let notificationTimeout = null;

// Liste des citations romantiques qui défilent toutes les 5 secondes
const quotes = [
  'L’amour est la plus belle des aventures, surtout quand elle commence avec toi.',
  'Chaque moment passé avec toi transforme ma vie en un rêve éveillé.',
  'À tes côtés, je découvre la magie à chaque souffle.',
  'Tu es mon étoile, ma chance, ma plus belle histoire.',
  'Ton sourire dessine le plus doux des lendemains.'
];
let quoteIndex = 0;

// Raisons pour lesquelles je t'aime, 30 belles déclarations
const reasons = [
  'Ta douceur m’apaise.',
  'Ton rire illumine mes jours.',
  'Ta confiance me rend plus fort.',
  'Ta présence est un cadeau constant.',
  'Tu es la poésie de ma vie.',
  'Tes yeux racontent notre futur.',
  'Ton cœur est mon refuge.',
  'Tu inspires mes plus beaux rêves.',
  'Ta tendresse apaise mes peurs.',
  'Tu m’encourages sans limite.',
  'Chaque pensée de toi est un sourire.',
  'Tu embellis bien plus qu’un instant.',
  'Tu rends l’ordinaire extraordinaire.',
  'Ton amour est ma meilleure étoile.',
  'Tu es la mélodie de mes matins.',
  'Tes mots me bercent et me portent.',
  'Tu me fais croire en des miracles.',
  'Ta force me guide avec douceur.',
  'Tu es la chaleur de mon hiver.',
  'Ta beauté est douce comme la lune.',
  'Tu partages mes joies comme mes peines.',
  'Ta franchise m’inspire chaque jour.',
  'Tu es le trésor de mon cœur.',
  'Ta confiance m’offre des ailes.',
  'Tu me donnes envie d’être meilleur.',
  'Ton regard est ma plus belle promesse.',
  'Ton courage m’émerveille.',
  'Tu es ma plus belle aventure.',
  'Ton amour illumine toutes mes nuits.',
  'Tu fais vibrer chaque fibre de mon être.',
  'Ton sourire est ma douce victoire.',
  'Ta présence transforme tout en merveilleux.',
  'Tu es mon éternelle inspiration.',
  'Ton regard est un tendre abri.',
  'Tu es mon plus beau projet.',
  'Tu partages mes rêves les plus fous.',
  'Tu ajoutes de la magie à chaque instant.',
  'Tu es ma plus belle surprise.',
  'Ton rire est ma meilleure chanson.',
  'Ta voix est la plus douce des mélodies.',
  'Tu es une lumière dans mes jours.',
  'Tu es la raison de tant de sourires.',
  'Ta joie est contagieuse et belle.',
  'Tu m’offres un amour sans condition.',
  'Tu es mon équilibre dans l’infini.',
  'Ta tendresse est mon trésor secret.',
  'Tu es un poème vivant à mes yeux.',
  'Ta présence rend tout plus léger.',
  'Tu es mon rêve éveillé le plus tendre.',
  'Ton cœur fait battre le mien plus fort.',
  'Tu es ma plus belle vérité.',
  'Ta force est douce et rassurante.',
  'Tu es le plus précieux des cadeaux.',
  'Tu es ma raison de croire encore.',
  'Ton regard est mon plus bel horizon.',
  'Tu es ma confiance, ma passion.',
  'Ta douceur illumine mes nuits.',
  'Ton sourire est ma plus belle étoile.',
  'Tu es la meilleure partie de moi.',
  'Tu embellis chacun de mes matins.',
  'Tu es mon enchantement quotidien.',
  'Ta présence fait danser mon cœur.',
  'Tu es la chaleur de mes rêves.',
  'Ton amour est un luxe infini.',
  'Tu es ma plus belle promesse tenue.',
  'Ta voix fait fleurir mon âme.',
  'Tu es mon plus doux refuge.',
  'Tu es la lumière de mon destin.',
  'Ton sourire efface toutes mes ombres.',
  'Tu es l’éclat de mon présent.',
  'Ta douceur est un rayon de soleil.',
  'Tu es mon histoire préférée.',
  'Tu es mon avenir le plus lumineux.',
  'Ta tendresse m’offre des ailes.',
  'Tu es ma force quand j’en ai besoin.',
  'Ton amour rend chaque seconde unique.',
  'Tu es mon plus beau rêve accompli.',
  'Tu es la magie de ma vie quotidienne.',
  'Ton sourire est mon plus beau paysage.',
  'Tu es l’étoile qui me guide.',
  'Ta présence est un cadeau éternel.',
  'Tu es le souffle léger de mon bonheur.',
  'Ton regard est ma plus douce promesse.',
  'Tu es mon aventure préférée.',
  'Ta voix me berce comme un rêve.',
  'Tu es le trésor caché de mon cœur.',
  'Ton amour illumine mes jours sombres.',
  'Tu es un feu doux dans ma nuit.',
  'Tu es la mélodie qui me fait vibrer.',
  'Ton sourire est mon plus beau matin.',
  'Tu es la vraie magie de mon monde.',
  'Tu es ma plus belle découverte.',
  'Ton cœur est mon lieu de paix.',
  'Tu es ma plus douce évidence.',
  'Tu es le souffle de mon espoir.',
  'Ton amour est ma plus grande richesse.',
  'Tu es mon plus beau « toujours ». '
];
let discoveredReasons = [];

// Lettre d'amour longue et pleine d'émotion
const letterLines = [
  'Ma chère Marthe,\n',
  'En ce jour si précieux, je veux te dire à quel point tes 18 ans sont une merveilleuse lumière dans ma vie.',
  'Ton sourire, ta confiance et ta douceur me donnent envie de construire un avenir infini à tes côtés.',
  'Je pense à nos rires, à nos discussions tardives, à chaque instant partagé qui a fait grandir notre amour.',
  'À travers ces mots, je veux te rappeler que je crois en nous, en nos rêves et en notre complicité.',
  'Chaque jour, je suis reconnaissant pour ton amour, pour ta présence et pour la personne incroyable que tu es.',
  'Je promets de te soutenir, d’écouter ton cœur, de protéger ta joie et de t’offrir un amour sincère.',
  'Ton avenir est une page blanche que je veux remplir de promesses, de voyages et de tendresse.',
  'Je te remercie pour ta confiance, pour ta patience et pour la magie que tu sèmes autour de nous.',
  'Aujourd’hui, je célèbre tes 18 ans, ton courage, ta beauté et ta capacité à faire grandir le bonheur.',
  'Je t’aime infiniment, maintenant et pour toujours. ❤️\n',
  'Je t’aime infiniment ❤️'
];

// Crée les cartes des raisons dans la section dédiée
function renderReasons() {
  reasonsGrid.innerHTML = reasons.map(reason => `
    <div class="reason-card glass"><p>${reason}</p></div>
  `).join('');
}

// Affiche la citation suivante avec animation délicate
function rotateQuotes() {
  quoteText.classList.remove('fade');
  void quoteText.offsetWidth;
  quoteText.textContent = quotes[quoteIndex];
  quoteText.classList.add('fade');
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Met à jour le compte à rebours vers le 3 octobre 2026 à minuit
function startCountdown() {
  const targetDate = new Date('2026-10-03T00:00:00');
  const timer = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      clearInterval(timer);
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      countdownMessage.textContent = '🎉 Joyeux Anniversaire Marthe 🎉';
      body.classList.add('fireworks');
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

// Montre le message romantique lorsqu'un cadeau est cliqué
function initGifts() {
  giftButtons.forEach(button => {
    button.addEventListener('click', () => {
      giftMessage.textContent = button.dataset.message;
    });
  });
}

// Active la popup secrète
function initSecretButton() {
  secretButton.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });
  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

function formatTime(seconds) {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function createMusicParticles() {
  if (!musicParticles) return;
  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7'];
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement('div');
    particle.className = 'music-particle';
    const size = Math.random() * 6 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = Math.random() * 30 + '%';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}`;
    particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
    particle.style.animationDelay = (Math.random() * 5) + 's';
    musicParticles.appendChild(particle);
  }
}

function createVisualizerBars() {
  if (!audioVisualizer) return;
  audioVisualizer.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const bar = document.createElement('div');
    bar.className = 'visualizer-bar';
    bar.style.setProperty('--bar-height', (Math.random() * 22 + 12) + 'px');
    bar.style.animationDelay = (i * 0.08) + 's';
    bar.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
    audioVisualizer.appendChild(bar);
  }
}

function showMusicNotification(title) {
  if (!musicNotification || !notifTrackName) return;
  notifTrackName.textContent = title;
  musicNotification.classList.remove('hidden');
  musicNotification.classList.add('show');
  if (notificationTimeout) clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(() => {
    musicNotification.classList.remove('show');
    setTimeout(() => musicNotification.classList.add('hidden'), 500);
  }, 3500);
}

function updatePlayStateUI(playing) {
  if (albumArtInner) albumArtInner.classList.toggle('is-spinning', playing);
  if (audioVisualizer) audioVisualizer.classList.toggle('active', playing);
  if (musicPlayerCard) musicPlayerCard.classList.toggle('is-playing', playing);
  if (playPause) {
    playPause.textContent = playing ? '⏸' : '▶';
    playPause.setAttribute('aria-label', playing ? 'Pause' : 'Lecture');
    playPause.setAttribute('title', playing ? 'Pause' : 'Lecture');
  }
}

function preloadTrackDurations() {
  tracks.forEach((track, index) => {
    const tempAudio = new Audio();
    tempAudio.src = track.src;
    tempAudio.addEventListener('loadedmetadata', () => {
      trackDurations[index] = tempAudio.duration;
      const durationEl = document.querySelector(`.playlist-item[data-index="${index}"] .playlist-item-duration`);
      if (durationEl) durationEl.textContent = formatTime(tempAudio.duration);
    });
  });
}

function renderPlaylist() {
  playlistEl.innerHTML = tracks.map((track, index) => `
    <li class="playlist-item ${index === currentTrackIndex ? 'active' : ''}" data-index="${index}">
      <span class="playlist-item-icon" aria-hidden="true">🎵</span>
      <div class="playlist-item-info">
        <span class="playlist-item-title">${track.title}</span>
      </div>
      <span class="playlist-item-duration">${formatTime(trackDurations[index])}</span>
    </li>
  `).join('');
  playlistEl.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
      loadTrack(Number(item.dataset.index), true);
    });
  });
}

function getNextTrackIndex() {
  if (isShuffle) {
    let next;
    do {
      next = Math.floor(Math.random() * tracks.length);
    } while (next === currentTrackIndex && tracks.length > 1);
    return next;
  }
  return (currentTrackIndex + 1) % tracks.length;
}

function getPrevTrackIndex() {
  if (isShuffle) {
    let prev;
    do {
      prev = Math.floor(Math.random() * tracks.length);
    } while (prev === currentTrackIndex && tracks.length > 1);
    return prev;
  }
  return (currentTrackIndex - 1 + tracks.length) % tracks.length;
}

function loadTrack(index, shouldPlay = true, showNotif = true) {
  currentTrackIndex = index;
  if (musicPlayerCard) {
    musicPlayerCard.classList.add('track-changing');
    setTimeout(() => musicPlayerCard.classList.remove('track-changing'), 600);
  }
  audio.src = tracks[index].src;
  trackTitle.textContent = tracks[index].title;
  renderPlaylist();
  if (showNotif && shouldPlay) showMusicNotification(tracks[index].title);
  if (shouldPlay) {
    audio.play().catch(() => {});
    updatePlayStateUI(true);
  }
}

function handleTrackEnd() {
  if (repeatMode === 'one') {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    return;
  }
  if (repeatMode === 'all' || currentTrackIndex < tracks.length - 1 || isShuffle) {
    loadTrack(getNextTrackIndex());
    return;
  }
  updatePlayStateUI(false);
}

function initAudioPlayer() {
  audio.volume = 0.7;
  createMusicParticles();
  createVisualizerBars();
  loadTrack(0, false, false);
  preloadTrackDurations();

  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  playPause.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      updatePlayStateUI(true);
    } else {
      audio.pause();
      updatePlayStateUI(false);
    }
  });

  prevBtn.addEventListener('click', () => loadTrack(getPrevTrackIndex()));
  nextBtn.addEventListener('click', () => loadTrack(getNextTrackIndex()));

  shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
  });

  repeatBtn.addEventListener('click', () => {
    const modes = ['none', 'all', 'one'];
    const currentIdx = modes.indexOf(repeatMode);
    repeatMode = modes[(currentIdx + 1) % modes.length];
    repeatBtn.classList.toggle('active', repeatMode !== 'none');
    repeatBtn.textContent = repeatMode === 'one' ? '🔂' : '🔁';
  });

  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    progressFill.style.width = `${progress}%`;
    if (progressThumb) progressThumb.style.left = `${progress}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
    trackDurations[currentTrackIndex] = audio.duration;
    renderPlaylist();
  });

  audio.addEventListener('play', () => updatePlayStateUI(true));
  audio.addEventListener('pause', () => updatePlayStateUI(false));
  audio.addEventListener('ended', handleTrackEnd);

  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    if (audio.duration) audio.currentTime = percent * audio.duration;
  });
}

function discoverReasonClick() {
  const available = reasons.filter((_, index) => !discoveredReasons.includes(index));
  if (available.length === 0) {
    reasonReveal.textContent = "J'ai déjà partagé toutes mes raisons, mais mon amour continue encore.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * available.length);
  const reasonIndex = reasons.indexOf(available[randomIndex]);
  discoveredReasons.push(reasonIndex);
  reasonReveal.textContent = available[randomIndex];
}

function initGiftBox() {
  giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');
    giftMessageBox.textContent = giftBox.classList.contains('open') ? 'Tu viens d’ouvrir mon cœur. ❤️' : 'Clique sur la boîte pour ouvrir mon cœur.';
  });
}

function initConstellation() {
  starMarthe.addEventListener('click', () => {
    constellationMessage.textContent = 'Peu importe le nombre d’étoiles dans le ciel, tu resteras toujours la plus brillante à mes yeux.';
    starMarthe.classList.add('star-glow');
    setTimeout(() => starMarthe.classList.remove('star-glow'), 2200);
  });
}

function initFinalSurprise() {
  finalButton.addEventListener('click', () => {
    body.classList.add('final-surprise');
    finalMedia.classList.remove('hidden');
    if (!audio.paused) {
      const fade = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.02);
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
    const finalText = `Marthe,\nCe site n'est pas seulement un cadeau pour tes 18 ans.\nC'est une petite partie de tout ce que je ressens pour toi.\nMerci d'être entrée dans ma vie.\nMerci pour tous nos souvenirs.\nJ'espère que nous écrirons encore beaucoup de chapitres ensemble.\nJoyeux 18ᵉ anniversaire, mon amour.\nJe t'aime infiniment. ❤️`;
    surpriseMessage.innerHTML = finalText.replace(/\n/g, '<br>');
    surpriseMessage.scrollIntoView({ behavior: 'smooth' });
  });
}

function initSurprise() {
  surpriseButton.addEventListener('click', () => {
    surpriseMessage.innerHTML = 'Mon dernier message pour toi : tu es mon trésor, tu es ma lumière, et je t’aime pour toujours. ❤️';
    finalMedia.classList.remove('hidden');
    body.classList.add('revealed');
    surpriseMessage.scrollIntoView({ behavior: 'smooth' });
  });
}

// Crée des cœurs animés dans la pluie permanente
function createHeartRain() {
  const heartRain = document.querySelector('.heart-rain');
  for (let i = 0; i < 30; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'rain-heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${8 + Math.random() * 8}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.opacity = `${0.4 + Math.random() * 0.6}`;
    heartRain.appendChild(heart);
  }
}

// Affiche la lettre d'amour avec effet machine à écrire
function typeLetter() {
  const text = letterLines.join('\n\n');
  letterText.textContent = '';
  let index = 0;
  const speed = 35;
  const write = () => {
    if (index < text.length) {
      letterText.textContent += text[index];
      index += 1;
      setTimeout(write, speed);
    }
  };
  write();
}

// Animation d'ouverture et lancement des effets
function openSurprise() {
  overlay.classList.add('hide');
  overlay.classList.remove('active');
  body.classList.add('opened');
  audio.play().then(() => {
    showMusicNotification(tracks[currentTrackIndex].title);
    updatePlayStateUI(true);
  }).catch(() => {});
  startCountdown();
  rotateQuotes();
  setInterval(rotateQuotes, 5000);
  renderReasons();
  initGifts();
  initSecretButton();
  initAudioPlayer();
  initSurprise();
  initGiftBox();
  initConstellation();
  initFinalSurprise();
  createHeartRain();
  typeLetter();
  setTimeout(() => {
    body.classList.add('show-particles');
  }, 400);
}

// Ouvre le lightbox avec l'image sélectionnée
function initGalleryLightbox() {
  // Initialiser les pétales
  createFallingPetals();

  // Total photos
  totalPhotos.textContent = galleryPhotos.length;

  // Ouvrir le lightbox au clic sur une photo
  photoGalleryCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      openPhotoLightbox(index);
    });
  });

  // Fermer le lightbox
  lightboxCloseBtn.addEventListener('click', closePhotoLightbox);

  // Navigation
  lightboxPrevBtn.addEventListener('click', showPreviousPhoto);
  lightboxNextBtn.addEventListener('click', showNextPhoto);

  // Clavier
  document.addEventListener('keydown', handleLightboxKeyboard);

  // Fermer au clic sur le fond
  photoLightbox.addEventListener('click', (e) => {
    if (e.target === photoLightbox) {
      closePhotoLightbox();
    }
  });

}

function openPhotoLightbox(index) {
  currentPhotoIndex = index;
  lightboxImage.src = galleryPhotos[index];
  currentPhotoNumber.textContent = index + 1;
  photoLightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePhotoLightbox() {
  photoLightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function showNextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
  lightboxImage.src = galleryPhotos[currentPhotoIndex];
  currentPhotoNumber.textContent = currentPhotoIndex + 1;
}

function showPreviousPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  lightboxImage.src = galleryPhotos[currentPhotoIndex];
  currentPhotoNumber.textContent = currentPhotoIndex + 1;
}

function handleLightboxKeyboard(e) {
  if (!photoLightbox.classList.contains('active')) return;

  switch(e.key) {
    case 'ArrowRight':
      showNextPhoto();
      break;
    case 'ArrowLeft':
      showPreviousPhoto();
      break;
    case 'Escape':
      closePhotoLightbox();
      break;
  }
}

function createFallingPetals() {
  if (!petalsContainer) return;

  // Créer les pétales
  const petalCount = 20;
  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7', '#ffc9e3'];

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomSize = Math.random() * 8 + 6; // 6px à 14px
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = Math.random() * 8 + 10; // 10s à 18s

    petal.style.left = randomLeft + '%';
    petal.style.width = randomSize + 'px';
    petal.style.height = randomSize + 'px';
    petal.style.background = randomColor;
    petal.style.borderRadius = '50%';
    petal.style.boxShadow = `0 0 ${randomSize}px ${randomColor}80`;
    petal.style.animationDelay = randomDelay + 's';
    petal.style.animationDuration = randomDuration + 's';

    petalsContainer.appendChild(petal);

    // Recréer les pétales après l'animation
    setTimeout(() => {
      petal.addEventListener('animationend', () => {
        petal.remove();
        createNewPetal();
      });
    }, (randomDelay + randomDuration) * 1000);
  }
}

function createNewPetal() {
  if (!petalsContainer) return;

  const petal = document.createElement('div');
  petal.className = 'petal';
  
  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7', '#ffc9e3'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = Math.random() * 8 + 6;
  const randomLeft = Math.random() * 100;
  const randomDuration = Math.random() * 8 + 10;

  petal.style.left = randomLeft + '%';
  petal.style.width = randomSize + 'px';
  petal.style.height = randomSize + 'px';
  petal.style.background = randomColor;
  petal.style.borderRadius = '50%';
  petal.style.boxShadow = `0 0 ${randomSize}px ${randomColor}80`;
  petal.style.animationDuration = randomDuration + 's';

  petalsContainer.appendChild(petal);

  petal.addEventListener('animationend', () => {
    petal.remove();
    createNewPetal();
  });
}

function validateNameAndOpen(event) {
  if (event) {
    event.preventDefault();
  }

  const rawName = nameInput.value.trim();
  const normalizedName = rawName.toLowerCase();

  if (rawName.length === 0) {
    overlayMessage.textContent = 'Veuillez entrer votre prénom.';
    return;
  }

  if (normalizedName === 'marthe') {
    overlayMessage.textContent = '';
    openSurprise();
    return;
  }

  overlayMessage.textContent = 'Désolé ❤️ cette surprise est uniquement destinée à Marthe.';
}

// Validation du prénom et lancement de l'animation d'ouverture
openButton.addEventListener('click', validateNameAndOpen);
nameInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    validateNameAndOpen(event);
  }
});

startStory.addEventListener('click', () => {
  document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
});

discoverReason.addEventListener('click', discoverReasonClick);

// ==================== GESTION DE LA VIDÉO PREMIUM ====================

// Crée les particules lumineuses autour de la vidéo
function createLuminousParticles() {
  if (!videoLuminousParticles) return;

  const particleCount = 15;
  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'luminous-particle';
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomSize = Math.random() * 8 + 4; // 4px à 12px
    const randomLeft = Math.random() * 100;
    const randomTop = Math.random() * 100;
    const randomDelay = Math.random() * 3;
    const randomDuration = Math.random() * 6 + 8; // 8s à 14s

    particle.style.left = randomLeft + '%';
    particle.style.top = randomTop + '%';
    particle.style.width = randomSize + 'px';
    particle.style.height = randomSize + 'px';
    particle.style.background = randomColor;
    particle.style.boxShadow = `0 0 ${randomSize * 2}px ${randomColor}, 0 0 ${randomSize * 4}px ${randomColor}80`;
    particle.style.animationDelay = randomDelay + 's';
    particle.style.animationDuration = randomDuration + 's';
    particle.style.animation = `particleFloat ${randomDuration}s ease-in-out ${randomDelay}s infinite`;

    videoLuminousParticles.appendChild(particle);
  }
}

// Animation des particules
const style = document.createElement('style');
style.textContent = `
  @keyframes particleFloat {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.8; }
    50% { transform: translate(-25px, 20px) scale(0.9); opacity: 0.5; }
    75% { transform: translate(15px, 25px) scale(1.05); opacity: 0.7; }
  }
`;
document.head.appendChild(style);

// Initialise les contrôles vidéo
function initVideoPlayer() {
  if (!premiumVideo) return;

  // Afficher la durée totale
  premiumVideo.addEventListener('loadedmetadata', () => {
    updateDuration();
  });

  // Mettre à jour la barre de progression
  premiumVideo.addEventListener('timeupdate', () => {
    const progress = (premiumVideo.currentTime / premiumVideo.duration) * 100 || 0;
    videoProgress.style.width = progress + '%';
  });

  // Bouton play/pause
  videoPlayPause.addEventListener('click', () => {
    if (premiumVideo.paused) {
      premiumVideo.play();
      videoPlayPause.querySelector('.play-icon').textContent = '⏸';
    } else {
      premiumVideo.pause();
      videoPlayPause.querySelector('.play-icon').textContent = '▶';
    }
  });

  // Clic sur la barre de progression
  const progressBar = document.querySelector('.video-progress-bar-custom');
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    premiumVideo.currentTime = percent * premiumVideo.duration;
  });

  // À la fin de la vidéo
  premiumVideo.addEventListener('ended', () => {
    videoPlayPause.querySelector('.play-icon').textContent = '▶';
    showVideoEndCard();
  });

  // Créer les particules lumineuses
  createLuminousParticles();
}

// Affiche la durée de la vidéo
function updateDuration() {
  if (!premiumVideo || !videoDuration) return;
  const duration = Math.floor(premiumVideo.duration);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  videoDuration.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
}

// Affiche la carte de fin de vidéo avec animation
function showVideoEndCard() {
  if (!videoEndCard) return;
  
  videoEndCard.classList.remove('hidden');
  videoEndCard.classList.add('active');
  
  // Scroll vers la carte
  setTimeout(() => {
    videoEndCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 300);
}

// Ferme la carte de fin de vidéo
if (closeEndCard) {
  closeEndCard.addEventListener('click', () => {
    videoEndCard.classList.remove('active');
    videoEndCard.classList.add('hidden');
  });
}

// Détecte quand la section vidéo devient visible
function observeVideoSection() {
  if (!videoSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !videoContainer.classList.contains('in-view')) {
        videoContainer.classList.add('in-view');
        // Déclencher les animations après un court délai
        setTimeout(() => {
          videoContainer.style.animation = 'videoFadeInZoom 0.8s ease-out';
        }, 100);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(videoSection);
}

// Ajoute le support au survol pour le zoom sur mobile
premiumVideo.addEventListener('touchstart', function() {
  this.style.transform = 'scale(1.02)';
});

premiumVideo.addEventListener('touchend', function() {
  this.style.transform = 'scale(1)';
});

window.addEventListener('load', () => {
  renderReasons();
  initGalleryLightbox();
  initVideoPlayer();
  observeVideoSection();
  initVideoBridge();
  initVideo2Player();
  observeVideo2Section();
});

// ==================== TRANSITION ENTRE LES DEUX VIDÉOS ====================

const videoBridge = document.getElementById('videoBridge');
const bridgeStars = document.getElementById('bridgeStars');
const bridgeText = document.getElementById('bridgeText');
let bridgeAnimationStarted = false;

const BRIDGE_TEXT_1 = 'Tu pensais que tout était terminé...';
const BRIDGE_TEXT_2 = "J'ai gardé le meilleur pour la fin...";

function createBridgeStars() {
  if (!bridgeStars) return;
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'bridge-star';
    const size = Math.random() * 4 + 2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 3) + 's';
    bridgeStars.appendChild(star);
  }
}

function typeBridgeText(text, onComplete) {
  if (!bridgeText) return;
  bridgeText.innerHTML = '';
  bridgeText.classList.remove('fade-out');
  bridgeText.classList.add('visible');
  let index = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  bridgeText.appendChild(cursor);

  const write = () => {
    if (index < text.length) {
      const char = document.createTextNode(text[index]);
      bridgeText.insertBefore(char, cursor);
      index += 1;
      setTimeout(write, 55);
    } else {
      cursor.remove();
      if (onComplete) onComplete();
    }
  };
  write();
}

function runBridgeSequence() {
  if (bridgeAnimationStarted || !videoBridge) return;
  bridgeAnimationStarted = true;
  videoBridge.classList.add('active');

  typeBridgeText(BRIDGE_TEXT_1, () => {
    setTimeout(() => {
      typeBridgeText(BRIDGE_TEXT_2, () => {
        setTimeout(() => {
          bridgeText.classList.add('fade-out');
        }, 1500);
      });
    }, 2000);
  });
}

function initVideoBridge() {
  createBridgeStars();
  if (!videoBridge) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runBridgeSequence();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(videoBridge);
}

// ==================== DEUXIÈME VIDÉO PREMIUM ====================

const premiumVideo2 = document.getElementById('premiumVideo2');
const video2Container = document.getElementById('video2Container');
const video2PlayPause = document.getElementById('video2PlayPause');
const video2Progress = document.getElementById('video2Progress');
const video2Duration = document.getElementById('video2Duration');
const video2Section = document.getElementById('video2Section');
const video2Particles = document.getElementById('video2Particles');
const video2GrandFinale = document.getElementById('video2GrandFinale');
const video2FinalCard = document.getElementById('video2FinalCard');
const video2FinalMessage = document.getElementById('video2FinalMessage');
const video2MartheTitle = document.getElementById('video2MartheTitle');
const video2FinalePetals = document.getElementById('video2FinalePetals');
const video2FinaleFireworks = document.getElementById('video2FinaleFireworks');

const FINAL_MESSAGE_TEXT = `Marthe,\nCe site n'est pas seulement un cadeau pour tes 18 ans.\nC'est une petite partie de tout ce que je ressens pour toi.\nMerci d'être entrée dans ma vie.\nMerci pour tous nos souvenirs.\nJ'espère que nous écrirons encore beaucoup de chapitres ensemble.\nJoyeux 18ᵉ anniversaire, mon amour.\nJe t'aime infiniment. ❤️`;

let video2FinaleTriggered = false;
let video2ParticlesCreated = false;

function createVideo2Particles() {
  if (!video2Particles || video2ParticlesCreated) return;
  video2ParticlesCreated = true;

  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7'];
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement('div');
    particle.className = 'video2-particle';
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}, 0 0 ${size * 4}px ${particle.style.background}80`;
    const duration = Math.random() * 6 + 8;
    const delay = Math.random() * 3;
    particle.style.animation = `particleFloat ${duration}s ease-in-out ${delay}s infinite`;
    video2Particles.appendChild(particle);
  }
  video2Particles.classList.add('active');
}

function initVideo2Player() {
  if (!premiumVideo2) return;

  premiumVideo2.addEventListener('loadedmetadata', () => {
    const duration = Math.floor(premiumVideo2.duration);
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    if (video2Duration) {
      video2Duration.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
    }
  });

  premiumVideo2.addEventListener('timeupdate', () => {
    const progress = (premiumVideo2.currentTime / premiumVideo2.duration) * 100 || 0;
    if (video2Progress) video2Progress.style.width = progress + '%';
  });

  if (video2PlayPause) {
    video2PlayPause.addEventListener('click', () => {
      if (premiumVideo2.paused) {
        premiumVideo2.play();
        video2PlayPause.querySelector('.play-icon').textContent = '⏸';
      } else {
        premiumVideo2.pause();
        video2PlayPause.querySelector('.play-icon').textContent = '▶';
      }
    });
  }

  const progressBar2 = document.querySelector('.video2-progress-bar-custom');
  if (progressBar2) {
    progressBar2.addEventListener('click', (e) => {
      const rect = progressBar2.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      premiumVideo2.currentTime = percent * premiumVideo2.duration;
    });
  }

  premiumVideo2.addEventListener('ended', () => {
    if (video2PlayPause) {
      video2PlayPause.querySelector('.play-icon').textContent = '▶';
    }
    triggerVideo2GrandFinale();
  });

  premiumVideo2.addEventListener('touchstart', function() {
    this.style.transform = 'scale(1.02)';
  });

  premiumVideo2.addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
  });
}

function observeVideo2Section() {
  if (!video2Section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (video2Container && !video2Container.classList.contains('in-view')) {
          video2Container.classList.add('in-view');
        }
        createVideo2Particles();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(video2Section);
}

function fadeBackgroundMusic() {
  if (!audio || audio.paused) return;
  const fade = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume = Math.max(0, audio.volume - 0.02);
    } else {
      audio.volume = 0;
      clearInterval(fade);
    }
  }, 200);
}

function createVideo2FinalePetals() {
  if (!video2FinalePetals) return;
  const colors = ['#ffd37d', '#ff9ec0', '#ff7fb5', '#ffb0d7', '#ffc9e3'];

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const petal = document.createElement('div');
      petal.className = 'video2-petal';
      const size = Math.random() * 10 + 8;
      const color = colors[Math.floor(Math.random() * colors.length)];
      petal.style.left = Math.random() * 100 + '%';
      petal.style.top = '-20px';
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      petal.style.background = color;
      petal.style.borderRadius = '50%';
      petal.style.boxShadow = `0 0 ${size}px ${color}80`;
      petal.style.animationDuration = (Math.random() * 6 + 8) + 's';
      video2FinalePetals.appendChild(petal);
      petal.addEventListener('animationend', () => petal.remove());
    }, i * 120);
  }
}

function createVideo2Fireworks() {
  if (!video2FinaleFireworks || !video2MartheTitle) return;

  const rect = video2MartheTitle.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const colors = ['#ffd37d', '#ff5aa3', '#ff9ec0', '#fff', '#ffe8b0'];

  for (let burst = 0; burst < 6; burst++) {
    setTimeout(() => {
      for (let i = 0; i < 24; i++) {
        const spark = document.createElement('div');
        spark.className = 'video2-firework';
        const angle = (Math.PI * 2 * i) / 24;
        const distance = 60 + Math.random() * 80;
        spark.style.left = centerX + 'px';
        spark.style.top = centerY + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.boxShadow = `0 0 8px ${spark.style.background}`;
        spark.style.setProperty('--fx-x', Math.cos(angle) * distance + 'px');
        spark.style.setProperty('--fx-y', Math.sin(angle) * distance + 'px');
        video2FinaleFireworks.appendChild(spark);
        spark.addEventListener('animationend', () => spark.remove());
      }
    }, burst * 600);
  }
}

function triggerVideo2GrandFinale() {
  if (video2FinaleTriggered) return;
  video2FinaleTriggered = true;

  fadeBackgroundMusic();

  if (video2GrandFinale) {
    video2GrandFinale.classList.remove('hidden');
    video2GrandFinale.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      video2GrandFinale.classList.add('active');
    });
  }

  if (video2FinalMessage) {
    video2FinalMessage.innerHTML = FINAL_MESSAGE_TEXT.split('\n').map(line => `<p>${line}</p>`).join('');
  }

  setTimeout(() => {
    if (video2FinalCard) video2FinalCard.classList.add('show');
  }, 400);

  setTimeout(() => {
    createVideo2FinalePetals();
  }, 800);

  setTimeout(() => {
    if (video2MartheTitle) video2MartheTitle.classList.add('show');
    setTimeout(createVideo2Fireworks, 600);
    setTimeout(createVideo2Fireworks, 3400);
    setTimeout(createVideo2Fireworks, 6200);
  }, 1800);
}
