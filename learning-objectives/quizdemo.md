---
sidebar_class_name: hidden
---

# Quiz Demo

This page demonstrates how to use the component: `ReviewQuiz`.

1. Create your quiz question as a separate js file, e.g: `./quiz-questions/questionsWeekOne.js`
2. Export questions as constants, with its content obeying quizdown syntax. See [documentation](https://github.com/bonartm/quizdown-js/blob/main/docs/syntax.md) for syntax info.
3. Remember to **escape** backtick (\`) character
4. Import it in the markdown file:

```js
import ReviewQuiz from "@site/src/components/ReviewQuiz";
import { QUESTION_ONE, QUESTION_TWO } from "./quiz-questions/questionBank.js";
```

5. Then pass the question as content:

```js
<ReviewQuiz content={reviewQuestionOne()} />
```

This will result in a Begin Quiz button below, which you can use to try the quiz.

import ReviewQuiz from '@site/src/components/ReviewQuiz';
import {QUESTION_ONE, QUESTION_TWO} from './quiz-questions/questionBank.js';

## Question One Sample

<ReviewQuiz content={QUESTION_ONE} name="quizdownQuestionOne"/>

## Question Two Sample

<ReviewQuiz content={QUESTION_TWO} name="quizdownQuestionTwo"/>
