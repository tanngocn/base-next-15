import DrawerCustom from '../common/Drawer';
const Header = () => {
  return (
    <header className="p-4 sticky top-0 bg-black">
      <nav className="flex gap-2  md:justify-start justify-between items-center  ">
        <div className="logo uppercase font-bold basis-[20%] ">Logo</div>
        <ul className="hidden md:flex gap-4 items-center justify-end flex-1">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
        </ul>
        <DrawerCustom
          title="Drawer"
          txt={"Menu"}
          description={<span>'hello world'</span>}
        />
      </nav>
    </header>
  );
};

export default Header;
