

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('application');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const fileInput = document.getElementById('document');

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0]
            formData.append('id_copy', file)

            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result;
            }
        }

        for (const [name, value] of formData) {
            console.log(`${name}: ${value}`);
        }
    })
})