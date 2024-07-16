fetch('https://api-test-qbuj.onrender.com')
    .then(response => response.json())
    .then(json => {
        let ddl = document.getElementById('ddl_Employee');
        json.forEach(student => {
            let op = document.createElement('option');
            op.innerHTML = student.name;
            ddl.appendChild(op);
        });
    })