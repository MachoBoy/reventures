interface Props {
  open: boolean;
  openMobileNav: Function;
  closeMobileNav: Function;
}

const HamburgerMenu = ({ open, openMobileNav, closeMobileNav }: Props) => {
  // console.log(open);
  return (
    <button
      onClick={() => (open ? closeMobileNav() : openMobileNav())}
      className='flex items-center space-x-2 focus:outline-none'
    >
      <div className='w-6 flex items-center justify-center relative'>
        <span
          className={`bg-white transform transition w-full h-px absolute ${
            open ? 'translate-y-0 rotate-45' : '-translate-y-2'
          }`}
        ></span>

        <span
          className={`bg-white transform transition w-full h-px absolute ${
            open ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        ></span>

        <span
          className={`bg-white  transform transition w-full h-px absolute ${
            open ? 'translate-y-0 -rotate-45' : 'translate-y-2'
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerMenu;
