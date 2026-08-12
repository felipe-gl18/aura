export default function CardImage({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <img
      src={image}
      alt={name}
      className="block w-full h-auto shrink-0 rounded-md"
    />
  );
}
