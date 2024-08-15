import { Router } from 'express'
import * as goalsCtrl from '../controllers/goals.js'

const router = Router()

router.get('/', goalsCtrl.index)

export {
  router
}