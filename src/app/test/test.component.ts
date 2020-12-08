import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
  grade: number;
  level: string;
  testForm: FormGroup;
  good = 0;
  point: number;
  q1: FormControl = new FormControl();
  q2: FormControl = new FormControl();
  q3: FormControl = new FormControl();
  q4: FormControl = new FormControl();
  q5: FormControl = new FormControl();
  q6: FormControl = new FormControl();
  q7: FormControl = new FormControl();
  q8: FormControl = new FormControl();
  q9: FormControl = new FormControl();
  q10: FormControl = new FormControl();
  q11: FormControl = new FormControl();
  q12: FormControl = new FormControl();
  q13: FormControl = new FormControl();
  q14: FormControl = new FormControl();
  q15: FormControl = new FormControl();
  q16: FormControl = new FormControl();
  q17: FormControl = new FormControl();
  q18: FormControl = new FormControl();
  q19: FormControl = new FormControl();
  q20: FormControl = new FormControl();
  q21: FormControl = new FormControl();
  q22: FormControl = new FormControl();
  q23: FormControl = new FormControl();
  q24: FormControl = new FormControl();
  q25: FormControl = new FormControl();
  q26: FormControl = new FormControl();
  q27: FormControl = new FormControl();
  q28: FormControl = new FormControl();
  q29: FormControl = new FormControl();
  q30: FormControl = new FormControl();
  q31: FormControl = new FormControl();
  q32: FormControl = new FormControl();
  q33: FormControl = new FormControl();
  q34: FormControl = new FormControl();
  q35: FormControl = new FormControl();
  q36: FormControl = new FormControl();
  q37: FormControl = new FormControl();
  q38: FormControl = new FormControl();
  q39: FormControl = new FormControl();
  q40: FormControl = new FormControl();
  q41: FormControl = new FormControl();
  q42: FormControl = new FormControl();
  q43: FormControl = new FormControl();
  q44: FormControl = new FormControl();
  q45: FormControl = new FormControl();
  q46: FormControl = new FormControl();
  q47: FormControl = new FormControl();
  q48: FormControl = new FormControl();
  q49: FormControl = new FormControl();
  q50: FormControl = new FormControl();
  q51: FormControl = new FormControl();
  q52: FormControl = new FormControl();
  q53: FormControl = new FormControl();
  q54: FormControl = new FormControl();
  q55: FormControl = new FormControl();
  q56: FormControl = new FormControl();
  q57: FormControl = new FormControl();
  q58: FormControl = new FormControl();
  q59: FormControl = new FormControl();
  q60: FormControl = new FormControl();
  testQuestions = [
    {question: '1. How old are you?', ans1: 'I have 16', ans2: 'I am 16', ans3: 'I have 16 years', ans4: 'I am 16 years', q: 'q1'},
    // tslint:disable-next-line:max-line-length
    {question: '2. Are you having a nice time?', ans1: 'Yes, I’m nice.', ans2: 'Yes, I’m having it.', ans3: 'Yes, I am.', ans4: 'Yes, it is.', q: 'q2'},
    {question: '3. Could you pass the salt please?', ans1: 'Over there.', ans2: 'I don’t know.', ans3: 'Help yourself.', ans4: 'Here you are.', q: 'q3'},
    {question: '4. Yesterday I went __________ bus to the National Museum.', ans1: 'on', ans2: 'in', ans3: 'by', ans4: 'with', q: 'q4'},
    {question: '5. Sue and Mike __________ to go camping.', ans1: 'wanted', ans2: 'said', ans3: 'made', ans4: 'talked', q: 'q5'},
    {question: '6. Who’s calling, please?', ans1: 'Just a moment.', ans2: 'It’s David Parker.', ans3: 'I’ll call you back.', ans4: 'Speaking.', q: 'q6'},
    {question: '7. They were __________ after the long journey, so they went to bed.', ans1: 'hungry', ans2: 'hot', ans3: 'lazy', ans4: 'tired', q: 'q7'},
    // tslint:disable-next-line:max-line-length
    {question: '8. Can you tell me the __________ to the bus station?', ans1: 'road', ans2: 'way', ans3: 'direction', ans4: 'street', q: 'q8'},
    {question: '9. __________ you remember to buy some milk?', ans1: 'Have', ans2: 'Do', ans3: 'Should', ans4: 'Did', q: 'q9'},
    {question: '10.  - Don’t forget to put the rubbish out. - I’ve __________ done it!', ans1: 'yet', ans2: 'still', ans3: 'already', ans4: 'even', q: 'q10'},
    {question: '11. You don’t need to bring __________ to eat.', ans1: 'some', ans2: 'a food', ans3: 'many', ans4: 'anything', q: 'q11'},
    // tslint:disable-next-line:max-line-length
    {question: '12. What about going to the cinema?', ans1: 'Good idea!', ans2: 'Twice a month.', ans3: 'It’s Star Wars.', ans4: 'I think so', q: 'q12'},
    // tslint:disable-next-line:max-line-length
    {question: '13. - What would you like, Sue? - I’d like the same __________ Michael please.', ans1: 'that', ans2: 'as', ans3: 'for', ans4: 'had', q: 'q13'},
    // tslint:disable-next-line:max-line-length
    {question: '14. __________ people know the answer to that question.', ans1: 'Few', ans2: 'Little', ans3: 'Least', ans4: 'A little', q: 'q14'},
    // tslint:disable-next-line:max-line-length
    {question: '15. It’s not __________ to walk home by yourself in the dark.', ans1: 'sure', ans2: 'certain', ans3: 'safe', ans4: 'problem', q: 'q15'},
    {question: '16. __________ sure all the windows are locked.', ans1: 'Take', ans2: 'Have', ans3: 'Wait', ans4: 'Make', q: 'q16'},
    {question: '17. I’ll go and __________ if I can find him.', ans1: 'see', ans2: 'look', ans3: 'try', ans4: 'tell', q: 'q17'},
    {question: '18. What’s the difference __________ football and rugby?', ans1: 'from', ans2: 'with', ans3: 'for', ans4: 'between', q: 'q18'},
    {question: '19. My car needs __________ .', ans1: 'repairing', ans2: 'to repair', ans3: 'to be repair', ans4: 'repair', q: 'q19'},
    // tslint:disable-next-line:max-line-length
    {question: '20. Tim was too __________ to ask Monika for a dance.', ans1: 'worried', ans2: 'shy', ans3: 'selfish', ans4: 'polite', q: 'q20'},
    // tslint:disable-next-line:max-line-length
    {question: '21. I haven’t had so much fun __________ I was a young boy!', ans1: 'when', ans2: 'for', ans3: 'during', ans4: 'since', q: 'q21'},
    // tslint:disable-next-line:max-line-length
    {question: '22. Sorry, I don’t know __________ you’re talking about.', ans1: 'that', ans2: 'what', ans3: 'which', ans4: 'why', q: 'q22'},
    {question: '23. I’m afraid you __________ smoke in here.', ans1: 'could not', ans2: 'don’t have to', ans3: 'are not allowed to', ans4: 'can’t be', q: 'q23'},
    {question: '24. Everyone wanted to go out __________ John.', ans1: 'apart', ans2: 'unless', ans3: 'however', ans4: 'except', q: 'q24'},
    // tslint:disable-next-line:max-line-length
    {question: '25. Honestly! I saw a ghost! I’m not __________ it up!', ans1: 'having', ans2: 'laughing', ans3: 'making', ans4: 'joking', q: 'q25'},
    // tslint:disable-next-line:max-line-length
    {question: '26. Eat everything up! I don’t want to see anything __________ on your plate!', ans1: 'left', ans2: 'missing', ans3: 'put', ans4: 'staying', q: 'q26'},
    {question: '27. Take the A20 __________ the roundabout, then turn left.', ans1: 'right', ans2: 'as far as', ans3: 'along', ans4: 'heading north', q: 'q27'},
    // tslint:disable-next-line:max-line-length
    {question: '28. I really hope you can find a __________ to this problem.', ans1: 'result', ans2: 'way', ans3: 'conclusion', ans4: 'solution', q: 'q28'},
    {question: '29.Could you watch my bag while I go and get a cup of tea?', ans1: 'Of course!', ans2: 'Never mind.', ans3: 'If you don’t mind.', ans4: 'It doesn’t matter.', q: 'q29'},
    // tslint:disable-next-line:max-line-length
    {question: '30. In my country, it is __________ the law to watch an X-rated film if you are under eighteen.', ans1: 'under', ans2: 'against', ans3: 'over', ans4: 'beyond', q: 'q30'},
    // tslint:disable-next-line:max-line-length
    {question: '31. Rebecca had to __________ the invitation, as she was busy studying for her exams.', ans1: 'take off', ans2: 'put back', ans3: 'turn down', ans4: 'get away', q: 'q31'},
    // tslint:disable-next-line:max-line-length
    {question: '32. Police __________ that a terrorist reviewsListAdmin might be behind the kidnapping.', ans1: 'suppose', ans2: 'fancy', ans3: 'suspect', ans4: 'accuse', q: 'q32'},
    // tslint:disable-next-line:max-line-length
    {question: '33. When Christopher smiles, he __________ me of his grandfather.', ans1: 'remembers', ans2: 'recalls', ans3: 'rethinks', ans4: 'reminds', q: 'q33'},
    // tslint:disable-next-line:max-line-length
    {question: '34. The wonderful smell of freshly __________ coffee hit us as we entered the store.', ans1: 'crushed', ans2: 'smashed', ans3: 'ground', ans4: 'pressed', q: 'q34'},
    {question: '35.Mike’s dad wouldn’t __________ him go to school with a red streak in his hair.', ans1: 'allow', ans2: 'permit', ans3: 'accept', ans4: 'let', q: 'q35'},
    {question: '36. If only I __________ made that phone call!', ans1: 'wasn`t', ans2: 'didn`t', ans3: 'hadn`t', ans4: 'haven`t', q: 'q36'},
    {question: '37. I like Mary for her friendly smile and her __________ of humour.', ans1: 'sense', ans2: 'manner', ans3: 'way', ans4: 'impression', q: 'q37'},
    // tslint:disable-next-line:max-line-length
    {question: '38. These shoes are very __________ for walking in the mountains.', ans1: 'practical', ans2: 'functional', ans3: 'realistic', ans4: 'active', q: 'q38'},
    {question: '39. __________ of the credit for our success has to go to the Chairman, Peter Lewis.', ans1: 'Several', ans2: 'Much', ans3: 'Enough', ans4: 'Sufficient', q: 'q39'},
    {question: '40. We were surprised that over 500 people __________ for the job.', ans1: 'wrote', ans2: 'applied', ans3: 'enquired', ans4: 'requested', q: 'q40'},
    // tslint:disable-next-line:max-line-length
    {question: '41. The children watched in excitement as she __________ a match and lit the candles.', ans1: 'scratched', ans2: 'struck', ans3: 'rubbed', ans4: 'scraped', q: 'q41'},
    // tslint:disable-next-line:max-line-length
    {question: '42. Sorry about Kate’s strange behaviour, but she’s just not used to __________ lots of people around her.', ans1: 'had', ans2: 'have', ans3: 'having', ans4: 'has', q: 'q42'},
    {question: '43. Ivan kept running very hard __________ none of the other runners could possibly catch him.', ans1: 'even though', ans2: 'however', ans3: 'despite', ans4: 'as', q: 'q43'},
    // tslint:disable-next-line:max-line-length
    {question: '44. ‘I did this painting all __________ my own, Dad,’ said Milly.', ans1: 'by', ans2: 'with', ans3: 'for', ans4: 'on', q: 'q44'},
    // tslint:disable-next-line:max-line-length
    {question: '45. You __________ better check all the details are correct before we send it off.', ans1: 'would', ans2: 'had', ans3: 'should', ans4: 'did', q: 'q45'},
    {question: '46. This game is __________ to be for five year-olds, but I think a two year-old could do it!', ans1: 'expected', ans2: 'required', ans3: 'obliged', ans4: 'supposed', q: 'q46'},
    // tslint:disable-next-line:max-line-length
    {question: '47. Just put this powder down, and it should __________ any more ants from getting in.', ans1: 'prevent', ans2: 'avoid', ans3: 'refuse', ans4: 'forbid', q: 'q47'},
    // tslint:disable-next-line:max-line-length
    {question: '48. When Jonie __________ to do something, you can be sure she’ll do it, and do it well.', ans1: 'gets on', ans2: 'takes up', ans3: 'sets out', ans4: 'brings about', q: 'q48'},
    {question: '49. __________ we get to the top of this hill, the path gets much easier.', ans1: 'At the time', ans2: 'Eventually', ans3: 'Once', ans4: 'Finally', q: 'q49'},
    // tslint:disable-next-line:max-line-length
    {question: '50. Fifty-seven? No, that __________ be the right answer!', ans1: 'can`t', ans2: 'mustn`t', ans3: 'wouldn`t', ans4: 'needn`t', q: 'q50'},
    // tslint:disable-next-line:max-line-length
    {question: '51. __________ happens, I’ll always be there for you!', ans1: 'However', ans2: 'What', ans3: 'Whatever', ans4: 'No matter', q: 'q51'},
    // tslint:disable-next-line:max-line-length
    {question: '52. Can you __________ to it that no one uses this entrance?', ans1: 'see', ans2: 'deal', ans3: 'ensure', ans4: 'get', q: 'q52'},
    // tslint:disable-next-line:max-line-length
    {question: '53. A __________ debate ensued, with neither side prepared to give way to the other.', ans1: 'warm', ans2: 'heated', ans3: 'hot', ans4: 'boiling', q: 'q53'},
    // tslint:disable-next-line:max-line-length
    {question: '54. I’ve drunk milk every __________ day of my life, and it’s never done me any harm!', ans1: 'particular', ans2: 'individual', ans3: 'single', ans4: 'one', q: 'q54'},
    {question: '55. The version of the film I saw had been __________ censored.', ans1: 'strongly', ans2: 'deeply', ans3: 'great', ans4: 'heavily', q: 'q55'},
    // tslint:disable-next-line:max-line-length
    {question: '56. He promised to phone me at nine o’clock exactly, and he was as __________ as his word.', ans1: 'true', ans2: 'good', ans3: 'right', ans4: 'honest', q: 'q56'},
    {question: '57. There has been so much media __________ of the wedding that I’m completely fed up with it.', ans1: 'circulation', ans2: 'attention', ans3: 'broadcasting', ans4: 'coverage', q: 'q57'},
    // tslint:disable-next-line:max-line-length
    {question: '58. If I were you I would __________ clear of the area around the station late at night.', ans1: 'stick', ans2: 'steer', ans3: 'stop', ans4: 'stand', q: 'q58'},
    {question: '59. Turning back now is out of the __________ .', ans1: 'agenda', ans2: 'matter', ans3: 'question', ans4: 'possibility', q: 'q59'},
    // tslint:disable-next-line:max-line-length
    {question: '60. Joe’s fear of enclosed spaces __________ from a bad experience he had when he was a child.', ans1: 'stems', ans2: 'leads', ans3: 'starts', ans4: 'flows', q: 'q60'}
  ];
  ngOnInit() {
    this.testForm = new FormGroup({
      q1: this.q1,
      q2: this.q2,
      q3: this.q3,
      q4: this.q4,
      q5: this.q5,
      q6: this.q6,
      q7: this.q7,
      q8: this.q8,
      q9: this.q9,
      q10: this.q10,
      q11: this.q11,
      q12: this.q12,
      q13: this.q13,
      q14: this.q14,
      q15: this.q15,
      q16: this.q16,
      q17: this.q17,
      q18: this.q18,
      q19: this.q19,
      q20: this.q20,
      q21: this.q21,
      q22: this.q22,
      q23: this.q23,
      q24: this.q24,
      q25: this.q25,
      q26: this.q26,
      q27: this.q27,
      q28: this.q28,
      q29: this.q29,
      q30: this.q30,
      q31: this.q31,
      q32: this.q32,
      q33: this.q33,
      q34: this.q34,
      q35: this.q35,
      q36: this.q36,
      q37: this.q37,
      q38: this.q38,
      q39: this.q39,
      q40: this.q40,
      q41: this.q41,
      q42: this.q42,
      q43: this.q43,
      q44: this.q44,
      q45: this.q45,
      q46: this.q46,
      q47: this.q47,
      q48: this.q48,
      q49: this.q49,
      q50: this.q50,
      q51: this.q51,
      q52: this.q52,
      q53: this.q53,
      q54: this.q54,
      q55: this.q55,
      q56: this.q56,
      q57: this.q57,
      q58: this.q58,
      q59: this.q59,
      q60: this.q60
    });
  }
  // tslint:disable-next-line:typedef
  submitAnswers() {
    if (this.q1.value == 'b') {
      this.good += 1;
    }
    if (this.q2.value == 'c') {
      this.good += 1;
    }
    if (this.q3.value == 'd') {
      this.good += 1;
    }
    if (this.q4.value == 'c') {
      this.good += 1;
    }
    if (this.q5.value == 'a') {
      this.good += 1;
    }
    if (this.q6.value == 'b') {
      this.good += 1;
    }
    if (this.q7.value == 'd') {
      this.good += 1;
    }
    if (this.q8.value == 'b') {
      this.good += 1;
    }
    if (this.q9.value == 'd') {
      this.good += 1;
    }
    if (this.q10.value == 'c') {
      this.good += 1;
    }
    if (this.q11.value == 'd') {
      this.good += 1;
    }
    if (this.q12.value == 'a') {
      this.good += 1;
    }
    if (this.q13.value == 'b') {
      this.good += 1;
    }
    if (this.q14.value == 'a') {
      this.good += 1;
    }
    if (this.q15.value == 'c') {
      this.good += 1;
    }
    if (this.q16.value == 'd') {
      this.good += 1;
    }
    if (this.q17.value == 'a') {
      this.good += 1;
    }
    if (this.q18.value == 'd') {
      this.good += 1;
    }
    if (this.q19.value == 'a') {
      this.good += 1;
    }
    if (this.q20.value == 'b') {
      this.good += 1;
    }
    if (this.q21.value == 'd') {
      this.good += 1;
    }
    if (this.q22.value == 'b') {
      this.good += 1;
    }
    if (this.q23.value == 'c') {
      this.good += 1;
    }
    if (this.q24.value == 'd') {
      this.good += 1;
    }
    if (this.q25.value == 'c') {
      this.good += 1;
    }
    if (this.q26.value == 'a') {
      this.good += 1;
    }
    if (this.q27.value == 'b') {
      this.good += 1;
    }
    if (this.q28.value == 'd') {
      this.good += 1;
    }
    if (this.q29.value == 'a') {
      this.good += 1;
    }
    if (this.q30.value == 'b') {
      this.good += 1;
    }
    if (this.q31.value == 'c') {
      this.good += 1;
    }
    if (this.q32.value == 'c') {
      this.good += 1;
    }
    if (this.q33.value == 'd') {
      this.good += 1;
    }
    if (this.q34.value == 'c') {
      this.good += 1;
    }
    if (this.q35.value == 'd') {
      this.good += 1;
    }
    if (this.q36.value == 'c') {
      this.good += 1;
    }
    if (this.q37.value == 'a') {
      this.good += 1;
    }
    if (this.q38.value == 'a') {
      this.good += 1;
    }
    if (this.q39.value == 'b') {
      this.good += 1;
    }
    if (this.q40.value == 'b') {
      this.good += 1;
    }
    if (this.q41.value == 'b') {
      this.good += 1;
    }
    if (this.q42.value == 'c') {
      this.good += 1;
    }
    if (this.q43.value == 'a') {
      this.good += 1;
    }
    if (this.q44.value == 'd') {
      this.good += 1;
    }
    if (this.q45.value == 'b') {
      this.good += 1;
    }
    if (this.q46.value == 'd') {
      this.good += 1;
    }
    if (this.q47.value == 'a') {
      this.good += 1;
    }
    if (this.q48.value == 'c') {
      this.good += 1;
    }
    if (this.q49.value == 'c') {
      this.good += 1;
    }
    if (this.q50.value == 'a') {
      this.good += 1;
    }
    if (this.q51.value == 'c') {
      this.good += 1;
    }
    if (this.q52.value == 'a') {
      this.good += 1;
    }
    if (this.q53.value == 'b') {
      this.good += 1;
    }
    if (this.q54.value == 'c') {
      this.good += 1;
    }
    if (this.q55.value == 'd') {
      this.good += 1;
    }
    if (this.q56.value == 'b') {
      this.good += 1;
    }
    if (this.q57.value == 'd') {
      this.good += 1;
    }
    if (this.q58.value == 'b') {
      this.good += 1;
    }
    if (this.q59.value == 'c') {
      this.good += 1;
    }
    if (this.q60.value == 'a') {
      this.good += 1;
    }
    if (this.good >= 1 && this.good <= 15) {
      this.level = 'Elementary';
    }
    if (this.good >= 16 && this.good <= 30) {
      this.level = 'Intermediate';
    }
    if (this.good >= 31 && this.good <= 45) {
      this.level = 'First Certificate';
    }
    if (this.good >= 46 && this.good <= 60) {
      this.level = 'Advanced';
    }
    this.grade = this.good / 60 * 100;
    // tslint:disable-next-line:max-line-length
    console.log(this.grade, this.level);
  }

}
