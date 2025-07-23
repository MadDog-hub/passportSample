import HeroSection from '@/components/HeroSection';
import CoverSection from '@/components/CoverSection';
import InvitationSection from '@/components/InvitationSection';
import StorySection from '@/components/StorySection';
import ParentsSection from '@/components/ParentsSection';
import TimelineSection from '@/components/TimelineSection';
import DressCodeSection from '@/components/DressCodeSection';
import LocationSection from '@/components/LocationSection';
import EntourageSection from '@/components/EntourageSection';
import GiftSection from '@/components/GiftSection';
import GallerySection from '@/components/GallerySection';
import VideoSection from '@/components/VideoSection';
import FAQSection from '@/components/FAQSection';
import RSVPSection from '@/components/RSVPSection';
import FooterSection from '@/components/FooterSection';
import BackgroundMusicPlayer from '@/components/BackgroundMusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoverSection />
      <InvitationSection />
      <StorySection />
      <ParentsSection />
      <TimelineSection />
      <DressCodeSection />
      <LocationSection />
      <RSVPSection />
      <EntourageSection />
      <GiftSection />
      <GallerySection />
      <VideoSection />
      <FAQSection />
      <FooterSection />
      <BackgroundMusicPlayer />
    </div>
  );
};

export default Index;
