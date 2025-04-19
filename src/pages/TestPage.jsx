import React, { useState } from 'react'
import Category from '../components/Category'
import categoriesData from '../entities/data/CategoriesData'
import { SelectState } from '../entities/enum.js/SelectState'
import CategoryForm from '../components/CategoryForm'
import SubCategoryForm from '../components/SubCategoryForm'
import subCategoriesData from '../entities/data/SubCategoriesData'

function TestPage() {
  const [currentPage, setCurrentPage] = useState(1)
  // Categories
  const [categories, setCategories] = useState(categoriesData)
  const [selectedCategories, setSelectedCategories] = useState(
    categories.reduce((acc, category) => {
      acc[category.id] = SelectState.NEUTRAL
      return acc
    }, {})
  )
  /// Sub Categories
  const [subCategories, setSubCategories] = useState()
  const [selectedSubCategories, setSelectedSubCategories] = useState({})

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
    let finalSelectedCategories = []
    for (let key in selectedCategories) {
      if (selectedCategories[key] === SelectState.SELECTED) {
        finalSelectedCategories.push(key)
      }
    }

    if (finalSelectedCategories.length === 0) {
      for (let key in selectedCategories) {
        if (selectedCategories[key] === SelectState.NEUTRAL) {
          finalSelectedCategories.push(key)
        }
      }
    }

    console.log(finalSelectedCategories)
    let subCategories = subCategoriesData.filter(subCategory => finalSelectedCategories.includes(subCategory.categoryId))
    setSubCategories(subCategories)
    setSelectedSubCategories(subCategories.reduce((acc, subCategory) => {
      acc[subCategory.id] = SelectState.NEUTRAL
      return acc
    }, {}))
    setCurrentPage(2)
  }

  const onClickBack = () => {
    setCurrentPage(1)
  }

  const onClickSubCategory = (subCategoryId) => {
    let currentState = selectedSubCategories[subCategoryId]
    let newState = currentState === SelectState.UNSELECTED ? SelectState.NEUTRAL : currentState + 1
    setSelectedSubCategories({
      ...selectedSubCategories,
      [subCategoryId]: newState
    })
  }

  const onClickResetSubCategory = () => {
    setSelectedSubCategories(subCategories.reduce((acc, subCategory) => {
      acc[subCategory.id] = SelectState.NEUTRAL
      return acc
    }, {}))
  }

  return (
    <div>
      {currentPage === 1 && (
        <CategoryForm
          categories={categories}
          selectedCategories={selectedCategories}
          onClickCategory={onClickCategory}
          onClickReset={onClickReset}
          onClickNext={onClickNext}
        />
      )}
      {currentPage === 2 && (
        <SubCategoryForm
          categories={subCategories}
          selectedCategories={selectedSubCategories}
          onClickCategory={onClickSubCategory}
          onClickReset={onClickResetSubCategory}
          onClickBack={onClickBack}
          onClickNext={onClickNext}
        />
      )}
    </div>


  )
}

export default TestPage
