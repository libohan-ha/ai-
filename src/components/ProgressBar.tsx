interface ProgressBarProps {
  isLoading: boolean;
}

export function ProgressBar({ isLoading }: ProgressBarProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
      {isLoading && (
        <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite]" />
      )}
    </div>
  );
}
