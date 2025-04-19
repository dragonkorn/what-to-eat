import { SelectState } from "../entities/enum.js/SelectState";

function Category({ category, state, handleClick }) {
  const textClass = state === SelectState.SELECTED ? 'text-selected' : state === SelectState.UNSELECTED ? 'text-unselected' : 'text-gray-800';
  const cardClass = state === SelectState.SELECTED ? 'card-selected' : state === SelectState.UNSELECTED ? 'card-unselected' : 'bg-white';
  return (
  <div 
    className={`mt-16 mx-4 w-1/4 flex items-center shadow-lg rounded-lg p-4 bg-white
      ${cardClass}
    `} 
    onClick={handleClick}
  >
    <div className="w-full flex flex-col items-center justify-center">
      <div className={`w-full text-2xl font-bold text-center ${textClass}`}>
        {category.name}
      </div>
      <div className={`w-full text-gray-800 text-center ${textClass}`}>
        {category.description}
      </div>
    </div>
  </div>);
}

export default Category;
