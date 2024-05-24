import { useState, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from 'components/ui/Button';
import DiscountCodeSchema from 'schemas/discountCodeSchema';

type FormValues = {
  discountCode: string;
};

const DiscountCode: React.FC = () => {
  const [message, setMessage] = useState('');
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(DiscountCodeSchema),
  });

  const discountCode = watch('discountCode', '');

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.discountCode) {
      setMessage('Discount code is valid!');
    }
  };

  useEffect(() => {
    setMessage('');
  }, [discountCode]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Enter Discount Code
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
          <label htmlFor="discountCode" className="text-lg text-gray-700 mb-2">
            Discount Code:
            <input
              id="discountCode"
              type="text"
              {...register('discountCode')}
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          {errors.discountCode && (
            <p className="text-red-600 mt-2">{errors.discountCode.message}</p>
          )}
        </div>
        <div className="pt-8 text-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {message && (
        <div className="mt-8 text-center text-green-600">{message}</div>
      )}
    </>
  );
};

export default DiscountCode;
