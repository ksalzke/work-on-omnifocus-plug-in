/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {

    const selected = Array.from(selection.tasks).concat(Array.from(selection.projects).map(p => p.task))
   
    for (const task of selected) {
      const trimmedName = task.name.match(/\w.*\w/g)[0]

      const newTask = new Task(`Work on: ${trimmedName}`, task.beginning)
      newTask.repetitionRule = new Task.RepetitionRule('FREQ=DAILY', Task.RepetitionMethod.DeferUntilDate)
    }

  })

  action.validate = function (selection, sender) {
    return selection.tasks.length > 0 || selection.projects.length > 0
  }

  return action
})()
