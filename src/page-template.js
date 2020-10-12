function generateHTML(data) {

    var eCards = "";
    for (let i = 0; i < data.length; i++) {
        eCards = eCards + `<div class="col-3">
            <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data[i].getRole()}</h6> 
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID : ${data[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</li>
                `;
        if (data[i].getRole() == `Manager`) {
            eCards = eCards + `
                    <li class="list-group-item">Office Number : ${data[i].officeNumber}</li>
                </ul>
            </div>
        </div>
            `;
        } if (data[i].getRole() == `Engineer`) {
            eCards = eCards + `
                    <li class="list-group-item">GitHub Username : ${data[i].github}</li>
                </ul>
            </div>
        </div>
            `;
        } else if (data[i].getRole() == `Intern`) {
            eCards = eCards + `
                    <li class="list-group-item">School : ${data[i].school}</li>
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