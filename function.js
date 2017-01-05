//Google sheets; calculate weighted harmonic mean; custom function
//Version 1.1, includes zero/empty detection
/** Calculates the weighted harmonic mean.
*
* @param i The input array
* @param f The weight array
* @return The weighted harmonic mean of the specified range
* @customfunction
*/

function WHM(i, f) {
  //checking that the inputs and weights are of equal length 
       if (f.length != i.length) {
    return "Ranges not equal length";
       }
  
  //checking if any inputs are zero
  for (var c = 0; c < i.length; c++)
    if (i[c] == 0 || f[c] == 0)
      return "Ranges contain zero";
  
  //declaring inital values for numerator and denominator
  var top = 0;
  var bottom = 0;
  
  //sums all elements in f
  for (var c = 0; c < f.length; c++)
    top += parseInt(f[c]);
   
  //sums f/i for each cell
  for (var c = 0; c < i.length; c++)
    bottom += (parseInt(f[c])/parseInt(i[c]));
     
  //returns numerator divided by denominator
  return parseInt(top/bottom);
}
