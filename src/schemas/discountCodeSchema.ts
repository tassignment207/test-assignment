import * as Yup from 'yup';

const DiscountCodeSchema = Yup.object().shape({
  discountCode: Yup.string()
    .required('Discount code is required')
    .matches(/^[A-Z0-9]*$/, 'Invalid discount code'),
});

export default DiscountCodeSchema;
