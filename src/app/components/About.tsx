import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 ">
      <div className="container mx-auto text-center">
        {/* Flexbox for text and photo */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8">
          {/* Text Section */}
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">Brandon Wong</h3>
            <h4 className="text-xl mb-4 text-gray-700 dark:text-gray-300">Software Engineer @ Gap Inc.</h4>
            <div className="mt-8">
              <p className="text-lg text-black dark:text-gray-200">
                Hello! I'm a software engineer with a passion for quality.
              </p>
              <p className="text-lg text-black dark:text-gray-200">
                I am endlessly curious about the intersection of software and the world around us.
              </p>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex-shrink-0">
            <Image
              src="/images/IMG_0603.jpg" // Path relative to the `public` folder
              alt="Brandon Wong"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className="shadow-lg rounded-full"
            />
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-4 text-black dark:text-white">Where I've Been</h3>

      </div>
    </section>
  );
};

export default About;
