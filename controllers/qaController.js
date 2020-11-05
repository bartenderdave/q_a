const User = require('../models/User');
const Question = require('../models/Question');
const Answer = require('../models/Answer');


module.exports = {
    get_questions: async(req, res, next) => {
     try{
        const questions = await Question.find();
        res.json(questions);
        console.log(' - questions accessed');
        return(questions);
    }catch(err){
        res.json({message:err});
}
  },
    
    post_questions: async (req, res) => {
    var user_id = req.params.userId;
    var author = await User.findById(user_id);
    
    var question = new Question({
        body: req.body.body,
        category: req.body.category,
        author: await author
    });

    try{
    const savedQuestion = await question.save();
    await author.questions.push(savedQuestion); 
    await author.save();
    res.json(savedQuestion);
    console.log(" - question saved to user");
    }catch(err){
        res.json({message: err});  
}

          
      },
    
    get_question_page: async(req, res, next) => {
     try{
        const question = await Question.findById(req.params.questionId);
        var question_id = req.params.questionId;
        res.render('question');
        console.log(question_id +' accessed');
    }catch(err){
        res.json({message:err});
}
  },
    
    get_question: async(req, res, next) => {
     try{
        const question = await Question.findById(req.params.questionId);
        var question_id = req.params.questionId;
        res.json(question);
        console.log(question_id +' accessed');
    }catch(err){
        res.json({message:err});
}
  },
    
    get_answers: async(req, res, next) => {
     try{
        const answers = await Answer.find({"question":req.params.questionId});
        res.json(answers);
    }catch(err){
        res.json({message:err});
}
  },
        
    post_answers: async (req, res) => {
        var question_id = req.params.questionId;
        var question = await Question.findById(question_id);
    
    var answer = new Answer({
        body: req.body.body,
        question: await question,
        author: req.body.author
    });

    try{
        const savedAnswer = await answer.save();
        await question.answers.push(savedAnswer); 
        await question.save();
        res.json(savedAnswer);
        console.log(question_id + " - answered");
    }catch(err){
        res.json({message: err});  
}

          
      },
        
    get_users: async(req, res, next) => {
     try{
        const users = await User.find({ }, {email:0, password:0} );
        res.json(users);
        console.log(' - users accessed');
    }catch(err){
        res.json({message:err});
}
  },
    
    
    get_answer: async(req, res, next) => {
        res.render('answer');
}   
    
    
  };



    
