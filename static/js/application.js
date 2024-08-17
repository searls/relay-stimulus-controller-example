import { Application } from '@hotwired/stimulus'
import RelayController from 'controllers/relay_controller.js'
import ListAppenderController from 'controllers/list_appender_controller.js'
import CommentatorController from 'controllers/commentator_controller.js'

const application = Application.start()

application.debug = false
window.Stimulus = application

application.register('relay', RelayController)
application.register('list-appender', ListAppenderController)
application.register('commentator', CommentatorController)
