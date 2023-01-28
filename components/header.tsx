interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="sticky top-0 right-0 z-10 hidden w-full border-b border-lighter_black bg-black p-6 md:block">
      <div>{title}</div>
    </header>
  );
};
