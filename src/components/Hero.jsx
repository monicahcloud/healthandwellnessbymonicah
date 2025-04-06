const Hero = () => {
  return (
    <section id="home" className="bg-heroImg bg-repeat bg-cover bg-bottom ">
      <div className="w-full h-screen flex items-end bg-blackOverlay">
        <div className="container mx-auto mb-40">
          <h1 className="text-white text-7xl max-w-2xl uppercase font-bold ">
            Health and Wellness
          </h1>
          <p className="mt-2 text-4xl text-slate-100 capitalize tracking-wide">
            We rise, we heal, we thrive - together, for everyone's benefit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
