import { PortableText } from '@portabletext/react';

const components = {
  types: {},
  block: {
    // This handles different 'styles' defined in your schema (e.g., 'normal', 'h1', 'blockquote')
    h1: ({ children }: { children: React.ReactNode }) => <h1 className='text-5xl font-bold my-4'>{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className='text-4xl font-bold my-3'>{children}</h2>,
    normal: ({ children }: { children: React.ReactNode }) => <p className='text-base leading-relaxed my-2'>{children}</p>,
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className='border-l-4 border-gray-300 pl-4 italic my-4'>{children}</blockquote>
    ),
  },
  marks: {
    // This handles inline decorators and annotations (e.g., 'strong', 'em', 'link')
    link: ({ children, value }: { children: React.ReactNode; value: { href?: string } }) => {
      const rel = value.href?.startsWith('/') ? undefined : 'noreferrer noopener';
      return (
        <a
          href={value.href}
          rel={rel}
          className='text-blue-600 hover:underline'>
          {children}
        </a>
      );
    },
    strong: ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
    code: ({ children }: { children: React.ReactNode }) => <code className='bg-gray-100 p-1 rounded text-sm'>{children}</code>,
  },
  list: {
    // How different list types are rendered
    bullet: ({ children }: { children: React.ReactNode }) => <ul className='list-disc pl-5 my-2'>{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol className='list-decimal pl-5 my-2'>{children}</ol>,
  },
  listItem: {
    // How list items within different list types are rendered
    bullet: ({ children }: { children: React.ReactNode }) => <li className='mb-1'>{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li className='mb-1'>{children}</li>,
  },
};

interface PortableTextRendererProps {
  content: any;
}

const PortableTextRenderer = ({ content }: PortableTextRendererProps) => {
  if (!content) return null;
  return (
    <PortableText
      value={content}
      components={components}
    />
  );
};

export default PortableTextRenderer;
