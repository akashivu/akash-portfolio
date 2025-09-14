import akashImg from "../assets/akash.png";
export default function Home() {
  return (
    <section className="h-screen w-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      
      <div className="flex-1 space-y-6 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Akash Patil</span> 
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Full Stack Java Developer skilled in 
          <span className="text-green-400 font-semibold"> Spring Boot</span>, 
          <span className="text-blue-400 font-semibold"> React.js</span>, and 
          <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>. <br />
          Experienced in building secure <span className="font-semibold text-yellow-400">REST APIs</span>, 
          implementing <span className="font-semibold text-red-400">JWT authentication</span>, 
          and delivering <span className="font-semibold text-purple-400">responsive web applications</span>. <br />
          Strong foundation in <span className="font-semibold">DSA</span>, 
          problem-solving, and clean coding practices. <br />
          Seeking a <span className="font-bold text-blue-300">Software Engineer</span> role at a leading product-based company to 
          contribute to impactful projects.
        </p>

        <div className="flex justify-center md:justify-start text-black space-x-4">
          <a
            href="https://github.com/akashivu-github"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-blue-700 transition"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img
          src={akashImg}
          alt="Akash"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-blue-600"
        />
      </div>
    </section>
  );
}
