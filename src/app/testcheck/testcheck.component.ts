import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-testcheck',
  templateUrl: './testcheck.component.html'
})
export class TestCheckComponent {
  grade: number;
  plus = 0;
  minus = 0;
  testQuestions = [{question: '1  How old are you?', ans1: 'I have 16', ans2: 'I am 16', ans3: 'I have 16 years', ans4: 'I am 16 years', q: 'q1'},
    // tslint:disable-next-line:max-line-length
    {question: '2 Are you having a nice time?', ans1: 'Yes, I’m nice.', ans2: 'Yes, I’m having it.', ans3: 'Yes, I am.', ans4: 'Yes, it is.', q: 'q2'},
    {question: '3 Could you pass the salt please?', ans1: 'Over there.', ans2: 'I don’t know.', ans3: 'Help yourself.', ans4: 'Here you are.', q: 'q3'},
    {question: '4 Yesterday I went __________ bus to the National Museum.', ans1: 'on', ans2: 'in', ans3: 'by', ans4: 'with', q: 'q4'},
    {question: '5 Sue and Mike __________ to go camping.', ans1: 'wanted', ans2: 'said', ans3: 'made', ans4: 'talked', q: 'q5'},
    {question: '6.  Who’s calling, please?', ans1: 'Just a moment.', ans2: 'It’s David Parker.', ans3: 'I’ll call you back.', ans4: 'Speaking.', q: 'q6'},
    {question: '7 They were __________ after the long journey, so they went to bed.', ans1: 'hungry', ans2: 'hot', ans3: 'lazy', ans4: 'tired', q: 'q7'},
    // tslint:disable-next-line:max-line-length
    {question: '8 Can you tell me the __________ to the bus station?', ans1: 'road', ans2: 'way', ans3: 'direction', ans4: 'street', q: 'q8'},
    {question: '9 __________ you remember to buy some milk?', ans1: 'Have', ans2: 'Do', ans3: 'Should', ans4: 'Did', q: 'q9'},
    {question: '10  - Don’t forget to put the rubbish out. - I’ve __________ done it!', ans1: 'yet', ans2: 'still', ans3: 'already', ans4: 'even', q: 'q10'}
  ];

  // tslint:disable-next-line:typedef
  submitAnswers() {
    alert('Спасибо за участие! Ответы обрабатываются.');
  }


}
