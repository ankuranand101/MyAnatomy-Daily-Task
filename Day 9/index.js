//https://pokeapi.co/api/v2/pokemon/

async function fetchData() {
    try {
        const pok = document.getElementById('pokemon').value.toLowerCase(); // fixed typo
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();
        const ps = data.sprites.front_default;
        const img = document.getElementById('p');
        img.src = ps;
        img.alt = data.name;
        img.style.display = 'block';
    } catch (error) {
        const img = document.getElementById('p');
        img.style.display = 'none';
        alert('Pokémon not found!');
        console.error(error);
    }
}
