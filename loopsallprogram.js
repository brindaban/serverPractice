var storeLoopsProgram={};
exports.storeLoopsProgram=storeLoopsProgram;
storeLoopsProgram.factorial=function(inputNumber){
	result=1;
	if(inputNumber<1)
		return 0;
	for(countervariable=inputNumber;countervariable>=1;countervariable--){
		result=result*countervariable;
	}
	return result;
};
storeLoopsProgram.fibonacci=function(position){
	var firstNo=0;
	var secondNo=1;
	var tempuraryVariable;
	if(position==1)
		return firstNo;
	if(position==2)
		return secondNo;
	for(countervariable=3;countervariable<=position;countervariable++){
		tempuraryVariable=firstNo+secondNo;
		firstNo=secondNo;
		secondNo=tempuraryVariable;
	}
	return secondNo;
};
storeLoopsProgram.evenNoPrint=function(lowerLimit,upperLimit){
	var storeEvenNO=[];
	if(lowerLimit%2==0)
		lowerLimit=lowerLimit+2;
	else
		lowerLimit=lowerLimit+1;
	while(lowerLimit<upperLimit){
		storeEvenNO.push(lowerLimit);
		lowerLimit+=2;
	}
	return storeEvenNO;
};
storeLoopsProgram.oddNoPrint=function(lowerLimit,upperLimit){
	var storeOddNO=[];
	if(lowerLimit%2==1)
		lowerLimit=lowerLimit+2;
	else
		lowerLimit=lowerLimit+1;
	while(lowerLimit<upperLimit){
		storeOddNO.push(lowerLimit);
		lowerLimit+=2;
	}
	return storeOddNO;
};
storeLoopsProgram.sumOfFirstNNumbers=function(inputNumber){
	return (inputNumber*(inputNumber+1))/2;
};
storeLoopsProgram.productOfFirstNNumbers=function(inputNumber){
	var result=1;
	for(countervariable=1;countervariable<=inputNumber;countervariable++){
		result*=countervariable;
	}
	return result;
};
storeLoopsProgram.printNthNumber=function(lowerLimit,upperLimit,gap){
	var storeNumber=[];
	lowerLimit=lowerLimit+gap;
	while(lowerLimit<upperLimit){
		storeNumber.push(lowerLimit);
		lowerLimit+=gap;
	}
	return storeNumber;
};
storeLoopsProgram.sumOfEvenNoInRange=function(lowerLimit,upperLimit){
	var storeEvenNO=storeLoopsProgram.evenNoPrint(lowerLimit,upperLimit);
	var evenSum=0;
	for(countervariable=0;countervariable<storeEvenNO.length;countervariable++){
		evenSum+=storeEvenNO[countervariable];
	}
	return evenSum;
};
storeLoopsProgram.sumOfOddNoInRange=function(lowerLimit,upperLimit){
	var storeOddNO=storeLoopsProgram.oddNoPrint(lowerLimit,upperLimit);
		var oddSum=0;
		for(countervariable=0;countervariable<storeOddNO.length;countervariable++){
		oddSum+=storeOddNO[countervariable];
	}
	return oddSum;
};
// 15. Print all odd numbers between N and 1 backwards - Write a function that PRINTS all odd numbers between N and 1, BACKWARDS.

// 16. Print all even numbers between N and 1 backwards - Write a function that PRINTS all even numbers between N and 1, BACKWARDS.
storeLoopsProgram.printBackwardEven=function(limit){
	var storeEvenNO=storeLoopsProgram.evenNoPrint(1,limit);
	return storeEvenNO.reverse();
};
storeLoopsProgram.printBackwardOdd=function(limit){
	var storeOddNO=storeLoopsProgram.oddNoPrint(1,limit);
	return storeOddNO.reverse();
};