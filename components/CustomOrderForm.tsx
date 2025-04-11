'use client';
import { useState } from 'react';


const CustomOrderForm = () => {
  const [projectType, setProjectType] = useState('Select project type');
  const [educationLevel, setEducationLevel] = useState('Select Education Level');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(1);

  const handleDecrement = () => {
    if (pages > 1) setPages(pages - 1);
  };

  const handleIncrement = () => {
    setPages(pages + 1);
  };

  return (
    <div
      className="rounded-[30px] p-6 md:p-6 w-full max-w-3xl shadow-lg relative z-10 mb-8"
      style={{
        backgroundColor: 'rgba(164, 20, 213, 1)',
        backgroundImage: "url('/pattern.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(160deg, rgba(164, 20, 213, 0.3) 0%, rgba(120, 0, 180, 1.0) 40%)',
          zIndex: 1,
        }}
      />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-snug">
          Can’t find the right project for you? Place a custom order right now!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full p-3 rounded-xl bg-white text-gray-800 border-none focus:outline-none"
            >
              <option value="Select project type">Select project type</option>
              <option value="Essay">Essay</option>
              <option value="Research Paper">Research Paper</option>
              <option value="Presentation">Presentation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Education Level</label>
            <select
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              className="w-full p-3 rounded-xl bg-white text-gray-800 border-none focus:outline-none"
            >
              <option value="Select Education Level">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full p-3 rounded-xl bg-white text-gray-800 border-none focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Pages</label>
            <div className="flex items-center justify-between bg-white rounded-xl px-4 py-2">
              <button
                onClick={handleDecrement}
                className="p-2 rounded-full text-gray-800 hover:bg-gray-200"
              >
                –
              </button>
              <span className="text-gray-800">{pages} page/{pages * 275} words</span>
              <button
                onClick={handleIncrement}
                className="p-2 rounded-full text-purple-600 hover:bg-purple-100"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="text"
            value={`Your Price: $${(pages * 10).toFixed(2)}`}
            readOnly
            className="w-full p-3 rounded-xl bg-white text-gray-800 border-none focus:outline-none"
          />
        </div>
        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 focus:outline-none">
          Get it Done
        </button>
      </div>
    </div>
  );
};

export default CustomOrderForm;