import { useDispatch, useSelector } from 'react-redux';

import {
  basicNoteFieldAction,
  basicNoteFieldSelector,
} from 'localStore/basicNoteField';

const BasicNoteField: React.FC = () => {
  const dispatch = useDispatch();
  const basicNoteField = useSelector(basicNoteFieldSelector);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(basicNoteFieldAction(event.target.value));
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Enter Your Note
      </h1>
      <textarea
        id="basicNoteField"
        value={basicNoteField}
        onChange={handleNoteChange}
        placeholder="Enter your notes or comments here..."
        rows={5}
        className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Preview:</h2>
        <p className="mt-2 text-xl text-gray-600">{basicNoteField}</p>
      </div>
    </>
  );
};

export default BasicNoteField;
