import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center">
        {/* Not Found Section */}
        <section>
          <div className="container mx-auto flex flex-col justify-center items-center gap-6">
            <img src="/404.png" alt="Oops! Sepertinya Anda tersesat" />
            <p className="text-xl sm:text-3xl font-bold">
              Oops! Sepertinya kamu tersesat
            </p>
            <Link to="/">
              <Button>Kembali</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
