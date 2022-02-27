/* global PlugIn */
(() => {
  const action = new PlugIn.Action(async function (selection, sender) {
   
    selection.projects.forEach(project => {
      
      const trimmedName = project.name.match(/\w.*\w/g)[0]

      const newTask = new Task(`Work on: ${trimmedName}`, project.beginning)
      newTask.repetitionRule = new Task.RepetitionRule('FREQ=DAILY', Task.RepetitionMethod.DeferUntilDate)
    })

  })

  action.validate = function (selection, sender) {
    return selection.projects.length > 0 
  }

  return action
})()
