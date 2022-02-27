/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
    const selected = Array.from(selection.tasks).concat(Array.from(selection.projects).map(p => p.task))
    for (const task of selected) this.workOnLib.addWorkOnTask(task)
  })

  action.validate = function (selection, sender) {
    return selection.tasks.length > 0 || selection.projects.length > 0
  }

  return action
})()
