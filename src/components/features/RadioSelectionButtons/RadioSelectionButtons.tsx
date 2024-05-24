import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/ui/Button';
import {
  selectedOptionAction,
  selectedOptionSelector,
} from 'localStore/radioSelectionButtons';

type FormValues = {
  option: string;
};

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectedOptionSelector);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(selectedOptionAction(data.option));
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Select an Option
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <label
          htmlFor="optionA"
          className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
          <input
            type="radio"
            id="optionA"
            value="Option A"
            {...register('option')}
            className="form-radio h-5 w-5 text-blue-600 mr-3"
          />
          <span className="text-lg text-gray-700">Option A</span>
        </label>
        <label
          htmlFor="optionB"
          className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
          <input
            type="radio"
            id="optionB"
            value="Option B"
            {...register('option')}
            className="form-radio h-5 w-5 text-blue-600 mr-3"
          />
          <span className="text-lg text-gray-700">Option B</span>
        </label>
        <label
          htmlFor="optionC"
          className="flex items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
          <input
            type="radio"
            id="optionC"
            value="Option C"
            {...register('option')}
            className="form-radio h-5 w-5 text-blue-600 mr-3"
          />
          <span className="text-lg text-gray-700">Option C</span>
        </label>
        <div className="pt-8 text-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {selectedOption && (
        <div className="mt-8 text-center">
          <h2 className="font-semibold text-gray-800">Selected Option:</h2>
          <p className="mt-2 text-green-600">{selectedOption}</p>
        </div>
      )}
    </>
  );
};

export default RadioButtons;
