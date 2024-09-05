// filter.js

document.getElementById('filterDropdown').addEventListener('change', function() {
    const filterValue = this.value; // Get selected value from dropdown
    const rows = document.querySelectorAll('table tbody tr'); // Select all table rows
    
    rows.forEach(row => {
        const nohaRelevance = row.querySelector('td:nth-child(2)').getAttribute('data-relevance'); // Get data-relevance attribute
        
        if (filterValue === "" || nohaRelevance === filterValue) {
            row.style.display = ''; // Show row if filter matches or if 'All Nohas' is selected
        } else {
            row.style.display = 'none'; // Hide row if filter does not match
        }
    });
});
