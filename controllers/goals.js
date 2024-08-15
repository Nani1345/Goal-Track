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

async function newGoals(req, res) {
    try {
      
        req.body.completed = !!req.body.completed
        req.body.owner = req.session.user._id  
        const goals = await Goal.find({})
        res.render('goals/new', {
        title: 'Add Goals',
        goals,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/goals')
    }
  }

async function create(req, res) {
    try {

        req.body.completed = !!req.body.completed
        req.body.owner = req.session.user._id
        await Goal.create(req.body)
        res.redirect('/goals')    
    } catch (error) {
        console.log(error)
        res.redirect('/goals')
    }
  }

  async function show(req, res) {
    try {
        // req.body.owner = req.session.user._id
      const goal = await Goal.findById(req.params.goalId)
    //   .populate(['note', 'notes.content'])
      res.render('goals/show', {
        goal
      })
    } catch (error) {
      console.log(error)
      res.redirect('/goals')
    }
  }

  async function deleteGoal(req, res) {
    try {
      const goal = await Goal.findById(req.params.goalId)
    //   if (goal.owner.equals(req.session.user._id)) {
        await goal.deleteOne()
        res.redirect('/goals')
    //   } else {
    //     throw new Error(`🚫 Not authorized 🚫`)
    //   }
    } catch (error) {
      console.log(error)
      res.redirect('/goals')
    }
  }


  async function edit(req, res) {
    try {
      const goal = await Goal.findById(req.params.goalId)
      res.render('goals/edit', {
        goal
      })
    } catch (error) {
      console.log(error)
      res.redirect('/goals')
    }
  }

  

export {
  index,
  newGoals as new,
  create,
  show,
  deleteGoal as delete,
  edit,

}