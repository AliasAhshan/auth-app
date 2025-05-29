interface Props {
  params: { id: string };
}

export default async function UserProfile({ params }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-4xl">
        Profile Page{" "}
        <span className="p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
      </p>
    </div>
  );
}
