interface ErrorMessageProps {
  children: React.ReactNode;
  type?: string;
}
const ErrorMessage = ({ children, type }: ErrorMessageProps) => {
  return (
    <div>
      <p className='text-gray-800 text-lg h-20 flex items-center justify-center'>
        {children} {type}
      </p>
    </div>
  );
};

export default ErrorMessage;
