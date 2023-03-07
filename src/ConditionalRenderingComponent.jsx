export function ConditionalRenderingComponent({ isBlue }) {
  return <span>I am {isBlue ? "blue" : "red"}</span>;
}
