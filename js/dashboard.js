const token = localStorage.getItem("token");

const usersNameEl = document.getElementById("user-name");
const usersRoleEl = document.getElementById("user-role");

const totalEmployeesEl = document.getElementById("total-employees");
const activeHiringsEl = document.getElementById("active-hirings");
const leaveRequestEl = document.getElementById("leave-requests");
const openPositions = document.getElementById("open-positions");

// Loading All Dashboard Datas
const loadDashbord = async () => {
    try {
        const res = await fetch("https://hrflow-backend-nf0t.onrender.com/api/analytics/dashboard", {
            headers: { Authorization: `Bearer ${token}` },
        })

        if (!res.ok) {
            localStorage.clear();
            window.location.href = "/login.html";
            return;
        }

        const data = await res.json()
        const dashboardData = data.data
        console.log(data)

        // Displaying response data for stats
        if(totalEmployeesEl) totalEmployeesEl.innerText = dashboardData.headcount.totalEmployees;
        if (activeHiringsEl) activeHiringsEl.innerText = dashboardData.recruitmentMetrics.totalApplications;
        if(leaveRequestEl) leaveRequestEl.innerText = dashboardData.leaveSummary.totalRequests;
        if(openPositions) openPositions.innerText = dashboardData.recruitmentMetrics.openJobs;


    } catch (error) {
        console.error(error)
    } finally{
        // you need to add a loadState and call it here.
    }
}

loadDashbord()