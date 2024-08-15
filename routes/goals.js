import { Router } from 'express'
import * as goalsCtrl from '../controllers/goals.js'
import { isSignedIn } from '../middleware/is-signed-in.js'


const router = Router()

router.get('/', goalsCtrl.index)
router.get('/new', isSignedIn, goalsCtrl.new)
router.post('/', isSignedIn, goalsCtrl.create)
router.get('/:flightId', isSignedIn, goalsCtrl.show)
router.delete('/:goalId', isSignedIn, goalsCtrl.delete)



export {
  router
}