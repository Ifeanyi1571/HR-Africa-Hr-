const token = localStorage.getItem("token");

const loadAllEployees = async ()=> {
    try {
        const res = await fetch("https://hrflow-backend-nf0t.onrender.com/api/employees", {
            headers: { Authorization: `Bearer ${token}` }
        })

        if (!res.ok) {
            localStorage.clear();
            window.location.href = "/login.html";
            return;
        }

        const data = await res.json();
        const employees = data.data;
        console.log(data)

        const totalEmployees = document.getElementById("total-employees");
        if(totalEmployees) totalEmployees.innerText = data.count;

        const tbody = document.getElementById("tbody")

        tbody.innerHTML = "";

        if (!employees || employees.length === 0) {
            tbBody.innerHTML = '<tr class="border-b border-gray-100 hover:bg-gray-50 transition"><td colspan="5" style="text-align:center">No Employee record</td></tr>';
            return;
        }

        employees.forEach(employee => {
            const tr = document.createElement("tr")
            tr.className = "border-b border-gray-100 hover:bg-gray-50 transition";
            tr.innerHTML = `
                  <td class="p-5">
                    <input type="checkbox">
                  </td>

                  <!-- EMPLOYEE -->
                  <td class="p-5">

                    <div class="flex items-center gap-4">

                      <img
                        src="https://i.pravatar.cc/100?img=14"
                        class="w-12 h-12 rounded-full object-cover"
                      />

                      <div>

                        <h4 class="font-bold text-gray-800">
                          ${employee.firstName} ${employee.lastName}
                        </h4>

                        <p class="text-sm text-gray-400">
                          ${employee.employeeCode}
                        </p>

                      </div>

                    </div>

                  </td>

                  <!-- ROLE -->
                  <td class="p-5">

                    <h4 class="font-semibold">
                     ${employee.position}
                    </h4>

                    <p class="text-sm text-gray-400">
                      ${employee.department}
                    </p>

                  </td>

                  <!-- LOCATION -->
                  <td class="p-5 text-gray-500">
                    New York, USA
                  </td>

                  <!-- STATUS -->
                  <td class="p-3">

                    <span
                      class="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm ">
                      ● ${employee.status}
                    </span>

                  </td>

                  <!-- PERFORMANCE -->
                  <td class="p-5">

                    <div class="w-[120px] h-2 bg-gray-200 rounded-full overflow-hidden">

                      <div class="w-[85%] h-full bg-blue-600"></div>

                    </div>

                    <p class="text-sm text-gray-500 mt-2">
                      Exceeds Expectations
                    </p>

                  </td>

                  <!-- MENU -->
                  <td class="p-5">
                    <button class="text-gray-500 text-xl">
                      <i class="ri-more-2-fill"></i>
                    </button>
                  </td>
            `;
            tbody.appendChild(tr)
        });


    } catch (error) {
        console.error(error)
    }
}

loadAllEployees()