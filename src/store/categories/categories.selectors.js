export const selectCategoriesMap = (state)=> (state.categories.categories.reduce((accumulator, category) => {
        const {items, title} = category
        return {...accumulator, [title.toLowerCase()]: items}
    }, {}))