import React from "react";

type HeroCapsuleProps = {
  name: string;
  appID: string;
  children: React.ReactNode;
};

export const HeroCapsule = ({
  name,
  appID,
  children,
}: HeroCapsuleProps) => {
  return (
    <div>
      <div className="flex flex-1 justify-center py-4 text-3xl">{name}</div>
    </div>
  );
};

export default HeroCapsule;
