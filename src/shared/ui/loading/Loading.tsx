type LoadingProps = {
  text?: string
}

export const Loading = ({ text = 'Loading...' }: LoadingProps) => {
  return <p>{text}</p>
}
