export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; NextJS is Great! by AboutUsLayout
    </div>
  );
}
