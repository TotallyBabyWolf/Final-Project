# Patch Notes

## Version 0.1 - Created README file
- Created README file


## Version 0.2 - Created initial architecture
- Architecture used: MVC
- Created files:
  - .env.example
  - server.js
  - src
    * app.js
    * controller
      - athleteController.js
      - teamController.js
      - scripts.js
    * database
      - dbConnect.js
    * models
      - athleteModel.js
      - teamModel.js
    * routes
      - athleteRoutes.js
      - teamRoutes.js
    * tests
      - API.test.js

- Created basic methods:
  - Athletes CRUD
    * Create
    * Login
    * Get all
    * Find by ID
    * Find by query
    * Update info
    * Delete info
  - Teams CRUD
    * Create
    * Find all
    * Find by ID
    * Find by query
    * Update admins list
    * Enter/Leave team
    * Remove athlete
    * Delete team

- Created respectives routes for created methods

- Created script for token verifier

- Created tests


## Version 0.3.1 - Changed the name of the repository
- Changed the name from "Final-Project" to "Transpire"

- teamController.js
  - Updated and corrected code

- teamModel.js
  - Updated the name of field "transFriendly_Exclusive" to "friendlyOrExclusive"
  - Updated validator

- API.test.js
  - Created tests for teamController.js


## Version 0.3.2 - README update
- README updated

 - teamController.js
   - Refactored code


## Version 0.3.3 - Test and code refactoring
- teamController.js
  - Refactored code

- teamModel.js
  - Added requirement for 'athletes' field

- API.test.js
  - Created new tests
  - Refactored previous tests

- README updated


## Version 0.3.4 - README QoL update
- README updated for QoL


## Version 0.3.5 - README update
- README updated (grammar)


## Version 0.3.6 - Code refactoring + tests
- teamController.js
  - Refactored code

- teamRoutes.js
  - Updated route "route.get("/:id", controller.findTeamById);" to "route.get("/find/:id", controller.findTeamById);"

- Created Patch Notes file


## Version 0.3.7 - Code refactoring + tests
- teamController.js
  - Refactored code

- All methods tested and running!
- Start of development of stress tests


## Version 0.3.8 - Stres testing
- Created stres tests

- athleteController
  - Refactored code