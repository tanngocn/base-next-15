export default function Layout({
  children,
  kara,
  para,
}: {
  children: React.ReactNode;
  kara: React.ReactNode;
  para: React.ReactNode;
}) {
  return (
    <>
      {children}
      {kara}
      {para}
    </>
  );
}
