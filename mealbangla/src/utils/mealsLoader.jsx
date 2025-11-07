export async function mealLoader() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

        if (!response.ok) {
            throw new Response('Failed to fetch meals', { status: response.status });
        }

        const data = await response.json();
        return data.meals || [];  // Return empty array if no meals
    } catch (error) {
        throw new Response('Network error:' + error, { status: 500 });
    }
}
