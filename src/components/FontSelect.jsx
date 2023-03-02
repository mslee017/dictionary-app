import { useGlobalContext } from '../context';

const FontSelect = () => {
  const { font, setFont } = useGlobalContext();

  return (
    <div className="flex items-center">
      <label
        htmlFor="location"
        className="text-sm font-medium text-gray-700 hidden"
      >
        Font
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full dark:bg-black rounded-md py-2 pl-3 pr-2 text-base focus:outline-none sm:text-sm"
        value={font}
        onChange={event => setFont(event.target.value)}
      >
        <option value="sans">Sans</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
    </div>
  );
};

export default FontSelect;
