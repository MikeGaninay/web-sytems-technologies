<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
    <style>
        table {
            width: 100%;
            font-family: arial, sans-serif;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #000000;
            padding: 20px;
            text-align: left;
            width: 50%;
        }
        tr:nth-child(even) {
            background-color: #df5cf6;
        }
        input {
            height: 35px;
        }
        select {
            height: 40px;
        }
        input[type=submit]:hover {
            background-color: rgb(127, 217, 255);
        }
    </style>
</head>
<body>
    <h1>Student Registration Form</h1>
    <table>
        <tr>
            <th>First Name</th>
            <th><input size="70"></th>
        </tr>
        <tr>
            <td>Last Name</td>
            <th><input size="70"></th>
        </tr>
        <tr>
            <td>Email</td>
            <th><input size="70"></th>
        </tr>
        <tr>
            <td>Gender</td>
            <td>
                <select style="width:100%" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <th><input size="100"></th>
        </tr>
        <tr>
            <td>Address</td>
            <th><input size="100"></th>
        </tr>
        <tr>
            <td>City</td>
            <th><input size="100"></th>
        </tr>
        <tr>
            <td>Zip Code</td>
            <th><input size="100"></th>
        </tr>
        <tr>
            <td></td>
            <th><input type="submit"></th>
        </tr>
    </table>
</body>
</html>
