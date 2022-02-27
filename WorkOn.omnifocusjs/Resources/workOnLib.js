/* global PlugIn Version Formatter Tag Calendar moveTags deleteObject Alert DateComponents */
(() => {
  const workOnLib = new PlugIn.Library(new Version('1.0'))

  workOnLib.addWorkOnTask = (task) => {
    const trimmedName = task.name.match(/\w.*\w/g)[0]

    const newTask = new Task(`Work on: ${trimmedName}`, task.beginning)
    newTask.repetitionRule = new Task.RepetitionRule('FREQ=HOURLY', Task.RepetitionMethod.DeferUntilDate)
  }
  
  workOnLib.onComplete = async (task) => {
    const trimmedName = task.name.match(/Work on: (.*)/)[1]

    // NB using form as alert not being processed correctly
    const form = new Form()
    const options = ['Defer until tomorrow', 'Mark as complete']

    // if scheduling plug-in is also installed, add option to schedule for tomorrow or a future date
    const schedulingPlugin = PlugIn.find('com.KaitlinSalzke.Scheduling')
    if (schedulingPlugin !== null) options.splice(1, 0, 'Schedule work tomorrow', 'Schedule work for a future date')

    form.addField(new Form.Field.MultipleOptions('nextActions', 'Next actions', options, null, [options[0]]))

    await form.show(`You worked on '${trimmedName}'.\nWhat do you want to do next?`, 'OK')

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    for (const nextAction of form.values.nextActions) {
      switch (nextAction) {
        case 'Defer until tomorrow':
          task.deferDate = Calendar.current.startOfDay(tomorrow)
          break
        case 'Schedule work tomorrow':
          await schedulingPlugin.library('schedulingLib').rescheduleTask(task, tomorrow)
          break
        case 'Schedule work for a future date':
          await schedulingPlugin.library('schedulingLib').promptAndReschedule([task])
          break
        case 'Mark as complete':
          task.parent.markComplete()
          break
      }
    }
  }

  return workOnLib
})()
