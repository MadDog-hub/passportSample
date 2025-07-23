import coverImage from '@/assets/cover-image.jpg';

const CoverSection = () => {
  return (
    <section className="w-full">
      <img 
        src={coverImage} 
        alt="Andrei and Ellise Wedding Cover" 
        className="w-full h-screen object-cover"
      />
    </section>
  );
};

export default CoverSection;