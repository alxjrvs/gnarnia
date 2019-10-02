import { ChangeEvent, FormEvent, useState } from 'react'

const noop = () => undefined
type handleInputChangeable = ChangeEvent<HTMLInputElement>
type handleSubmitable = FormEvent<HTMLFormElement>

export const useForm = <T>(
  onSubmitCallback: (inputs: T) => void = noop,
): [
  T,
  (event: handleInputChangeable) => void,
  (event: handleSubmitable) => void,
] => {
  const [inputs, setInputs] = useState({} as T)

  const handleInputChange = (event: handleInputChangeable) => {
    // Warning: This synthetic event is reused for performance reasons.
    // If you're seeing this, you're accessing the property `target` on a released/nullified synthetic event.
    // If you must keep the original synthetic event around, use event.persist().
    // See https://fb.me/react-event-pooling for more information.
    event.persist()
    const { name, value } = event.target
    setInputs(oldInputs => ({
      ...oldInputs,
      [name]: value,
    }))
  }

  const handleSubmit = (event: handleSubmitable) => {
    event.preventDefault()
    onSubmitCallback(inputs)
  }

  return [inputs, handleInputChange, handleSubmit]
}
