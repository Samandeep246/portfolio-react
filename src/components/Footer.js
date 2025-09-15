function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} Samandeep Kaur. All rights reserved.</p>

        <p className="text-sm">
          Built with <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">Framer Motion</span>
        </p>

        <a
          href="https://github.com/Samandeep246/portfolio-react"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 block"
        >
          Source code on GitHub
        </a>

        <a
          href="#header"
          onClick={(e) => {
            e.preventDefault();
            const header = document.getElementById("header");
            const yOffset = -80; // adjust based on navbar height
            const y =
              header.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          className="block text-blue-400 hover:text-blue-600 cursor-pointer"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
