document.addEventListener('DOMContentLoaded', () => {
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

  const data = [
      { id: 1, name: 'Bharathwaj', phone: '1234567890', status: 'Pending' },
      { id: 2, name: 'Aswath', phone: '0987654321', status: 'Pending' },
      { id: 3, name: 'Cibiyanna', phone: '6568413546', status: 'Pending' },
      { id: 4, name: 'Bharathwaj', phone: '1234567890', status: 'Pending' },
      { id: 5, name: 'Vhagar', phone: '1234567890', status: 'Pending' },

  ];

  const contactComponent = (data) => {
      const contacts = document.createElement('div');
      contacts.innerHTML = `
          <div class="p-[1.2rem] gap-y-[1rem] bg-light-gray shadow-md">
              <div class="flex justify-between items-center text-md mx-[0.3rem]">
                  <span class="w-[1rem] text-center">${data.id}</span>
                  <div class="flex justify-left items-center w-[10rem] gap-x-[0.6rem]">
                      <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg" alt="Profile" class="rounded-full w-8 h-8"/>
                      <span>${data.name}</span>
                  </div>
                  <span>${data.phone}</span>
                  <div id="call-status-container-${data.id}" class="rounded-full flex justify-center items-center h-[2rem] p-[1rem] bg-yellow-400">
                      <select id="call-status-select-${data.id}" class="bg-transparent text-[#161616]">
                          <option value="Pending">Pending</option>
                          <option value="Accepted" >Accepted</option>
                          <option value="Dropped">Dropped</option>
                          <option value="Rejected">Rejected</option>
                      </select>
                  </div>
                  <button class="bg-green-400 p-[0.5rem] rounded-full">
                      <img src="/assets/dial.svg" alt="Call" class="w-4 h-4 "/>
                  </button>
              </div>
          </div>`;
  
      const contactContainer = document.getElementById('contacts');
      contactContainer.appendChild(contacts);
  
      const callContainer = document.getElementById(`call-status-container-${data.id}`);
      const callStatus = document.getElementById(`call-status-select-${data.id}`);
  
      const removeAll = () => {
          callContainer.classList.remove('bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-yellow-500');
      };
  
      callStatus.addEventListener('change', () => {
          removeAll();
          if (callStatus.value === 'Rejected') {
              callContainer.classList.add('bg-red-400');
          } else if (callStatus.value === 'Accepted') {
              callContainer.classList.add('bg-green-400');
          } else if (callStatus.value === 'Pending') {
              callContainer.classList.add('bg-yellow-500');
          } else if (callStatus.value === 'Dropped') {
              callContainer.classList.add('bg-blue-400');
          }
      });
  };

  data.forEach(item => contactComponent(item));
});
