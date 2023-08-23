# About

This is an OmniFocus plug-in that is designed to assist with managing 'Work on...' tasks.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from the internet!)_

## Known issues 

Refer to ['issues'](https://github.com/ksalzke/work-on-omnifocus-plug-in/issues) for known issues and planned changes/enhancements.

# Installation & Set-Up

## Installation

1. Download the [latest release](https://github.com/ksalzke/work-on-omnifocus-plug-in/releases/latest).
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file to your OmniFocus plug-in library folder (or open it to install).

# Actions

This plug-in contains the following actions:

## Add 'Work On...' Task

This action runs `addWorkOnTask` below, creating a task similar to the following:

!['Work on' task](https://user-images.githubusercontent.com/16893787/156442335-c3419809-8c61-4ef1-8928-b51f66177de0.png)

## Complete 'Work On...' Task

This action runs the 'work on...' task as completed and runs `onComplete` below. ('Stop working on' not pictured.)

![Completed task prompt](https://user-images.githubusercontent.com/16893787/156442639-5ae41b7a-47e3-43e4-96c1-b45a2f851387.png)

# Functions

This plug-in contains the following functions within the `workOnLib` library.

## `addWorkOnTask (task: Task)`

This adds a new repeating task as a child of the provided task, with the name "Work on: <Task>". If the original task name has characters at the start or end that are 'non-word' characters (i.e. characters other than a-z, A-Z, 0-9, and underscore), these are disregarded in the name.

The 'work on' task is set to repeat every 60 minutes.

## `onComplete (task: Task)`

_Asynchronous._ This function is designed to be run on a previously-created 'work on' task. If a task that does not match the set format is passed as input, this function will exit without processing the task further.

It presents the user with the following options, of which more than one may be selected:

1. **Defer until tomorrow.** Defers the 'work on' task until 12am tomorrow

2. **Defer until a future date.** Defers the 'work on' task until a future date, specified in a second dialogue.

2. **Schedule work tomorrow.** (Only shown if my [Scheduling plug-in](https://github.com/ksalzke/scheduling-omnifocus-plugin) is also installed and the task is not already scheduled for tomorrow.) This 'schedules' the next repetition of the 'work on' task for tomorrow.

3. **Schedule work for a future date.** (Only shown if my [Scheduling plug-in](https://github.com/ksalzke/scheduling-omnifocus-plugin) is also installed) This prompts the user to select a date and 'schedules' the next repetition of the 'work on' task for that date.

4. **Mark as complete.** This marks the parent task/project as complete. (If my ['Custom Complete' plug-in](https://github.com/ksalzke/custom-complete-omnifocus-plugin) is installed, the custom complete function is used.)

5. **Stop working on.** This marks the task complete then removes subsequent repetitions.
