interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Select = ({ value, onChange, children }: SelectProps) => {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
