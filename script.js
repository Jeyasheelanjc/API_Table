async function employeeData() {
  const response = await fetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );
  const data = await response.json();
  console.log(data);

  var tableBody = document.getElementById("tableBody");
  data.forEach((user) => {
    row = document.createElement("tr");
    row.innerHTML = `<td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.email}</td> 
        <td>${user.dob}</td>
        <td>${user.age}</td>
        <td>${user.contactNumber}</td>
        <td>${user.address}</td>`;
    tableBody.append(row);
  });
}
window.onload = employeeData();


