import { useCallback, useState } from 'react';

export function useFormWithValidation() {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    const namePattern = /[a-zA-Zа-яА-Я\s-]/;
    const emailPattern =
      /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

    setInputValues({ ...inputValues, [name]: value });
    setIsValid(input.closest('form').checkValidity());

    if (name === 'name') {
      if (namePattern.test(value)) {
        setErrors({ ...errors, [name]: input.validationMessage });
      } else {
        setErrors({
          ...errors,
          [name]: 'Что-то не так...имя может содержать только буквы, цифры, дефис и пробел',
        });
      }
    } else if (name === 'email') {
      if (emailPattern.test(value)) {
        setErrors({ ...errors, [name]: input.validationMessage });
      } else {
        setErrors({ ...errors, [name]: 'Что-то так...укажите email правильно' });
      }
    } else if (name === 'password') {
      setErrors({ ...errors, [name]: input.validationMessage });
    }
  };

  const resetForm = useCallback(
    (newInputValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newInputValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setInputValues, setErrors, setIsValid]
  );

  return { inputValues, handleChange, resetForm, errors, isValid };
}
