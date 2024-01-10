import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { copy } from 'clipboard';

type Props = {
  children: string;
};

const CodeBlock = ({ children} : Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (children) {
      copy(children);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {children}
      </SyntaxHighlighter>
      <button
        className="absolute top-0 right-0 p-2 text-white bg-gray-800 rounded-bl"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : <img loading='lazy' src="/mockups/clipboard.svg" width={16} height={16} className='w-4 h-4' />}
      </button>
    </div>
  );
};

export default CodeBlock;
