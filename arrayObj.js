const people = [
    {
        name: 'Arisa',
        department: 'BP',
        gender: 'F'
    },
    {
        name: 'Ham',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Alice',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Anna',
        department: 'DA',
        gender: 'F'
    },
    {
        name: 'Larry',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Ria',
        department: 'Sales',
        gender: 'F'
    },
    {
        name: 'JD',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Thor',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Karl',
        department: 'Sales',
        gender: 'M'
    }
];

listByGender = groupByGender => {
    const group = people.filter(person => person.gender == groupByGender);
    console.log(group);
}

groupByDepartment = dept => {
    const byDept = people.filter(employee => employee.department == dept);
    console.log(byDept);
};

listByGender('F');
console.log('**********************');
groupByDepartment('Sales');
