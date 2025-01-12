import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    id: "1",
    icon: "/icon-belajar.png",
    title: "Belajar Lebih Mudah",
    width: 60,
  },
  {
    id: "2",
    icon: "/icon-akses.png",
    title: "Akses Gratis",
    width: 50,
  },
  {
    id: "3",
    icon: "/icon-terjangkau.png",
    title: "Terjangkau",
    width: 35,
  },
  {
    id: "4",
    icon: "/icon-sederhana.png",
    title: "Sederhana",
    width: 30,
  },
];

const HomePage = () => {
  const featuresList = features.map((feature) => {
    return (
      <FeatureCard
        key={feature.id}
        id={feature.id}
        icon={feature.icon}
        title={feature.title}
        width={feature.width}
      />
    );
  });

  return (
    <main className="min-h-screen pt-18">
      {/* Hero Section */}
      <section>
        <div className="flex flex-wrap">
          <div className="relative w-full">
            <img
              src="/main-home.png"
              alt="Main"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center pt-20 lg:pt-0">
              <h1 className="text-3xl md:text-5xl lg:text-7xl text-center py-4 md:py-7 px-6 md:px-24 lg:px-96 rounded-lg bg-[#CDC5D4F0]">
                Selamat Datang <br /> Di <br />
                Kursus Gratis
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <div className="container mx-auto py-10 md:py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32">
            {featuresList}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
