/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
    const task = selection.tasks[0]

    task.markComplete()
    await this.workOnLib.onComplete(task)
  })

  action.validate = function (selection, sender) {
    return selection.tasks.length === 1 && selection.tasks[0].name.includes('Work on: ')
  }

  return action
})()
