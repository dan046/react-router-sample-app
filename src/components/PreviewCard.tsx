import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const PreviewCard = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded bg-white/5 p-7 md:p-10">
      {children}
    </div>
  )
}

export default PreviewCard
