export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-center">Title</h1>
      <div>{children}</div>
    </>
  );
}
