import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  name?: string;
};

export const KeyboardContainer: FunctionComponent<Props> = ({
  children,
  name,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 p-6 pt-6 pr-12 rounded-lg shadow-2xl border-2 border-gray-500 relative overflow-hidden w-full">
      {/* Subtle lighting effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>

      <div className="text-white drop-shadow-lg relative z-10">
        {name && (
          <h1 className="font-audiowide text-6xl mt-5 uppercase text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {name}
          </h1>
        )}
      </div>
      {children}
    </div>
  );
};
