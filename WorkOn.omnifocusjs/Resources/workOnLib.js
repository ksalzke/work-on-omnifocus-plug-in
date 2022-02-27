/* global PlugIn Version Formatter Tag Calendar moveTags deleteObject Alert DateComponents */
(() => {
  const workOnLib = new PlugIn.Library(new Version('1.0'))

  workOnLib.addWorkOnTask = (task) => {
    const trimmedName = task.name.match(/\w.*\w/g)[0]

    const newTask = new Task(`Work on: ${trimmedName}`, task.beginning)
    newTask.repetitionRule = new Task.RepetitionRule('FREQ=DAILY', Task.RepetitionMethod.DeferUntilDate)
  }
  
  workOnLib.onComplete = async (task) => {
    const trimmedName = task.name.match(/Work on: (.*)/)[1]

    // NB using form as alert not being processed correctly
    const form = new Form()
    const options = ['Continue work later', 'Mark as complete']
    form.addField(new Form.Field.Option('nextAction', 'Next action', options, null, options[0]))

    await form.show(`You worked on '${trimmedName}'.\nWhat do you want to do next?`, 'OK')

    switch (form.values.nextAction) {
      case 'Continue work later':
        break
      case 'Mark as complete':
        task.parent.markComplete()
        break
    }

  }

  return workOnLib
})()
