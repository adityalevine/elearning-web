import { Data } from "@/components/Data";
import { DataExperience } from "@/components/DataExperience";
import { MentorCard } from "@/components/MentorCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mentors = [
  {
    id: "1",
    name: "Richie Davey",
    role: "Mentor",
    image: "/mentor-richie.png",
  },
  {
    id: "2",
    name: "Findlay Hudson",
    role: "Founder Digitery",
    image: "/mentor-findlay.png",
  },
  {
    id: "3",
    name: "Geraldine Dyer",
    role: "Mentor",
    image: "/mentor-geraldine.png",
  },
];

const datas = [
  {
    id: "1",
    label: "Digital Marketing",
    percentage: 76,
  },
  {
    id: "2",
    label: "Social Media Marketing",
    percentage: 73,
  },
  {
    id: "3",
    label: "Content Marketing",
    percentage: 71,
  },
  {
    id: "4",
    label: "Digital Strategy",
    percentage: 68,
  },
];

const dataExperiences = [
  {
    id: "1",
    label: "Expert Mentor",
    percentage: 56,
  },
  {
    id: "2",
    label: "Best Online Courses",
    percentage: 58,
  },
];

const MentorPage = () => {
  const mentorsList = mentors.map((mentor) => {
    return (
      <MentorCard
        key={mentor.id}
        id={mentor.id}
        image={mentor.image}
        name={mentor.name}
        role={mentor.role}
      />
    );
  });

  const datasList = datas.map((data) => {
    return (
      <Data
        key={data.id}
        id={data.id}
        label={data.label}
        percentage={data.percentage}
      />
    );
  });

  const experiencesList = dataExperiences.map((experience) => {
    return (
      <DataExperience
        key={experience.id}
        id={experience.id}
        label={experience.label}
        percentage={experience.percentage}
      />
    );
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="p-20 md:p-32 lg:p-96 bg-[url('/main-mentor.png')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="flex lg:flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2"></div>

            <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
              <Breadcrumb>
                <BreadcrumbList className="text-[10px] md:text-3xl lg:text-4xl text-white">
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

      {/* Mentor Section */}
      <section>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center p-10 gap-8 md:gap-16 lg:gap-32">
            {mentorsList}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="bg-[#001439]">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-2xl md:text-5xl py-20 flex-col flex gap-5 text-white">
              <h2 className="text-3xl text-blue-500">Who We Are</h2>
              <p>Over 20,000+ Members</p>
              <p>Trust Digitery To Transform </p>
              <p>Their Career</p>
            </div>

            <div className="w-full md:w-1/2 py-20 text-white">{datasList}</div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="container mx-auto rounded-lg mt-20 py-20 bg-[#F2E9FB]">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
            20 Years of Experience in
          </h2>
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            Digital Marketing Expert
          </h2>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pt-40">
              <img
                src="/experience-1.png"
                alt="Experience"
                width="70%"
                className="mx-auto"
              />
            </div>

            <div className="w-full md:w-1/2 py-20 flex flex-col gap-10">
              <img
                src="/experience-2.png"
                alt="Experience"
                width="60%"
                className="mx-auto"
              />
              <img
                src="/experience-3.png"
                alt="Experience"
                width="60%"
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto flex justify-center items-center py-10 px-5">
          <div className="w-full max-w-5xl">{experiencesList}</div>
        </div>
      </section>
    </main>
  );
};

export default MentorPage;
