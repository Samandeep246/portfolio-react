function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Samandeep Kaur. All rights reserved.</p>
        <p className="mt-2">Connect with me:</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="https://github.com/Samandeep246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samandeepkaur246/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/kaursamandeep1991/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
