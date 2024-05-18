const help = (function() {

  const symbols = {
    "BinaryOperator": {
      "entries": [
        {
          "code": "\\ne ",
          "html": "&ne;"
        },
        {
          "code": "\\ast ",
          "html": "&lowast;"
        },
        {
          "code": "\\therefore ",
          "html": "&there4;"
        },
        {
          "code": "\\because ",
          "html": "&#8757;"
        },
        {
          "code": "\\propto ",
          "html": "&prop;"
        },
        {
          "code": "\\approx ",
          "html": "&asymp;"
        },
        {
          "code": "\\in ",
          "html": "&isin;"
        },
        {
          "code": "\\ni ",
          "html": "&ni;"
        },
        {
          "code": "\\not\\ni ",
          "html": "&#8716;"
        },
        {
          "code": "\\subset ",
          "html": "&sub;"
        },
        {
          "code": "\\supset ",
          "html": "&sup;"
        },
        {
          "code": "\\not\\subset ",
          "html": "&#8836;"
        },
        {
          "code": "\\not\\supset ",
          "html": "&#8837;"
        },
        {
          "code": "\\subseteq ",
          "html": "&sube;"
        },
        {
          "code": "\\supseteq ",
          "html": "&supe;"
        },
        {
          "code": "\\not\\subseteq ",
          "html": "&#8840;"
        },
        {
          "code": "\\not\\supseteq ",
          "html": "&#8841;"
        },
        {
          "code": "\\to ",
          "html": "&rarr;"
        },
        {
          "code": "\\Rightarrow ",
          "html": "&rArr;"
        },
        {
          "code": "\\gets ",
          "html": "&larr;"
        },
        {
          "code": "\\Leftarrow ",
          "html": "&lArr;"
        },
        {
          "code": "\\Leftrightarrow ",
          "html": "&hArr;"
        },
        {
          "code": "\\varnothing ",
          "html": "&empty;"
        },
        {
          "code": "\\cup ",
          "html": "&cup;"
        },
        {
          "code": "\\cap ",
          "html": "&cap;"
        },
        {
          "code": "\\div ",
          "html": "&divide;",
          "alt": "[/]"
        }
      ]
    },
    "VanillaSymbol": {
      "entries": [
        {
          "code": "\\mathbb{N}",
          "html": "&#8469;"
        },
        {
          "code": "\\mathbb{P}",
          "html": "&#8473;"
        },
        {
          "code": "\\mathbb{Z}",
          "html": "&#8484;"
        },
        {
          "code": "\\mathbb{Q}",
          "html": "&#8474;"
        },
        {
          "code": "\\mathbb{R}",
          "html": "&#8477;"
        },
        {
          "code": "\\mathbb{C}",
          "html": "&#8450;"
        },
        {
          "code": "\\mathbb{H}",
          "html": "&#8461;"
        },
        {
          "code": "\\quad ",
          "html": "    "
        },
        {
          "code": "\\qquad ",
          "html": "        "
        },
        {
          "code": "\\perp ",
          "html": "&perp;"
        },
        {
          "code": "\\nabla ",
          "html": "&nabla;"
        },
        {
          "code": "\\hbar ",
          "html": "&#8463;"
        },
        {
          "code": "\\text\\AA ",
          "html": "&#8491;"
        },
        {
          "code": "\\circ ",
          "html": "&#8728;"
        },
        {
          "code": "\\bullet ",
          "html": "&bull;"
        },
        {
          "code": "\\setminus ",
          "html": "&#8726;"
        },
        {
          "code": "\\neg ",
          "html": "&not;"
        },
        {
          "code": "\\dots ",
          "html": "&hellip;"
        },
        {
          "code": "\\downarrow ",
          "html": "&darr;"
        },
        {
          "code": "\\Downarrow ",
          "html": "&dArr;"
        },
        {
          "code": "\\uparrow ",
          "html": "&uarr;"
        },
        {
          "code": "\\Uparrow ",
          "html": "&uArr;"
        },
        {
          "code": "\\rightarrow ",
          "html": "&rarr;"
        },
        {
          "code": "\\Rightarrow ",
          "html": "&rArr;"
        },
        {
          "code": "\\leftarrow ",
          "html": "&larr;"
        },
        {
          "code": "\\Leftarrow ",
          "html": "&lArr;"
        },
        {
          "code": "\\leftrightarrow ",
          "html": "&harr;"
        },
        {
          "code": "\\Leftrightarrow ",
          "html": "&hArr;"
        },
        {
          "code": "\\Re ",
          "html": "&real;"
        },
        {
          "code": "\\Im ",
          "html": "&image;"
        },
        {
          "code": "\\partial ",
          "html": "&part;"
        },
        {
          "code": "\\infty ",
          "html": "&infin;"
        },
        {
          "code": "\\aleph ",
          "html": "&alefsym;"
        },
        {
          "code": "\\exists ",
          "html": "&exist;"
        },
        {
          "code": "\\wedge ",
          "html": "&and;"
        },
        {
          "code": "\\vee ",
          "html": "&or;"
        },
        {
          "code": "\\degree ",
          "html": "&deg;"
        },
        {
          "code": "\\angle ",
          "html": "&ang;"
        },
        {
          "code": "\\measuredangle ",
          "html": "&#8737;"
        },
        {
          "code": "\\backslash ",
          "html": "\\"
        }
      ]
    },
    "Symbol": {
      "entries": [
        {
          "code": "\\not ",
          "html": "<span class=\"not\">/</span>"
        },
        {
          "code": "\\Upsilon ",
          "html": "<var style=\"font-family: serif\">&upsih;</var>"
        }
      ]
    },
    "Variable": {
      "entries": [
        {
          "code": "\\phi ",
          "html": "&#981;"
        },
        {
          "code": "\\varphi ",
          "html": "&phi;"
        },
        {
          "code": "\\epsilon ",
          "html": "&#1013;"
        },
        {
          "code": "\\varepsilon ",
          "html": "&epsilon;"
        },
        {
          "code": "\\varpi ",
          "html": "&piv;"
        },
        {
          "code": "\\varsigma ",
          "html": "&sigmaf;"
        },
        {
          "code": "\\vartheta ",
          "html": "&thetasym;"
        },
        {
          "code": "\\upsilon ",
          "html": "&upsilon;"
        },
        {
          "code": "\\digamma ",
          "html": "&#989;"
        },
        {
          "code": "\\varkappa ",
          "html": "&#1008;"
        },
        {
          "code": "\\varrho ",
          "html": "&#1009;"
        }
      ]
    },
    "NonSymbolaSymbol": {
      "entries": [
        {
          "code": "\\pi ",
          "html": "&pi;"
        },
        {
          "code": "\\lambda ",
          "html": "&lambda;"
        }
      ]
    },
    "PlusMinus": {
      "entries": [
        {
          "code": "\\pm ",
          "html": "&plusmn;"
        },
        {
          "code": "\\mp ",
          "html": "&#8723;"
        }
      ]
    },
    "SummationNotation": {
      "entries": [
        {
          "code": "\\sum ",
          "html": "&sum;"
        },
        {
          "code": "\\prod ",
          "html": "&prod;"
        },
        {
          "code": "\\coprod ",
          "html": "&#8720;"
        }
      ]
    }
  }

  function symbolsToHtmlTable() {
    let html = '';
    for (let key in symbols) {
      html += '<table class="help-table">';
      html += '<tr><th colspan="2">' + key + '</th></tr>';
      for (let i = 0; i < symbols[key].entries.length; i++) {
        html += '<tr>';
        html += '<td>' + symbols[key].entries[i].code + '</td>';
        html += '<td class="html">' + symbols[key].entries[i].html + '</td>';
        html += '</tr>';
      }
      html += '</table>';
    }
    
    return '<div>' + html + '</div>';
  }

  function stringToElement(html) {
    let div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;
  }

  function init() {
    const helpScreen = document.querySelector('.help-screen');
    const helpButton = document.querySelector('button.help');

    helpButton.addEventListener('click', function() {
      // toggle class active
      helpScreen.classList.toggle('active');
    });

    // close on escape key

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        helpScreen.classList.remove('active');
      }
    });

    const target = document.getElementById('codes');
    target.appendChild(stringToElement(symbolsToHtmlTable()));
  }

  return {
    init
  };
})()