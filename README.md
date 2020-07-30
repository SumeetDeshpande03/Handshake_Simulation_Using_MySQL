# Handshake Web Application Simulation (Lab Work):
Designed & developed a replica of the Handshake Web Application which is widely used by college students to apply for jobs and by various employers to post jobs. This project was developed as a part of Lab Work for the Graduate Course CMPE 273 (Enterprise Distributed Systems) at San Jose State University.

# System Architecture and Design:

The project was developed leveraging a simplified and efficient architecture as follows:

1.	ReactJS: Used to create the front-end of the application. Made use of a component-based design which involves the passing and interacting of all the major components of the application. Helped in improving the application performance as ReactJS is a light-weight library built over JavaScript, which doesn't re-render the entire DOM on change of components on the browser and re-renders only the changed components.

2.	NodeJS: Used to create the back-end of the application wherein all the calls to APIs were made. Made connection to the Database by using the Express framework and was used to fetch all the data accordingly on demand. It was also the crux of the application as this was where all the business logic of the application exists.

3.	MySQL: Used to create the database of the application and was used to query for all the necessary values as per the requirements

4.	AWS Cloud EC2 instance: This was where the entire application including the front end and back end was deployed. There were two EC2 instances created and even an RDS instance created for deployment of the database.

