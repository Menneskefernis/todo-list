import todo from './todo';

const something = todo(
                    'Make a note',
                    'I have to remember to make a note of something important',
                    'Monday',
                    1,
                    'This is a top priority',
                    false
                  );

console.log(something.checklist)