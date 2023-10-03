import React from "react"

type PlayerSummaryProps = {
  personaName: string
  imageURL: string
  children: React.ReactNode
}

export const PlayerSummary = ({
  personaName,
  imageURL,
  children,
}: PlayerSummaryProps) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <img src={imageURL} />
        <h1 className="flex flex-1 justify-center text-2xl">
          {personaName ? <p>{personaName}</p> : <p>No Steam Name</p>}
        </h1>
      </div>
    </div>
  )
}

export default PlayerSummary
