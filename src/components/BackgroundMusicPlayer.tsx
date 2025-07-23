import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  const videoId = 'gxHHwoaZvyQ';

  useEffect(() => {
    // Check if YT API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Load the YouTube IFrame Player API
    const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);
    }

    // Set the callback for when API is ready
    window.onYouTubeIframeAPIReady = initializePlayer;

    return () => {
      if (playerInstanceRef.current && typeof playerInstanceRef.current.destroy === 'function') {
        try {
          playerInstanceRef.current.destroy();
        } catch (error) {
          console.log('Error destroying YouTube player:', error);
        }
      }
    };
  }, []);

  const initializePlayer = () => {
    if (playerRef.current && !playerInstanceRef.current) {
      try {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          height: '0',
          width: '0',
          videoId: videoId,
          playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': videoId,
            'mute': 0,
            'enablejsapi': 1
          },
          events: {
            'onReady': () => {
              setIsLoaded(true);
            },
            'onStateChange': (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                setIsPlaying(false);
              }
            },
            'onError': (error: any) => {
              console.log('YouTube player error:', error);
            }
          }
        });
      } catch (error) {
        console.log('Error initializing YouTube player:', error);
      }
    }
  };

  const handlePlayPause = () => {
    if (playerInstanceRef.current && isLoaded) {
      try {
        if (isPlaying) {
          playerInstanceRef.current.pauseVideo();
        } else {
          playerInstanceRef.current.playVideo();
        }
      } catch (error) {
        console.log('Error controlling YouTube player:', error);
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-navy rounded-lg p-4 shadow-xl border-2 border-gold">
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            disabled={!isLoaded}
            className="bg-gold text-navy px-6 py-3 rounded-lg font-bold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🎵 Click it first before scrolling
          </button>
        )}
        
        {isPlaying && (
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-colors"
            >
              ⏸️ Pause Music
            </button>
            <span className="text-cream text-sm font-medium">🎶 Playing</span>
          </div>
        )}
        
        <div ref={playerRef} style={{ display: 'none' }}></div>
      </div>
    </div>
  );
};

export default BackgroundMusicPlayer;