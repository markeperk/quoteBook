var app = angular.module('quoteBook');

app.service('mainService', function ($cookieStore) {
	var quotes = 
	[
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	]
	this.getData = function () {
		return quotes;
	}
	this.addData = function (text, author) {
		// if (text === quotes.text) { //check to see if the newData object has truthy text and name
			quotes.push({'text': text, 'author': author}); //if true, pushes the newData object to the quotes array
			put();
		// }
	}

	this.removeData = function (textQuote) {
		for (var i = 0; i < quotes.length; i++) { //look through each object in the array
			if (textQuote === quotes[i].text || textQuote === quotes[i].author) {  //identify if the passed through text is the same as the text in the object
				quotes.splice(i, 1); 
			}
		}
		put();
	}

	var put = function () {
		$cookieStore.put('quotes', quotes);
	};
	
	var get = function () {
		quotes = $cookieStore.get('quotes');
	};
	
	if (!$cookieStore.get('quotes')) {
		put();
	}
	else {
		get();
	}


})