/**
 * Created by coco on 17-7-14.
 */
'use strict';
describe('fizzbuzzwhizz', () => {

    it('should print fizz', () =>
    {

        var fig = 3
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "fizz"
        expect(actResult).toEqual(expectResult)
    })

    it('should print fizz', () =>
    {

        var fig = 13
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "fizz"
        expect(actResult).toEqual(expectResult)
    })

    it('should print buzz', () =>
    {
        var fig = 5
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "buzz"
        expect(actResult).toEqual(expectResult)
    })

    it('should print whizz', () =>
    {
        var fig = 7
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "whizz"
        expect(actResult).toEqual(expectResult)
    })
    it('should print fizzbuzz', () =>
    {

        var fig = 15
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "fizzbuzz"
        expect(actResult).toEqual(expectResult)
    })
    it('should print fizzwhizz', () =>
    {

        var fig = 21
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "fizzwhizz"
        expect(actResult).toEqual(expectResult)
    })
    it('should print buzzwhizz', () =>
    {

        var fig = 70
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "buzzwhizz"
        expect(actResult).toEqual(expectResult)
    })
    it('should print fizz', () =>
    {

        var fig = 105
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = "fizzbuzzwhizz"
        expect(actResult).toEqual(expectResult)
    })
    it('should print selfnum', () =>
    {
        var fig = 4
        var actResult = fizzBuzzWhizz(fig)
        var expectResult = fig
        expect(actResult).toEqual(expectResult)
    })

})