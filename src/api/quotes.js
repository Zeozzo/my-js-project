export async function getRandomQuote() {
    const url = "https://thequoteshub.com/api/";

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Failed to fetch quote.");
    }

    const data = await response.json();
    return data;
}