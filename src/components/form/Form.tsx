/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;
export default function NoteForm({ children, onSubmit }: TFormProps) {

  const formConfig: TFormConfig = {};
  const methods = useForm(formConfig);

  const handelFormSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data)
    methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(handelFormSubmit)}>
        {children}
      </Form>
    </FormProvider>
  )
}
