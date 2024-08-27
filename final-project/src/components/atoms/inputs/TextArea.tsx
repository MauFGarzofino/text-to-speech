interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
  return <textarea value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Textarea;
