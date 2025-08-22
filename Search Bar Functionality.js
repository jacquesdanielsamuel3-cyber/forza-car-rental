// Search Bar Function
document.getElementById('searchBar').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase();
    const cars = document.querySelectorAll('.car-item');
    let anyVisible = false;

cars.forEach(car => {
        const titleEl = car.querySelector('h3');
        const titleText = titleEl.textContent;

        if (titleText.toLowerCase().includes(searchValue)) {
            // Show the card
            car.style.display = 'block';
            anyVisible = true;

            // Highlight the match
            const regex = new RegExp(`(${searchValue})`, 'gi');
            const highlightedText = titleText.replace(regex, '<mark>$1</mark>');
            titleEl.innerHTML = highlightedText;
        } else {
            // Hide the card and reset title
            car.style.display = 'none';
            titleEl.innerHTML = titleText; // restore original in case it was changed
        }
    });

    // Show "no results" message
    document.getElementById('no-results').style.display = anyVisible ? 'none' : 'block';
});
const searchBar = document.getElementById('searchBar');
const clearBtn = document.getElementById('clearSearch');
const noResults = document.getElementById('no-results');

searchBar.addEventListener('input', function () {
    clearBtn.style.display = this.value ? 'inline' : 'none';
});

clearBtn.addEventListener('click', function () {
    searchBar.value = '';
    clearBtn.style.display = 'none';
    document.getElementById('no-results').style.display = 'none';

    document.querySelectorAll('.car-item').forEach(car => {
        car.style.display = 'block';
    });
});
clearBtn.addEventListener('click', function () {
    searchBar.value = '';
    clearBtn.style.display = 'none';
    document.getElementById('no-results').style.display = 'none';

    document.querySelectorAll('.car-item').forEach(car => {
        car.style.display = 'block';
        // Remove any highlights
        const titleEl = car.querySelector('h3');
        titleEl.innerHTML = titleEl.textContent;
    });
});
