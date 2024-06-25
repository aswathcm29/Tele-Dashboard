document.addEventListener('DOMContentLoaded', function () {
    const statusSelect = document.getElementById('status-select');
    const statusContainer = document.getElementById('status-container');

    statusSelect.addEventListener('change', function () {
      if (statusSelect.value === 'Active') {
        statusContainer.classList.remove('bg-red-400');
        statusContainer.classList.add('bg-green-400');
      } else {
        statusContainer.classList.remove('bg-green-400');
        statusContainer.classList.add('bg-red-400');
      }
    });
  });