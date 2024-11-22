const OptionField = ({ options, clickEvent }) => {
  return (
    <fieldset className="flex">
      <legend className="font-semibold flex-[0_0_4rem] capitalize">
        {options[0].category}
      </legend>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => {
          return (
            <label
              htmlFor={option.name}
              className="relative bg-slate-100 hover:bg-slate-200 hover:text-[var(--foreground)] has-[:checked]:bg-slate-700 has-[:checked]:text-slate-50 has-[:checked]:hover:bg-slate-900 has-[:checked]:hover:text-slate-50  py-1 px-2 rounded-md"
              key={option.name}
            >
              <input
                id={option.name}
                type="radio"
                name={option.category}
                value={option.name}
                className="appearance-none absolute inset-0 opacity-0 cursor-pointer"
                onChange={() => {
                  option.img && clickEvent(option.img);
                }}
              />
              {option.name}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default OptionField;
