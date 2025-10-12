import wellnessRoom from "@/public/photos/wellness_room.png";

const Hero = () => {
  return (
    <section
      className="relative top-[-80px] left-0 w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${wellnessRoom.src})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold">Well Guru</h1>
      </div>
    </section>
  );
};

export default Hero;
