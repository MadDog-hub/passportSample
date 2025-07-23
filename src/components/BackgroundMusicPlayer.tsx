import React, { useRef, useState } from 'react';

const AUDIO_URL = 'https://res.cloudinary.com/dbiboclqa/video/upload/v1753242615/ytmp3free.cc_on-the-wings-of-love-kyla-lyrics-youtubemp3free.org_zazczr.mp3';

const BackgroundMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => {
        setError('Unable to play audio. Please try again.');
      });
    }
  };

  const handleLoaded = () => {
    setIsLoaded(true);
    setError(null);
  };

  const handleError = () => {
    setError('Failed to load background music.');
    setIsLoaded(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-yellow-400 rounded-lg p-2 shadow-lg border-2 border-yellow-600">
        {error && (
          <div className="text-red-400 text-sm font-semibold mb-2">{error}</div>
        )}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            disabled={!isLoaded}
            className="bg-yellow-400 text-navy px-4 py-2 rounded-md font-bold text-xs border-2 border-yellow-600 shadow hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            🎵 Click here first before scrolling
          </button>
        )}
        {/* No pause or status shown after playing; button is gone */}
        <audio
          ref={audioRef}
          src={AUDIO_URL}
          loop
          onPlay={() => setIsPlaying(true)}
          onLoadedData={handleLoaded}
          onError={handleError}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default BackgroundMusicPlayer;