type PropsType = {
  type: string;
  placeholder: string;
  label: string;
  value?: string;
  handleChange?: any;
  register?: any;
};

const FormInput = ({
  type,
  placeholder,
  label,
  value,
  handleChange,
  register,
}: PropsType) => {
  return (
    <div className="relative">
      <label className=" absolute top-0 right-[6px] bg-dark px-2 -translate-y-1/2 z-10 font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent text-[#666] w-full outline-none placeholder:text-[#666] p-5 border-2 border-[#555] rounded-xl font-medium"
        onChange={handleChange}
        value={value}
        {...register}
      />
    </div>
  );
};

export default FormInput;
