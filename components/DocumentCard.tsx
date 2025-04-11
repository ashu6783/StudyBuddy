'use client';
import React, { useState } from 'react';

interface CustomOrderFormProps {
  onUpload?: (files: File[]) => void;
  onUnlock?: () => void;
}

const CustomOrderForm: React.FC<CustomOrderFormProps> = ({ onUpload, onUnlock }) => {
  const [projectType, setProjectType] = useState('Select project type');
  const [educationLevel, setEducationLevel] = useState('Select Education Level');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDecrement = () => {
    if (pages > 1) setPages(pages - 1);
  };

  const handleIncrement = () => {
    setPages(pages + 1);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setUploadedFiles(files);
      if (onUpload) onUpload(files); // Callback to handle upload
    }
  };

  const handleUnlock = () => {
    if (onUnlock) onUnlock(); // Callback to handle unlock
  };

  return (
    <div
      className="rounded-[20px] p-4 w-full shadow-lg relative z-10"
      style={{
        backgroundColor: 'rgba(164, 20, 213, 1)',
        backgroundImage: "url('/pattern.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        height: 'auto',
        minHeight: '300px',
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
        <h2 className="text-2xl font-bold mb-4 text-white leading-snug">
          Can’t find the right project? Place a custom order!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full p-2 rounded-lg bg-white text-gray-800 border-none focus:outline-none"
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
              className="w-full p-2 rounded-lg bg-white text-gray-800 border-none focus:outline-none"
            >
              <option value="Select Education Level">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Deadline</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full p-2 rounded-lg bg-white text-gray-800 border-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-white">Pages</label>
            <div className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
              <button
                onClick={handleDecrement}
                className="p-1 rounded-full text-gray-800 hover:bg-gray-200"
              >
                –
              </button>
              <span className="text-gray-800">{pages} page / {pages * 275} words</span>
              <button
                onClick={handleIncrement}
                className="p-1 rounded-full text-purple-600 hover:bg-purple-100"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1 text-white">Upload Document</label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="w-full p-2 rounded-lg bg-white text-gray-800 border-none focus:outline-none"
          />
          {uploadedFiles.length > 0 && (
            <p className="text-white mt-2">
              Selected files: {uploadedFiles.map(f => f.name).join(', ')}
            </p>
          )}
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Please fill the form to see the price"
            className="w-full p-2 rounded-lg bg-white text-gray-800 border-none focus:outline-none"
            readOnly
          />
        </div>

        <button
          onClick={handleUnlock}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none"
        >
          Get it Done
        </button>
      </div>
    </div>
  );
};

export default CustomOrderForm;
