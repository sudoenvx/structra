import { Card } from '@dashboard/components/ui/card'
import { PlusIcon } from 'lucide-react';
import useFormBuilder from '../hooks/use-editor';

function AddElementButton() {
  return (
    <div className='p-1 text-sm rounded-sm border-2 border-dashed border-st-primary hover:bg-st-primary-tint hover:text-st-primary cursor-pointer text-st-primary font-semibold flex items-center justify-center gap-2 transition-colors duration-150'>
      <span>Add Element</span>
      <PlusIcon className='w-4 h-4' />
    </div>
  )
}

function FormBuilderContainer() {
  const { items, addItem } = useFormBuilder()

  return (
    <Card className='flex-1 canvas-dotted-background rounded-none! relative p-0! overflow-auto'>
      {/* <ElementsPicker /> */}
      <Card className='max-w-[70%] my-8 border border-st-border mx-auto flex flex-col gap-2' variant='light' onDragOver={(e) => {
      e.preventDefault();
      const elementType = e.dataTransfer.getData('text/plain');
      console.log('Dropped element type:', elementType);

      e.currentTarget.classList.add('border-st-primary!', 'bg-st-primary-tint!');
      // Here you would typically update your state to add the new element to the form
    }} onDragLeave={(e) => {
      e.currentTarget.classList.remove('border-st-primary!', 'bg-st-primary-tint!');
    }} onDrop={(e) => {      e.preventDefault();
      const elementType = e.dataTransfer.getData('text/plain');
      console.log('Dropped element type:', elementType);
      e.currentTarget.classList.remove('border-st-primary!', 'bg-st-primary-tint!');

      addItem({
        id: `item-${Date.now()}`,
        type: 'elementType',
        label: 'New Element',

      });
      // Here you would typically update your state to add the new element to the form
    }}>
        {items.map((item) => (
          <div key={item.id} className='p-4 border border-st-border rounded-sm bg-white'>
            {item.type}
          </div>
        ))}
        <AddElementButton />
      </Card>
    </Card>
  )
}

export default FormBuilderContainer