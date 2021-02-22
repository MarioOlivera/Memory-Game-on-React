export const STATE_SHOWING_CARD = 1;
export const STATE_HIDE_CARD = 0;

const QUANTITY_CARDS = 10; 

const cardsImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
]

export const generateInicialCards = () => 
{
    let cardsGenerated = []

    for(let i=1; i <= QUANTITY_CARDS;i++)
    {
        cardsGenerated.push({
            "image":null,
            "found": false,
            "state": STATE_HIDE_CARD
        });
    }

    let index_values_to_insert = 0

    for(let i=1; i <= QUANTITY_CARDS; i+=2)
    {
        let valueToinsert = cardsImages[index_values_to_insert]

        for(let j=1; j <= 2; j++)
        {
            let free_position = null
        
            while(free_position == null)
            {
                let position_search = Math.floor((Math.random() * QUANTITY_CARDS) + 1) - 1
        
                if(cardsGenerated[position_search].image == null)
                {
                    free_position = position_search
                }
            }

            cardsGenerated[free_position].image = valueToinsert
        }
        
        index_values_to_insert++
    }

    return cardsGenerated
}