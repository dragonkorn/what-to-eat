import React, { useState } from 'react'
import Category from '../components/Category'
import categoriesData from '../entities/data/CategoriesData'
import { SelectState } from '../entities/enum.js/SelectState'

function TestPage() {
  const [categories, setCategories] = useState(categoriesData)
  // make map<String, SelectState> for selected categories
  const [selectedCategories, setSelectedCategories] = useState(
    categories.reduce((acc, category) => {
      acc[category.id] = SelectState.NEUTRAL
      return acc
    }, {})
  )

  const onClickCategory = (categoryId) => {
    let currentState = selectedCategories[categoryId]
    let newState = currentState === SelectState.UNSELECTED ? SelectState.NEUTRAL : currentState + 1
    setSelectedCategories({
      ...selectedCategories,
      [categoryId]: newState
    })
  }

  const onClickReset = () => {
    setSelectedCategories(categories.reduce((acc, category) => {
      acc[category.id] = SelectState.NEUTRAL
      return acc
    }, {}))
  }

  const onClickNext = () => {
    console.log(selectedCategories)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-0 justify-center">
        {categories.map((category) => (
          <Category 
            key={category.id} 
            category={category} 
            state={selectedCategories[category.id]}
            handleClick={() => onClickCategory(category.id)}
          />
        ))}
      </div>

      <div className="flex justify-between ml-16 mr-16 mt-4">
        <button className="bg-blue-500 text-white p-2 rounded-md w-24 text-2xl" onClick={onClickReset}>
          <div className="text-2xl font-bold">
            Reset
          </div>
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md w-24 text-2xl" onClick={onClickNext}>
          <div className="text-2xl font-bold">
            Next
          </div>
        </button>
      </div>
    </div>
  )
}

export default TestPage
