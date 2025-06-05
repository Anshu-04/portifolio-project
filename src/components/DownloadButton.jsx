import React from 'react';

const DownloadButton = () => {
  return (
    <a
      href="../../public/Anshu Patel Resume.pdf"
      download
      className="inline-block px-6 py-3 text-black font-semibold rounded-xl shadow-md bg-[#bcccdc] hover:bg-[#829ab1] transition duration-300"
    >
      Download Resume
    </a>
  );
};
export default DownloadButton;