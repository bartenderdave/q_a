const { Router } = require('express');
const qaController = require('../controllers/qaController');

const router = Router();

router.get('/questions', qaController.get_questions);

router.get('/users', qaController.get_users);

router.post('/:userId/questions', qaController.post_questions);

router.get('/questions/:questionId', qaController.get_question_page);

router.get('/:questionId', qaController.get_question);

router.post('/:questionId/answers', qaController.post_answers);

router.get('/:questionId/answers', qaController.get_answers);

router.get('/:questionId/answer', qaController.get_answer);





module.exports = router;



