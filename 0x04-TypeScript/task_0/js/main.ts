interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Patrick",
    lastName: "Okafor",
    age: 99,
    location: "Africa",
};

const student2: Student = {
    firstName: "John",
    lastName: "Lee",
    age: 52,
    location: "Asia",
};

const studentsList: Array<Student> = [student1, student2];

function renderTable(): void {

    const table = document.createElement('table');
    const tableHeader = table.insertRow();
    const headers = ["First Name", "Last Name", "Age", "Location"];

    // create table header
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        tableHeader.appendChild(th);
    });

    // Add rows for each student
    studentsList.forEach(({ firstName, lastName, age, location }: Student) => {
        const row = table.insertRow();
        const cells = [firstName, lastName, age.toString(), location];

        cells.forEach(cellText => {
            const cell = row.insertCell();
            cell.innerText = cellText;
        });
    });

    document.body.appendChild(table);
}

renderTable();
