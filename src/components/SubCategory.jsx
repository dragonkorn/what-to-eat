import { SelectState } from "../entities/enum.js/SelectState";

function SubCategory({ category, state, handleClick }) {
  const textClass = state === SelectState.SELECTED ? 'text-selected' : state === SelectState.UNSELECTED ? 'text-unselected' : 'text-gray-800';
  const cardClass = state === SelectState.SELECTED ? 'card-selected' : state === SelectState.UNSELECTED ? 'card-unselected' : 'bg-white';
  return (
  <div 
    className={`mt-16 mx-4 w-1/6 flex items-center shadow-lg rounded-lg p-2 bg-white
      ${cardClass}
    `} 
    onClick={handleClick}
  >
    <div className="w-full flex flex-col items-center justify-center">
      <div className={`w-full text-xl font-bold text-center ${textClass}`}>
        {category.name}
      </div>
    </div>
  </div>);
}

export default SubCategory;
