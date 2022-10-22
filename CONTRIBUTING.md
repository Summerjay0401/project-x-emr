# PROJECT x EMR Contributing Guide

## Table of Contents

- [Bug Reports / Feature Enhancements](#bug-reports--feature-enhancements)
- [Setup for Local Development](#setup-for-local-development)
  - [Development Prerequisites](#development-prerequisites)
  - [Code Setup](#code-setup)
  - [Tasks](#tasks)
- [Code Contribution](#code-contribution)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [Branching](#branching)
  - [Pull Requests](#pull-requests)
  - [C#](#c)
  - [Typescript](#typescript)

## Bug Reports / Feature Enhancements

All work done is tracked via Trello. Active tickets can be found in the [project-x-emr](https://trello.com/b/xFDJDZFT/emr) project in Jira.

## Setup for Local Development

### Development Prerequisites

1. Install the following if not already installed
   1. [Git](https://git-scm.com/downloads)
   2. [Node.js](https://nodejs.org/en/download/)
   3. [Powershell v7.2 or higher](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?WT.mc_id=THOMASMAURER-blog-thmaure&view=powershell-7#msi)
   4. [VSCode](https://code.visualstudio.com/)

### Code Setup

1. Clone this repository into any directory folder.

```shell
git clone https://github.com/Summerjay0401/project-x-emr.git
```

2. See the [project-emr-backend Getting Started](/src/project-emr-backend/) section to setup app secrets.

3. See the [project-emr-frontend Getting Started](/src/project-emr-frontend/) section to install dependencies and set up environment variables.

4. See the [project-emr-frontend-admin Getting Started](/src/project-emr-frontend-admin/) section to install dependencies and set up environment variables.

5. Open the `project-emr-frontend.code-workspace` workspace in VSCode. This workspace relies on tasks to simplify common development tasks.

See the [Tasks](#tasks) section for details on running and available tasks.

6. Run the `app-init` task. Wait for the dependency installations to complete.

7. Run the `app` task.

8. Access the running applications via browser:

- Patient Site (project-emr-frontend): http://localhost:3000/
- Admin Site (project-emr-frontend-admin): http://localhost:3001/
- API Swagger Docs (project-emr-backend): http://localhost:5065/swagger
- MySql database:
  - Host: localhost
  - Username: root
  - Password:

### Tasks

When working with VSCode, running each application has been split into a number of tasks. Tasks can be executed by hitting `Ctrl + P` and entering `task <taskname>`.

#### Aggregate Tasks

These tasks run multiple applications at once for simplicity.

- `app` runs all tasks required to run the application. This includes the database, web projects and api projects. Executes the `project-emr-frontend`, `project-emr-frontend-admin`, `project-emr-backend`.
- `npm-install` runs `npm install` for all projects that require it. Executes the `npm-install-project-emr-frontend` and `npm-install-project-emr-frontend-admin` tasks.

## Code Contribution

All code code contributions follow the same cadence:

1. Find an unassigned [Trello ticket](https://trello.com/b/xFDJDZFT/emr) that is in the 'TODO' column. Assign the ticket to yourself and move it to the 'In Progress' section. All functionality and business related conversations should take place in the ticket. Create sub-tasks as necessary to break down larger tasks.
2. Create a new branch off of `develop` following the [branching style guide](#branching).
3. Commit code changes following the [git commit messages style guide](#git-commit-messages)
4. Create a pull request against the `develop` branch following the [pull request style guide](#pull-requests) and add at least 1 team member for review. Verify all [status checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) are passing.
5. Once the review is approved, merge the branch into develop and delete the branch.

## Style Guides

### Git Commit Messages

- Messages should be concise and outline high level changes.
- Commit messages with the Trello ticket name. If a change is relevant to multiple tickets, seperate the identifiers with a comma. Try to keep changes to a single ticket at a time when possible.

### Branching

- All development should work agains the `develop` branch
- Branch names should be based off of the template: `<change-type>/<ticket-number>-<description>`
  - `change-type` is either `bug` or `feature`
  - `description` is a short, all lowercase, dash separated description. For example, `my-update`
  - Example branch name: `feature/my-update`.

### Pull Requests

- Pull request should be title case prefixed with the Trello ticket name.
- The pull request template should be followed and filled out appropriately.
- When providing a description, try to provide as much relevent information as possible.

### Javascript

- All code should be linted.
