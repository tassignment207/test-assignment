import { useState } from 'react';

import Button from 'components/ui/Button';

const generateDiscountCode = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 12; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const DiscountCodeGenerator: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string | null>(null);

  const handleGenerateCode = () => {
    const newCode = generateDiscountCode();
    setDiscountCode(newCode);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Generate Discount Code
      </h1>
      <div className="pt-8 text-center">
        <Button onClick={handleGenerateCode}>Generate Code</Button>
      </div>
      {discountCode && (
        <div className="mt-8 text-center">
          <h2 className="font-semibold">Code:</h2>
          <p className="mt-2 text-xl text-green-600">{discountCode}</p>
        </div>
      )}
    </>
  );
};

export default DiscountCodeGenerator;
