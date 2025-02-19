## Instalation

- Changed the CLI version which was previously 18 on my local machine.
- Installed the latest Angular CLI Version, Angular CLI: 19.1.7 and Angular: 19.1.6.
- Created Angular Application using ng new angular-app.
- Installed Bootstrap latest version: npm i @ng-bootstrap/ng-bootstrap.

## Installation Guide 
- Clone the repository.
- Install the required dependencies using npm install.
- Start the Angular application ng serve / ng dev.

## Approach

- Created modules folder in app/modules, created user-listing and user-tasks components.
- For layouts, created layout folder with header and footer components.
-Created models for Interfaces: User and Task Interfaces.
- Created service user.service.ts, which is used for fetching user and task data based on the user.
- Created service state.service.ts, a service to manage tasks across components.
- Created a pipe for filtering (all, completed, and incomplete) statuses: user-task-filter.pipe.ts. By default, all is selected.
- Created routing and added additional components like HomeComponent and NotFoundComponent (this will show a 404 page for wildcard routes).
- Created routes along with lazy-loaded routes (app.routes.ts) for users and tasks.

- User service is responsible for making API requests to the server. This service is used in UserListingComponent and UserTaskComponent. The service has functions to fetch the users and tasks.

- State service is used to store the tasks based on the userId. If userId is not in the tasks JSON array, it will call the todos API. If the userId is present, it will load the data from the store.

## Improvements/Features

- Created pipes for filtering tasks.
- Used services for state management.
- Created routes including 404 page routes if the user enters an invalid or unknown route.
Followed the modular structure.
- Created interfaces for User and Task.
- When going back and forth between the components (like from Task component to User component or to Home component), the completed (status) data is persisted. (If you refresh the page, data will be lost as it is not stored in localStorage, but you can navigate between components and data will be persisted.)
- Added the count of users in the user listing.

## Critical issues resolved
- In task filter pipe, if not records found would not display due to pipe functionality. resolved it using this article https://stackoverflow.com/questions/48162079/using-ngif-along-with-angular4-custom-pipes

- Lazy loading routes had issue wghen loading child routes, referred this patially and other source https://stackoverflow.com/questions/77482678/no-provider-for-httpclient 

## Application deployed on Vercel
https://user-task-management-sepia.vercel.app/
















