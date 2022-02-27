/* global PlugIn Version Formatter Tag Calendar moveTags deleteObject Alert DateComponents */
(() => {
  const workOnLib = new PlugIn.Library(new Version('1.0'))

  workOnLib.addWorkOnTask = (task) => {
    const trimmedName = task.name.match(/\w.*\w/g)[0]

    const newTask = new Task(`Work on: ${trimmedName}`, task.beginning)
    newTask.repetitionRule = new Task.RepetitionRule('FREQ=DAILY', Task.RepetitionMethod.DeferUntilDate)
  }

  return workOnLib
})()
