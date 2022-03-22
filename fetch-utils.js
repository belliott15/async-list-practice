const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyaGpvaHZidm9wZW5uandlb3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5ODEsImV4cCI6MTk2MzEyNzk4MX0.bSlakrLR-yqmV29f8oi1aZJVcVSHgCqWTXEiLbhJdq4'

const SUPABASE_URL = "https://srhjohvbvopennjweosz.supabase.co"

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchHarryPotter(){
    const response = await client
        .from('harry_potter_characters')
        .select('*');

    return response.body;
}

