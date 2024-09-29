// arrow function
const message = () => {
    const data = "Personal Informasi";
    const name = "Name: Arlan Gorby Jonsend";
    const age = 19 + " years Old";
    const stat = "Singel";
    const major = "Front-End";
    const Facult = "Ilmu Komputer";
    const tinggal = "Airmadid,Unklab,sulawesi Utara";
    const inter = "Programing";
    return `
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }

        table {
            margin: 0 auto;
            border-collapse: collapse;
            width: 50%;
        }

        th, td {
            border: 1px solid black;
            text-align: left;
        }
    </style>
        <h2 align="center">${data}</h2>
        <hr>
        <body>
    <div style="border: 1px solid black; padding: 10px;">
        <tr>
            <th>Nama:</th>
            <td>${name}</td>
        </tr>
        <tr>
            <th>Usia:</th>
            <td>${age}</td>
        </tr>
        <tr>
            <th>Status:</th>
            <td>${stat}</td>
        </tr>
        <tr>
            <th>Jurusan:</th>
            <td>${major}</td>
        </tr>
        <tr>
            <th>Fakultas:</th>
            <td>${Facult}</td>
        </tr>
        <tr>
            <th>Alamat:</th>
            <td>${tinggal}</td>
        </tr>
        <tr>
            <th>Minat:</th>
            <td>${inter}</td>
        </tr>
    </table>
</body>

    `;
};
    
// export
export default message;


