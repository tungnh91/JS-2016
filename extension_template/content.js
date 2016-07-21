var elements = document.getElementsByTagName('*');
var starWarsNames = ['Admiral Gial Ackbar', 'Padmé Amidala', 'BB-8', 'Jar Jar Binks','Lando Calrissian','Chewbacca', 'Poe Dameron', 
'Count Dooku', 'Darth Tyranus','Boba Fett', 'Jyn Erso'];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Kim Kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Rob Kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }


    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Kylie Jenner/gi, starWarsNames[Math.floor(Math.random() * 4)]);
       		
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Kendall Jenner/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

	for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Khloé Kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Kourtney Kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/North West/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Saint West/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/kimkardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/kim-kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/kim_kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Kris Jenner/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/Robert Kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/North West/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
       		var replacedText = text.replace(/kourtney kardashian/gi, starWarsNames[Math.floor(Math.random() * 4)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
