export async function filterMealByCategory({ params }) {
    try {
        // console.log('Fetching meals for category:', params.categoryName); 
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`);
        const categoryName = params.categoryName;
        if (!categoryName) {
            throw new Response('Category name is required', { status: 400 });
        }

        if (!response.ok) {
            throw new Response('Failed to fetch meals', { status: response.status });
        }

        const data = await response.json();
        console.log('Fetched meals:', data.meals);
        const meals = data.meals || []
        return { meals, categoryName };  // Return empty array if no meals
    } catch (error) {
        throw new Response('Network error:' + error, { status: 500 });
    }
}
