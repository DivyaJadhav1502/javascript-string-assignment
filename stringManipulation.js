document.write("<h3>capitalized first word</h3>");
const capitalized=function(sentence){
	
	let string=sentence.split(" ");
	for(let i=0;i<string.length;i++){
	 string[i]=string[i][0].toUpperCase()+string[i].substring(1);
	}	
	return string.join(" ");
	
}
document.write(capitalized("divya jadhav"));
document.write("<hr>");


document.write("<h3>capitalized each word</h3>");
	function capitalizeEachWord(string){
		const str_arr=string.split('')
		
		for(i=0;i<str_arr.length;i++)
		{
			str_arr[i]=String.fromCharCode(str_arr[i].charCodeAt(0)-32);
		}
		return str_arr.join('')
	}
	let word='divya jadhav';
document.write(capitalizeEachWord(word));
document.write("<hr>");

	
document.write("<h3>word existence check</h3>");
	function wordexistencecheck(){
		let string='This is my example!';
		let substr='my';
		
		let iswordincludes =string.includes(substr);
		document.write(iswordincludes);
	}	
	wordexistencecheck()
document.write("<hr>");


document.write("<h3>occurrence count</h3>");
	function occurencecount(){
    let r = "shri swami samarth ";
    document.write(
        (r.match(/s/g)).length);
 
}
occurencecount()
document.write("<hr>");


document.write("<h3>word density calculation</h3>");
	function wordDensityCal(givenString,word){
		let convertStringToArray = givenString.split(" ");
		let count=0;
		
		for(let i=0; i<convertStringToArray.length;i++){
			if(convertStringToArray[i]===word){
				count++;
		}
}
	let wordDensity=(count/convertStringToArray.length)*100;
	document.write(wordDensity);
}
wordDensityCal("vitthal vitthal jay hari vitthal","vitthal");
document.write("<hr>");


document.write("<h3>file extraction</h3>");
	function getFileExtension(filename){
	const result1= filename.split('.').pop();
	return result1;
	}
	const result1=getFileExtension('index.html');
	document.write(result1);
document.write("<hr>");


document.write("<h3>removing whitespace</h3>");
	function removeWhiteSpace(string){
	const newstring=string.split(' ').join("");
	return newstring;
	}
	const newstring=removeWhiteSpace('she is clever');
	document.write(newstring);
	document.write("<hr>");
	
	
document.write("<h3>reversing words</h3>");
	function reversedString(string){
	let reversed=string.split('').reverse( ).join("");
	return reversed;
	}
	const reversed=reversedString('this is my laptop');
	document.write(reversed);
	document.write("<hr>");
	
	
document.write("<h3>countVowel</h3>");
	function countVowel(str){
	let count= str.match(/[a,e,i,o,u]/gi).length;
	return count;
	}
	const count=countVowel('I am a girl');
	document.write(count);
	document.write("<hr>");
	
	
document.write("<h3>Palindrome number</h3>");
	function is_palindrome(str){
		let ans='rani';
	if (ans==true){
		document.write("passed string is palindrome");
	}
	else{
		document.write("passed string is not palindrome");
	}
}
	let test="Rani";
	is_palindrome(test);
document.write("<hr>");


document.write("<h3>string truncation</h3>");
	function truncateString(string){
	string=string+"...";
	document.write(string);
	}
truncateString("JavaScript");
document.write("<hr>");



document.write("<h3>String Masking</h3>");
	function stringMasking(givenString,stars){
	let str=givenString.slice(stars);
	console.log(str);
	for( let i=0;i<stars;i++){
		str="*"+str;
	}
	document.write(str);
}
stringMasking("Divya Jadhav",3);
document.write("<hr>");


document.write("<h3>Email validation</h3>");
	function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
document.write(validateEmail('example@test.com'));



	
	
	
	
	
	