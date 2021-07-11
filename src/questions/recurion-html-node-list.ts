// Given a list of HTML nodes, highglight the given text whereever it occurs and modify its href - recursion
import * as fs from 'fs';
import * as path from 'path';
import format from 'html-format';
export function nodeListFunc() {
  const fileString = fs.readFileSync(path.join(process.cwd(), 'src/assets/html_source/samplesource.txt'));
  console.log('getting fileString:', fileString.toString());
  const str = 'Content here'; // this is to highlight
  const htmlString = fileString.toString();
  const splitStr = str.split(' ');
  splitStr.forEach((strToHighlight) => {
    rec(htmlString, strToHighlight);
  });
  console.log('---------after formatting-------');
  console.log(htmlString);
}

function rec(htmlString: string, strToHighlight: string) {
  const firstOccStartTagLt = htmlString.indexOf('<');
  const splStr = htmlString.substring(firstOccStartTagLt + 1, htmlString.length);
  console.log(splStr);
  const lastOccStartTagLt = splStr.lastIndexOf('<');
  const firstOccEndTagLt = splStr.search(new RegExp('(</)', 'gi'));

  console.log('firstOccLt lastOccLt endTagFirstOcc', firstOccStartTagLt, lastOccStartTagLt, firstOccEndTagLt);
}
