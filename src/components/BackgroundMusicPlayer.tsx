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
    // Load the YouTube IFrame Player API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          height: '0',
          width: '0',
          videoId: videoId,
          playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': videoId,
            'mute': 0
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
            }
          }
        });
      }
    };

    // If YT is already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (playerInstanceRef.current && isLoaded) {
      if (isPlaying) {
        playerInstanceRef.current.pauseVideo();
      } else {
        playerInstanceRef.current.playVideo();
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-navy/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gold/30">
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            disabled={!isLoaded}
            className="bg-gold text-navy px-4 py-2 rounded font-semibold text-sm hover:bg-gold/90 transition-colors disabled:opacity-50 mb-2 block"
          >
            🎵 Click it first before scrolling
          </button>
        )}
        
        {isPlaying && (
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm font-semibold hover:bg-secondary/90 transition-colors"
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <span className="text-cream text-xs">Background Music</span>
          </div>
        )}
        
        <div ref={playerRef} style={{ display: 'none' }}></div>
      </div>
    </div>
  );
};

export default BackgroundMusicPlayer;