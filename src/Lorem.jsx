import  { useState } from 'react';

const Lorem = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState('');

  const generateLorem = () => {
    const lorem = Array.from({ length: paragraphs }).map(() => (
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )).join('\n\n');
    setLoremText(lorem);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Lorem Ipsum Generator</h1>
      <div className="flex flex-col items-center mb-4">
        <label className="mb-2 text-lg">Number of Paragraphs:</label>
        <input
          type="number"
          min="1"
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
          className="border rounded p-2 w-24"
        />
      </div>
      <button
        onClick={generateLorem}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate
      </button>
      <div className="mt-6 w-2/3">
        <h2 className="text-xl font-semibold mb-2">Generated Text:</h2>
        <p className="whitespace-pre-wrap">{loremText}</p>
      </div>
    </div>
  );
};

export default Lorem;
