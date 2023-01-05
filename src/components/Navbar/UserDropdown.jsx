import useModalWindow from '../../hooks/useModalWindow';
import { ReactComponent as UserIcon } from '../../assets/user-1.svg';
import { ReactComponent as ArrowIcon } from '../../assets/chevron-small-down.svg';
import Button from '../Button';

function UserDropdown() {
  const [dropdownOpen, setDropdown, dropdownRef] = useModalWindow(false);

  const handleDropdownToggle = () => {
    setDropdown(!dropdownOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="flex items-center border shadow dark:border-gray-700 md:border-none md:shadow-none"
        onClick={handleDropdownToggle}
      >
        <UserIcon />
        <ArrowIcon className={dropdownOpen ? '-scale-y-100' : null} />
      </Button>
      <div
        className={`${
          dropdownOpen ? 'absolute' : 'hidden'
        } right-0 mt-2 flex w-28 flex-col items-center rounded-lg border bg-gray-50 py-2 shadow dark:border-gray-700 dark:bg-dark-2`}
      >
        <button className="w-full py-1 hover:bg-gray-200/75 active:bg-gray-300/50 dark:hover:bg-gray-700/50 dark:active:bg-gray-700/75">
          Sign In
        </button>
        <button className="w-full py-1 hover:bg-gray-200/75 active:bg-gray-300/50 dark:hover:bg-gray-700/50 dark:active:bg-gray-700/75">
          Register
        </button>
        <button className="w-full py-1 hover:bg-gray-200/75 active:bg-gray-300/50 dark:hover:bg-gray-700/50 dark:active:bg-gray-700/75">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default UserDropdown;
