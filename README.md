### 1. **Project Overview**
   - **Project Title**: Employee Management System
   - **Description**: A web application to manage employee records, including adding, viewing, and deleting employees. The app provides a user-friendly interface using Angular and Spring Boot for front-end and back-end development respectively.
   - **Technologies Used**: 
     - **Frontend**: Angular, Angular Material, TypeScript, HTML, CSS
     - **Backend**: Java, Spring Boot, Hibernate, MySQL
     - **Other**: REST APIs, Basic Auth (for authentication)
   - **Purpose**: To provide a simple, user-friendly system to manage employee data, including adding new employees, viewing existing ones, and removing employees.

---

### 2. **Project Architecture**
   - **Frontend**: 
     - The frontend is developed using Angular. Angular Material components are used for UI elements like buttons, cards, and toolbars.
     - The Angular Router is used to navigate between different pages (Home, Employee List, Add Employee, etc.).
   - **Backend**: 
     - Spring Boot is used to create REST APIs that handle requests for employee data (CRUD operations).
     - Hibernate is used for ORM (Object Relational Mapping) with MySQL to interact with the database.
   - **Database**: 
     - MySQL is used to store employee data.

---

### 3. **Installation Guide**
   - **Frontend Setup**:
     1. Clone the repository:
        ```bash
        git clone https://github.com/rohit-3003/employee-management-system.git
        ```
     2. Navigate to the project folder:
        ```bash
        cd EMS-frontend
        ```
     3. Install dependencies:
        ```bash
        npm install
        ```
     4. Run the frontend:
        ```bash
        ng serve
        ```
     5. The application will be available at `http://localhost:4200`.

   - **Backend Setup**:
     1. Clone the repository:
        ```bash
        git clone https://github.com/rohit-3003/employee-management-system.git
        ```
     2. Navigate to the backend project folder:
        ```bash
        cd employee-management-system-Backend
        ```
     3. Install dependencies (Maven):
        ```bash
        mvn install
        ```
     4. Start the Spring Boot application:
        ```bash
        mvn spring-boot:run
        ```
     5. The backend will be available at `http://localhost:8080`.

---

### 4. **API Documentation**
   - **Get All Employees**:
     - **Endpoint**: `GET /api/employees`
     - **Description**: Retrieves a list of all employees.
     - **Response**: 
       ```json
       [
         {
           "id": 1,
           "name": "John Doe",
           "position": "Software Engineer",
           "salary": 50000
         },
         ...
       ]
       ```

   - **Get Employee by ID**:
     - **Endpoint**: `GET /api/employees/{id}`
     - **Description**: Retrieves details of an employee by ID.
     - **Response**:
       ```json
       {
         "id": 1,
         "name": "John Doe",
         "position": "Software Engineer",
         "salary": 50000
       }
       ```

   - **Create Employee**:
     - **Endpoint**: `POST /api/employees`
     - **Description**: Adds a new employee.
     - **Request Body**:
       ```json
       {
         "name": "Jane Smith",
         "position": "Project Manager",
         "salary": 60000
       }
       ```
     - **Response**: 
       ```json
       {
         "message": "Employee added successfully."
       }
       ```

   - **Delete Employee**:
     - **Endpoint**: `DELETE /api/employees/{id}`
     - **Description**: Deletes an employee by ID.
     - **Response**:
       ```json
       {
         "message": "Employee deleted successfully."
       }
       ```

---

### 5. **Frontend Component Structure**
   - **AppComponent**: The root component, which contains the header and the main navigation layout.
   - **HomeComponent**: Displays the home page with options to view, add, or delete employees.
   - **EmployeeListComponent**: Displays a list of all employees and allows the user to delete an employee.
   - **AddEmployeeComponent**: Contains a form to add a new employee.
   - **Services**: Handles the interaction between the frontend and backend using HTTP requests (e.g., `EmployeeService`).

---

### 6. **UI/UX Design**
   - **Home Screen**: 
     - The home page contains three main buttons: View Employees, Add Employee, and Delete Employee.
     - The layout is responsive and uses Angular Material components for a clean and professional design.
   - **Employee List Screen**: 
     - A table displaying the list of employees with option delete them.
   - **Add Employee Screen**: 
     - A form that collects employee details such as name, email, and designation.
   - **Delete Employee Screen**: 
     - A list with delete buttons for each employee to remove their records.

---

### 8. **Styling and Responsiveness**
   - The application uses CSS and Angular Material components for styling.
   - The layout is designed to be responsive and adjusts to different screen sizes, ensuring a smooth user experience on mobile devices, tablets, and desktops.

---

### 9. **Future Improvements**
   - **User Authentication**: Implement user authentication and authorization.
   - **Search/Filter Employees**: Add search and filtering functionality to easily find employees.
   - **Pagination**: Implement pagination for the employee list if the data grows large.

---

### 10. **Conclusion**
   - The Employee Management System is a simple, efficient, and modern solution to manage employee records.
   - The application is built using the latest technologies such as Angular and Spring Boot, ensuring it is scalable and easy to maintain.

---

### 11. **Appendix**
   - **Contact Information**: 
     - Maintainer: Rohit Shirsat
     - Email: rohitshirsat100@gmail.com

---
