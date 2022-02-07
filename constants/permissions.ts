import Actions from '@interfaces/Actions'
import Roles from '@interfaces/Roles'

const permissions = {
  [Roles.Cadet]: { [Actions.passHomework]: true },
  [Roles.Teacher]: {
    [Actions.createHomework]: true,
    [Actions.deleteHomework]: true,
    [Actions.editHomework]: true,
    [Actions.checkHomework]: true,

    [Actions.createLesson]: true,
    [Actions.editLesson]: true,
  },
  [Roles.Admin]: {
    [Actions.createHomework]: true,
    [Actions.deleteHomework]: true,
    [Actions.editHomework]: true,
    [Actions.checkHomework]: true,

    [Actions.createLesson]: true,
    [Actions.editLesson]: true,
    [Actions.deleteLesson]: true,

    [Actions.createSubject]: true,
    [Actions.deleteSubject]: true,
    [Actions.editSubject]: true,
  },
}

export default permissions
