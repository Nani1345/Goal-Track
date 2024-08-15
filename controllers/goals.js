import { Goal } from '../models/goal.js'

async function index(req, res) {
  try {
    const goals = await Goal.find({})
    res.render('goals/index', {
        goals
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

export {
  index
}