import React from "react"

type HeroCapsuleProps = {
  name: string
  appID: string
  libraryCapsuleURL: string
  children: React.ReactNode
}

export const HeroCapsule = ({
  name,
  appID,
  libraryCapsuleURL,
  children,
}: HeroCapsuleProps) => {
  const imageURL = libraryCapsuleURL + appID + "/library_600x900.jpg"
  return (
    <div>
      {/* If image does not successfully render */}
      <div>
        <img src={imageURL} alt={name} />
      </div>
      <div className="flex flex-1 justify-center py-4">{name}</div>
    </div>
  )
}

export default HeroCapsule
