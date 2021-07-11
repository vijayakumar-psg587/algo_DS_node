// “Given a string containing brackets, determine if all brackets have a matching counterpart.

import { QueueImpl } from 'src/DS/queue-impl';
import { APP_CONST } from 'src/DS/models/app-constants';

//  If all brackets in the string form balanced pairs, return true. If not, return false”
export const isBracketMatchPairs = (brackets: string[]) => {
  if (brackets) {
    if (brackets.length % 2 !== 0) return false;
    else {
      const queueObj = new QueueImpl();
      brackets.forEach((item) => queueObj.enqueue(item));

      brackets.forEach((item, index) => {
        // when u encouter close bracket, u have to dequeue, so at the end, there should be no
        // elements left and that is how we confirm that the bracket occurs in pairs
        if (index > 0 && item === APP_CONST.CLOSE_BRACKET) {
          queueObj.dequeue();
        }
      });

      //after dequeue we will be left with exactly half the size of the original
      if (queueObj.size() === brackets.length / 2) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

  // find create a queue and add them
};

// findout how many matching pair brackets are there
