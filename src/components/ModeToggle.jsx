import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from '../context/ThemeContext';
import { classNames } from '../utils/classNames';

const ModeToggle = () => {
  const { toggleDark } = useTheme();
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={toggleDark}
      className={classNames(
        enabled ? 'bg-royal-purple' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
  );
};

export default ModeToggle;
