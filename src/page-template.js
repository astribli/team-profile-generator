function generateHTML(data) {
    var eCards = "";
    for (let i = 0; i < data.length; i++) {
        
        if (data[1].getRole() == `Manager`) {
            eCards = eCards + `<div class="col-3">
            <div class="card-body">
                <h5 class="card-title">${data[1].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[1].getRole()}</h6> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${data[1].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[1].email}">${data[1].email}</li>
                    <li class="list-group-item">Office Number : ${data[1].officeNumber}</li>
                </ul>
            </div>
        </div>
            `;
        } if (data[2].getRole() == `Engineer`) {
            eCards = eCards + `<div class="col-3">
            <div class="card-body">
                <h5 class="card-title">${data[2].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[2].getRole()}</h6> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${data[2].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[2].email}">${data[2].email}</li>
                    <li class="list-group-item">GitHub Username : ${data[2].github}</li>
                </ul>
            </div>
        </div>
            `;
        } if (data[3].getRole() == `Intern`) {
            eCards = eCards + `<div class="col-3">
            <div class="card-body">
                <h5 class="card-title">${data[3].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[3].getRole()}</h6> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${data[3].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[3].email}">${data[3].email}</li>
                    <li class="list-group-item">School : ${data[3].school}</li>
                </ul>
            </div>
        </div>
            `;
        }
    };

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Demo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/style.css">
</head>

<body>
    <header>My Team</header>

    <div class="container">
        <div class="row">
            ${eCards}
        </div>
</body>

</html>
    `;
}

module.exports = generateHTML;