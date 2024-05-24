import BasicNoteField from './components/features/BasicNoteField';
import DiscountCode from './components/features/DiscountCode';
import DiscountCodeGenerator from './components/features/DiscountCodeGenerator';
import RadioSelectionButtons from './components/features/RadioSelectionButtons';
import Card from './components/ui/Card';

function App() {
  return (
    <div className="App p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <RadioSelectionButtons />
        </Card>
        <Card>
          <DiscountCode />
        </Card>
        <Card>
          <DiscountCodeGenerator />
        </Card>
        <Card>
          <BasicNoteField />
        </Card>
      </div>
    </div>
  );
}

export default App;
