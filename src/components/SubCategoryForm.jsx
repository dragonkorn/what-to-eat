import SubCategory from "./SubCategory"

const SubCategoryForm = ({
  categories,
  selectedCategories,
  onClickCategory,
  onClickBack,
  onClickReset,
  onClickNext,
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-0 gap-y-0 justify-center">
        {categories.map((category) => (
          <SubCategory 
            key={category.id} 
            category={category} 
            state={selectedCategories[category.id]}
            handleClick={() => onClickCategory(category.id)}
          />
        ))}
      </div>

      <div className="flex justify-between ml-16 mr-16 mt-16">
        <button className="bg-blue-500 text-white p-2 rounded-md w-24" onClick={onClickBack}>
          <div className="text-xl font-bold">
            Back
          </div>
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md w-24" onClick={onClickReset}>
          <div className="text-xl font-bold">
            Reset
          </div>
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md w-24" onClick={onClickNext}>
          <div className="text-xl font-bold">
            Next
          </div>
        </button>
      </div>
    </div>
  )
}

export default SubCategoryForm