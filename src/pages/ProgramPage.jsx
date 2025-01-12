import { ProgramCard } from "@/components/ProgramCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const programs = [
  {
    id: "1",
    image: "/software-matlab.png",
    title: "Software MATLAB",
  },
  {
    id: "2",
    image: "/social-digital-marketing.png",
    title: "Social Digital Marketing",
  },
  {
    id: "3",
    image: "/python-language.png",
    title: "Python Language",
  },
];

const ProgramPage = () => {
  const programsList = programs.map((program) => {
    return (
      <ProgramCard
        key={program.id}
        id={program.id}
        image={program.image}
        title={program.title}
      />
    );
  });

  return (
    <main className="min-h-screen pt-[70px]">
      {/* Hero Section */}
      <section className="p-10 md:p-20 lg:p-52 bg-[#889090]">
        <div className="container mx-auto">
          <div className="flex lg:flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-6xl lg:text-9xl text-white">
                Kursus Kami
              </h1>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Breadcrumb>
                <BreadcrumbList className="text-sm md:text-3xl lg:text-4xl text-white">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">BERANDA</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbLink href="/mentor">MENTOR</BreadcrumbLink>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section>
        <div className="container mx-auto py-10 md:py-20 px-4 md:px-10 lg:px-20">
          <div className="pb-20 text-xl md:text-2xl lg:text-3xl text-center">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              pariatur autem fuga dignissimos commodi tempore, quas consectetur
              reiciendis laboriosam quae.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32">
            {programsList}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramPage;
