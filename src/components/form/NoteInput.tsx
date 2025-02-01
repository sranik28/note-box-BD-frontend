import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties
};

export default function NoteInput({
  type,
  name,
  placeholder,
  label,
  disabled ,
  style
}: TInputProps) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item name={name} label={label}>
            <Input
            style={style}
              disabled={disabled}
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              required
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
}
