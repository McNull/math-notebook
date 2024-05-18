const fs = require("fs");
const path = require("path");

const ll = [
  ["BinaryOperator", "\\ne ", "&ne;"],
  ["BinaryOperator", "\\ast ", "&lowast;"],
  ["BinaryOperator", "\\therefore ", "&there4;"],
  ["BinaryOperator", "\\because ", "&#8757;"],
  ["BinaryOperator", "\\propto ", "&prop;"],
  ["BinaryOperator", "\\approx ", "&asymp;"],
  ["BinaryOperator", "\\in ", "&isin;"],
  ["BinaryOperator", "\\ni ", "&ni;"],
  ["BinaryOperator", "\\not\\ni ", "&#8716;"],
  ["BinaryOperator", "\\subset ", "&sub;"],
  ["BinaryOperator", "\\supset ", "&sup;"],
  ["BinaryOperator", "\\not\\subset ", "&#8836;"],
  ["BinaryOperator", "\\not\\supset ", "&#8837;"],
  ["BinaryOperator", "\\subseteq ", "&sube;"],
  ["BinaryOperator", "\\supseteq ", "&supe;"],
  ["BinaryOperator", "\\not\\subseteq ", "&#8840;"],
  ["BinaryOperator", "\\not\\supseteq ", "&#8841;"],
  ["VanillaSymbol", "\\mathbb{N}", "&#8469;"],
  ["VanillaSymbol", "\\mathbb{P}", "&#8473;"],
  ["VanillaSymbol", "\\mathbb{Z}", "&#8484;"],
  ["VanillaSymbol", "\\mathbb{Q}", "&#8474;"],
  ["VanillaSymbol", "\\mathbb{R}", "&#8477;"],
  ["VanillaSymbol", "\\mathbb{C}", "&#8450;"],
  ["VanillaSymbol", "\\mathbb{H}", "&#8461;"],
  ["VanillaSymbol", "\\quad ", "    "],
  ["VanillaSymbol", "\\qquad ", "        "],
  ["VanillaSymbol", "\\perp ", "&perp;"],
  ["VanillaSymbol", "\\nabla ", "&nabla;"],
  ["VanillaSymbol", "\\hbar ", "&#8463;"],
  ["VanillaSymbol", "\\text\\AA ", "&#8491;"],
  ["VanillaSymbol", "\\circ ", "&#8728;"],
  ["VanillaSymbol", "\\bullet ", "&bull;"],
  ["VanillaSymbol", "\\setminus ", "&#8726;"],
  ["Symbol", "\\not ", '<span class="not">/</span>'],
  ["VanillaSymbol", "\\neg ", "&not;"],
  ["VanillaSymbol", "\\dots ", "&hellip;"],
  ["VanillaSymbol", "\\downarrow ", "&darr;"],
  ["VanillaSymbol", "\\Downarrow ", "&dArr;"],
  ["VanillaSymbol", "\\uparrow ", "&uarr;"],
  ["VanillaSymbol", "\\Uparrow ", "&uArr;"],
  ["BinaryOperator", "\\to ", "&rarr;"],
  ["VanillaSymbol", "\\rightarrow ", "&rarr;"],
  ["BinaryOperator", "\\Rightarrow ", "&rArr;"],
  ["VanillaSymbol", "\\Rightarrow ", "&rArr;"],
  ["BinaryOperator", "\\gets ", "&larr;"],
  ["VanillaSymbol", "\\leftarrow ", "&larr;"],
  ["BinaryOperator", "\\Leftarrow ", "&lArr;"],
  ["VanillaSymbol", "\\Leftarrow ", "&lArr;"],
  ["VanillaSymbol", "\\leftrightarrow ", "&harr;"],
  ["BinaryOperator", "\\Leftrightarrow ", "&hArr;"],
  ["VanillaSymbol", "\\Leftrightarrow ", "&hArr;"],
  ["VanillaSymbol", "\\Re ", "&real;"],
  ["VanillaSymbol", "\\Im ", "&image;"],
  ["VanillaSymbol", "\\partial ", "&part;"],
  ["VanillaSymbol", "\\infty ", "&infin;"],
  ["VanillaSymbol", "\\aleph ", "&alefsym;"],
  ["VanillaSymbol", "\\exists ", "&exist;"],
  ["VanillaSymbol", "\\wedge ", "&and;"],
  ["VanillaSymbol", "\\vee ", "&or;"],
  ["BinaryOperator", "\\varnothing ", "&empty;"],
  ["BinaryOperator", "\\cup ", "&cup;"],
  ["BinaryOperator", "\\cap ", "&cap;"],
  ["VanillaSymbol", "\\degree ", "&deg;"],
  ["VanillaSymbol", "\\angle ", "&ang;"],
  ["VanillaSymbol", "\\measuredangle ", "&#8737;"],
  ["VanillaSymbol", "\\backslash ", "\\"],
  ["Variable", "\\phi ", "&#981;"],
  ["Variable", "\\varphi ", "&phi;"],
  ["Variable", "\\epsilon ", "&#1013;"],
  ["Variable", "\\varepsilon ", "&epsilon;"],
  ["Variable", "\\varpi ", "&piv;"],
  ["Variable", "\\varsigma ", "&sigmaf;"],
  ["Variable", "\\vartheta ", "&thetasym;"],
  ["Variable", "\\upsilon ", "&upsilon;"],
  ["Variable", "\\digamma ", "&#989;"],
  ["Variable", "\\varkappa ", "&#1008;"],
  ["Variable", "\\varrho ", "&#1009;"],
  ["NonSymbolaSymbol", "\\pi ", "&pi;"],
  ["NonSymbolaSymbol", "\\lambda ", "&lambda;"],
  ["Symbol", "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'],
  ["PlusMinus", "\\pm ", "&plusmn;"],
  ["PlusMinus", "\\mp ", "&#8723;"],
  ["BinaryOperator", "\\div ", "&divide;", "[/]"],
  ["SummationNotation", "\\sum ", "&sum;"],
  ["SummationNotation", "\\prod ", "&prod;"],
  ["SummationNotation", "\\coprod ", "&#8720;"],
];
// convert to:
/*
{
  type
  entries: [
    { code, html, alt }
  ]
}
*/

const mathCodes = JSON.stringify(
  ll
    .map(([type, code, html, alt]) => ({ type, code, html, alt }))
    .reduce((acc, { type, code, html, alt }) => {
      if (!acc[type]) {
        acc[type] = { entries: [] };
      }
      acc[type].entries.push({ code, html, alt });
      return acc;
    }, {}),
  null,
  2
);

fs.writeFileSync(path.join(__dirname, "math-codes.json"), mathCodes);