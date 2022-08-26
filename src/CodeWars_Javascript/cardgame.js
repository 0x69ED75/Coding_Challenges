console.log(winner(['A', '7', '8'], ['K', '5', '9']))


/*
https://www.codewars.com/kata/53417de006654f4171000587
Create a function which determines the winner of a card game with the following rules:
    Both players are dealt the same number of cards
    Whoever's card has the higher value wins the round and gains a point. If they draw, no one gains a point.
    The cards values are the following, lowest to highest: ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    Whoever has the most points by the end wins.
    Returns "Tie" if no one won.
 */

function winner(deckSteve, deckJosh) {
    const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']

    let steveCount = 0;
    let joshCount = 0;
    for(let i = 0; i < deckSteve.length; i++){
        if(cards.indexOf(deckSteve[i]) > cards.indexOf(deckJosh[i])){
            steveCount++;
        }
        else if (cards.indexOf(deckJosh[i]) > cards.indexOf(deckSteve[i])){
            joshCount++;
        }
    }
    if(steveCount > joshCount) return `Steve wins ${steveCount} to ${joshCount}`
    else if(joshCount > steveCount) return `Josh wins ${joshCount} to ${steveCount}`
    else return `Tie`
}