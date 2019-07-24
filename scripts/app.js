const users = [
    {name: 'Mark', gender: 'male', salary: '1500'},
    {name: 'Igor', gender: 'male', salary: '500'},
    {name: 'Anna', gender: 'female', salary: '1000'},
    {name: 'John', gender: 'male', salary: '2100'},
    {name: 'Oleh', gender: 'male', salary: '3000'},
    {name: 'Mary', gender: 'female', salary: '1500'},
    {name: 'Pit', gender: 'male', salary: '750'},
    {name: 'Bred', gender: 'male', salary: '1050'},
    {name: 'Tom', gender: 'male', salary: '1500'},
    {name: 'Jery', gender: 'female', salary: '1800'},
    {name: 'Serj', gender: 'male', salary: '2000'},
];

const createElement = (tag, content) => {
    const element = document.createElement(tag);
    element.innerText = content;

    return element;
}

const appendArray = (htmlEl, arrayEls) => {
    arrayEls.map(el => htmlEl.appendChild(el))
    return htmlEl;
}

const innerTablesRows = users.map((el, i) => {
    const index = createElement('th',i + 1);
    const name = createElement('td',el.name);
    const gender = createElement('td',el.gender);
    const salary = createElement('td',el.salary);
    
    return appendArray(
        document.createElement('tr'),
        [index,name,gender,salary]
    );
});


const tbody = document.createElement('tbody')
innerTablesRows.map(el => tbody.appendChild(el));


// <thead>
//    <tr>
//      <th scope="col">#</th>
//      <th scope="col">Name</th>
//      <th scope="col">Gender</th>
//      <th scope="col">Salary</th>
//    </tr>
// </thead>

const tr = document.createElement('tr');

const index = createElement('th','#');
tr.appendChild(index);

const name = createElement('th','Name');
tr.appendChild(name);

const gender = createElement('th','Gender');
tr.appendChild(gender);

const salary = createElement('th','Salary');
tr.appendChild(salary);

const thead = document.createElement('thead');
thead.appendChild(tr);

const table = document.createElement('table');
table.appendChild(thead);
table.appendChild(tbody);

document.getElementsByClassName('col-12')[0].appendChild(table);