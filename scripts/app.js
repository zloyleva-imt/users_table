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


const tr = appendArray(document.createElement('tr'),[
    createElement('th','#'),
    createElement('th','Name'),
    createElement('th','Gender'),
    createElement('th','Salary'),
]);

const thead = appendArray(document.createElement('thead'),[tr]);

const table = appendArray(document.createElement('table'),[
    thead,tbody
]);

document.getElementsByClassName('col-12')[0].appendChild(table);