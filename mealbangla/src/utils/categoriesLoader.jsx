export async function categoriesLoader() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');

        if (!response.ok) {
            throw new Response('Failed to fetch category', { status: response.status });
        }

        const data = await response.json();
        return data.categories || [];  // Return empty array if no meals
    } catch (error) {
        throw new Response('Network error:' + error, { status: 500 });
    }
}