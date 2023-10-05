import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-300">
      <Navbar />

      {/* Main Card */}
      <section
        className="w-full px-20 py-20 flex flex-col justify-around align-middle 
        bg-gradient-to-br from-blue-900 from-10% via-cyan-700 via-50% to-teal-600 to-100%
        dark:bg-gradient-to-b dark:from-slate-900 dark:from-55% dark:via-cyan-950 dark:via-85% dark:to-cyan-900 dark:to-100% "
      >
        <div className="bg-white w-3/6 md:w-3/6 shadow-lg shadow-violet-200 rounded-3xl p-4 md:p-10">
          <p className="text-lg md:text-3xl font-bold text-slate-900 mb-10">
            Hi, my name is Carlos Sanchez!
          </p>
          <p className="text-m md:text-xl font-medium text-slate-900">
            {`I'm a Full Stack web developer focused on JavaScript technologies, developing with React.js and Vue.js on 
            the frontend, knowledge of Redux, Tailwind CSS and Bootstrap. In addition, I have experience in backend developing REST Api with Express, 
            Prisma and Laravel. Also, experience working with database services like PostgreSQL, MySQL and MongoDB.`}
          </p>

          <div className="flex flex-row gap-5 mt-5">
            <Link
              href={"https://www.linkedin.com/in/cjsanche/"}
              target="_blank"
            >
              <Image
                src={"/assets/img/logos/linkedin-short.png"}
                alt="Linkedin-short"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* skills section */}
      <section className="bg-white dark:bg-slate-300 px-10 py-10 md:py-20 md:px-60">
        <p className="text-6xl font-light mb-10">My Skills</p>

        <div className="flex flex-col gap-5 justify-evenly">
          {/* frontend card  */}
          <div className="border border-slate-900 rounded-lg p-5">
            <p className="text-2xl">FrontEnd</p>

            <div className="grid grid-cols-2 md:grid-cols-6">
            <Image
              src={"/assets/img/logos/HTML5.png"}
              alt="html5"
              width={100}
              height={100}
              
            />
            <Image
              src={"/assets/img/logos/CSS3.png"}
              alt="ccs3"
              width={100}
              height={100}
              
            />
            <Image
              src={"/assets/img/logos/Bootstrap.png"}
              alt="bootstrap"
              width={100}
              height={100}
              
            />
            <Image
              src={"/assets/img/logos/Laravel.png"}
              alt="mongo"
              width={100}
              height={100}
              
            />
            </div>
          </div>

          {/* backend card  */}
          <div className="border border-slate-900 rounded-lg p-5">
            <p className="text-2xl">BackEnd</p>
          </div>
        </div>
      </section>
    </main>
  );
}
