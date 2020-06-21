import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'A +', image: 'amais.svg'},
        { title: 'B +', image: 'bmais.svg'},
        { title: 'AB +', image: 'abmais.svg'},
        { title: 'O +', image: 'omais.svg'},
        { title: 'A -', image: 'amenos.svg'},
        { title: 'B -', image: 'bmenos.svg'},
        { title: 'AB -', image: 'abmenos.svg'},
        { title: 'O -', image: 'omenos.svg'},
    ]);
}
