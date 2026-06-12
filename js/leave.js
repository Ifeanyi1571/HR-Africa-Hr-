const token = localStorage.getItem("token");
const tbody = document.getElementById("tbody")

const loadLeaveRequests = async () => {
    try {
        const res = await fetch("https://hrflow-backend-nf0t.onrender.com/api/leave-requests/", {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!res.ok) {
            localStorage.clear();
            window.location.href = "/login.html";
            return;
        }

        const data = await res.json()
        const leaveData = data

        console.log(leaveData)

        tbody.innerHTML = "";

        if (!leaveData || leaveData.length === 0) {
            tbBody.innerHTML = '<tr class="border-b border-gray-100 hover:bg-gray-50 transition"><td colspan="5" style="text-align:center">No Employee record</td></tr>';
            return;
        }

        leaveData.forEach(leave => {
            const startDate = new Date(leave.startDate);
            const endDate = new Date(leave.endDate);

            // Minus end from start (in milliseconds), convert to days
            const duration = (endDate - startDate) / (1000 * 60 * 60 * 24);

            const tr = document.createElement("tr");
            tr.className = "border-t"
            tr.innerHTML = `
                <td class="p-4">${new Date(leave.createdAt).toLocaleDateString()}</td>
                <td class="p-4">${leave.leaveType}</td>
                <td class="p-4"> ${duration} Days</td>
                <td class="p-4">
                    <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        ${leave.status}
                    </span>
                 </td>
            `;
            tbody.appendChild(tr)

        });


    } catch (error) {
        console.error(error)
    }
}

loadLeaveRequests()