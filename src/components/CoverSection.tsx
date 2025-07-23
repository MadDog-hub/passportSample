const coverImage = 'https://res.cloudinary.com/dbiboclqa/image/upload/v1753243142/fa6c8f1cda5a508cbbefbeb08997477e_ac68my.jpg';

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