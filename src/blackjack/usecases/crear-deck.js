import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCarta
 * @param {Array<String>} tiposEspeciales
 * @returns {Array<String>}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0  ) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0  ) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
} 