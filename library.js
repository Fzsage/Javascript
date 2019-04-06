//A.1: Create a constructor for a class named "Book" and give it properties
function Book(title, pubDate, callNum, authors)
{
	this.title = title;
	this.available = true;
	this.pubDate = pubDate;
	this.checkOutDate = null;
	this.callNum = callNum;
	this.authors = authors;
}

//B.1: Create methods for the book class
Book.prototype = {
	checkOut: function()
	{
        this.available = false;
        var rdom = (Math.random() * 31 +1).toFixed(0);
        var current_date = new Date();
        this.checkOutDate = new Date(current_date - rdom*24*3600*1000);
	},
	checkIn: function()
	{
		this.available = true;
	},
	isOverdue: function()
	{
        var current_date = new Date();
        if ((current_date.getTime() - this.checkOutDate.getTime()) > 14){
            return true;
        }
        else
            return false;
	},
    isAvailable: function() {return this.available;}
};

//A.2: Create a constructor for a class called "Author" and give it properties
function Author(firstName, lastName)
{
	this.firstName = firstName;
	this.lastName = lastName;
}

//A.3: Create a constructor for a class called "Patron" and give it properties
function Patron(firstName, lastName, cardNum)
{

	this.firstName = firstName;
	this.lastName = lastName;
	this.cardNum = cardNum;
	this.booksOut = [];
	this.fine = 0.00;
}

//B.2: Create methods for the Patron class
Patron.prototype = {
	read: function(book)
	{
		this.booksOut.push(book);
	},
	return: function(book)
	{
		for(var cnt = 0; cnt < this.booksOut.length; cnt++)
		{
			if (book.title === this.booksOut[cnt].title)
			{
				this.booksOut.splice(cnt, 1);
			}
		}
	},
	hasBook: function (book)
	{
		for (var cnt = 0; cnt < this.booksOut.length; cnt++)
		{
			if(this.booksOut[cnt].title == book.title)
				return true;
		}
        return false;
	}
};

//C.1: Create 5 different books and store them in an array called "catalog"
var fitzgerald = new Author("F. Scott", "Fitzgerald");
var salinger = new Author("J. D.", "Salinger");
var lee = new Author("Haper", "Lee");
var melville = new Author("Herman", "Melville");
var thompson = new Author("Hunter S.", "Thompson");
var gatsby = new Book("The Great Gatsby", "04-10-1925", "000001", fitzgerald);
var catcher = new Book("The Catcher in the Rye", "07-16-1951", "000002", salinger);
var mocking = new Book("To Kill a Mockingbird", "07-11-1960", "000003", lee);
var moby = new Book("Moby-Dick", "09-18-1851", "000004", melville);
var fear = new Book("Fear and Loathing in Las Vegas", "11-11-1971", "000005", thompson);
var catalog = [gatsby, catcher, mocking, moby, fear];

//C.2: Create 5 different patrons and store them in an array called "patrons"
var hayes = new Patron("Haiden", "Hayes", "000001");
var beasley = new Patron("Emerson", "Beasley", "000002");
var knowles = new Patron("Caden", "Knowles", "000003");
var hall = new Patron("Cidney", "Hall", "000004");
var ortega = new Patron("Sam", "Ortega", "000005");
var patrons = [hayes, beasley, knowles, hall, ortega];

//C.3: Create a loop that simulates the checking in and out of books in a library
for (var day_count = 0; day_count < 91; day_count++){
    for (var book_count = 0; book_count < 5; book_count++){
        var book = catalog[book_count];
        var random_patron = patrons[Math.floor(Math.random()*5)];
        
        if (book.isAvailable()){
            book.checkOut();
            random_patron.read(book);
        }
        else {
            for (pat_counter = 0; pat_counter < 5; pat_counter++){
                var patron = patrons[pat_counter];
                if (patron.hasBook(book)){
                    if (book.isOverdue()){
                        patron.fine += 5;
                    }
                    patron.return(book);
                    book.checkIn();
                    break;
                }
            }
        }       
    }
}


for (var k = 0; k < 5; k++){
    var patron = patrons[k];
    console.log("Patron: " + patron.firstName + " " + patron.lastName);
    console.log("Books checked out: " + patron.booksOut.length);
    console.log("Fine: $" + patrons[k].fine);
    console.log();
}    
