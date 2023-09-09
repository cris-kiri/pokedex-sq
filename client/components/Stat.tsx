interface Props {
  title: string
  stat: number
}

export default function Stat({ title, stat }: Props) {
  return (
    <>
      <h4>{title.toUpperCase()}</h4>
      {stat > 0 ? stat : ''}
    </>
  )
}
