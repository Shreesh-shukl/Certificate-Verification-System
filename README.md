# Certificate Verification System

## Overview

The Certificate Verification System is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system allows administrators to upload and manage student certificate data through an Excel file, and enables students to search for and view their certificates using a unique certificate ID.

## Features

- **Admin Interface**: 
  - Upload Excel files containing student data.
  - Automatically process and store the data in MongoDB.

- **Student Interface**:
  - Search for certificates using a unique certificate ID.
  - View certificate details, including student name, internship domain, and dates.

- **Real-time Data Handling**:
  - Dynamically populate certificate information based on uploaded data.
  
## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Uploads**: Multer
- **Excel Parsing**: xlsx

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- MongoDB

### Steps

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/certificate-verification-system.git
    cd certificate-verification-system
    ```

2. **Install Backend Dependencies**:

    ```bash
    npm install
    ```

3. **Install Frontend Dependencies**:

    ```bash
    cd client
    npm install
    cd ..
    ```

4. **Start MongoDB**:

    Make sure MongoDB is running locally on your machine.

5. **Run the Backend Server**:

    ```bash
    npm start
    ```

6. **Run the Frontend**:

    ```bash
    cd client
    npm start
    ```

7. **Access the Application**:

    Open your browser and go to `http://localhost:3000`.

## Usage

- **Admin**: Upload an Excel file with student data through the admin interface.
- **Student**: Enter a certificate ID in the search interface to view the corresponding certificate details.

## Contributing

Feel free to fork this repository & contribute by submitting a pull request. Contributions to enhance the functionality or improve the code are always welcome!

## License

This project is licensed under the MIT License.

## Acknowledgments

- Special thanks to Zidio Internships for the mentorship and guidance during the development of this project.
