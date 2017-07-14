/**
 * Created by coco on 17-7-14.
 */
function fizzBuzzWhizz(num) {
    if(num.toString().indexOf('3') > 0){
        return "fizz"
    }
    else{
        if(num%3 === 0 && num%5 !=0 && num%7 != 0)
        {
            return "fizz"
        }
        else if(num%5 === 0 && num%3 !=0 && num%7 != 0){
            return "buzz"
        }
        else if(num%7 === 0 && num%5 !=0 && num%3 != 0){
            return "whizz"
        }
        else if(num%15 === 0 && num%7 != 0)
        {
            return "fizzbuzz"
        }
        else if(num%21 === 0 && num%5 != 0)
        {
            return "fizzwhizz"
        }
        else if(num%35 === 0 && num%3 != 0)
        {
            return "buzzwhizz"
        }
        else if(num%105 === 0)
        {
            return "fizzbuzzwhizz"
        }
        else {
            return num
        }
    }

}
function input() {
    var fig = prompt("请输入一个数字")

}