type ErrorBlockProps = {
  text?: string
}

export const ErrorBlock = ({ text = 'Something went wrong.' }: ErrorBlockProps) => {
  return <p>{text}</p>
}
