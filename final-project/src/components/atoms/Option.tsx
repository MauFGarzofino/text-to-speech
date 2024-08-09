interface OptionProps {
  value: string;
  label: string;
}

const Option = ({ value, label }: OptionProps) => {
  return <option value={value}>{label}</option>;
};

export default Option;
