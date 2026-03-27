import FormBuilderContainer from "./modules/form-builder/components/form-builder-container"
import FormItemEditor from "./modules/form-builder/components/form-item-editor"

function App() {
  return (
    <div className="flex gap-3 h-full w-full">
      <FormBuilderContainer />
      <FormItemEditor />
    </div>
  )
}

export default App
