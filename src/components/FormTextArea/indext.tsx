/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FormTextArea(props: any) {
  
    const {
          validation,
          invalid = "false",
          dirty = "false",
          onTurnDirty,
          ...textareaProps
    } = props;
  
    function handleBlur() {
      onTurnDirty(props.name);
    }
  
    return (
      <textarea
          { ...textareaProps }
          onBlur={handleBlur}
          data-invalid={invalid}
          data-dirty={dirty}
      />
    )
  }
  