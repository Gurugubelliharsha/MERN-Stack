document.addEventListener("DOMContentLoaded", loadEmployees);

// Login Function
function showLogin() {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}

// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("employee-page").classList.remove("hidden");
    } else {
        alert("Invalid Credentials");
    }
}

// Add Employee Function
function addEmployee() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let designation = document.getElementById("designation").value;
    let salary = document.getElementById("salary").value;

    if (name === "" || email === "" || designation === "" || salary === "") {
        alert("All fields are required!");
        return;
    }

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    // Duplicate Email Validation
    if (employees.some(emp => emp.email === email)) {
        alert("Email already exists! Please use a different email.");
        return;
    }

    employees.push({ name, email, designation, salary });
    localStorage.setItem("employees", JSON.stringify(employees));

    loadEmployees();
    document.querySelectorAll("input").forEach(input => input.value = "");
}

// Load Employees with Sorting
function loadEmployees(sortBySalary = false) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    // Sorting by Salary
    if (sortBySalary) {
        employees.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
    }

    let tableBody = document.getElementById("employee-list");
    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {
        let row = `<tr>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.designation}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Edit Employee
function editEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    let emp = employees[index];

    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;
    document.getElementById("designation").value = emp.designation;
    document.getElementById("salary").value = emp.salary;

    deleteEmployee(index);
}

// Delete Employee
function deleteEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadEmployees();
}

// Search Employees
function searchEmployees() {
    let searchTerm = document.getElementById("search").value.toLowerCase();
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    let filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm) || 
        emp.email.toLowerCase().includes(searchTerm) ||
        emp.designation.toLowerCase().includes(searchTerm)
    );

    let tableBody = document.getElementById("employee-list");
    tableBody.innerHTML = "";

    filteredEmployees.forEach((emp, index) => {
        let row = `<tr>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.designation}</td>
            <td>${emp.salary}</td>
            <td>
                <button onclick="editEmployee(${index})">Edit</button>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Show Thank You Function
function showThankYouPage() {
    document.getElementById("employee-page").classList.add("hidden");
    document.getElementById("thank-you-page").classList.remove("hidden");
}

// Restart to Home
function restart() {
    location.reload();
}
