---
sidebar_class_name: hidden
---

# Quiz Demo

This page demonstrates how to use the component: `ReviewQuiz`.

1. Create your quiz question as a separate js file, e.g: `./quiz-questions/questionsWeekOne.js`
2. Export a function that returns a multiline string in quizdown format
3. Remember to **escape** backtick (\`) character
4. Import it in the markdown file:

```js
import ReviewQuiz from "@site/src/components/ReviewQuiz";
import reviewQuestionOne from "./quiz-questions/questionsWeekOne";
```

5. Then pass the question as content:

```js
<ReviewQuiz content={reviewQuestionOne()} />
```

6. See [documentation](https://github.com/bonartm/quizdown-js/blob/main/docs/syntax.md) for syntax info.

This will result in a Begin Quiz button below, which you can use to try the quiz.

import ReviewQuiz from '@site/src/components/ReviewQuiz';
import reviewQuestionOne from './quiz-questions/questionsWeekOne';

<ReviewQuiz content={reviewQuestionOne()}/>
